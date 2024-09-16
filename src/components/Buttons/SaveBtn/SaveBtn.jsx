import "./SaveBtn.css";
import { Modal } from "./Modal";
export const SaveBtn = () => {
  return (
    <>
      <label htmlFor="checkboxInput" className="bookmark" >
        <input type="checkbox" id="checkboxInput" data-bs-toggle="modal" data-bs-target="#saveModal" />
        <svg
          width="15"
          viewBox="0 0 50 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svgIcon"
        >
          <path
            d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
            stroke="black"
            strokeWidth={7}
          />
        </svg>
      </label>
      <Modal />
    </>
  );
};

