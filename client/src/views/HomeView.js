import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchMemories } from "../actions/memoryActions";
import Memory from "../components/Memory.js";

import { useDispatch, useSelector } from "react-redux";

const HomeView = () => {
  const dispatch = useDispatch();
  const memories = useSelector((state) => state.memories);

  useEffect(() => {
    if (!memories[0]) {
      dispatch(fetchMemories());
    }
  }, [dispatch]);
  return (
    <>
      <h1 class="text-center">En güncel Anılar</h1>

      {/* {!memories.length ? <Spinner animation="border" /> : <h1>Memory Dolu</h1>} */}
      {/* anılarımızı tek tek oluşturmak üzere burada tanımlıyoruz, belirli key üzeriden */}
      {/* ayrıca sm,md gibi sizeları kullanarak ekranı bölebiliriz */}
      <Row>
        {memories.map((memory) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="m-auto"
            key="{memory._id}"
          >
            {/* oluşturduğumuz memoryi Memory.js'e gönderiyoruz */}
            <Memory memory={memory} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeView;
