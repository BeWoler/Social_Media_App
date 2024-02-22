export interface IAuthedUser {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
    image: string;
  };
  setAuthedUser: (userData: IAuthedUserData) => void;
  clearAuthedUser: () => void;
}

export interface IAuthedUserData {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
    image: string;
  };
}

export interface IFormType {
  formType: 'signIn' | 'signUp';
  setFormType: (type: 'signIn' | 'signUp') => void;
}
