import React from 'react';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import userfour from '../../../img/userfour.png'
import RouteDiv from '../RouteDiv/RouteDiv';
import { Link, useRouteMatch } from "react-router-dom";
const Dashboard = () => {
    let { url } = useRouteMatch();
    return (
        <section className="row">
            <div className="col-md-4">
                <div class="sidebar">
                    <div>
                        <img src={userfour} alt="" className="img-style img-fluid rounded" />
                        <h6 className="text mt-2">Km Rahat</h6>

                    </div>
                    <div className="mt-5 text-sm-start">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className="side-icon" />Home{" "}
                        </Link>
                        <Link to={`${url}/addPost`}>
                            <FontAwesomeIcon icon={faPlus} className="side-icon" />Add Post{" "}
                        </Link>
                        <Link to={`${url}/admin`}>
                            <FontAwesomeIcon icon={faUserShield} className="side-icon" />Admin{" "}
                        </Link>
                        <Link to={`${url}/managePost`}>
                            <FontAwesomeIcon icon={faTasks} className="side-icon" />Manage Post{" "}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <RouteDiv />
            </div>
        </section>
    );
};

export default Dashboard;