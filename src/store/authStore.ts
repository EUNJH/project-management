import { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  session: Session | null;
  login: (user: User | null, session: Session | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  login: (user, session) => set({ user, session }),
  logout: () => set({ user: null, session: null }),
}));
