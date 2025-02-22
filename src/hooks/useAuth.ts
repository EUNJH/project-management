import { LoginCredentials, SignupCredentials } from "@/types/auth";
import { useNavigate } from "react-router";
import { AuthError, AuthErrorType } from "@/types/auth";
import { authApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = async (credentials: LoginCredentials) => {
    const { user, session } = await authApi.login(credentials);
    useAuthStore.getState().login(user, session);
    navigate("/dashboard");
    return { user, session };
  };

  const signup = async (credentials: SignupCredentials) => {
    if (credentials.password !== credentials.confirmedPassword) {
      throw new AuthError(
        AuthErrorType.PASSWORDS_MISMATCH,
        "패스워드가 일치하지 않습니다."
      );
    }

    await authApi.signup(credentials);

    return;
  };

  const logout = async () => {
    await authApi.logout();
    useAuthStore.getState().logout();
    navigate("/");
  };

  return { login, signup, logout };
};
