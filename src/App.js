import React, { useState, useCallback } from "react";
import { fetchApi, setFetchUrl } from "./api";
import { useFetchApi } from "./hooks";
import UserList from "./components/UserList";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const users = useFetchApi(
    useCallback(() => fetchApi(setFetchUrl(pageNumber)), [pageNumber])
  );

  return (
    <div className="App">
      <Header />
      <UserList
        users={users}
        pageNumber={pageNumber}
        onUpdatePage={setPageNumber}
      />
    </div>
  );
};

export default App;
