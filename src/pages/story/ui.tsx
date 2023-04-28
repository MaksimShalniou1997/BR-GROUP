import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Story } from "../../components/story";
import { useStyles } from "./";

export const StoryPage = () => {
  const { id } = useParams();
  const [updateComments, setUpdateComments] = useState<boolean>(false);
  const navigate = useNavigate();

  const classes = useStyles();

  const handleClickBackBtn = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  const handleClickUpdateCommentsBtn = () => {
    setUpdateComments(true);
  };

  return (
    <div className={classes.container}>
      <Button onClick={handleClickBackBtn} text="Back" />
      <Button onClick={handleClickUpdateCommentsBtn} text="Update comments" />
      <Story
        id={Number(id)}
        updateComments={updateComments}
        setUpdateComments={setUpdateComments}
      />
    </div>
  );
};
