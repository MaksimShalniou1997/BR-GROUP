import { MouseEvent, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BlockIcon from "@mui/icons-material/Block";
import { Comments } from "../comments";
import { useStyles, ICommentProps } from "./";

export const Comment = ({ comment, className }: ICommentProps) => {
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);
  const stylesProps = {
    clickable: !!comment.kids,
    visibleKids: isOpenComments,
  };
  const classes = useStyles(stylesProps);

  const handleClickComment = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpenComments(!isOpenComments);
  };

  return (
    <div
      className={`${className} ${classes.container}`}
      onClick={handleClickComment}
    >
      {comment.kids && !isOpenComments && <ArrowOutwardIcon color="info" />}
      {comment.kids && isOpenComments && <ArrowDownwardIcon color="info" />}
      {!comment.kids && <BlockIcon color="info" />}
      <p dangerouslySetInnerHTML={{ __html: comment?.text }} />
      {comment?.kids && (
        <Comments commentsIds={comment?.kids} className={classes.kids} />
      )}
    </div>
  );
};
