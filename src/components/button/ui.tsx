import { Button as MuiButton } from "@material-ui/core";
import { useStyles, IButtonProps } from "./";

export const Button = ({ onClick, text }: IButtonProps) => {
  const classes = useStyles();

  return (
    <MuiButton className={classes.button} variant="outlined" onClick={onClick}>
      {text}
    </MuiButton>
  );
};
