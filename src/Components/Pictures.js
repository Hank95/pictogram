const Pictures = ({ pictures }) => {
  return (
    <div>
      {pictures.map((pic) => {
        return <img src={pic} alt="Ooops" />;
      })}
    </div>
  );
};

export default Pictures;
