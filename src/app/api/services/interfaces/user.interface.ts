export interface IUser {
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
    password: null;
    image: string;
  };
}
export interface ISignInUser {
  email: string;
  password: string;
}

export interface ISignUpUser extends ISignInUser {
  username: string;
}

export interface IAuthedUser extends IUser {
  accessToken: string;
}
