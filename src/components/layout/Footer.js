import React from 'react';
import { Link } from 'gatsby';

// logo
import Logo from 'assets/images/footer-logo.svg';

// icons
import IconEmail from 'assets/images/icon-email.svg';
import IconLocation from 'assets/images/icon-location.svg';
import IconPhone from 'assets/images/icon-phone.svg';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

// components
import SocialLink from 'components/SocialLink.js';

const Footer = () => {
  return (
    <div className="bg-dark pt-40 md:pt-48 px-6 pb-16 text-light ">
      <footer className="w-full max-w-screen-xl mx-auto">
        <img
          src={Logo}
          alt="Huddle"
          width="240"
          height="39"
          className="w-full h-auto max-w-[200px] mb-10"
        />
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* contact: desktop left / mobile top */}
          <address
            className="grid not-italic gap-6 max-w-sm"
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            <img src={IconLocation} alt="Huddle's Location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempopr incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={IconPhone} alt="Huddle's Phone Number" />
            <a href="tel:+15431234567" className="hover:underline">
              +1-543-123-4567
            </a>
            <img src={IconEmail} alt="Huddle's Email" />
            <a href="mailto:example@fylo.com" className="hover:underline">
              example@fylo.com
            </a>
          </address>
          {/* links: desktop center / mobile center */}
          <div className="grid md:grid-cols-2">
            <ul className="flex flex-col items-start">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  What We Do
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col items-start">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Career
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* social/copyright: desktop right, mobile bottom */}
          <div className="flex flex-col justify-between items-center lg:items-start">
            <ul className="flex justify-start items-center mb-6">
              <li>
                <SocialLink label="Link to Huddle's Facebook">
                  <FaFacebookF />
                </SocialLink>
              </li>
              <li>
                <SocialLink label="Link to Huddle's Facebook">
                  <FaTwitter />
                </SocialLink>
              </li>
              <li>
                <SocialLink label="Link to Huddle's Facebook">
                  <FaInstagram />
                </SocialLink>
              </li>
            </ul>
            <p className="text-xs">
              Copyright {new Date().getFullYear()} Huddle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
