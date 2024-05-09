import { Button } from "@mui/material";
import styles from "./CustomButton.module.css";

const CustomButton = ({ onClick, children, isRefer = false }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={isRefer ? styles.referButton : styles.button}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
