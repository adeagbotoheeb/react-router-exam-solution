import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (<>
   <Helmet>
        <title>Profile page</title>
        <meta name="description" content="This is a profile page" />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <div className="section">
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  </>
    
  );
};

export default Profile;
