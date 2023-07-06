import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { FaSearch } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

const UserBootcamp = () => {
  const [users, setusers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchusers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchusers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users", {
        params: {
          page: currentPage,
        },
      });
      setusers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      // toast.error("Error fetching users");
      console.log("Error fetching users");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center my-4 mx-10">
      <Typography variant="h2">Certificate JuaraCoding</Typography>
      <div className="my-2 relative flex w-full flex-wrap items-stretch">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-300 bg-transparent rounded text-base flex items-center justify-center w-8 pl-3 py-3">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Cari Nama Peserta"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border focus:border-gray-400"
        />
      </div>
      <Table
        users={filteredUsers}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default UserBootcamp;
