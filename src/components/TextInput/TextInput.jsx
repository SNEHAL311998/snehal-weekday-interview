import React from "react";
import "./TextInput.module.css";
import styles from "./TextInput.module.css";

const TextInput = ({ value = "", placeholder = "", onChange }) => {
  return (
    <div style={{ width: "100%" }}>
      <label className={styles.label}>{value ? placeholder : ""}</label>
      <input
        className={styles.textInputField}
        onChange={(e) => onChange(e.target.value, e)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
