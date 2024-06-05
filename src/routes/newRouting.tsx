import {Route, Routes} from "react-router-dom";

import AdminLogin from "@/UI/ADMIN/AdminLogin";
import AdminListPage from "@/UI/ADMIN/AdminListPage";

function NewRouting() {
  return (
    <Routes>
      <Route index path="/" element={<AdminLogin />} />
      <Route index path="/admin-list" element={<AdminListPage />} />
    </Routes>
  );
}

export default NewRouting;
