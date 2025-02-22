export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  confirmedPassword: string;
}

export enum AuthErrorType {
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  USER_EXISTS = "USER_EXISTS",
  WEAK_PASSWORD = "WEAK_PASSWORD",
  PASSWORDS_MISMATCH = "PASSWORDS_MISMATCH",
  NETWORK = "NETWORK",
  UNKNOWN = "UNKNOWN",
}

export class AuthError extends Error {
  constructor(public type: AuthErrorType, message: string) {
    super(message);
    this.name = "AuthError";
  }
}
