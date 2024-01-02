// import useTrans from "./pageChange/hooks/useTrans"
import "../assets/darkStyle.css";
import "../assets/style.css";
import Image from "next/image";
import imageAvata from "@/app/assets/image/code-icon.png";
import logoIm from "@/app/assets/image/logo.png";
const page = () => {
  // const trans = useTrans();
  return (
    <>
      <nav className="nav-head">
        <header className="header-blog">
          <ul className="nav-left">
            {/* <li>
              <a href=""><Image src={logoIm} alt="logo"/></a>
            </li> */}
            <li>
              {/* <a href="#"><Image src={logoIm} alt="logo"/></a> */}
              <a className="logo nav-link">CODE WITH ME</a>
            </li>
            <li className="nav-link">
              <a href="#">Home</a>
            </li>
            <li className="nav-link">
              <a href="#">Blogs</a>
            </li>
          </ul>

          <ul className="nav-right">
            <li className="nav-link">
              <a href="#">F8</a>
            </li>
            <li className="nav-link">
              <a href="#">Facebook</a>
            </li>
            <li className="nav-link">
              <a href="#">Youtube</a>
            </li>
            <li className="nav-link">
              <label className="ui-switch">
                <input type="checkbox" />
                <div className="slider">
                  <div className="circle"></div>
                </div>
              </label>
            </li>
            <li className="nav-link">
              <button className="btn-lang">En</button>
            </li>
          </ul>
        </header>
      </nav>
      <main>
        <div className="container">
          <div className="title">
            <h1 className="title">Trần Bảo Minh</h1>
          </div>
          <div className="content">
            <aside className="infor-skills">
              <div className="title">
                <Image className="avatar" src={imageAvata} alt="coding"/>
                <p >Front-end developer</p>
              </div>
              <section>
                <h2 className="title-infor">Các kỹ năng của tôi</h2>
                <ul>
                  <li>
                    <h3>Kỹ năng làm việc:</h3>
                    <span>
                      REST API, React.js, Next.js, CSS3, HTML5, UI/UX,
                    </span>
                  </li>
                  <hr />
                  <li>
                    <h3>Các ký năng khác:</h3>
                    <span>
                      Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm
                      việc, kỹ năng làm việc nhóm tốt so với độ tuổi.
                    </span>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Lịch sử</h2>
                <ul>
                  <li>
                    <h3>2017-2019:</h3>
                    <span>Học trung học Trung học phổ thông</span>
                  </li>
                  <hr/>
                  <li>
                    <h3>2020-2023:</h3>
                    <span>Học đại học</span>
                  </li>
                  <hr/>
                </ul>
              </section>
            </aside>

            <div className="infor-content">
              <div className="infor-contact">
                <h2 className="title">Thông tin liên hệ</h2>
                <ul>
                  <li>
                    <span>
                      Phone: <a href="tel:0762308382">0762308382</a>
                    </span>
                  </li>
                  <li>
                    <span>Zalo: </span>
                    <a href="https://zalo.me">https://zalo.me</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="#">baominhtran0911@gmail.com</a>
                  </li>
                  <li>
                    <span>Facebook: </span>
                    <a href="https://www.facebook.com/">
                      https://www.facebook.com/
                    </a>
                  </li>
                  <li>
                    <span>Github: </span>
                    <a href="https://github.com/">https://github.com/</a>
                  </li>
                </ul>
              </div>

              <div className="infor-project mt">
                <h2 className="title">Các sự án cá nhân</h2>
                <div>
                  <div className="item-project">
                      <h3>Project Code snippet</h3>
                      <p>Một dự án nhỏ hoàn thành trong vòng một ngày Một trang web đơn giản cho phép tạo và chia sẻ các đoạn code. Sử dụng HTML, CSS, JS và custom elements.</p>
                      <div className="view">
                        <a className="link-view" href="#">Demo</a>
                        <a className="link-view" href="#">Code</a>
                      </div>
                  </div>
                  <hr/>
                  <div className="item-project">
                      <h3>Project 20f8</h3>
                      <p>Một dự án game được làm trong một ngày Một trò chơi giải đố dựa trên trò chơi 2048. Sử dụng Next.js và Tailwind CSS.</p>
                      <div className="view">
                        <a className="link-view" href="#">Demo</a>
                        <a className="link-view" href="#">Code</a>
                      </div>
                  </div>
                  <hr/>
                  <div className="item-project">
                      <h3>Project blog</h3>
                      <p>Một dự án được thực hiện trong ba ngày Một trang web blog social với các bài viết về lập trình và học tập. Sử dụng React.js.</p>
                      <div className="view">
                        <a className="link-view" href="#">Demo</a>
                        <a className="link-view" href="#">Code</a>
                      </div>
                  </div>
                </div>
              </div>

              <div className="infor-hobblies mt">
                <h2 className="title">Sở thích cá nhân</h2>
                <ul className="list-hobblis">
                  <li>Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ Khác,…</li>
                  <li>Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ Khác,…</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foter title">
          © 2024 Fullstack.edu.vn F8. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
