import { StoriesContainer } from "../../components/storiesContainer";
import { useStyles } from ".";

export const StoriesPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <StoriesContainer />
    </div>
  );
};
