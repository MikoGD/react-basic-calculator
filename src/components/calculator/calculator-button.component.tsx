import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import makeStyles from '@mui/styles/makeStyles';

interface CalculatorButtonProps {
  label: string | number;
  onClick: (label: string | number) => void;
}

const useStyles = makeStyles({
  buttonContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onClick }) => {
  const styles = useStyles();
  return (
    <Box className={styles.buttonContainer}>
      <Button className={styles.button} variant="outlined" onClick={() => onClick(label)}>
        {label}
      </Button>
    </Box>
  );
};

export default CalculatorButton;
