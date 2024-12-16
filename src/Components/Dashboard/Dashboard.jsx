import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-64 min-h-screen bg-slate-200">
        <ul className="hover:bg-[#EBF4FE] cursor-pointer py-2 px-4 text-lg">
          <>
            <li className="font-bold text-xl">
              <NavLink to="/">Components</NavLink>
            </li>
          </>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
