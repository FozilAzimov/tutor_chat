import { createContext, useReducer, useContext } from "react";

const Homecontext = createContext();
export const HomeContext = () => useContext(Homecontext);

const HomePovider = ({ children }) => {
  const [state, dispatch] = useReducer(() => {
    return 'Heyy';
  }, []);
  return <Homecontext.Provider value={[state, dispatch]}>
    {children}
  </Homecontext.Provider>
}

export default HomePovider;