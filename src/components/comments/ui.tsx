import { useEffect, useState } from "react";
import { Comment, IComment } from "../comment";
import { useStyles, getComments, ICommentsProps } from "./";

export const Comments = ({ commentsIds, className }: ICommentsProps) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const data = await getComments(commentsIds);
      setComments(data);
    })();
  }, [commentsIds]);

  return (
    <div className={classes.container}>
      {comments?.map((comment: IComment, index) => (
        <Comment
          key={`${comment.text} ${index}`}
          comment={comment}
          className={className}
        />
      ))}
    </div>
  );
};
