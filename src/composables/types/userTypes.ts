export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string
}

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  verificationToken: string;
  isVerified: boolean;
  verifiedDate: Date;
  passwordToken?: string;
  passwordTokenExpirationDate?: Date;
};

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface SignedInUser {
  name: string, userId: string, role: UserRole
}

export type ShowCurrentUserResponse = ApiResponse<SignedInUser>