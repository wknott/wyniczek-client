import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getResults, getUser } from "../../proxy/api";
import { getCurrentUserId } from "../../helpers/auth-header";

const UserStats = () => {
  const [results, setResults] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    (async () => {
      setResults(await getResults());
      setUser(await getUser(getCurrentUserId()));
      setLoading(false);
    })();

  }, []);
  return (
    <div>
      {loading ? <><Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" /> </> : <p>{user.name}</p>
      }
    </div >
  )
}
export default UserStats;