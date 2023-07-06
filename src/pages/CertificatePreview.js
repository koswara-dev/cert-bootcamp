import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CertificatePreview = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  
  // Lakukan logika untuk mendapatkan data user berdasarkan ID user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://lms.juaracoding.com:8080/api/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        // toast.error("Error fetching users");
        console.log("Error fetching user");
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <div>
      <h2>Preview Certificate</h2>
      <p>User ID: {user.ID}</p>
      <p>Full Name: {user.name}</p>
      <p>Address: {user.address}</p>
      {/* Tampilkan data user sesuai dengan ID user */}
    </div>
  );
};

export default CertificatePreview;
