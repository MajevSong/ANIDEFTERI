import React from "react";
import { Container } from "react-bootstrap";
import UpdateMemory from "../components/UpdateMemory";

// bulunduğumuz bölgedeki parametreleri arayabiliyoruz
import { useParams } from "react-router-dom";

const UpdateView = () => {
  const { id } = useParams();
  return (
    <>
      <Container>
        <UpdateMemory id={id} />
      </Container>
    </>
  );
};

export default UpdateView;
