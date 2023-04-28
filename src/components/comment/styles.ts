import { makeStyles } from "@material-ui/core";
import { ICommentStyles } from "./";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "0 10px",
    border: `1px solid ${theme.palette.info.main}`,
    padding: 10,
    borderRadius: 20,
    cursor: ({ clickable }: ICommentStyles) =>
      clickable ? "pointer" : "default",
  },
  kids: {
    display: ({ visibleKids }: ICommentStyles) =>
      visibleKids ? "flex" : "none !important",
  },
}));
