import React from "react";
import ClientsSection from "./clients-components/ClientsSection";
import ClientTitle from "./clients-components/ClientTitle";

function PastClientsPage() {
  return (
    <div className="PastClientsPage">
      <ClientTitle /> <ClientsSection />
    </div>
  );
}

export default PastClientsPage;
