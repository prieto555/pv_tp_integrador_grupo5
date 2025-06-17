import { useContext } from 'react'
import { AuthContext } from '../context/AutorizacionesContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}
