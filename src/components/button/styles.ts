import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    backgroundColor: "#841CE3",
    borderRadius: 20,
    color: "#FFFFFF",
    margin: "20px 0 10px 20px",
    height: 50,
    "&:hover": {
      backgroundColor: "#841CE3",
      opacity: 0.9,
    },
  },
});
