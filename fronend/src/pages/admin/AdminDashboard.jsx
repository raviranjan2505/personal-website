import React,{useState,useEffect

} from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [massage, setMassage] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("http://localhost:4000/user/getContactForm");
              setUsers(response.data.client);
              setLoading(false);
              setMassage(response.data.message);
          } catch (error) {
              setError(error.message);
              console.log("error while fetching users", error);
          }
      };
  
      fetchData();
  }, []);
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold bg-gray-800 text-white py-1 px-[5px]">Manage Users</h1>
       <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <table className="w-full border-collapse border-gray-200">
          <thead>
            <tr className="text-left text-gray-600 uppercase border-b border-gray-200 text-[12px]">
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Project Type</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {users && (
            users.map((user,index)=>(
              <tr className="text-left text-gray-500 uppercase border-b border-gray-200 text-[10px]">
              <th>{index+1}</th>
              <th>{user.fullName}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th>{user.country}</th>
              <th>{user.project}</th>
              <th>{user.message}</th>
              <th><button>View</button>/<button>Delete</button></th>
            </tr>
            ))
           )}
          </tbody>
        </table>
       </div>
      </div>
    </>
  );
};

export default AdminDashboard;
