import { createContext, useCallback, useMemo, useState } from "react"
export const AuthContext = createContext(null);
import usersData from '../data/usuarios.json';
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((credentials) => {
    setIsLoading(true);
    try {
      const usuarioEncontrado = usersData.find(
        u => u.username === credentials.username && u.password === credentials.password
      );
      if (usuarioEncontrado) {
        const { password, ...userWithoutPassword } = usuarioEncontrado;
        setUser(userWithoutPassword);
        setIsLoading(false); 
        return { success: true };
      } else {
        setUser(null);
        setIsLoading(false);
        return { success: false, message: 'Credenciales inválidas. Por favor, intenta nuevamente.' };
      }
    }
    catch (error) {
      console.error("Ocurrió un error inesperado", error.message);
        setUser(null);
      setIsLoading(false);
      return {
        success: false, message: 'Ocurrió un error inesperado'
      }
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const authContextValue = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  }), [user, isLoading, login, logout]);
  console.log(user,"Name del user");
  
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
