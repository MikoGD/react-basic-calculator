import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import CalculatorButton from './calculator-button.component';

interface CalculatorButtonsProps {
  updateEquation: (element?: string | number) => void;
  runEquation: () => void;
}

const useStyles = makeStyles({
  numberButton: {
    height: '5rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operandButton: {
    height: '5rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ updateEquation, runEquation }) => {
  const styles = useStyles();

  return (
    <Grid container spacing={1} height="15rem">
      {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'del', 'enter', 'x'].map((label, index, arr) => {
        if (label === 'enter') {
          return (
            <Grid item xs={3} key={label} className={styles.numberButton}>
              <CalculatorButton label={label} onClick={() => runEquation()} />
            </Grid>
          );
        }

        if (label === 'del') {
          return (
            <Grid item xs={3} key={label} className={styles.numberButton}>
              <CalculatorButton label={label} onClick={() => updateEquation()} />
            </Grid>
          );
        }

        return (
          <Grid item xs={3} key={label} className={styles.numberButton}>
            <CalculatorButton label={label} onClick={() => updateEquation(label)} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CalculatorButtons;
