import { createContext } from "react";
import { useState } from "react";

const BooksContext = createContext();
function Provider({ children }) {
  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;