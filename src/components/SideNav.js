import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
                    
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
          <Link to="/tasks"> <i className="fa fa-fw fa-dashboard" />
            Tasks 
          </Link>
          <Link to="/tables"> <i className="fa fa-fw fa-dashboard" />
            Tables 
          </Link>
          <Link to="/settings"> <i className="fa fa-fw fa-dashboard" />
            Settings 
          </Link>
          <Link to="/wall"> <i className="fa fa-fw fa-dashboard" />
            Wall 
          </Link>
          <Link to="/tasks"> <i className="fa fa-fw fa-dashboard" />
            Tasks 
          </Link>
          <Link to="/profiles"> <i className="fa fa-fw fa-dashboard" />
            Profiles 
          </Link>
          <Link to="/marquee/hello"> <i className="fa fa-fw fa-dashboard" />
            marquee 
          </Link>
         
        </li>
        <li>
          <Link to="/charts"> <i className="fa fa-fw fa-dashboard" />
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
            
        
        </li>
        <li>
          <Link to="/tables"> <i className="fa fa-fw fa-dashboard" />
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
           
          
        </li>
      </ul>
    </div>);  
}

export default SideNav;
