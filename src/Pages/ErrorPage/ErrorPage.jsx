import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <>
        <div className="relative flex justify-center items-center text-3xl text-white font-extrabold ">
          <button className="absolute  ">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <Link to="/" className="mt-10">
              Go to home
            </Link>
          </button>
          <img width="100%" src="https://i.ibb.co/YLkyBbb/404.gif" />
        </div>
      </>
    );
};

export default ErrorPage;