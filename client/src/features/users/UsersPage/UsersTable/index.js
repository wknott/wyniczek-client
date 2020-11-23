import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableCell, TableContainer, TableHeader, TableRow } from "../../../../common/Table";
import { compareObjects } from "../../../../logic/utilities";
import { theme } from "../../../../theme";
import { fetchUsers, selectLoading, selectUsers } from "../../usersSlice";

const UsersTable = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  const sortedUsers = [...users].sort(compareObjects("numberOfResults", "desc"));

  useEffect(() => {
    dispatch(fetchUsers())
    //eslint-disable-next-line
  }, []);


  return loading ?
    (
      <ReactLoading color={theme.colors.windsor} />
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
