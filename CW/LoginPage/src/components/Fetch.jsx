import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/users.json");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Fetched Users</h2>
      <ul style={{ listStyle: "none" }}>
        {data.map((user, index) => (
          <li key={index}>{user.username} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
