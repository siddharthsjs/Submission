import React from "react";

export default function Scientists({ data }) {
  // 🔹 Group scientists by profession
  const grouped = data.reduce((acc, person) => {
    if (!acc[person.profession]) acc[person.profession] = [];
    acc[person.profession].push(person);
    return acc;
  }, {});

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {Object.keys(grouped).map((profession) => (
        <div key={profession} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "28px",
              color: "#333",
              marginBottom: "20px",
              textDecoration: "underline",
            }}
          >
          {profession}s ({grouped[profession].length})
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {grouped[profession].map((person, index) => (
              <div
                key={index}
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "12px",
                  padding: "15px",
                  width: "180px",
                  textAlign: "center",
                  boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "20px", margin: "10px 0 5px 0" }}>
                  {person.name}
                </h3>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  {person.profession}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
