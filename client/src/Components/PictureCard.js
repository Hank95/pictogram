import React from "react";
import { Card, Image } from "semantic-ui-react";
import LikeButton from "./LikeButton";

const PictureCard = (post) => {
  return (
    <Card className="Card">
      <Image src={post.post.image} wrapped ui={false} />
      <Card.Content className="CardContent">
        <Card.Header>{post.post.title}</Card.Header>
        <Card.Meta>{post.post.author}</Card.Meta>
        <Card.Meta>{post.post.datePosted}</Card.Meta>
        <LikeButton />
      </Card.Content>
    </Card>
  );
};

export default PictureCard;
