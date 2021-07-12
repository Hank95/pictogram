const Home = ({ feed }) => {
  return (
    <div>
      {feed.map((post) => {
        return (
          <div>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>By: {post.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
