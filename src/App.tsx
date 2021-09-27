import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Calculator from './components/calculator';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Calculator />
      </Container>
    </>
  );
};

export default App;
