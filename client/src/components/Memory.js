import React from "react";
import moment from "moment";

import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteMemory } from "../axios/index.js";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{ color: "darkblue" }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title>
          <span style={{ color: "darkred" }}>Yazar:</span> {memory.creator}
        </Card.Title>
        <Card.Subtitle>
          {moment(memory.createdAt).locale("tr").fromNow()}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
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
          onClick={() => deleteMemory(memory._id)}
        />
      </Card.Footer>
    </Card>
  );
};

export default Memory;
