import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Story } from "../../components/story";
import { useStyles } from "./";

export const StoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const classes = useStyles();

  const handleClickBackBtn = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className={classes.container}>
      <Button onClick={handleClickBackBtn} text="Back" />
      <Story id={Number(id)} />
    </div>
  );
};
