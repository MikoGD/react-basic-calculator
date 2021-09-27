import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import makeStyles from '@mui/styles/makeStyles';
import CalculatorButton from './calculator-button.component';

const useStyles = makeStyles({
  numberButton: {
    height: '5rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    height: '5rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CalculatorButtons: React.FC = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={1} height="15rem">
      <Grid item xs={8}>
        <Grid container spacing={1}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index, arr) => {
            if (index === arr.length - 1) {
              return (
                <Grid item xs={12} key={num} className={styles.numberButton}>
                  <CalculatorButton label={num} onClick={() => console.log(num)} />
                </Grid>
              );
            }
            return (
              <Grid item xs={4} key={num} className={styles.numberButton}>
                <CalculatorButton label={num} onClick={() => console.log(num)} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={1}>
          {['+', '-', '/', 'x'].map((operand) => (
            <Grid item xs={12} key={operand} className={styles.plusButton}>
              <CalculatorButton label={operand} onClick={() => console.log(operand)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CalculatorButtons;
