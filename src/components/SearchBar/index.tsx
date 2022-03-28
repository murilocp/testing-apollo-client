import React, { useState } from 'react';

import { FaSearch, FaGithubAlt } from 'react-icons/fa';

import { useRepos } from 'src/hooks/useRepos';

import './styles.scss';

const SearchBar: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { updateUserName } = useRepos();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();

      const userName = e.currentTarget.search.value;
      updateUserName(userName);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='search-bar'>
      <div className='title'>
        <FaGithubAlt size={40} />
        <h1>Explore GitHub repos</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor='search' hidden />
          <input
            id='search'
            placeholder='Search username'
            aria-label='Barra de busca'
          />
          <button type='submit'>
            {loading ? <></> : <FaSearch size={20} />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
