export interface UserI {
    _id?: string;
    user: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}

export interface UserSignInResponseI {
    userToLog: UserI;
    token: string;
}