import React from 'react';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer style={{paddingBottom:"50px"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          
          <a href="mailto:rejinakhadka00@gmail.com" className="text-gray-300 hover:text-white mr-4   ">
            <AiOutlineMail className="h-6 w-6" />
          </a>
         
          <a href="https://github.com/Rejinakhadka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <AiFillGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
