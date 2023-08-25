import React from "react";
import Graph from "react-vis-network-graph";

import graph from './data.json'
export default function MyGraph() {
  const options = {
   interaction:{navigationButtons:true},
    edges: {
      color: "#000000",
      width:2,
      length:150
    },
    nodes:{
      size:30
    },
    height: "750px",

  };
  return (
    <div>
      <Graph graph={graph} options={options} />
    </div>
  );
}
