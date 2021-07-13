// import PictureCard from "./PictureCard";

const Pictures = ({ pictures }) => {
  return (
    <div>
      {pictures.map((pic) => {
        return (
          <div className="myPic">
            <img src={pic} alt="Ooops" />
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;
