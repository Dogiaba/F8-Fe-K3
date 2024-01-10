
import React from 'react'
import "@/app/assets/darkStyle.css";
import "@/app/assets/style.css";
import { cookies } from "next/headers";
import ChangeLang from "../components/ChangeLang";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import{ signIn, signOut, useSession} from "next-auth/react";
import Link from 'next/link';
const layout = ({children}) => {
  // const {status} = useSession();
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
              {/* {status === 'authenticated' ?(
                <button onClick={()=> signOut()} className="btn-login"><CiLogout /></button>
              ):(
                <button onClick={()=> signIn()} className="btn-login"><CiLogin /></button>
              ) } */}
              <Link href={"/auth"}><button  className="btn-login"><CiLogin /></button></Link>
              
            </li>
            <li className="nav-link">
              <ChangeLang>{cookies().get("lang")?.value ? cookies().get("lang")?.value : "en"}</ChangeLang>
              {/* <button className="btn-lang">en</button> */}
            </li>
          </ul>
        </header>
      </nav>

    {children}
    </>
  )
}

export default layout