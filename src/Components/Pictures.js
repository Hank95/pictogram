import PictureCard from "./PictureCard";
import { Button } from "semantic-ui-react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
const Pictures = ({ feed, userInside, handleDelete }) => {
  const filteredPosts = feed.filter((post) => post.author === userInside);
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div className="myPicList">
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <h1>My Art</h1>
      {filteredPosts.map((pic) => {
        return (
          <div>
            <PictureCard post={pic} />
            <Button
              onClick={
                pic.author === userInside ? () => handleDelete(pic.id) : null
              }
            >
              Discard
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default withAuthenticationRequired(Pictures, {
  onRedirecting: () => <Loading />,
});
