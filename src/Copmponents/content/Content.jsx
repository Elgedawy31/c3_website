import './Content.css'

import logo1 from "../../icons/HTML.svg";
import logo2 from "../../icons/CSS.svg";
import logo3 from "../../icons/Ecommerce.svg";
import logo4 from "../../icons/Coding hand.svg";


export default function Content() {



  

  return (
    <div className="logos" data-aos='fade-down'>
          <div className="logo">
            <img src={logo1} alt="logo1" />
          </div>
          <div className="logo">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="logo">
            <img src={logo3} alt="logo3" />
          </div>
          <div className="logo">
            <img src={logo4} alt="logo4" />
          </div>
    </div>
  )
}
