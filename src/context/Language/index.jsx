import { createContext, useReducer, useContext } from "react";

const LanguageContext = createContext();
export const LanContext = () => useContext(LanguageContext);

const LanguagePovider = ({ children }) => {
  const [state, dispatch] = useReducer(() => {
    return 'Heyy';
  }, []);

  return <LanguageContext.Provider value={[state, dispatch]}>
    {children}
  </LanguageContext.Provider>
}

export default LanguagePovider;