import React, { useState, useEffect } from "react";
import { Link, Redirect, referrer } from "react-router-dom";
import GhostAdminAPI from "@tryghost/admin-api";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const api = new GhostAdminAPI({
  url: "https://ghostcms-nextjs-backend-2.herokuapp.com",
  key:
    "5fe8b0020faeb4001e8f6a4c:f9ebaa331db12d472ca817f8a8fdf2de6d3d02ffb747887e7f5e90e9a2d4c6af",
  version: "v3",
});

export default function EditPost(props) {
  const [selectedPost, setSelectedPost] = useState({
    id: "",
    title: "",
  });

  const currentPostId = props.match.params.id;

  useEffect(() => {
    const postId = currentPostId;
    api.posts.read({ id: postId }).then((res) => {
      setSelectedPost(res);
    });
  }, [currentPostId]);

  function editPost(e) {
    e.preventDefault();
    api.pages
      .edit({
        id: selectedPost.id,
      })
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
  }

  function onChange(e) {
    setSelectedPost(e.target.value);
  }

  return (
    <div>
      <Form onSubmit={editPost}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            value={selectedPost.title}
            placeholder="edit the title of your post"
            onChange={onChange}
          ></Input>
        </FormGroup>
        <Button type="submit">Edit Post</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
