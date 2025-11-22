import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [ newItem, setNewItem ] = useState({
    name: "",
    category: "Produce"
  });

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit( {...newItem, id: uuid()});
  };

  function handleChange(e) {
    setNewItem((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value
      };
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;