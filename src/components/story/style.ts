import { makeStyles } from "@material-ui/core";
import { IStoryStyles } from "./";

export const useStyles = makeStyles({
  container: {
    border: "2px solid #841CE3",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    "&:hover": {
      backgroundColor: ({ isList }: IStoryStyles) =>
        isList ? "rgba(132, 28, 227, 0.5)" : "none",
    },
  },
  dataWrapper: {
    display: "flex",
    gap: "10px 5px",
    marginTop: 10,
  },
});
