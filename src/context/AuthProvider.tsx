import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { TUser } from "../lib/types";
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
