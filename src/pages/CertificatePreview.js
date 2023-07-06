import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import TemplateCertificate from "../assets/images/sertifikat-depan.png";

const CertificatePreview = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  const numberCert = user.number_cert;

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

  document.title = `Certificate - ${user.name}`;

  return (
    <div className="relative">
      <img
        src={TemplateCertificate}
        alt="Template Certificate"
        className="w-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-600 text-xl text-center">
        <p className="mb-2 text-6xl font-display pl-10 -mr-40">{user.name}</p>
        <p className="mb-2 pl-10 -mr-40">Asal Sekolah: {user.address}</p>
        <p className="mb-2 pl-10 -mr-40">Program Merdeka Belajar: {user.course}</p>
        <div className="w-1/2 float-right -mr-96">
          <QRCode value={numberCert} size={96} />
        </div>
        {/* Tambahkan informasi lainnya sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default CertificatePreview;
