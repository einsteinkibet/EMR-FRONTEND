import { Link } from 'react-router-dom';



function Admin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <div className="logo" style={{color:"black", height:'50px'}}>EMR KENYA</div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{ marginRight: '3rem' }}>
            <Link className="nav-link active" aria-current="page" to="/register" style={{ color: "black", textDecoration: "underline", marginRight: '3rem' }}>Register New User</Link>
            <Link className="nav-link active" aria-current="page" to="/pending" style={{ color: "black", textDecoration: "underline", marginRight: '3rem' }}>View Pending Appointments</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Admin;
