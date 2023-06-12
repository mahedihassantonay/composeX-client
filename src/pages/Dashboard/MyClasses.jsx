import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyClasses = () => {
    const {user} = useAuth()
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        if (user?.email) {
          fetch(`http://localhost:5000/classes/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setClasses(data);
            })
            .catch((error) => {
              console.error("Error retrieving classes:", error);
            });
        }
      }, [user]);

    return (
        <div>
        
      </div>
    );
  };
  
export default MyClasses;