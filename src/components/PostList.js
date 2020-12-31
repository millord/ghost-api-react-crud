import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import GhostAdminAPI from "@tryghost/admin-api";

const api = new GhostAdminAPI({
  url: "https://ghostcms-nextjs-backend-2.herokuapp.com",
  key:
    "5fe8b0020faeb4001e8f6a4c:f9ebaa331db12d472ca817f8a8fdf2de6d3d02ffb747887e7f5e90e9a2d4c6af",
  version: "v3",
});

export default function PostList() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.posts.browse().then((res) => {
      setPost(res);
    });

    return () => {};
  }, [post]);

  return post.map((post, index) => {
    return (
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex">
          <strong>{post.title}</strong>
          <div className="ml-auto">
            <Link to={`/edit/${post.id}`} className="btn btn-warning mr-1">
              Edit
            </Link>
            <Button
              color="danger"
              onClick={() => api.posts.delete({ id: post.id })}
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    );
  });
}
