import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  onSelectItem: (s: string, i: number) => void;
}

const ListGroup = ({ items, onSelectItem }: ListGroupProps) => {
  const [act, setAct] = useState(0);
  return (
    <>
      {items.length == 0 && <p>No item Found.</p>}
      <ul className="list-group">
        {items.map((x, i) => {
          return (
            <li
              key={x}
              onClick={() => {
                setAct(i);
                onSelectItem(x, i);
              }}
              className={"list-group-item" + (i == act ? " active" : "")}
            >
              {x}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
