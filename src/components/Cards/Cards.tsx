import { Card } from "../Card/Card";
import { data } from "../../data/data";
import "./cards.scss";

type ICards = {};

export const Cards: React.FC<ICards> = () => {
  return (
    <div className="cards">
      {data.map((dataCard) => (
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
