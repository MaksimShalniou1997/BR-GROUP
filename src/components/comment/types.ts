export type ICommentStyles = {
  clickable: boolean;
  visibleKids: boolean;
};

export type IComment = {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: string;
  kids?: number[];
};

export type ICommentProps = {
  comment: IComment;
  className?: string;
};
