import React from 'react'
import { Link } from 'react-router-dom'

const RightSidebar = () => (
  <aside className="col-md-3">
    <div className="card sticky-top">
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build...</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <Link to='/content/trending' className="btn btn-primary">More</Link>
      </div>
    </div>
  </aside>
)

export default RightSidebar
