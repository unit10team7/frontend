export type CardProps = {
  id?: number;
  like?: number; // 좋아요
  title?: string;
  image?: string;
  className?: string;
};

export type Front = {
  readonly id?: number;
  readonly like?: number;
  readonly title?: string;
  readonly image?: any;
};
