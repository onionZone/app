import React from "react";

export default function Item(props) {
  const item = props.item;
  const categoryID = props.categoryID;

  const handleChange = (e) => {
    let _item = item;
    const name = e.target.name;
    const value = e.target.value;

    _item[name] = value;

    props.changeItem(categoryID, _item);
  };

  return (
    <tr>
      <td>
        <input
          name="name"
          type="text"
          value={item.name}
          size={item.name.length}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="supplier"
          type="text"
          value={item.supplier}
          size={item.supplier.length}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="price"
          type="text"
          value={item.price}
          size={item.price.length}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="paid"
          type="text"
          value={item.paid}
          size={item.price.paid}
          onChange={handleChange}
        />
      </td>
      <td>{item.price - item.paid}</td>
      <td>
        <button
          className="remove"
          onClick={() => props.deleteItem(categoryID, item.id)}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}