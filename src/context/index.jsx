import LanguagePovider from "./language";
import HomePovider from "./HomeContext";

const RootContext = ({ children }) => {
  return (
    <LanguagePovider>
      <HomePovider>
        {children}
      </HomePovider>
    </LanguagePovider>
  )
}

export default RootContext;