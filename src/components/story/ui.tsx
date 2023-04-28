import { useEffect, useState } from "react";
import { getLocaleDate, getStory, IStory, IStoryProps, useStyles } from ".";
import { Comments } from "../comments";

export const Story = ({
  id,
  isList,
  updateComments,
  setUpdateComments,
}: IStoryProps) => {
  const [story, setStory] = useState<IStory>();
  const classes = useStyles({ isList: !!isList });

  useEffect(() => {
    (async () => setStory(await getStory(id)))();
  }, [id]);

  useEffect(() => {
    if (updateComments) {
      (async () => {
        setStory(await getStory(id));
        if (setUpdateComments) {
          setUpdateComments(false);
        }
      })();
    }
  }, [id, setUpdateComments, updateComments]);

  return story ? (
    <div className={classes.container}>
      {!isList && (
        <div className={classes.dataWrapper}>
          <p>Url:</p>
          <a href={story.url}>{story.url}</a>
        </div>
      )}
      <div className={classes.dataWrapper}>
        <p>Title:</p>
        <p>{story.title}</p>
      </div>
      {isList && (
        <div className={classes.dataWrapper}>
          <p>Score:</p>
          <p>{story.score}</p>
        </div>
      )}
      <div className={classes.dataWrapper}>
        <p>Author:</p>
        <p>{story.by}</p>
      </div>
      <div className={classes.dataWrapper}>
        <p>Date:</p>
        <p>{getLocaleDate(story.time)}</p>
      </div>
      <div className={classes.dataWrapper}>
        <p>Number of comments:</p>
        <p>{story?.kids?.length || 0}</p>
      </div>
      {story?.kids?.length && !isList && (
        <div className={classes.dataWrapper}>
          <p>Comments:</p>
          <Comments commentsIds={story.kids} />
        </div>
      )}
    </div>
  ) : null;
};
