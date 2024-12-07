import { QueryResult } from "mysql2";

export type DataFormDBType = {
  idOffer: string;
  title: string;
  description: string;
  imageUrl: string;
};
export type CreateOfferType = {
  title: string;
  description: string;
  image: File | string;
};

export type UpdateOfferType = {
  id: string;
} & CreateOfferType;

export type TableRowProps = {
  image: string;
  name: string;
  description: string;
  id: string;
};

export type OfferStateErrorType = {
  [key: string]: string;
  title: string;
  description: string;
  image: string;
};

export type GetOfferQuery = DataFormDBType[] | QueryResult;
export type GetSingleOffer = DataFormDBType[] | undefined | QueryResult;
