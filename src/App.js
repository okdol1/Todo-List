import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, input]);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a todo"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>

      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
