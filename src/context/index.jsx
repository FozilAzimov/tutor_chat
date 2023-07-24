import LanguagePovider from "./Language";

const RootContext = ({ children }) => {
  return (
    <LanguagePovider>
      {children}
    </LanguagePovider>
  )
}

export default RootContext;