import React from 'react';

const Footer = () => {
    return (
  <div className='bg-black' >
          <footer className="footer bg-black sm:footer-horizontal  text-neutral-content p-10 max-w-[1440px] mx-auto ">
  <nav>
    <h1 className="footer-title">CS — Ticket System</h1>
    <p  >"A Customer Support Ticket <br></br> System to track, manage,<br></br> and resolve user issues efficiently,<br></br> allowing support teams<br></br> to prioritize and monitor tickets<br></br> from creation to resolution."</p>

  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover"><i class="fa-brands fa-facebook"></i>@CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-x-twitter"></i>@CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-brands fa-linkedin"></i>@CS — Ticket System</a>
    <a className="link link-hover"><i class="fa-solid fa-inbox"></i>support@cst.com</a>
  </nav>
</footer>
<div className='border border-t-gray text-center  ' >
  <p className='text-white py-6 '  >© 2025 CS — Ticket System. All rights reserved.</p>

</div>
    </div>
    
    );
};

export default Footer;