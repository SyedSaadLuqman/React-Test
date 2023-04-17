import React from "react";

const StrictImpureComponent = () => {
  let count = 0;
  count++;
  return <div>StrictImpureComponent {count}</div>;
};

export default StrictImpureComponent;
