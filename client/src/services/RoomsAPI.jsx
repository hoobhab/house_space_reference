import React, { useState, useEffect } from "react";

const getAllRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
    const fetchRooms = async () => {
      const url = "http://localhost:3000/";
      const response = await fetch(url);
      const json = await response.json();

      setRooms(json);
    };

    fetchRooms();
  }, []);
}

export default {getAllRooms};