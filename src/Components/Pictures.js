import PictureCard from "./PictureCard";

const Pictures = ({ feed, user }) => {
  const filteredPosts = feed.filter((post) => post.author === user);
  return (
    <div>
      <h1>My Art</h1>
      {filteredPosts.map((pic) => {
        return <PictureCard post={pic} />;
      })}
    </div>
  );
};

export default Pictures;
