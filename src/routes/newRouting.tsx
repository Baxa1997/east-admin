import {Route, Routes} from "react-router-dom";

import AdminLogin from "@/UI/ADMIN/AdminLogin";
import AdminListPage from "@/UI/ADMIN/AdminListPage";
import AdminFormPage from "@/UI/ADMIN/AdminFormPage/AdminFormPage";
import AdminTariffs from "@/UI/ADMIN/AdminTariffs";
import AdminTariffPage from "@/UI/ADMIN/AdminTariffPage";

function NewRouting() {
  return (
    <Routes>
      <Route index path="/" element={<AdminLogin />} />
      <Route index path="/admin-list" element={<AdminListPage />} />
      <Route index path="/add-operator" element={<AdminFormPage />} />
      <Route index path="/edit-operator/:id" element={<AdminFormPage />} />
      <Route index path="/tariffs" element={<AdminTariffs />} />
      <Route index path="/add-tariff" element={<AdminTariffPage />} />
      <Route index path="/edit-tariff/:id" element={<AdminTariffPage />} />
    </Routes>
  );
}

export default NewRouting;
