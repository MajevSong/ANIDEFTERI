import React, { useState, useEffect } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import { fetchMemories } from "../axios/index.js";
import Memory from "../components/Memory.js";

const HomeScreen = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {
      const { data } = await fetchMemories();
      console.log(data);
      setMemories(data);
    };
    getMemories();
  }, []);
  return (
    <>
      <h1>En güncel Anılar</h1>
      {!memories.length ? <Spinner animation="border" /> : <h1>Memory Dolu</h1>}
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

export default HomeScreen;
