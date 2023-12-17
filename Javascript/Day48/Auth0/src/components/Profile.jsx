import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "@emailjs/browser";
import LogoutButton from "./LogoutButton";
import "../assets/styles/Profile.css";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = user.name;
    const email = form.current.querySelectorAll("input")[0].value;
    const mess = form.current.querySelectorAll("textarea")[0].value;
    const address = window.location.origin;

    
    const paEmails = {
      name,
      email,
      mess,
      address,
    };
    console.log(paEmails)
    emailjs.send(
        "service_8d2ftdn",
        "template_ey09nof",
        paEmails,
        "4rx130gGapr6FNaKy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Gửi thành công!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container">
        <div className="content">
          <img src={user.picture} alt={user.name} />
          <h2>Xin Chào {user.name}</h2>
          <p>Vị trí: {user.locale}</p>
          <p>
            Email:<a href="#">{user.email}</a>
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="form-container"
          >
            <div className="inputEmail">
              <label htmlFor="">Email của bạn</label>
              <input type="email" name="user_email" />
            </div>
            <div className="textArea">
              <label htmlFor="">Tin nhắn</label>
              <textarea name="message"></textarea>
            </div>
            <button className="btn_support" type="submit">
              YÊU CẦU HỖ TRỢ
            </button>
          </form>
        </div>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
