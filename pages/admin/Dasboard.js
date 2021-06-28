import React from "react";
import Dashboardadmin from "../../components/admin/Dashboardadmin";
import Layoutadm from "../../components/admin/Layoutadm";

export default function Dasboard() {
  return (
    <div>
      <Layoutadm title="Admin">
        <Dashboardadmin />
      </Layoutadm>
    </div>
  );
}
