import { Card } from "../Card/Card";
import "./cards.scss";
import { useEffect, useState } from "react";
import { getPictures } from "../../api";
import { ICard } from "../../models";
import { Pagination } from "../Pagination/Pagination";

export const Cards = () => {
  const [cardList, setCardList] = useState<ICard[]>([]);

  useEffect(() => {
    getPictures()
      .then((res) => setCardList(res.data))
      .catch(() => console.log("Failed api access"));
  });

  // pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(12);

  const lastCardOnPageIndex = currentPage * cardsPerPage;
  const firstCardOnPageIndex = lastCardOnPageIndex - cardsPerPage;
  const cardListPerPage = cardList.slice(
    firstCardOnPageIndex,
    lastCardOnPageIndex
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(cardList.length / cardsPerPage))
      setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <div className="cards">
        {cardListPerPage.map((dataCard) => (
          <Card
            albumId={dataCard.albumId}
            id={dataCard.id}
            title={dataCard.title}
            url={dataCard.url}
            thumbnailUrl={dataCard.thumbnailUrl}
          />
        ))}
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cardList.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};
