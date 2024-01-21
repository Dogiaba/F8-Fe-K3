import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <>
     <footer className="footer-1 bg-gray-100 py-8 sm:py-12 text-black dark:bg-slate-900 dark:text-white">
        <div className="container mx-10">
          <div className="media flex">
            <div className="icon flex text-4xl">
              <a className="ml-4" href="#"><FaFacebook /></a>
              <a className="ml-4" href="#"><FaTwitter /></a>
              <a className="ml-4" href="#"><FaYoutube /></a>
              <a className="ml-4" href="#"><FaLinkedin /></a>
              <a className="ml-4" href="#"><FaSquareInstagram /></a>
              <a className="ml-4" href="#"><FaDiscord /></a>
            </div>

          </div>

          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 ">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Cool stuff</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Random feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Team feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Stuff for developers</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Another one</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#"></a>Last time</li>
              </ul>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Cool stuff</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Random feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Team feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Stuff for developers</a></li>
              </ul>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Cool stuff</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Random feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Team feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Stuff for developers</a></li>
              </ul>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Cool stuff</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Random feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Team feature</a></li>
                <li className="mb-2"><a className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800" href="#">Stuff for developers</a></li>
              </ul>
            </div>
          </div>
          <div className="px-4 mt-4 text-center">
            <p>© 2024 Tran Bao Minh.  |  Terms of Service  | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer