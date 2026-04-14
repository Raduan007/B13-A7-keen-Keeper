import React from 'react';
import imgKeen from '../../assets/logo-xl.png' 
import fb from '../../assets/facebook.png'
import ins from '../../assets/instagram.png'
import x from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='mx-auto bg-[#244D3F] text-white px-4 md:px-10 lg:px-20'>
            <div>
              <div className="flex justify-center items-center pt-20 pb-4 ">
                    <img src={imgKeen} alt=""  />
                    </div>
                    <p className='text-center opacity-80 pb-6'>
                      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                
                <div className='text-center'>
                    <h3 className='text-xl pb-4'>Social Links</h3>
                    <ul className='flex justify-center items-center pb-5 space-x-3'>
                        <li><a href="https://www.instagram.com/"><img src={ins} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src={fb} alt="" /></a></li>
                        <li><a href="https://x.com/"><img src={x} alt="" /></a></li>
                    </ul>
                </div>
            </div>

           <div className='text-white'>
            <div className='flex flex-col md:flex-row justify-between items-center border-t-1 border-[#1A8862] opacity-70 px-4 md:px-10 lg:px-20'>
                <h5 className='pt-7 text-center md:text-left'>© 2026 KeenKeeper. All rights reserved.</h5>
                 <ul className='flex flex-col md:flex-row py-7 space-y-3 md:space-y-0 md:space-x-7 text-center'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                 </ul>
            </div>
           </div>
              
        </div>
    );
};

export default Footer;