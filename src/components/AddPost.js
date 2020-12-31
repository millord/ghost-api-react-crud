import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import GhostAdminAPI from "@tryghost/admin-api";

const api = new GhostAdminAPI({
  url: "https://ghostcms-nextjs-backend-2.herokuapp.com",
  key:
    "5fe8b0020faeb4001e8f6a4c:f9ebaa331db12d472ca817f8a8fdf2de6d3d02ffb747887e7f5e90e9a2d4c6af",
  version: "v3",
});

export default function AddPost() {
  const [title, setTitle] = useState("");

  function createPost(e) {
    e.preventDefault();
    api.posts
      .add({
        title,
      })
      .then((res) => {
        setTitle("");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <Form onSubmit={createPost}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter Post"
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
