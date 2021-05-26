import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";

import { Form, Button } from "react-bootstrap";

// bütün get,post,delete gibi methodları çağırıyoruz. (index.js içerisinde yer alan, axios klasörü içinde)
import * as api from "../axios/index.js";

// tarayıcımızın historysi oluyor aslında
import { useHistory } from "react-router-dom";

const SubmitMemory = () => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });

  const history = useHistory();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // post methodunu kullanıyoruz.
          api.createMemory(memoryData);
          history.push("/");
        }}
      >
        <Form.Group>
          <h1>Bir anı oluştur</h1>
        </Form.Group>

        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Yazar</Form.Label>
          <Form.Control
            name="creator"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, creator: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            rows={3}
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <ReactFileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit">Gönder</Button>
        </div>
      </Form>
    </>
  );
};

export default SubmitMemory;
