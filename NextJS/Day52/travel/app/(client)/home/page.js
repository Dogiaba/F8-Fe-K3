import Image from "next/image";
import logoImg from "@/app/assets/image/logoTravel.jpg"
import "@/app/assets/styles/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faLock, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const homePage = () => {
  return (
    <>
    <header className="header z-20 flex">
        {/* <a href="#" className="logo"><Image className="logoImage" src={logoImg} alt="Logon"/></a> */}
        <a href="#" className="logo">WETRAVEL</a>
        <nav className="nav-link">
            <a href="#">Trang chủ</a>
            <a href="#">Đặt Lịch</a>
            <a href="#">Ưu Đãi</a>
            <a href="#">Dịch Vụ</a>
            <a href="#">Thư Viện</a>
            <a href="#">Đánh Giá</a>
            <a href="#">Liên Hệ</a>
        </nav>
        <div className="iconHeader">
            <span>dark</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faFaceSmile} />
        </div>
    </header>
    <section className="header-content">
        {/* <Video muted loop autoplay><source src={videoAu}/></Video> */}
        {/* <Video src={videoAu} /> */}
        <div className="content">
            <h3>Mọi chuyến đi đều đáng giá</h3>
            <p>Khám phá cá vùng đất mới cùng chúng tôi</p>
            <p>Những chuyến đi đang chờ bạn</p>
            <a href="#" className="btn-header">Khám phá ngay</a>
        </div>
    </section>
    <div className="controls-point"></div>
    </>
   
  )
}

export default homePage