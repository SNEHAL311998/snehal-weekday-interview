import { Autocomplete } from "@mui/material";
import styles from "./Dropdown.module.css";
import IconTag from "../IconTag/IconTag";

const Dropdown = ({
  value,
  options = [],
  onDropdownChange,
  isMultiple,
  placeholder,
}) => {
  const label = isMultiple
    ? value.length
      ? ""
      : placeholder
    : value
    ? ""
    : placeholder;
  return (
    <div style={{ width: "100%" }}>
      <label className={styles.dropdownLabel}>{label ? "" : placeholder}</label>
      <Autocomplete
        sx={{ width: "100%" }}
        value={value}
        options={options}
        onChange={(e, value) => onDropdownChange(value)}
        multiple={isMultiple}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <div key={`tag-${index + 1}`} className={styles.tag}>
              <div>{option}</div>
              <IconTag
                name="cancel"
                className={styles.removeIcon}
                onClick={getTagProps({ index }).onDelete}
              />
            </div>
          ))
        }
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={styles.dropdownWrapper}>
            <div className={styles.dropdownInputWrapper}>
              {isMultiple &&
                value?.map((option, index) => (
                  <div
                    key={`tag-${index + 1}`}
                    className={`${styles.tag} ${styles.alignCenter}`}
                  >
                    <div>{option}</div>
                    <IconTag
                      name="cancel"
                      className={styles.removeIcon}
                      onClick={() => {
                        const valueCopy = [...value];
                        valueCopy.splice(index, 1);
                        onDropdownChange(valueCopy);
                      }}
                    />
                  </div>
                ))}
              <input
                type="text"
                {...params.inputProps}
                placeholder={label}
                className={styles.dropdownInput}
              />
            </div>
            <div className={`${styles.endIconWrapper} ${styles.alignCenter}`}>
              {!label && (
                <IconTag
                  name={"cancel"}
                  onClick={() => onDropdownChange(isMultiple ? [] : "")}
                  className={styles.dropdownIcon}
                />
              )}
              <hr style={{ height: "100%" }} />
              <IconTag
                name={"down"}
                {...params.InputProps}
                className={styles.dropdownIcon}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Dropdown;
