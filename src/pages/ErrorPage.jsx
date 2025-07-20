
import { Link } from "react-router";
import errorImg from "../assets/error.png";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
 
      <img src={errorImg} alt="" />
      <p className="text-gray-400 mt-2 md:text-3xl">
        <Link to="/" className=" ">
          <button className="btn bg-blue-700 text-xl hover:bg-blue-800 text-white">
            Back to Home <FaHome></FaHome>{" "}
          </button>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
