import React from 'react'

export default function Footer() {
  return (
    <>
    <footer id="footer">
    <div className="container">
      <h3>KnightOne</h3>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div className="social-links">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>KnightOne</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
    </>
  )
}
