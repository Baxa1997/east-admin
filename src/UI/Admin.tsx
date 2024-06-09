import {ReactNode} from "react";
import AdminSidebar from "./ADMIN/AdminSidebar";
import {useLocation} from "react-router-dom";

interface LayoutPros {
  children: ReactNode;
}
function Admin({children}: LayoutPros) {
  const location = useLocation();

  return (
    <div
      className={"admin"}
      style={{
        paddingTop: location?.state?.adminLogin ? "60px" : "0px",
      }}>
      {location?.state?.adminLogin && (
        <a href="/admin" className={"logo"}>
          <img src="/logo2.svg" alt="logo" />
        </a>
      )}

      {location?.state?.adminLogin ? (
        <div>{children}</div>
      ) : (
        <div className="admin_wrapper">
          <div className="admin_sidebar">
            <AdminSidebar />
          </div>

          <div className="admin_content">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Admin;
