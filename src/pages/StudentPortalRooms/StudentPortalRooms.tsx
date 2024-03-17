import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

import { MdOutlineCheckCircle } from "react-icons/md";

import "./StudentPortalRooms.css";
import "../PagesGlobal.css";
import PaymentPopUp from "../../components/PaymentPopUp/PaymentPopUp";
import { useState } from "react";
import StudentPortalSidebar from "../../components/StudentPortalSidebar/StudentPortalSidebar";

const StudentPortalRooms = () => {
  const [pay, setPay] = useState(false);
  const handleBtnClick = () => {
    console.log("Clicked");
    setPay(true);
  };
  return (
    <>
      <div className="student-portal-rooms-page">
        <div className="d-flex student-portal-rooms-page-bg">
          <StudentPortalSidebar />

          <div className="pages-content-body">
            <PortalTopBar pageTitle="Rooms" />

            <div className="pages-content-section  ">
              <div className="rooms-content-section ">
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Single Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 20, 000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Enjoy the privacy and comfort of your own space in our
                      single bed room
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom dark={true} onBtnClick={handleBtnClick}>
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Single Bed</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Private Washroom</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fast WIFI</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>15m² of Space</span>
                    </div>
                  </div>
                </div>
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Double Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 12,000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Ideal for friends or students who enjoy shared living
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom dark={true} onBtnClick={handleBtnClick}>
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>2 Beds</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>2 Study Desks</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fast WIFI</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>10m² of Space</span>
                    </div>
                  </div>
                </div>
                <div className="rooms-details ">
                  <div className="room-desc ">
                    <div className="room-name">Quad Room</div>
                    <div className="room-pricing">
                      <div className="room-price">Ksh 6, 000</div>
                      <div className="room-price-period">/SEMESTER</div>
                    </div>
                    <div className="room-desc-info">
                      Looking for a social and budget-friendly option?
                    </div>
                    <div className="room-cta-btn">
                      <ButtonCustom dark={true} onBtnClick={handleBtnClick}>
                        BOOK NOW
                      </ButtonCustom>
                    </div>
                  </div>
                  <div className="room-all-features ">
                    <h3>Features</h3>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Four Beds</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Study Desk</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Lockable Cabinets</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>Fully Furnished Room</span>
                    </div>
                    <div className="room-feature">
                      <MdOutlineCheckCircle fill="#1E3738" size="24" />{" "}
                      <span>13m² of Space</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {pay && (
          <div className="payingProcess">
            <PaymentPopUp onClickPay={() => setPay(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default StudentPortalRooms;
