import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./user.css";

const UserPage = (props) => {
  const { userId } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  console.log("🚀 ~ UserPage ~ userId:", userId);
    // http://localhost:3000/user/101

  const getUserData = (uid) => {
    setIsLoading(true);
    // For testing purpose, we are resetting the user array
    setUserData({});
    fetch(`http://localhost:3000/users/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUserData(data);
      })
      .catch((error) => {
        console.log("getUserData error:", error);
        setIsLoading(false);
        setError(error.message);
      });
  };
  useEffect(() => {
    getUserData(userId);
  }, [userId]);

  return(
    <div className="user-page">
        <Link to="/users">Go Back</Link>
        {isLoading && <div>Loading...</div>}
        {!isLoading && error && <div>{error}</div>}
        {!isLoading && !error && userData && (
            <div>
                <h2>
                    {userData.name} (#{userData.id})
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Age</th>
                            <td>{userData.age}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>{userData.dob}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{userData.phone}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{userData.adderss}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{userData.city}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{userData.state}</td>
                        </tr>
                        <tr>
                            <th>Zip</th>
                            <td>{userData.zip}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )}
    </div>
  );
};

export default UserPage;
