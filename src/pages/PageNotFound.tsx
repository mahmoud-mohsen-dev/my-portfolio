import { Link } from 'react-router-dom';
import Anchor from '../components/buttons/Anchor';

function PageNotFound() {
  return (
    <div className="bg-secondary h-screen flex justify-center w-full">
      <div>
        <h3 className="text-red-400 text-4xl font-semibold mt-32">Sorry Page Not Found</h3>
        <Link to="/">
          <Anchor href="" className="bg-primary px-3 py-2 mt-10 mx-auto block w-fit rounded-lg">
            HomePage
          </Anchor>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
