import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { FaSearch } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";

const UserBootcamp = () => {
  const [users, setUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://lms.juaracoding.com:8080/api/users", {
        params: {
          page: currentPage,
        },
      });
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      // toast.error("Error fetching users");
      console.log("Error fetching users");
    }
  };

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   setCurrentPage(1);
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleSearchParam = async () => {
    try {
      const response = await axios.get('https://lms.juaracoding.com:8080/api/users', {
        params: {
          search: searchQuery.toLocaleLowerCase(),
        },
      });
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="justify-center my-4 mx-10">
      <Typography variant="h3">Certificate JuaraCoding</Typography>
      <div className="my-2 relative flex w-full flex-wrap items-stretch">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-300 bg-transparent rounded text-base flex items-center justify-center w-8 pl-3 py-3">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Cari Nama Peserta"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-2 py-2 pl-10 border border-gray-300 rounded focus:outline-none focus:border focus:border-gray-400"
        />
      </div>
      <Button className="mb-2" onClick={handleSearchParam}>Cari</Button>
      <Table
        users={users}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default UserBootcamp;
