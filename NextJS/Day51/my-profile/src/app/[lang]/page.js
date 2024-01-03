import "@/app/assets/darkStyle.css";
import "@/app/assets/style.css";
import Image from "next/image";
import imageAvata from "@/app/assets/image/code-icon.png";
import logoIm from "@/app/assets/image/logo.png";
import { getDictionary } from "./dictionaries";
export default async function page({ params}) {
    const {lang} = params
    // console.log("par" , params, typeof(lang));
  const dict = await getDictionary(lang);
  console.log("dict", dict)
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
          <div className="container mt-5">
            <div className="title">
              <h1 className="title">{dict.data.fullName}</h1>
            </div>
            <div className="content">
              <aside className="infor-skills">
                <div className="title">
                  <Image className="avatar" src={imageAvata} alt="coding" />
                  <p>{dict.data.job}</p>
                </div>
                <section>
                  <h2 className="title-infor">{dict.data.skills.heading}</h2>
                  <ul>
                    <li>
                      <h3>{dict.data.skills["skill-1"]["title-desc"]} </h3>
                      <span>
                        {dict.data.skills["skill-1"]["descript"]}
                      </span>
                    </li>
                    <hr />
                    <li>
                      <h3>{dict.data.skills["skill-2"]["title-desc"]} </h3>
                      <span>
                      {dict.data.skills["skill-2"]["descript"]}
                      </span>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2>{dict.data.histories.heading}</h2>
                  <ul>
                    <li>
                      <h3>{dict.data.histories.times[0].year}</h3>
                      <span>{dict.data.histories.times[0].descript}</span>
                    </li>
                    <hr />
                    <li>
                      <h3>{dict.data.histories.times[1].year} </h3>
                      <span>{dict.data.histories.times[1].descript}</span>
                    </li>
                    <hr />
                  </ul>
                </section>
              </aside>

              <div className="infor-content">
                <div className="infor-contact">
                  <h2 className="title">{dict.data.contact.social}</h2>
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
                  <h2 className="title">{dict.data.contact.myProject.heading}</h2>
                  <div>
                    <div className="item-project mt-1">
                      <h3>{dict.data.contact.myProject.projects[0].heading}</h3>
                      <p>
                      {dict.data.contact.myProject.projects[0].descript}
                      </p>
                      <div className="view">
                        <a className="link-view" href="#">
                          Demo
                        </a>
                        <a className="link-view ml" href="#">
                          Code
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="item-project mt-1">
                      <h3>{dict.data.contact.myProject.projects[1].heading}</h3>
                      <p>
                      {dict.data.contact.myProject.projects[1].descript}
                      </p>
                      <div className="view">
                        <a className="link-view" href="#">
                          Demo
                        </a>
                        <a className="link-view ml" href="#">
                          Code
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="item-project mt-1">
                      <h3>{dict.data.contact.myProject.projects[2].heading}</h3>
                      <p>
                      {dict.data.contact.myProject.projects[2].descript}
                      </p>
                      <div className="view">
                        <a className="link-view" href="#">
                          Demo
                        </a>
                        <a className="link-view ml" href="#">
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="infor-hobblies mt">
                  <h2 className="title">{dict.data.myHobbies.heading}</h2>
                  <ul className="list-hobblis">
                    <li>
                    {dict.data.myHobbies["list-hobbi"][0]}
                    </li>
                    <li>
                    {dict.data.myHobbies["list-hobbi"][1]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="foter title">
              <span>&copy;</span> 2024 baominhtran0911@gmail.com All rights
              reserved.
            </div>
          </div>
        </main>
      </>

  );
}
