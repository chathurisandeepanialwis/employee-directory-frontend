import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="container">
      <h1 className="display-4 mb-4">Welcome to EmployeeHub</h1>
      <p className="lead mb-4">
        Manage your team's records with ease. Add, update, and track employees—all in one place.
      </p>
      
      <div className="row g-4 my-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3>Quick Stats</h3>
              <p className="text-muted">Total Employees: --</p>
              <p className="text-muted">Departments: 4</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3>Recent Activity</h3>
              <p className="text-muted">No recent activity</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3>Quick Actions</h3>
              <Link to="/employees/new" className="btn btn-primary w-100 mb-2">
                Add New Employee
              </Link>
              <Link to="/employees" className="btn btn-outline-primary w-100">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/employees" className="btn btn-primary btn-lg px-4">
        Go to Dashboard
      </Link>
    </div>
  );
}