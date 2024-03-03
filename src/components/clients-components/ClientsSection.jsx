import React from "react";
import Card from "./Card.jsx";
import membersList from "../../membersList.js";
import advisorsList from "../../advisorsList.js";

function createCard(member) {
  document.title = "BTCG – Meet The Team";

  return (
    <Card
      key={member.id}
      fullName={member.fullName}
      title={member.title}
      imageName={member.imageName}
      bio={member.bio}
    />
  );
}

function CardsSection() {
  return (
    <div>
    </div>
  );
}

export default CardsSection;
