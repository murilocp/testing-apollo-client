type LanguageType = {
  node: { name: string; color: string };
  size: number;
};

interface IRepositoryData {
  node: {
    id: string;
    nameWithOwner: string;
    description: string | null;
    homepageUrl: string | null;
    url: string;
    languages: {
      edges: LanguageType[];
    };
  };
}

interface IReposByUserNameData {
  user: {
    avatarUrl: string;
    bio: string;
    location: string;
    login: string;
    name: string;
    repositories: { edges: IRepositoryData[] };
  };
}

interface IReposContext {
  userName: string;
  updateUserName: (userName: string) => void;
}
