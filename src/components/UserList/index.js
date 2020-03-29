import React, { useState, useEffect, useRef, useCallback } from "react";
import LoadingIcon from "../LoadingIcon";
import ListItem from "../ListItem";
import Feedback from "../Feedback";

const List = ({ onUpdatePage, users: { data, isLoading, error } = {} }) => {
  const [noResults, setNoResults] = useState(false);
  const [infiniteListUsers, setInfiniteListUsers] = useState([]);

  const observer = useRef();
  const lastUserRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !noResults) {
          onUpdatePage(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, noResults, onUpdatePage]
  );

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        setNoResults(true);
        return;
      }
      setInfiniteListUsers(infiniteListUsers => [
        ...infiniteListUsers,
        ...data
      ]);
    }
  }, [data]);

  if (isLoading && !data) {
    return (
      <div className="centered-container loading-container-height">
        <LoadingIcon width="80" height="80" fill="#9c9c9c" />
      </div>
    );
  }

  if (error) return <Feedback message={error} />;

  return (
    <div className="user-list">
      {infiniteListUsers.map(({ first_name, id, avatar }, index) => {
        const lastItem =
          infiniteListUsers.length === index + 1 ? lastUserRef : null;
        return (
          <ListItem
            key={id}
            firstName={first_name}
            avatar={avatar}
            lastItemRef={lastItem}
          />
        );
      })}
      {isLoading && (
        <div className="centered-container">
          <LoadingIcon width="50" height="50" fill="#9c9c9c" />
        </div>
      )}
      {noResults && <Feedback message="No results" />}
    </div>
  );
};

export default List;
