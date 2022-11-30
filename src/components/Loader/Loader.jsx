import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="loading-indicator"
        strokeWidth="3"
        secondaryColor="#d17deb"
      />
    </LoaderWrapper>
  );
};

export default Loader;
