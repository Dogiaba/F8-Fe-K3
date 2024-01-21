import React from "react";
import Image from "next/image";
import iconGlass from "@/app/assets/icons/glasses.png";
import iconNote from "@/app/assets/icons/note.png";
import iconHeadPhone from "@/app/assets/icons/headphones.png"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const pageProfile = async() => {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect("/auth")
  }
  console.log(session);
  return (
    <div className="contents mt-5 px-6">
      <div className="header text-center">
        <h1>
          Xin Chào, <span className="nameInfor">{session.user.name}</span>
        </h1>
        <h3>
          Welcome to <span className="infoDay">Friday, 12 January, 2024</span>
        </h3>
      </div>
      <div className="conten-profi bor-top">
        <div className="conten-icons">
          <div className="m">
            <a className="flex items-center" href="#">
              <Image className="mr-1" src={iconHeadPhone} />
              <span>Podcasts</span>
            </a>
          </div>
          <div className="m">
            <a className="flex items-center" href="#">
              <Image className="mr-1" src={iconGlass} />
              <span>Article read</span>
            </a>
          </div>
          <div className="m">
            <a className="flex items-center" href="#">
              <Image className="mr-1" src={iconNote} />
              <span>Write</span>
            </a>
          </div>
        </div>

        <div className="content-right">
            <h2 className="title mt-1" >Chưa có bài đọc nào :)</h2>
        </div>
      </div>
    </div>
  );
};

export default pageProfile;
