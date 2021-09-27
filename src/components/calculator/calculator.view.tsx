import React from 'react';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import CalculatorButtons from './calculator-buttons.component';

const useStyles = makeStyles({
  calculatorBody: {
    backgroundColor: '#e8e8e8',
    height: '30rem',
    width: '25rem',
    marginTop: '5rem',
    padding: '0.5rem',
  },
  calculatorScreen: {
    backgroundColor: 'white',
    height: '5rem',
    margin: '0.5rem 0 1rem 0',
    width: '100%',
  },
});

const Calculator: React.FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.calculatorBody} border={1} borderColor="primary.main" borderRadius={1}>
      <Box className={styles.calculatorScreen} border={1} borderColor="primary.main" borderRadius={1} />
      <CalculatorButtons />
    </Box>
  );
};

export default Calculator;
