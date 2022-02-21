import {
  LinearProgress,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Box
} from "@material-ui/core";

const ProgressBar = () => {
  const grey = "#f5f5f5";
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff0000"
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
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Box width="100%"  mr={1}>
          <LinearProgress  variant="determinate" value={100} />
        </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default ProgressBar;