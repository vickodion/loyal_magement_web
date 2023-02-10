import Logo from '../images/logo.svg'
import { useState } from 'react';
import EyeIcon from '../images/eyeIcon.svg'
import MailIcon from '../images/mailIcon.svg'
import House from '../images/house.svg'
import GroupIcon from '../images/group.svg'
import Phone from '../images/phone.svg'
export default function LandingPage() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='main-body'>
      <nav className='nav'>
        <img src={Logo} alt="logo" />
        <button className='nav-button'>Request a call</button>
      </nav><br/><br/>
      <main className='body'>
        <p className='bold-text'>Turn your best customers <br /> into<span className='bold-text-purple'> Loyal fans</span></p>
        <p className='small-text'>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze.<br /> Join the waiting list now to be among the first to experience the future of customer loyalty.</p>
        <div className='form-div'>
          <div className='input-div'>
            <input className='input' type="text" value={value} onChange={handleChange} />
            <img className='eye-icon' src={EyeIcon} />
          </div><br />
          <div className='input-div'>
            <input className='input' type="text" value={value} onChange={handleChange} />
            <img className='eye-icon' src={MailIcon} />
          </div><br /><br />
          <button className='button'>Get early access</button><br/><br/>
          <div className="group-div" >
            <img src={GroupIcon} alt="group-icon" />{ }
            <p className='small-text'>+57 Joined</p>
          </div>
        </div>


      </main>
      <div className='form-card-div'>
        <div className='form-des'>
          <p className='bold-text'>What we do</p><br/>
          <p className='small-text'>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business.</p>
        </div>
        <div className='form-card'>
          <p className='small-text'>Book a Consultation with us</p>
          <input className='small-input' type="text" value={value} onChange={handleChange} /><br /><br />
          <input className='small-input' type="text" value={value} onChange={handleChange} /><br /><br />
          <input className='small-input' type="text" value={value} onChange={handleChange} /><br /><br />
          <input className='small-input' type="text" value={value} onChange={handleChange} /><br /><br />
          <input className='small-input' type="text" value={value} onChange={handleChange} /><br /><br />
          <textarea className='textarea' /><br /><br />
          <button className='button'>Send Request</button>
        </div>
      </div>
      <br/><br/><br/><br/>  <br/>  <br/>
      <hr className='hr'></hr>
      <footer className='footer'>
        <div className='footer-div'>
          <img src={House} alt="house icon" />
          <p className='small-text'>2nd Floor, The Garnet Building,<br /> KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
        </div>
        <div className='footer-div'>
        <img src={House} alt="house icon" />
          <p className='small-text'>Loyalbaze is almost here.</p>
        </div>
        <div className='footer-div'>
          <img src={Phone} alt="house icon" />
          <p className='small-text'>+234 903 618 9485</p>
        </div>
      </footer>
    </div>
  )
}
