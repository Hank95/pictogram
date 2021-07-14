import PictureCard from "./PictureCard";
import { Button } from "semantic-ui-react";

const Pictures = ({ feed, user, handleDelete }) => {
  const filteredPosts = feed.filter((post) => post.author === user);
  return (
    <div className="myPicList">
      <h1>My Art</h1>
      {filteredPosts.map((pic) => {
        return (
          <div>
            <Button
              className="discard"
              onClick={pic.author === user ? () => handleDelete(pic.id) : null}
            >
              Discard
            </Button>
            <PictureCard post={pic} />
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;
