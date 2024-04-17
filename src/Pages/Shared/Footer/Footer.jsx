import React from 'react';
import fLogo from '../../../../public/logof.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <aside className='space-y-3'>
                <img className='btn-ghost w-52' src={fLogo} alt="" />
                <p className=' font-[500] text-[15px]'>Royal Respite<br />Providing reliable tech since 1992</p>
                <div className='flex items-center space-x-5 text-2xl'>
                    <a href="#">
                        <FaFacebookF />
                    </a>
                    <a href="#">
                        <FaTwitter />
                    </a>
                    <a href="#">
                        <FaGithub />
                    </a>
                </div>
            </aside>
            <div className='grid grid-cols-2 lg:grid-cols-3 space-x-16  lg:space-x-32 '>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title ">Services</h6>
                    <a className="link link-hover  font-[500] ">Single-family homes</a>
                    <a className="link link-hover font-[500]">townhouses</a>
                    <a className="link link-hover  font-[500]">apartments</a>
                    <a className="link link-hover font-[500]">senior living communities</a>
                    <a className="link link-hover font-[500]">vacation rentals</a>
                </nav>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover font-[500]">About us</a>
                    <a className="link link-hover  font-[500]">Contact</a>
                    <a className="link link-hover  font-[500]">Residential Hotel</a>
                    <a className="link link-hover  font-[500]">Blog</a>

                </nav>
                <nav className='flex flex-col space-y-3 font-roboto lg:-mt-[0.2px] sm:mt-5'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover  font-[500]">Terms of use</a>
                    <a className="link link-hover  font-[500]">Privacy policy</a>
                    <a className="link link-hover  font-[500]">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;