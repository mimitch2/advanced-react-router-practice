import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import DashBoard from "./components/Dashboard";
import TasksPanel from "./components/TasksPanel";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Profile from "./components/Profile";
import Profiles from "./components/Profiles";
import Marquee from "./components/Marquee";


import {
  BrowserRouter,
  Route,
  Switch,
  
 } from "react-router-dom";
 

function App() {
  return (
    <BrowserRouter>
      <div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
         
            <div>
              <Switch>
                <Route path="/tasks" component={TasksPanel} />
                <Route path="/charts" component={Charts} />
                <Route path="/tables" component={Tables} />
                <Route path="/settings" component={Settings} />
                <Route path="/wall" component={Wall} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/marquee/:text" component={Marquee} />

                <Route path="/" component={DashBoard} />
                {/* <Route path="/tasks/:specialid" component={TaskItem} /> */}


              </Switch>
            </div>
          

          </div>
        </div>
      </div>
    </BrowserRouter>
    

  );
}


export default App;
