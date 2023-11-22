export type ICard = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type IPagination = {
  cardsPerPage: number;
  totalCards: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
};
