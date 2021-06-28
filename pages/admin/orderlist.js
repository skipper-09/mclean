import React from "react";
import Layoutadm from "../../components/admin/Layoutadm";
export default function orderlist() {
  return (
    <div>
      <Layoutadm title="Order-List">
        <main className=" mt-5 pt-3 mainku">
          <div className="container-fluid">
            <div className="row">
              <div className=" fw-bold fs-3 text-capitalize">Order List</div>
            </div>
          </div>
        </main>
      </Layoutadm>
    </div>
  );
}
