import { Card } from "../Card/Card";
import { data } from "../../data/data";
import "./cards.scss";
import { useEffect, useState } from "react";
import { getPictures } from "../../api";
import { ICard } from "../../models";

export const Cards = () => {
  const [cardList, setCardList] = useState<ICard[]>([]);

  useEffect(() => {
    getPictures()
      .then((res) => setCardList(res.data))
      .catch(() => console.log("Failed api access"));
  });

  return (
    <div className="cards">
      {cardList.map((dataCard) => (
        <Card
          albumId={dataCard.albumId}
          id={dataCard.id}
          title={dataCard.title}
          url={dataCard.url}
          thumbnailUrl={dataCard.thumbnailUrl}
        />
      ))}
    </div>
  );
};
