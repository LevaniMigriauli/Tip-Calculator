import "../../CSS/mixins/media-queries.scss"
import "./Wrapper.scss";


const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
