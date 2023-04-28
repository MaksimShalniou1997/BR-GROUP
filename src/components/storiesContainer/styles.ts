import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  storyWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > a": {
      width: "100%",
    },
  },
});
