import React from 'react';
import fLogo from '../../../../public/logof.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <aside>
                <img className='btn-ghost w-52' src={fLogo} alt="" />
                <p>Royal Respite<br />Providing reliable tech since 1992</p>
            </aside>
            <div className='grid grid-cols-2 lg:grid-cols-3 space-x-16 space-y-5 lg:space-x-32'>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col space-y-3 font-roboto'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;