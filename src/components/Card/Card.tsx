import React from "react";
import { ICard } from "../../models";
import "./card.css";

//вот этот ICard в качестве пропса может не робить, проверить
export const Card: React.FC<ICard> = (ICard) => {
  return (
    <div className="card">
      <img src={ICard.thumbnailUrl} />
      <div className="card-description">
        <div className="card-description-text">{ICard.title}</div>
      </div>
    </div>
  );
};
