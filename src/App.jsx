import React, { useState } from "react";

function App() {
  // Initial list of names
  const names = ["Lakshmi", "Ramya", "Manasa", "Yamini", "Niharika", "Rajesh"];
  
  const [search, setSearch] = useState("");

  // Filter names dynamically
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Experiment 8: Search Filter Example</h1>

      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li
              key={index}
              style={{
                margin: "8px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                width: "200px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
               {name}
            </li>
          ))
        ) : (
          <p style={{ color: "red" }}>No matches found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
