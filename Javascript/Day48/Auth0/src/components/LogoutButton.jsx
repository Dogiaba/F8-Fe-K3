
import { useAuth0 } from "@auth0/auth0-react";
import  "../assets/styles/Logout.css"
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn_logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;