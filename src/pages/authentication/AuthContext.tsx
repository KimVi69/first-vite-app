import React, { createContext, useContext, useState, ReactNode } from "react";

interface IFormInputs {
  name: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextType {
  registerData: IFormInputs | null;
  saveRegisterData: (data: IFormInputs) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [registerData, setRegisterData] = useState<IFormInputs | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const saveRegisterData = (data: IFormInputs) => {
    setRegisterData(data);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        registerData,
        saveRegisterData,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
