import React from "react";
import Graph from "react-vis-network-graph";

import graph from './data.json'
export default function MyGraph() {
  const options = {
    // physics: { enabled: false },
    edges: {
      color: "#FF0000",
    },
    height: "500px",
  };
  return (
    <div>
      <Graph graph={graph} options={options} />
    </div>
  );
}
