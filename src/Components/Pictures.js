import PictureCard from "./PictureCard";
import { Button } from "semantic-ui-react";

const Pictures = ({ feed, user, handleDelete }) => {
  const filteredPosts = feed.filter((post) => post.author === user);
  return (
    <div>
      <h1>My Art</h1>
      {filteredPosts.map((pic) => {
        return (
          <div id="myPost">
            <PictureCard post={pic} />
            <Button
              onClick={pic.author === user ? () => handleDelete(pic.id) : null}
            >
              Discard
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;
