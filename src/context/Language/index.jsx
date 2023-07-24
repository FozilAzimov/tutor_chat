import { createContext, useReducer } from "react";
import reducer from "./reducer";

const LanguageContext = createContext();

const LanguagePovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return <LanguageContext.Provider value={[state, dispatch]}>
    {children}
  </LanguageContext.Provider>
}

export default LanguagePovider;