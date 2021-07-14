import PictureCard from "./PictureCard";

const Home = ({ feed }) => {
  return (
    <div className="feedList" id="feedList">
      {feed.map((post) => {
        return <PictureCard post={post} />;
      })}
    </div>
  );
};

export default Home;
