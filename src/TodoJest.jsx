import React, { useState } from 'react';


const TodoJest = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const addItem = () => {
    if (currentItem.name.trim()) {
      setItems([...items, { ...currentItem, id: items.length + 1 }]);
      setCurrentItem({ id: null, name: '' });
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const updateItem = () => {
    if (currentItem.name.trim()) {
      setItems(
        items.map((item) => (item.id === currentItem.id ? currentItem : item))
      );
      setIsEditing(false);
      setCurrentItem({ id: null, name: '' });
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <label>Item Name:</label>
        <input
          id="item-name"
          type="text"
          name="task"
          value={currentItem.name}
          onChange={handleInputChange}
        />
        {isEditing ? (
          <button onClick={updateItem}>Update Item</button>
        ) : (
          <button onClick={addItem}>Add Item</button>
        )}
      </div>
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoJest;