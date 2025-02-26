import { Link } from "react-router-dom";
import { socialLinks } from "../Details/SocialLinks";
import { MOBILE_NUMBER } from "../Details/AboutData";

const  Footer = () => {
  return (
    <footer className=' my-10 footer font-poppins'>
      <hr className='mb-10 border-slate-200' />

      <div className='footer-container'>

        <div className='flex gap-3 justify-center items-center'>
          <a className="img_contact" href={`tel:+${MOBILE_NUMBER}`}>  <img src="https://e7.pngegg.com/pngimages/732/601/png-clipart-computer-icons-android-google-contacts-contact-rectangle-black-thumbnail.png" alt="Contact" /></a>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
