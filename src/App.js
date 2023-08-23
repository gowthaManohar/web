import React, { useState, useEffect } from "react";
import RepositoryList from "./components/RepositoryList";
import RepositoryDetails from "./components/RepositoryDetails";
//import Graph from './Graph';

import "./App.css";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [timeRange, setTimeRange] = useState("1 week"); // Default time range

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=created:>2023-06-17&sort=stars&order=desc"
      );
      const data = await response.json();
      setRepos(data.items);
    };

    fetchData();
  }, []);

  //const fetchDatas = async () => {
   //const response = await fetch("https://api.github.com/repos/OWNER/REPO/community/profile")
   //const data = response.json()
  // console.log(data)
  //};

  //fetchDatas()
  return (
    <div className="app-container">
      <h1 className="app-head">Most Starred GitHub Repos</h1>
      <RepositoryList repos={repos} />
      <RepositoryDetails />
    </div>
  );
};

export default App;
