import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-white mt-5">

      <div className="container py-5">

        <div className="row">

          <div className="col-md-4">
            <h3 className="fw-bold text-warning">RideReady</h3>
            <p>
              Safe, Affordable and Reliable Cab Booking Platform.
              Book rides anytime, anywhere.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>Home</li>
              <li>Cabs</li>
              <li>Bookings</li>
              <li>Profile</li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>Contact</h5>

            <p>Email : support@rideready.com</p>

            <p>Phone : +91 9876543210</p>

            <div className="social-icons">

              <FaFacebookF />

              <FaInstagram />

              <FaTwitter />

              <FaLinkedinIn />

            </div>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 RideReady. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;