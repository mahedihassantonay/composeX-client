import { Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineAudit, AiOutlineSelect, AiOutlineUsergroupDelete } from "react-icons/ai";

const Dashboard = () => {
    return (
        <>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-black">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <h1 className="text-white text-2xl font-bold border p-2 pl-16 my-8">Dashboard</h1>
    <ul className="menu p-4 w-80 h-full  text-white font-semibold text-xl">
      {/* Sidebar content here */}
      <li><a> <AiOutlineSelect /> My Selected Classes</a></li>
      <li><a> <AiOutlineAudit /> My Enrolled Classes</a></li>

      
      <div className="mt-96 space-y-4">
      <hr />
      <li><a> <AiFillHome /> Home</a></li>
      <li><a> <AiOutlineSelect /> Classes</a></li>
      <li><a> <AiOutlineUsergroupDelete /> Instructors</a></li>

      </div>



    </ul>
  
  </div>
</div>
        </>
    );
};

export default Dashboard;