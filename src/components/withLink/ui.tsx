import { Link } from "react-router-dom";
import { useStyles, IWithLinkProps } from "./";

export const WithLink = ({ link, children }: IWithLinkProps) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={link}>
      {children}
    </Link>
  );
};
