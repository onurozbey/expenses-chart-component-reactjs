// Styles
import "./index.css";
// Image
import logo from "../../images/logo.svg";

const index = () => {
  return (
    <article
      id="chart-top"
      className="header-bg p-8 rounded-2xl shadow flex item-center justify-between"
    >
      <h2 className="text-white font-bold text-3xl">
        <span className="block text-base font-normal">My balance</span> $921.48
      </h2>
      <img src={logo} alt="" />
    </article>
  );
};

export default index;
