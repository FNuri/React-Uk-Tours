import React from 'react'
import "./footer.scss"

class Footer extends React.Component {
  render() {
    return (
      
      <footer className="footer">
      <div class="footer">
  <div id="button"></div>
<div id="container">
<div id="cont">
<div className="social-link" class="footer_center">
	   <h3>Contact Us</h3>
     <a className="social-link" href="mailto:fowsinur@gmail.com" target="_blank" ><i style={{padding: 10, fontSize: 30, color: "blue"}} class="fas fa-envelope"></i></a>
     <a className="social-link" href="https://twitter.com/" target="_blank"><i style={{padding: 10, fontSize: 30, color: "blue"}} class="fab fa-twitter"></i></a>
     <a className="social-link" href="https://www.facebook.com/" target="_blank"><i style={{padding: 10, fontSize: 30, color: "blue"}} class="fab fa-facebook"></i></a>
     <a className="social-link" href="https://www.instagram.com/?hl=en" target="_blank"><i style={{padding: 10, fontSize: 30, color: "blue"}}class="fab fa-instagram"></i></a>
     <a className="social-link" href="https://www.linkedin.com/" target="_blank"><i style={{padding: 10, fontSize: 30, color: "blue"}}class="fab fa-linkedin-in"></i></a>
     
  
     
</div>
</div>
</div>
</div>
    </footer>
    );
  }
}

export default Footer