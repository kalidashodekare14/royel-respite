import React from 'react';
import fLogo from '../../../../public/logof.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <aside>
                <img className='btn-ghost w-52' src={fLogo} alt="" />
                <p className='font-popins font-[500]'>Royal Respite<br />Providing reliable tech since 1992</p>
            </aside>
            <div className='grid grid-cols-2 lg:grid-cols-3 space-x-16 space-y-5 lg:space-x-32 '>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title ">Services</h6>
                    <a className="link link-hover font-popins font-[500]">Single-family homes</a>
                    <a className="link link-hover font-popins font-[500]">townhouses</a>
                    <a className="link link-hover font-popins font-[500]">apartments</a>
                    <a className="link link-hover font-popins font-[500]">senior living communities</a>
                    <a className="link link-hover font-popins font-[500]">vacation rentals</a>
                </nav>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover font-popins font-[500]">About us</a>
                    <a className="link link-hover font-popins font-[500]">Contact</a>
                    <a className="link link-hover font-popins font-[500]">Jobs</a>
                    <a className="link link-hover font-popins font-[500]">Press kit</a>
                </nav>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover font-popins font-[500]">Terms of use</a>
                    <a className="link link-hover font-popins font-[500]">Privacy policy</a>
                    <a className="link link-hover font-popins font-[500]">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;