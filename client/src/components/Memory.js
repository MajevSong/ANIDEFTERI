import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMemory } from "../actions/memoryActions";

const Memory = ({ memory }) => {
  const [user, setUser] = useState();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, [userState]);
  const dispatch = useDispatch();
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{ color: "darkblue" }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title>
          <span style={{ color: "darkred" }}>Yazar:</span> {memory.creator}
        </Card.Title>
        <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
      </Card.Body>
      {user?.user?._id === memory.creatorId ||
      user?.user?.googleId === memory.creatorId ? (
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LinkContainer
            to={`/update/${memory._id}`}
            style={{ cursor: "pointer" }}
          >
            <GrEdit size="25" color="white" />
          </LinkContainer>

          <MdDelete
            size="25"
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteMemory(memory._id));
            }}
          />
        </Card.Footer>
      ) : null}
    </Card>
  );
};

export default Memory;
