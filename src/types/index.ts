export type offerType = {
  title: string;
  description: string;
  image: File | string;
};

export type offerStateErrorType = {
  [key: string]: string;
  title: string;
  description: string;
  image: string;
};
