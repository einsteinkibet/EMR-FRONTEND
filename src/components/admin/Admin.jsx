import { Link } from 'react-router-dom';
import Users from './Users';

function Admin() {
  return (
    <nav style={{  }} className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div style={{ marginRight: '3rem', marginTop:"100px", padding:"50px" }} className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/register" style={{ color: "blue", textDecoration: "underline ",fontSize: "30px" }}>Register New User</Link>
            <Link className="nav-link active" aria-current="page" to="/pending" style={{ color: "black", textDecoration: "underline ",fontSize: "30px" }}>View Pending Appointments</Link>
          </div>
          <div style={{ marginTop: 'auto' }}>
            <Users/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Admin;
