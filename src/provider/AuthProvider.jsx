import { useContext } from "react";
import { AuthContext } from "../context";

export default function AuthProvider({ children }) {

    const userInfo = {

    }
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

