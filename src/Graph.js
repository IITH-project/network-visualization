import React from "react";
import Graph from "react-vis-network-graph";

import graph from './data.json'
export default function MyGraph() {
  const options = {
   interaction:{navigationButtons:true},
    edges: {
      color: "#FF0000",
      width:2.5
    },
    nodes:{
      size:25
    },
    height: "600px",
  };
  return (
    <div>
      <Graph graph={graph} options={options} />
    </div>
  );
}
