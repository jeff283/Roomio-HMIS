// LIBRARIES
import { NavLink } from "react-router-dom";
// STYLING
import "./HomePage.css";

// COMPONETS
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import NavlinkButton from "../../components/NavlinkButton/NavlinkButton";

// IMAGES
import heroImg from "../../assets/images/heroImg.png";
import doubleRoomImg from "../../assets/images/doubleRoom.png";
import singleRoomImg from "../../assets/images//singleRoom.png";
import quadRoomImg from "../../assets/images/quadRoom.png";
import whyUsImg from "../../assets/images/whyUs.png";
import TeamImg from "../../assets/images/AuthPageImg.png";
import ContactUs from "../../components/ContactUs/ContactUs";

// SVGs

import roomioDarkLogo from "../../assets/SVGs/RoomioDarkLogo.svg";
import facebookLogo from "../../assets/SVGs/facebook.svg";
import twitterLogo from "../../assets/SVGs/twitter.svg";
import instagramLogo from "../../assets/SVGs/instagram.svg";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div id="navbar" className="navbar-home-container ">
        <NavbarHome />
      </div>

      <div id="home" className="hero-section">
        <div className="hero-title fz64 poppins-bold">
          <div>Turn Dorm Hunting</div>
          <div>Into Room Roaming!</div>
        </div>
        <div className="hero-subtitle fz24">
          <div>Skip the Lines & Ditch the Paperwork: </div>
          <div>Roomio Makes Dorm Booking Easy</div>
        </div>
        <div className="hero-cta-btn">
          <div className="hero-cta-btn-container">
            <NavlinkButton toLink="/student-portal/rooms">
              Book Now
            </NavlinkButton>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
      <div id="room" className="room-section">
        <div className="title fz48 poppins-bold mb-4">Our Rooms</div>

        <div className="room ">
          <div className="room-img">
            <img src={doubleRoomImg} alt=" Double Room Image" />
          </div>
          <div className="room-desc ">
            <div className="room-desc-title fz32 poppins-semibold">
              Double Room
            </div>
            <div className="room-desc-subtitle fz24 light-text">
              Ideal for friends or students who enjoy shared living
            </div>
            <div className="room-price  fz24">
              <div className="room-price-subtitle light-text">Starts From</div>
              <div className="room-price-number fz32 poppins-semibold">
                Ksh 12,000
              </div>
              <div className="room-price-period poppins-semibold">
                /SEMESTER
              </div>
            </div>

            <div className="room-features fz24">
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">STATUS</div>
                <div className="feature-desc light-text">Available</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">UNITS</div>
                <div className="feature-desc light-text">20</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">BEDS</div>
                <div className="feature-desc light-text">2</div>
              </div>
            </div>

            <div className="room-cta-btns ">
              <NavLink className="room-cta-btn" to="/student-portal/rooms">
                Book Now
              </NavLink>
              <NavLink
                className="room-cta-btn room-cta-btn-dark"
                to="/student-portal/rooms"
              >
                More Details
              </NavLink>
            </div>
          </div>
        </div>

        <div className="room ">
          <div className="room-desc ">
            <div className="room-desc-title fz32 poppins-semibold">
              Single Room
            </div>
            <div className="room-desc-subtitle fz24 light-text">
               Enjoy the privacy and comfort of your own space in our single bed
              room
            </div>
            <div className="room-price  fz24">
              <div className="room-price-subtitle light-text">Starts From</div>
              <div className="room-price-number fz32 poppins-semibold">
                Ksh 20,000
              </div>
              <div className="room-price-period poppins-semibold">
                /SEMESTER
              </div>
            </div>

            <div className="room-features fz24">
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">STATUS</div>
                <div className="feature-desc light-text">Available</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">UNITS</div>
                <div className="feature-desc light-text">10</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">BEDS</div>
                <div className="feature-desc light-text">1</div>
              </div>
            </div>

            <div className="room-cta-btns ">
              <NavLink className="room-cta-btn" to="/student-portal/rooms">
                Book Now
              </NavLink>
              <NavLink
                className="room-cta-btn room-cta-btn-dark"
                to="/student-portal/rooms"
              >
                More Details
              </NavLink>
            </div>
          </div>

          <div className="room-img">
            <img src={singleRoomImg} alt="" />
          </div>
        </div>

        <div className="room ">
          <div className="room-img">
            <img src={quadRoomImg} alt="Quad Room Image" />
          </div>
          <div className="room-desc ">
            <div className="room-desc-title fz32 poppins-semibold">
              Quad Room
            </div>
            <div className="room-desc-subtitle fz24 light-text">
              Looking for a social and budget-friendly option?
            </div>
            <div className="room-price  fz24">
              <div className="room-price-subtitle light-text">Starts From</div>
              <div className="room-price-number fz32 poppins-semibold">
                Ksh 6,000
              </div>
              <div className="room-price-period poppins-semibold">
                /SEMESTER
              </div>
            </div>

            <div className="room-features fz24">
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">STATUS</div>
                <div className="feature-desc light-text">Available</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">UNITS</div>
                <div className="feature-desc light-text">40</div>
              </div>
              <div className="room-feature ">
                <div className="feature-name poppins-semibold">BEDS</div>
                <div className="feature-desc light-text">4</div>
              </div>
            </div>

            <div className="room-cta-btns ">
              <NavLink className="room-cta-btn" to="/student-portal/rooms">
                Book Now
              </NavLink>
              <NavLink
                className="room-cta-btn room-cta-btn-dark"
                to="/student-portal/rooms"
              >
                More Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="about-section">
        <div className="title fz48 poppins-bold mb-4">Why Us</div>
        <div className="about-content">
          <div className="about-img">
            <img src={whyUsImg} alt="Roomio Rooms" />
          </div>
          <div className="about-content-grid ">
            <div className="about-row ">
              <div className="about-content-card ">
                <div className="about-card-title fz32 poppins-semibold">
                  Stress Free Applications
                </div>
                <div className="about-card-content fz24">
                  Apply online & ditch the paperwork lines. Track your status
                  easily, anywhere.
                </div>
              </div>
              <div className="about-content-card ">
                <div className="about-card-title fz32 poppins-semibold">
                  Effortless Room Selection
                </div>
                <div className="about-card-content fz24">
                  Browse photos & filter by what matters: single, double,
                  location & more. Find it fast!
                </div>
              </div>
            </div>
            <div className="about-row">
              <div className="about-content-card">
                <div className="about-card-title fz32 poppins-semibold">
                  Goodbye Application Anxiety
                </div>
                <div className="about-card-content fz24">
                  Get application updates & relax - Roomio keeps you informed.
                </div>
              </div>
              <div className="about-content-card">
                <div className="about-card-title fz32 poppins-semibold">
                  24/7 Support at Your Fingertips
                </div>
                <div className="about-card-content fz24">
                  Got questions? Connect with hostel staff directly through
                  Roomio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contactus-section">
        <div>
          <div className="title fz48 poppins-bold mb-3 ">Talk to Us</div>
          <div className="contact-sidepanel ">
            <div className="contact-img">
              <img src={TeamImg} alt="Team Image" />
            </div>
            <div className="contact-details fz24  ">
              <div className="physical-address">
                P.O. Box 52428 - 00200, Haile Selassie Avenue, Nairobi, Kenya
              </div>
              <div className="office-phone">
                Tel: +254(020) 2219929, 3343672
              </div>
              <div className="office-email">info@roomio.com</div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <ContactUs />
        </div>
      </div>
      <div id="footer" className="footer-section">
        <div className="footer-container fz24">
          <div className="links-container">
            <div className="links-title fz32 poppins-semibold mb-2">Links</div>
            <div className="links-body">
              <NavLink className="link" to="#home">
                Home
              </NavLink>
              <NavLink className="link" to="#room">
                Rooms
              </NavLink>
              <NavLink className="link" to="#about">
                About Us
              </NavLink>
              <NavLink className="link" to="#contact">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="branding-container">
            <div className="roomio-brand">
              <img src={roomioDarkLogo} alt="Roomio Logo" />
            </div>
            <div className="sm-brands">
              <div className="sm-title mb-3">Follow Us</div>
              <div className="sm-links-container">
                <div className="facebook">
                  <img src={facebookLogo} alt="Facebook Logo" />
                </div>
                <div className="twitter">
                  <img src={twitterLogo} alt="Twitter Logo" />
                </div>
                <div className="instagram">
                  <img src={instagramLogo} alt="Instagram Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="portals-container">
            <div className="portals-title fz32 poppins-semibold mb-2">
              Portals
            </div>
            <div className="portal-links-container">
              <NavLink
                className="student-portal-link"
                to="/student-portal/dashboard"
              >
                Student Portal
              </NavLink>
              <NavLink
                className="admin-portal-link"
                to="/admin-portal/dashboard"
              >
                Admin Portal
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
