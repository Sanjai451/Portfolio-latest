import { Link } from "react-router-dom";
import RESUME_LINK from "../Details/ResumeLink";

const ContactDetails = () => {
  return (
    <section className=" custom_details_display py-10 px-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center gap-4">
            <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
            Contact
            </Link>
            <a
            href= {RESUME_LINK}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
            Get Resume
            </a>
        </div>
    </section>

  );
};

export default ContactDetails;