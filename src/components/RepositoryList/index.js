import React from "react";

import "./index.css";
const RepositoryList = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div className="repo-container" key={repo.id}>
          <img
            className="repo-image"
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login} avatar`}
          />
          <div className="repo-details-container">
            <h2 className="repo-head">{repo.name}</h2>
            <p className="repo-descriptions">{repo.description}</p>
            <div className="descriptions">
              <p className="repo-description">Stars: {repo.stargazers_count}</p>
              <p className="repo-description">
                Issues: {repo.open_issues_count}
              </p>
              <p className="repo-description">Owner: {repo.owner.login}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
