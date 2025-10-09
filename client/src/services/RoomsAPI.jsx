import React, { useState, useEffect } from "react";

    const fetchRooms = async () => {
      const url = "http://localhost:3000/";
      const response = await fetch(url);
      const json = await response.json();

      return json;
    };

    console.log("Fetching room data...")
    fetchRooms();


export default {fetchRooms};