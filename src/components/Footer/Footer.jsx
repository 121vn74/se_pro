import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: "#2c3190" }} className='d-flex flex-column flex-sm-row justify-content-between page-container p-5'>
            <div className="footer-left pt-2">
                <span className='text-white'>Sun Cellular</span>
            </div>
            <div className="footer-right pt-2">
                <span className='pe-1 text-white'></span>
                <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://github.com/Anrsgrl") }}></span>
            </div>
        </footer>
    )
}

export default Footer;