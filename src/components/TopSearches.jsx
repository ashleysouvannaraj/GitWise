import React, { useEffect, useState } from "react";
import client from "../services/firebase";
import { ListGroup, Container } from "react-bootstrap";

export const TopSearches = props => {
  const [data, setData] = useState(null);

  // FIXME: this may infinite loop, make sure the granularity is better on the useEffect check
  useEffect(() => {
    client
      .topSearches()
      .limitToLast(10)
      .on(
        "value",
        snapshot => {
          setData(snapshot.val());
        },
        []
      );
  });

  const searches = Object.values(data || {}).reverse();

  return (
    <Container style={{ marginTop: 30 }}>
      <h2>Recent Searches</h2>
      <ListGroup>
        {searches.map(({ search }) => (
          <ListGroup.Item
            key={search}
            action
            onClick={e => {
              const search = e.target.innerHTML;
              props.onSearchClicked(search);
            }}
          >
            {search}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
