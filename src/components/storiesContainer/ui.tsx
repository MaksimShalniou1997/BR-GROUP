import { useEffect, useState } from "react";
import { Story } from "../story";
import { WithLink } from "../withLink";
import { Button } from "../button";
import { getStoryIds, useStyles, interval } from ".";

export const StoriesContainer = () => {
  const classes = useStyles();

  const [storyIds, setStoryIds] = useState<number[]>([]);

  const updateStoryIds = async () => {
    setStoryIds(await getStoryIds());
  };

  useEffect(() => {
    updateStoryIds();
    const updatingInterval = setInterval(() => {
      updateStoryIds();
    }, interval);
    return () => clearInterval(updatingInterval);
  }, []);

  return (
    <>
      <Button onClick={updateStoryIds} text="Update data" />
      <div className={classes.storyWrapper}>
        {storyIds.map((id: number) => (
          <WithLink link={`story/${id}`} key={id}>
            <Story id={id} isList />
          </WithLink>
        ))}
      </div>
    </>
  );
};
