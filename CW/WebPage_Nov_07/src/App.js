import React from "react";
import Scientists from "./components/Scientists";

function App() {
  const persons = [
    {
      name: "Albert Einstein",
      profession: "Physicist",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    },
    {
      name: "Niels Bohr",
      profession: "Physicist",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg",
    },
    {
      name: "Marie Curie",
      profession: "Chemist",
      image: "https://npr.brightspotcdn.com/dims4/default/556be5e/2147483647/strip/true/crop/640x500+0+0/resize/1760x1376!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fbd%2F0f%2Fc4af7ffa40afb89965f96c59dd8b%2Fbio-curie-640x500.jpg",
    },
    {
      name: "Dmitri Mendeleev",
      profession: "Chemist",
      image: "https://tse4.mm.bing.net/th/id/OIP.D9OQDdEPwVwLHYAsAR0H2QHaI6?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Isaac Newton",
      profession: "Mathematician",
      image: "https://myblogpay.com/public/docs/53204e3d8671231f185d3bf22adbb596.jpeg",
    },
    {
      name: "Carl Gauss",
      profession: "Mathematician",
      image: "https://tse4.mm.bing.net/th/id/OIP.33l49S6pfjhv_BMm9TiKswHaKG?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "30px" }}>
        Famous Scientists ({persons.length})
      </h1>
      <Scientists data={persons} />
    </div>
  );
}

export default App;
