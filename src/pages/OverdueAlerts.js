
// WHAT THIS PAGE SHOULD DO:
// - Find all appointments where:
//     * status is still "Pending" OR "In Progress"
//     * AND the date has already passed (date < today)
// - Display them as alert cards with a warning style
// - Show how many days overdue each appointment is
// - Allow the user to click Edit to update the appointment
// - If no overdue appointments, show a success message

import React from "react";
import { useNavigate } from "react-router-dom";

function OverdueAlerts({ appointments }) {
  const navigate = useNavigate();

  // Step 1: Get today's date
  // Hint: const today = new Date();

  // Step 2: Filter appointments that are overdue
  // Hint: status is Pending or In Progress AND date < today

  // Step 3: Calculate how many days overdue each appointment is
  // Hint: const diff = Math.floor((today - new Date(a.date)) / (1000 * 60 * 60 * 24));

  // Step 4: Return JSX showing overdue appointments as warning cards

  return (
    <div className="list-page">
      <div className="list-header">
        <div>
          <h1 className="page-title">Overdue Alerts</h1>
          <p style={{ fontSize: "13px", color: "var(--muted-foreground)", marginTop: "4px" }}>
            Appointments that are past their scheduled date
          </p>
        </div>
      </div>

      {/* YOUR CODE GOES HERE */}
      {/* Show warning cards for each overdue appointment */}
      {/* Each card should show: client name, service, days overdue, and an Edit button */}

    </div>
  );
}

export default OverdueAlerts;
