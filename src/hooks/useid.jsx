import { useId } from "react";

const useUniqeID = () => {
  const id = useId();
  return id;
}

export default useUniqeID;