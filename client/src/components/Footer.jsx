import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h1 className="text-4xl text-white font-semibold mb-4">
              Community <br /> Share App
            </h1>
            <p className="text-gray-300">
              Empowering communities to share, connect, and grow together.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-white mb-4 font-semibold">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-white mb-4 font-semibold">
              Community
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Events
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4  font-semibold">Connect</h2>
            <div className="flex  space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-white"
                target="_blank"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://twitter.com/"
                className="text-white"
                target="_blank"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://www.instagram.com/ "
                className="text-white"
                target="_blank"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} Community Share App. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
