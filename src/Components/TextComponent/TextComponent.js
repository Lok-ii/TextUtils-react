import React, { useEffect, useState } from "react";
import { useReducer, useRef } from "react";
import "./textcomponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextComponent = () => {
  const textRef = useRef(null);
  const [disbled, setDisabled] = useState(true);

  const notify = (type, value) => {
    if (type === "UPPERCASE" || type === "LOWERCASE" || type === "COPY") {
      toast.success(value, {
        position: "top-left",
      });
    } else if (type === "CLEARED") {
      toast.error(value, {
        position: "top-left",
      });
    }else{
        toast.info(value, {
      position: "top-left",
    });
    }

    
  };
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
  function checkDisabled() {
    if (state == "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  useEffect(() => {
    checkDisabled();
  }, [state]);
  return (
    <div className="textComponent">
      <ToastContainer />
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
            checkDisabled();
          }}
          id="box"
          value={state}
        ></textarea>
      </div>
      <div className="btnContainer">
        <button
          className="upper"
          disabled={disbled}
          onClick={() => {
            dispatch("UPPERCASE");
            notify("UPPERCASE", "CONVERTED TO UPPERCASE!");
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className="lower"
          disabled={disbled}
          onClick={() => {
            dispatch("LOWERCASE");
            notify("LOWERCASE", "converted to lowercase!");
          }}
        >
          Convert to Lowercase
        </button>
        <button
          className="text"
          disabled={disbled}
          onClick={() => {
            dispatch("CLEAR");
            notify("CLEARED", "Text has been cleared!");
          }}
        >
          Clear Text
        </button>
        <button
          className="copy"
          disabled={disbled}
          onClick={() => {
            dispatch("COPY");
            notify("COPY", "Successfully copied!");
          }}
        >
          Copy to Clipboard
        </button>
        <button
          className="remove"
          disabled={disbled}
          onClick={() => {dispatch("REMOVE")
        notify("REMOVE", "Removed extra spaces!")}}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="textDetailsContainer">
        <h1 className="summaryHead">Summary of your text : </h1>

        <p className="words">
          Number of words:{" "}
          {state.split(/\s+/).filter((word) => word !== "").length}
        </p>
        <p className="characters">Number of characters: {state.length}</p>
        <p className="time">
          Reading Time:{" "}
          {(
            0.008 * state.split(" ").filter((e) => e.length !== 0).length
          ).toFixed(3)}{" "}
          Minutes
        </p>
      </div>

      <div className="previewContainer">
        <h2 className="previewTitle">Preview Document</h2>
        <textarea
          name="previewBox"
          id="previewBox"
          value={state}
          onKeyUp={() => alert("Cannot Edit Preview Document")}
        ></textarea>
      </div>
    </div>
  );
};

export default TextComponent;
