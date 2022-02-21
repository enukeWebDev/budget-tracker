import {
  LinearProgress,
  Typography,
  ThemeProvider,
  createTheme,
  Box
} from "@material-ui/core";

const ProgressBar = (props) => {
  
  const grey = "#B3CDD1";
  const theme = createTheme({
    palette: {
      primary: {
        main:"#c0392b"
      }
    },
    overrides: {
      MuiLinearProgress: {
        root: {
          borderRadius: 4,
          height: 10
        },
        bar1Determinate: {
          borderRadius: 4
        },
        colorPrimary: {
          backgroundColor: grey
        }
      },
     
    }
  });
  console.log("value",props.value);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Box width="100%"  mr={1}>
          <LinearProgress  variant="determinate" value={props.value} />
        </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default ProgressBar;