import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
       
        <div className="md:w-64 min-h-screen bg-blue-400">
            <ul className="menu">
                <>
                    <li><NavLink to="/">
                        Components</NavLink></li>
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