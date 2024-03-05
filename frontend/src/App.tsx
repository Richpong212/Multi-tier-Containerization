import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("baseUrl", baseUrl);
  const [data, setData]: any = useState({});

  console.log("data", data);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3
        style={{
          color: "red",
        }}
      >
        ***{data.message}***
      </h3>
      <h1>Containerization Setup with Docker</h1>
      <p>
        Welcome to my containerization setup demonstration using Docker for a
        multi-tier application setup! In this tutorial, we'll walk through the
        steps to containerize an application using Docker, allowing for easy
        deployment and scalability.
      </p>
      <h2>Prerequisites</h2>
      <ul>
        <li>Basic understanding of Docker and containerization concepts</li>
        <li>Node.js and npm installed on your machine</li>
        <li>React application setup</li>
        <li>Node.js for backend application</li>
        <li>Patience and enthusiasm for learning!</li>
      </ul>
      <h2>Steps</h2>
      <ol>
        <li>Setting up the React Application</li>
        <li>Creating a Dockerfile for React</li>
        <li>Setting up the Node.js Application</li>
        <li>Creating a Dockerfile for Node.js</li>
        <li>Setting up PostgreSQL</li>
        <li>Creating a Dockerfile for PostgreSQL</li>
        <li>Setting up Memcached</li>
        <li>Creating a Dockerfile for Memcached</li>
        <li>Configuring Docker Compose</li>
        <li>Building and Running the Docker Containers</li>
      </ol>
      <p>
        That's it! You've successfully containerized your React application
        using Docker. Happy coding!
      </p>
    </div>
  );
};

export default App;
