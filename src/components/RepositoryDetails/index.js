


import React, { useState,useEffect } from 'react';
//import Highcharts from 'highcharts';

function RepositoryDetail() {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [activityType, setActivityType] = useState('additions');


 

  const handleActivityChange = (event) => {
    // Update activity type state based on dropdown selection
  };

  // Fetch commit activity data based on selected repository

  // Create Highcharts configuration based on activity data and activityType

  return (
    <div className="repository-detail">
      <div className="activity-dropdown">
        <select onChange={handleActivityChange} value={activityType}>
          <option value="additions">Additions</option>
          <option value="deletions">Deletions</option>
          <option value="commits">Commits</option>
        </select>
      </div>
      <div className="activity-graph">
        {/* Render Highcharts graph */}
      </div>
    </div>
  );
}

export default RepositoryDetail;
