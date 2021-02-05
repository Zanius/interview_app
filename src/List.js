import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'

const renderList = (items) => {
  return (
    items.map((item, i) => {
      return <ListItem key={i} item={item} />
    })
  )
}

const List = () => {
  const [items, setItems] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/todos'
    );
 
    console.log(result.data)
    setItems(result.data);
  }, []);
  
  return (
    <ul className="list">
      {renderList(items)}
    </ul>
  )
}

export default List;