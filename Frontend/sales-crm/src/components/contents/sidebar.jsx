import React from "react";
import './Sidebar.css'
import Cards from "./commissionBox";
import NewContent from "./NewContent";
import { Link } from "react-router-dom";

function sidebar() {

  const hambuger = () => {
    document.querySelector("#sidebar").classList.toggle("gorge");
  }

  return (
    <>
          <aside id="sidebar" className="shadow-lg">
            <div className="d-flex">
              <button className="toggle-btn" onClickCapture={hambuger} type="button">
                <i className="lni lni-grid-alt"></i>
              </button>
              <div className="sidebar-logo">
                <a href="#">HOPEFUL</a>
              </div>
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-item">
                <Link to="/" className="sidebar-link d-flex">
                  <i className="lni lni-user"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/content" className="sidebar-link d-flex">
                  <i className="lni lni-agenda"></i>
                  <span>CRM (OLD)</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link d-flex collapsed has-dropdown" data-bs-toggle="collapse"
                  data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                  <i className="lni lni-protection"></i>
                  <span>CRM</span>
                </a>
                <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Manage CRM</a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">CRM Supervisor</a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Customer Manage</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed has-dropdown d-flex" data-bs-toggle="collapse"
                  data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                  <i className="lni lni-layout"></i>
                  <span>Product Manage</span>
                </a>
                <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                      data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                      Two Links
                    </a>
                    <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Link 1</a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">Link 2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed has-dropdown d-flex" data-bs-toggle="collapse"
                  data-bs-target="#sms" aria-expanded="false" aria-controls="sms">
                  <i className="lni lni-protection"></i>
                  <span>SMS</span>
                </a>
                <ul id="sms" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">SMS DashBoard</a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Manual SMS</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link collapsed has-dropdown d-flex" data-bs-toggle="collapse"
                  data-bs-target="#report" aria-expanded="false" aria-controls="report">
                  <i className="lni lni-protection"></i>
                  <span>Report</span>
                </a>
                <ul id="report" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Link1</a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">Link2</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link d-flex">
                  <i className="lni lni-cog"></i>
                  <span>Setting</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <a href="#" className="sidebar-link d-flex">
                <i className="lni lni-exit"></i>
                <span>Logout</span>
              </a>
            </div>
          </aside>
        
     
    </>
  );
}

export default sidebar;
