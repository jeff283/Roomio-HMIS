// import PortalContentHolder from "../../components/PortalContentHolder/PortalContentHolder";
import PortalSidebar from "../../components/PortalSidebar/PortalSidebar";
import PortalTopBar from "../../components/PortalTopBar/PortalTopBar";

import "./StudentPortal.css";
import "../PagesGlobal.css";

const StudentPortalDashboard = () => {
  return (
    <>
      <div className="d-flex">
        <PortalSidebar />

        <div className="pages-content-body">
          <PortalTopBar />
          <div className="student-dashboard-content ">
            <div className="big-content sdc-spacing ">
              <div className="top-content content-card ">
                <h3 className="content-title fz32">Student Details</h3>
                <div className="info-card ">
                  <div className="info-card-item ">
                    <span className="light-text">Full Name</span>
                    <span>RUTH MWALI WAMBUA</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Phone Number</span>
                    <span>0710010010</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Admission Number</span>
                    <span>ABBC/00001/2024</span>
                  </div>
                </div>
              </div>
              <div className="bottom-content content-card ">
                <h3 className="content-title fz32">Room Details</h3>
                <h4 className="content-title fz24">Room Status</h4>

                <div className="info-card ">
                  <div className="info-card-item ">
                    <span className="light-text">Application Status</span>
                    <span>Assigned</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Application Date</span>
                    <span>08-Jan-2024</span>
                  </div>
                </div>

                <h4 className="content-title fz24">Room Information</h4>

                <div className="info-card ">
                  <div className="info-card-item ">
                    <span className="light-text">Room Number</span>
                    <span>RM-01-12</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Room Type</span>
                    <span>Quad Room</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Capacity</span>
                    <span>4 Students</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Bed Type</span>
                    <span>Bunk Beds</span>
                  </div>
                  <div className="info-card-item ">
                    <span className="light-text">Size</span>
                    <span>13m²</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="small-content sdc-spacing ">
              <div className="top-content content-card ">
                <h3 className="content-title fz32">Roommates</h3>

                <div className="info-card ">
                  <div className="info-card-item ">
                    <span>Jane Mwangi</span>
                  </div>
                  <div className="info-card-item ">
                    <span>Sarah Mwikali</span>
                  </div>
                  <div className="info-card-item ">
                    <span>Enola Homles</span>
                  </div>
                </div>
              </div>
              <div className="bottom-content content-card ">
                <h3 className="content-title fz32">Notifications</h3>
                <div className="notification-card ">
                  <div className="notification-title ">Team Building</div>
                  <div className="notification-content ">
                    Roomies, mark your calendars! We're hosting a fun team
                    building event on April 25th to help you connect with your
                    neighbors and build teamwork skills through awesome
                    activities and challenges. Space is limited, so RSVP by
                    April 20th to join the fun! See you there!
                  </div>
                </div>
                <div className="notification-card ">
                  <div className="notification-title ">Booking</div>
                  <div className="notification-content ">
                    Don't miss out, Roomies! ⏰ The clock is ticking to book
                    your perfect dorm for the upcoming semester. Head over to
                    the Rooms page now and browse all available options!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPortalDashboard;
