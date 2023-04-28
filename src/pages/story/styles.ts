import { makeStyles } from "@material-ui/core";
import hackerBackground from "../../assets/images/hackerBackground.webp";
import mobileHackerBackground from "../../assets/images/mobileHackerBackground.webp";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${hackerBackground})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileHackerBackground})`,
    },
  },
}));
