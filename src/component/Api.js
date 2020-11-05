import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setData({
        users: result.data,
      });
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Api;
