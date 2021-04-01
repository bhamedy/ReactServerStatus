import React from "react";
import springboot from "../api/springboot";
import "./App.css";
const ServerStat = {
 UP: {
  color: "green"
 },
 DOWN: {
  color: "red"
 }
};
class AppServer extends React.Component {
 state = { server: "" };
render() {
  return (
   <div className="main">
    <div className="ui card">
     <div className="content">
      <h3>Server Monitor</h3>
     </div>
     <i className="massive server icon" />
    </div>
   </div>
  );
 }
}
export default AppServer;