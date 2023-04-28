import { makeStyles } from "@material-ui/core";
import { ICommentStyles } from "./";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "0 10px",
    border: "2px solid #841CE3",
    padding: 10,
    borderRadius: 20,
    cursor: ({ clickable }: ICommentStyles) =>
      clickable ? "pointer" : "default",
  },
  icon: {
    color: "#841CE3",
  },
  kids: {
    display: ({ visibleKids }: ICommentStyles) =>
      visibleKids ? "flex" : "none !important",
  },
});
