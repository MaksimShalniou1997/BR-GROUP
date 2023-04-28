import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.info.main,
    borderRadius: 20,
    color: "#FFFFFF",
    margin: "20px 0 10px 20px",
    height: 50,
    "&:hover": {
      backgroundColor: theme.palette.info.main,
      opacity: 0.9,
    },
  },
}));
