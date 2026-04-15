import React, { useState } from "react";

function TechnicianTracker({ appointments }) {

  const [selectedTech, setSelectedTech] = useState(null);

  // Unique technicians
  const technicians = [...new Set(appointments.map(a => a.technician))];

  // Stats per technician
  const technicianStats = technicians.map(tech => {
    const techAppointments = appointments.filter(a => a.technician === tech);

    return {
      name: tech,
      total: techAppointments.length,
      pending: techAppointments.filter(a => a.status === "Pending").length,
      inProgress: techAppointments.filter(a => a.status === "In Progress").length,
      completed: techAppointments.filter(a => a.status === "Completed").length,
      cancelled: techAppointments.filter(a => a.status === "Cancelled").length,
    };
  });

  // Sort busiest first
  const sortedTechs = technicianStats.sort((a, b) => b.total - a.total);

  // Selected technician appointments
  const filteredAppointments = selectedTech
    ? appointments.filter(a => a.technician === selectedTech)
    : [];

  const getStatusClass = (status) => {
    if (status === "Completed") return "badge badge-completed";
    if (status === "Pending") return "badge badge-pending";
    if (status === "In Progress") return "badge badge-inprogress";
    if (status === "Cancelled") return "badge badge-cancelled";
    return "badge";
  };

  return (
    <div className="list-page">

      {/* HEADER */}
      <div className="list-header">
        <div>
          <h1 className="page-title">Technician Tracker</h1>
          <p style={{ fontSize: "13px", color: "var(--muted-foreground)", marginTop: "4px" }}>
            Workload overview for all technicians
          </p>
        </div>
      </div>

      {/* TECHNICIAN CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
        
        {sortedTechs.map((tech, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{
              padding: "1.25rem",
              cursor: "pointer",
              border: selectedTech === tech.name ? "2px solid var(--primary)" : ""
            }}
            onClick={() =>
              setSelectedTech(selectedTech === tech.name ? null : tech.name)
            }
          >
            
            {/* NAME */}
            <div style={{ fontWeight: 700, fontSize: "15px" }}>
              {tech.name}
            </div>

            {/* TOTAL */}
            <div style={{ fontSize: "22px", fontWeight: 800, marginTop: "6px" }}>
              {tech.total} appointments
            </div>

            {/* STATUS */}
            <div style={{ marginTop: "10px", fontSize: "12px", color: "var(--muted-foreground)" }}>
              <div>🟡 Pending: {tech.pending}</div>
              <div>🔵 In Progress: {tech.inProgress}</div>
              <div>🟢 Completed: {tech.completed}</div>
              <div>🔴 Cancelled: {tech.cancelled}</div>
            </div>

          </div>
        ))}

      </div>

      {/* APPOINTMENT TABLE */}
      {selectedTech && (
        <div className="dashboard-card" style={{ marginTop: "20px" }}>
          <div className="dashboard-card-header">
            <span className="dashboard-card-title">
              Appointments for {selectedTech}
            </span>
          </div>

          <div className="dashboard-card-body">
            {filteredAppointments.length > 0 ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map(a => (
                    <tr key={a.id}>
                      <td>{a.clientName}</td>
                      <td>{a.pestType || a.serviceType}</td>
                      <td>
                        {new Date(a.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </td>
                      <td>
                        <span className={getStatusClass(a.status)}>
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-state">
                No appointments found
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default TechnicianTracker;