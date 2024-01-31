import { Link } from 'react-router-dom';
import Anchor from '../components/buttons/Anchor';
import cuteCat from '../assets/app-images/404-error-with-a-cute-cat.svg';
function PageNotFound() {
  return (
    <div className="bg-secondary h-screen flex justify-center w-full">
      <div>
        <h3 className="text-red-400 text-4xl font-semibold mt-32">OOPS... Page Not Found</h3>
        <img src={cuteCat} alt="page not found with a cute cat" />
        <Link to="/">
          <Anchor href="" className="bg-primary px-3 py-2 mt-10 mx-auto block text-white text-3xl w-fit rounded-lg">
            Go To HomePage
          </Anchor>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
