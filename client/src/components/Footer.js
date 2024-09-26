// import "../styles/Footer.scss"
import "../Footer.css"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.jpg" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <Link to="/about" className="about" style={{textDecoration: "none"}}>
          <li>About Us</li>
          </Link>
          <img src="/assets/payment.png" alt="payment"  style={{flex: "rap"}}/>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          
          <p>+234 906 816 1328 </p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>abikebasirat@gmail.com</p>
        </div>
       
      </div>
    </div> 
  )
}

export default Footer