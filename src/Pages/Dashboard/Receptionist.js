import Layout from "../../components/layout/Layout";
// src/pages/Receptionist.js
import React from 'react';

const Receptionist = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <h2 className="mb-4">Receptionist Dashboard</h2>

        <div className="row g-4">
          {/* Card: Today's Appointments */}
          <div className="col-md-4">
            <div className="card shadow-sm border-start border-primary border-4">
              <div className="card-body">
                <h5 className="card-title">Today's Appointments</h5>
                <p className="card-text fs-4">15</p>
              </div>
            </div>
          </div>

          {/* Card: Registered Patients */}
          <div className="col-md-4">
            <div className="card shadow-sm border-start border-success border-4">
              <div className="card-body">
                <h5 className="card-title">Registered Patients</h5>
                <p className="card-text fs-4">320</p>
              </div>
            </div>
          </div>

          {/* Card: Pending Approvals */}
          <div className="col-md-4">
            <div className="card shadow-sm border-start border-warning border-4">
              <div className="card-body">
                <h5 className="card-title">Pending Approvals</h5>
                <p className="card-text fs-4">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table: Recent Appointments */}
        <div className="mt-5">
          <h5>Recent Appointments</h5>
          <div className="table-responsive shadow-sm">
            <table className="table table-striped">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Time</th>
                  <th>Doctor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>10:00 AM</td>
                  <td>Dr. Smith</td>
                  <td><span className="badge bg-success">Confirmed</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Priya Mehta</td>
                  <td>10:30 AM</td>
                  <td>Dr. Sharma</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Rahul Verma</td>
                  <td>11:00 AM</td>
                  <td>Dr. Patel</td>
                  <td><span className="badge bg-danger">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Receptionist;
