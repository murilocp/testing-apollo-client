import React, { useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';
import { GET_REPOS_BY_USERNAME } from 'src/services/apollo';

import { useRepos } from 'src/hooks/useRepos';
import Card from '../Card';

const RepositoryList: React.FC = () => {
  const { userName } = useRepos();
  const [getReposByUsername, { loading, data }] =
    useLazyQuery<IReposByUserNameData>(GET_REPOS_BY_USERNAME);

  useEffect(() => {
    if (userName !== '') getReposByUsername({ variables: { userName } });
  }, [getReposByUsername, userName]);

  if (loading) {
    return (
      <Card>
        <div>Loading...</div>
      </Card>
    );
  }

  return (
    <Card>
      {data && data.user ? (
        <>
          <div>User: {String(data.user.name)}</div>
          <ul>
            {data?.user?.repositories.edges.map(repo => (
              <li>{repo.node.nameWithOwner}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>Nenhum resultado encontrado</div>
      )}
    </Card>
  );
};

export default RepositoryList;
