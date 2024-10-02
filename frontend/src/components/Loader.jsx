import { VscLoading } from "react-icons/vsc";

const Loader = () => {
  return (
    <div className="loader">
      <VscLoading className="spinner" />
      Loading...
    </div>
  );
};

export default Loader;
