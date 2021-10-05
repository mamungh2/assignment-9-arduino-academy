import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faYoutubeSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Footer component
const Footer = () => {
    return (
        <div className="footer text-center mt-5">
            {/* all social link of ours */}
            <div className="social-container">
                <p className="mb-0 text-white"><small>Follow Us</small></p>
                <FontAwesomeIcon icon={faFacebookSquare} className="fbicon me-3" />
                <FontAwesomeIcon icon={faTwitter} className="twittericon me-3" />
                <FontAwesomeIcon icon={faYoutubeSquare} className="youtubeicon me-3" />
                <FontAwesomeIcon icon={faInstagram} className="instagramicon me-3" />
            </div>

            {/* some navigation links of footer */}
            <div className="text-white mt-3">
                <span className="me-4">Sitemap</span>
                <span className="me-4">About</span>
                <span className="me-4">Privacy Policy</span>
                <span className="me-4">Terms of Use</span>
            </div>
            <p className="text-white mt-3">&copy; Mamun Arduino Academy,2021 All Rights Reserved</p>
        </div>
    );
};

export default Footer;