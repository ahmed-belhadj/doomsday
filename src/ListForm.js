import React from "react";

const ListForm = props => {
  return (
    <form>
      <input
        onChange={props.updateSingleItem}
        type="text"
        placeholder="Add Item"
        value={props.value}
      />
      <button onClick={props.addSingleItem}>Add It!</button>
    </form>
  );
};

export default ListForm;
