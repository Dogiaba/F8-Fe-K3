"use client";
import "@/app/assets/auth.css";
import Image from "next/image";
import iconGit from "@/app/assets/image/iconGit.png";
import iconGoo from "@/app/assets/image/iconGoo.png";
import "@/app/assets/btnLogin.css";
import { signIn } from "next-auth/react";
const pageAuth = () => {
  return (
    <div className="contai mt-2 text-center">
      <p className="">My name is Bao Minh, this is my portfolio.</p>

      <div className="contai-login mt-1">
        <h2 className="textLog">Login</h2>
        <div className="loginWith">
          <button
<<<<<<< HEAD
            onClick={() => signIn("google",{callbackUrl:'http://localhost:3000/profile'})}
            className="btn-logWith signin mt-1"
=======
            onClick={() => signIn("google")}
            className="btn-logWith signin   mt-1"
>>>>>>> a7a5c9e109c18f3d67315a859f86fd3070dfcd80
          >
            <svg
              viewBox="0 0 256 262"
              preserveAspectRatio="xMidYMid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              ></path>
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              ></path>
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              ></path>
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              ></path>
            </svg>
            <p className="">Sign in with Google</p>
          </button>
          <button
<<<<<<< HEAD
            onClick={() => signIn("github",{callbackUrl:'http://localhost:3000/profile'})}
=======
            onClick={() => signIn("github")}
>>>>>>> a7a5c9e109c18f3d67315a859f86fd3070dfcd80
            className="btn-logWith button mt-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                fill="white"
              ></path>
            </svg>
            <p className="text">Sign in with GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default pageAuth;
