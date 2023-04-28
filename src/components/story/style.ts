import { makeStyles } from "@material-ui/core";
import { IStoryStyles } from "./";

export const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${theme.palette.info.main}`,
    margin: 20,
    padding: 20,
    borderRadius: 20,
    "&:hover": {
      backgroundColor: ({ isList }: IStoryStyles) =>
        isList ? "rgba(33, 150, 243, 0.5)" : "none",
    },
  },
  dataWrapper: {
    display: "flex",
    gap: "10px 5px",
    marginTop: 10,
  },
}));
