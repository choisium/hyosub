import { createMuiTheme } from '@material-ui/core/styles';

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const hyosub_theme = createMuiTheme({
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButton: {
      contained: {
        fontWeight: 700,
        height: 41,
        boxShadow: '0 1px 4px rgba(0, 0, 0, .6)',
        '&:hover': {
          color: 'white',
        },
      },
      outlined: {
        boxShadow: '0.7px 0.7px 5.4px 0.6px rgba(119, 120, 124, 0.18) !important',
      },
    },
    MuiCard: {
      root: {
        borderRadius: 0,
        boxShadow: '-0.4px 0.9px 44.1px 4.9px rgba(79, 99, 181, 0.08)',
        padding: 0,
      },
    },
    MuiPaper: {
      root: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: 0,
      }
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '500px',
        margin: '10px auto !important'
      },
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'center',
      }
    },
    MuiTabs: {
      indicator: {
        marginBottom: '45px',
        height: '1px'
      }
    },
    MuiTypography: {
      root: {
        fontFamily: 'Nunito Sans',
        fontWeight: 100,
        color: '#000000',
      }
    },
    MuiOutlinedInput: {
      root: {
      },
      input: {
        padding: '8px 14px'
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 10px) scale(1)',
        fontSize: 14,
      }
    },
    MuitFormLabel: {
      root: {
        fontSize: 12,
      }
    },
    MuiInputBase: {
      root: {
      }
    }
  },
  palette: {
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#636363',
      hint: '#878585',
      dark: '#424242',
    },
    background: {
      default: '#f8f9fd',
    },
    error: {
      main: '#e86969',
    },
    help: {
      main: '#f4a565',
      hover: '#e58334',
    },
    wallet: {
      pending: '#fb8a8a',
      active: '#5aca7a',
      denied: '#7f7e7e',
      expired: '#7f7e7e',
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
    ],
    title: {
      fontWeight: 500,
      fontFamily: "'Roboto', sans-serif",
      fontSize: 20,
      color: '#3d3d3d',
    },
    subheading: {
      fontFamily: "'Roboto', sans-serif", 
      fontSize: 18,
    },
    display2: {
      fontSize: 45,
      fontWeight: 300,
      color: '#636363',
    },
    display1: {
      fontSize: 24,
      fontWeight: 600,
      color: '#636363',
    },
    body2: {
      fontWeight: 700,
    },
    body1: {
      color:'#636363',
      fontWeight:600,
    },
    caption: {
      color: '#636363',
    },
  },


});

export default hyosub_theme;