import { useLocation, useNavigate } from "react-router-dom";

function Header({ followUpCount }) {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname === "/appointments") return "Appointments";
    if (location.pathname === "/appointments/create") return "New Appointment";
    if (location.pathname === "/technicians") return "Technician Tracker";
    if (location.pathname === "/overdue") return "Overdue Alerts";
    if (location.pathname === "/client-history") return "Client History";
    if (location.pathname.includes("/edit")) return "Edit Appointment";
    if (location.pathname.includes("/appointments/")) return "Appointment Detail";
    return "Torres Pest Control";
  };

  return (
    <div className="top-header">

      {/* PAGE TITLE */}
      <div style={{ color: "white", fontSize: "16px", fontWeight: 700 }}>
        {getTitle()}
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="header-right">

        {/* NOTIFICATION BELL with count badge */}
        <button className="header-icon-btn" title="Follow-up Notifications" style={{ position: "relative" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          {followUpCount > 0 && (
            <span style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "#fbbf24",
              color: "#7c2d12",
              fontSize: "10px",
              fontWeight: "800",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid var(--primary)",
            }}>
              {followUpCount}
            </span>
          )}
        </button>

        {/* HOME BUTTON - redirects to dashboard */}
        <button
          className="header-icon-btn"
          title="Go to Dashboard"
          onClick={() => navigate("/")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>

        {/* USER PROFILE */}
        <div className="user-profile">
          <div className="user-avatar">A</div>
          <div>
            <div className="user-name">Admin</div>
            <div className="user-role">Super Admin</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

      </div>
    </div>
  );
}

export default Header;