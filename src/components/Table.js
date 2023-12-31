import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Full Name",
  "Gender",
  "School",
  "Course",
  "Cert Number",
  "",
];

const classes = "p-3 border-b border-blue-gray-50";

const Table = ({ users, currentPage, totalPages, handlePageChange }) => {
  return (
    <>
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.ID}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.gender}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.address}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.course}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.number_cert}
                  </Typography>
                </td>
                <td className={classes}>
                  <Link to={`/preview/${user.ID}`}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-medium"
                    >
                      Download
                    </Typography>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="my-4">
        {Array.from({ length: totalPages + 3 }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mr-2 px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Table;
