const Pictures = ({ pictures }) => {
  return (
    <div>
      {pictures.map((pic) => {
        return (
          <div>
            <img src={pic} alt="Ooops" />
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;
