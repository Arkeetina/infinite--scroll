import React from "react";
import Image from "../Image";

const ListItem = ({ avatar, firstName, lastItemRef }) => {
  const itemRef = lastItemRef ? { ref: lastItemRef } : {};
  return (
    <div className="user-list-item" {...itemRef}>
      <Image
        src={avatar}
        isLazy
        style={{
          display: "block",
          borderRadius: "50px",
          maxHeight: "100px",
          maxWidth: "100px"
        }}
        alt="user-icon"
      />
      <p className="user-list-item-text">{firstName}</p>
    </div>
  );
};

export default ListItem;
