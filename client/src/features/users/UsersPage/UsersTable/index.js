import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableCell, TableContainer, TableHeader, TableRow } from "../../../../common/Table";
import { compareObjects } from "../../../../logic/utilities";
import { fetchUsers, selectUsers } from "../../usersSlice";

function UsersTable() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const sortedUsers = [...users].sort(compareObjects("numberOfResults", "desc"));

  useEffect(() => {
    dispatch(fetchUsers())
    //eslint-disable-next-line
  }, []);

  return (
    <TableContainer>
      <Table className={"table"} responsive striped bordered hover>
        <thead>
          <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Nazwa</TableHeader>
            <TableHeader>Liczba wyników</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedUsers !== [] ? (
            sortedUsers.map((user, index) => (
              <TableRow key={index}>
                <TableHeader className={"tableHeader"}>{index + 1}</TableHeader>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.numberOfResults}</TableCell>
              </TableRow>
            ))
          ) : (
              <></>
            )}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
