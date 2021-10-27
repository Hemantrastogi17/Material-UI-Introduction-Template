// import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { useThemeProps } from "@mui/material";
// import { CardGiftcardOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon:{
        marginRight:'20px',

    },
    button:{
        marginTop: '20px',
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardGrid:{
      padding: '20px 0' 

    },
    cardMedia:{
        paddingTop:'56.25%',
    },
    cardContent:{
        flexGrow: 1,

    },
    footer:{
        padding:'50px 0',
        backgroundColor: theme.palette.background.paper,
    }
}))

export default useStyles;