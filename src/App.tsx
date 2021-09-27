import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Calculator from './components/calculator/calculator.component';

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

//       <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Box sx={boxStyle}>
//           <TextField variant="outlined" fullWidth sx={{ backgroundColor: 'white', mt: '0.5rem', mb: '1rem' }} />
//           <Grid container spacing={1}>
//             <Grid item xs={8}>
//               <Grid container spacing={1}>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
//                   <Grid
//                     item
//                     xs={4}
//                     key={num}
//                     sx={{
//                       height: '5rem',
//                       width: '5rem',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <CalculatorButton label={num} onClick={() => console.log(num)} />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//             <Grid item xs={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   width: '100%',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   p: '0.2rem',
//                 }}
//               >
//                 <Box
//                   sx={{
//                     backgroundColor: 'white',
//                     height: '100%',
//                     width: '100%',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     p: '0.2rem',
//                   }}
//                 >
//                   <Typography>+</Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default App;
