import React, { useState } from "react";

const ListItem = ({item}) => {
  return (
    <li>Title: {item.title}</li>
  )
}

export default ListItem;