import { MouseEvent, useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectedItem(item: string): void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // items = [];
  // const message = items.length === 0 ? <p>No item found</p> : null;

  // let selectedItem = -1;
  // const handleClick = (event: MouseEvent) => console.log(event.target);

  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // <li className="list-group-item">{item}</li>
          <li
            className={
              selectedItem === index
                ? 'list-group-item active'
                : 'list-group-item '
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
