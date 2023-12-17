
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/styles/Login.css";
// import "../assets/styles"
const LoginButton = () => {
  const {loginWithPopup} = useAuth0();

  return (
    <div className="intro_login">
      <div className="container">
        <p>Cảm ơn bạn đã sử dụng dịch vụ của F8</p>
        <p>
          Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
          tại đây!
        </p>
        <button className="btn_login" onClick={() => loginWithPopup()}>
          ĐĂNG NHẬP || ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
