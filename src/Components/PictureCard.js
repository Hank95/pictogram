import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const PictureCard = (post) => {
  console.log(post.post);
  return (
    <Card>
      <Image src={post.post.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{post.post.title}</Card.Header>
        <Card.Meta>{post.post.author}</Card.Meta>
        {/* <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description> */}
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content> */}
    </Card>
  );
};

export default PictureCard;
