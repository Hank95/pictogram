import PictureCard from "./PictureCard";

const Home = ({ feed }) => {
  console.log(feed);
  return (
    <div id="feedList">
      {feed.map((post) => {
        return <PictureCard post={post} />;
      })}
    </div>
  );
};

export default Home;
