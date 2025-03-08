import { supabase } from "@/lib/supabase/supabase";
import { AuthError, AuthErrorType, LoginCredentials } from "@/types/auth";

export const authApi = {
  login: async ({ email, password }: LoginCredentials) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      switch (error.code) {
        case "auth.invalid-login":
          throw new AuthError(
            AuthErrorType.INVALID_CREDENTIALS,
            "아이디 또는 비밀번호가 일치하지 않습니다."
          );
        default:
          throw new AuthError(AuthErrorType.UNKNOWN, error.message);
      }
    }

    return data;
  },

  signup: async ({ email, password }: LoginCredentials) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: email.split("@")[0],
          avatar_url: null,
        },
      },
    });

    if (error) {
      switch (error.code) {
        case "auth/email-already-exists":
          throw new AuthError(AuthErrorType.USER_EXISTS, error.message);
        case "auth/weak-password":
          throw new AuthError(AuthErrorType.WEAK_PASSWORD, error.message);
        default:
          throw new AuthError(AuthErrorType.UNKNOWN, error.message);
      }
    }

    return data;
  },

  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new AuthError(AuthErrorType.UNKNOWN, error.message);
    }
  },
};
