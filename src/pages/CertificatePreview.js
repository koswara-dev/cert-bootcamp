import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TemplateCertificate from "../assets/images/sertifikat-depan.png";

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
    <div className="relative">
      <img
        src={TemplateCertificate}
        alt="Template Certificate"
        className="w-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl text-center">
        <p className="mb-2">Nama: {user.name}</p>
        <p className="mb-2">Email: {user.email}</p>
        <p>Alamat: {user.address}</p>
        {/* Tambahkan informasi lainnya sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default CertificatePreview;
