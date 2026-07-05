import AdminNavBar from "../../components/Admin/AdminNavBar"
import {Outlet} from 'react-router-dom'
import AdminSideBar from "../../components/Admin/AdminSideBar"

const Layout = () => {
  return (
    <>
    <AdminNavBar />
    <div className="flex">
     <AdminSideBar />
      <div className="flex-1 px-4 py-10 h-[calc(100vh-64)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default Layout