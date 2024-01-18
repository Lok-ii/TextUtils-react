import React from "react";
import { useReducer, useRef } from "react";
import "./textcomponent.css";

const TextComponent = () => {
  const textRef = useRef(null);

  const textFunc = (state, action) => {
    switch (action) {
      case "UPPERCASE":
        return state.toUpperCase();
      case "CHANGE":
        return textRef.current.value;
      case "LOWERCASE":
        return state.toLowerCase();
      case "CLEAR":
        return "";
      case "COPY":
        navigator.clipboard.writeText(state);
        break;
      case "REMOVE":
        return state.split(/\s+/).join(" ");
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(textFunc, "");
  return (
    <div className="textComponent">
      <h1 className="heading">
        TextUtis - Word Counter, Charecter Counter, Remove Extra Space
      </h1>

      <div className="textarea">
        <label htmlFor="box">Enter Your Text Here:</label>
        <textarea
          className="inputField"
          ref={textRef}
          onChange={() => {
            dispatch("CHANGE");
          }}
          id="box"
          value={state}
        ></textarea>
      </div>
      <div className="btnContainer">
        <button className="upper" onClick={() => dispatch("UPPERCASE")}>
          Convert to Uppercase
        </button>
        <button className="lower" onClick={() => dispatch("LOWERCASE")}>
          Convert to Lowercase
        </button>
        <button className="text" onClick={() => dispatch("CLEAR")}>
          Clear Text
        </button>
        <button className="copy" onClick={() => dispatch("COPY")}>
          Copy to Clipboard
        </button>
        <button className="remove" onClick={() => dispatch("REMOVE")}>
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
};

export default TextComponent;
