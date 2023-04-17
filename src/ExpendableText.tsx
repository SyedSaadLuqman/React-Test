import { useState } from "react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [viewToggle, setViewToggle] = useState(true);
  if (children.length < 21) return <p>{children}</p>;
  const text = viewToggle ? children.substring(0, 21) + "..." : children;
  return (
    <p>
      {text}
      <button
        style={{ marginLeft: "10px", borderRadius: "5px" }}
        onClick={() => {
          setViewToggle(!viewToggle);
        }}
      >
        {viewToggle ? "More" : "Less"}
      </button>
    </p>
  );
};

export default ExpandableText;
