import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineAudit,
  AiOutlineSelect,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // TODO: load data froms erver
  // const isAdmin = true;
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (isAdminLoading || isInstructorLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-black">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h1 className="text-white text-2xl font-bold border p-2 pl-16 my-8">
            Dashboard
          </h1>
          <ul className="menu p-4 w-80 h-full  text-white font-semibold text-xl">
            {/* admin */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageclasses">
                    {" "}
                    <AiOutlineSelect /> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    {" "}
                    <AiOutlineAudit /> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addclass">
                    {" "}
                    <AiOutlineSelect /> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclasses">
                    {" "}
                    <AiOutlineAudit /> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/selectedclass">
                    {" "}
                    <AiOutlineSelect /> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledclass">
                    {" "}
                    <AiOutlineAudit /> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="mt-96 space-y-4">
              <hr />
              <li>
                <NavLink to="/">
                  {" "}
                  <AiFillHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/classes">
                  {" "}
                  <AiOutlineSelect /> Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/instructors">
                  {" "}
                  <AiOutlineUsergroupDelete /> Instructors
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
