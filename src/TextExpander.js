import { useState } from "react";
import "./output.css";
import PropTypes from "prop-types";

export default function TextExpander({
  children,
  maximumWords,
  showButtonText,
  HideButtonText,
}) {
  const textSlice =
    children.split(" ").splice(0, maximumWords).join(" ") + "...";
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex gap-1">
      <h1>{!show ? `${textSlice}` : children}</h1>
      <button
        className="text-sky-600 cursor-pointer hover:text-sky-300"
        onClick={() => setShow(!show)}
      >
        {show ? HideButtonText : showButtonText}
      </button>
    </div>
  );
}

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  maximumWords: PropTypes.number,
  showButtonText: PropTypes.string,
  HideButtonText: PropTypes.string,
};
TextExpander.defaultProps = {
  showButtonText: "Show More",
  HideButtonText: "Show Less",
};
