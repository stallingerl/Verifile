import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {
  BrowserRouter as Router,
  NavLink

} from "react-router-dom";

const Sidebar = () => {
  return (
    <div
    style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
  >
    <CDBSidebar textColor="#fff" backgroundColor="transparent">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit', textAlign: 'left' }}
          >
          Proof of Existence
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Docs" activeClassName="activeClicked">
              <CDBSidebarMenuItem>What is Proof of Existence</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Common Uses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Technical Foundations</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                Try it now
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/GetStarted" >
              <CDBSidebarMenuItem>
                Get Started
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                Tutorial:Your First Proof
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
    </CDBSidebar>
  </div>
  );
};

export default Sidebar;