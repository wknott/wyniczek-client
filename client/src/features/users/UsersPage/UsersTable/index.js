import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../common/Loading";
import { Table, TableCell, TableContainer, TableHeader, TableRow } from "../../../../common/Table";
import { compareObjects } from "../../../../logic/utilities";
import { fetchUsers, selectLoading, selectUsers } from "../../usersSlice";

const UsersTable = ({ gameId }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  const filteredUsers = [...users].filter(user => user.numberOfResults > 0);
  const sortedUsers = [...filteredUsers].sort(compareObjects("numberOfResults", "desc"));

  useEffect(() => {
    dispatch(fetchUsers(gameId))
    //eslint-disable-next-line
  }, []);


  return loading ?
    (
      <Loading message="Trwa ładowanie danych, proszę czekać…" />
    ) :
    (
      <TableContainer>
        <Table className={"table"} responsive striped bordered hover>
          <thead>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>Nazwa</TableHeader>
              <TableHeader>Liczba wyników</TableHeader>
              <TableHeader>Liczba zwycięstw</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sortedUsers !== [] ? (
              sortedUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableHeader className={"tableHeader"}>{index + 1}</TableHeader>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.numberOfResults}</TableCell>
                  <TableCell>{user.numberOfWins}</TableCell>
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
