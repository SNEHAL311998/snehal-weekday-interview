import { Button } from '@mui/material';
import styles from './CustomButton.module.css'


const CustomButton = ({onClick, children}) => {
  return (
    <Button variant="contained" onClick={onClick} className={styles.button}>
      {children}
    </Button>
  );
}

export default CustomButton