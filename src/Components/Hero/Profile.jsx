import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";

function Profile() {
  const { user_id } = useParams();
  const [user, setUser] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [setIsLoggedIn] = useToken(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://reqres.in/api/users/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setUser(data?.data);
          setLoading(false);
        }
      });
  }, [user_id]);



  return (
    <div className="Profile">
      {user && (
        <div className="text">
          <img
            src={user.avatar}
            alt={user.first_name + " " + user.last_name + "s avatar"}
          />

          <h2>{user.first_name + " " + user.last_name}</h2>

          <a href={"mailto:" + user.email}>{user.email}</a>

          <button className="btn" onClick={() => navigate(-1)}>
            Orqaga
          </button>

          <button className="btn" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </button>
        </div>
      )}

      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Profile;
