import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
/* import {
   faList, faUsers, faUserFriends, faEdit, faBlog, faDatabase, 
  faChartArea, faBox, faCog, faLifeRing, faArrowDown, faArrowUp
} from '@fortawesome/free-solid-svg-icons'; */
/* import { Link } from 'react-router-dom';
 */import DashboardLogo from '../../../assets/dashboard-logo.png';
import DashboardLogoSmall from '../../../assets/ap.png';
import ArrowRight from '../../../assets/left-arrow.png';


import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  const options = [
    {name: 'Dashboard', iconClass: 'icon-dashboard', link: '/dashboard'},
    {name: 'Listings', iconClass: 'icon-location', link: '#'},
    {name: 'Leads', iconClass: 'icon-magnet', link: '#'},
    {name: 'Team Mates', iconClass: 'icon-users', link: '/team-mates', hasBottomBorder: true, specialClass: true},
    {name: 'Edit Website', iconClass: 'icon-pencil', link: '#'},
    {name: 'Blogs', iconClass: 'icon-blogs', link: '#', hasBottomBorder: true, specialClass: true},
    {name: 'MLS', iconClass: 'icon-mls', link: '#'},
    {name: 'Traffic', iconClass: 'icon-traffic', link: '#'},
    {name: 'Packages', iconClass: 'icon-packages', link: '#', hasBottomBorder: true, specialClass: true},
    {name: 'Settings', iconClass: 'icon-Setting', link: '#', setting_only: true, children: [
      {name: 'Branding', link: '/branding', iconClass: 'icon-image'},
      {name: 'Search', link: '/search', iconClass: 'icon-Magnifier'},
      {name: 'Listing Display', link: '/listing-display', iconClass: 'icon-eye'},
      {name: 'Meta Tags', link: '/meta-tags', iconClass: 'icon-tag'},
      {name: 'Extra Code', link: '/extra-code', iconClass: 'icon-Arrow'},
      {name: 'Google Analytics', link: '/google-analytics', iconClass: 'icon-google'},
      {name: 'Amp pages', link: '/amp-pages', iconClass: 'icon-show-chart'},
    ]},
    {name: 'Support', iconClass: 'icon-help', link: '/support'},
];

const toggleSidebar = () => {
  setIsSidebarVisible(!isSidebarVisible);
};

const handleOptionClick = (e, option) => {
  e.preventDefault(); 
  if (option.children) {
    setIsSettingsExpanded(!isSettingsExpanded);  
  }
};


  return (
    <>
    <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} />
      </button>
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isSidebarVisible ? 'visible' : ''}`}>
      <div className="logo main-logo">
        <NavLink to="/"> 
          <img 
            src={isCollapsed ? DashboardLogoSmall : DashboardLogo} 
            alt="Logo" 
            className={isCollapsed ? 'logo-image-small' : 'logo-image'}
          />
        </NavLink>
      </div>
      <ul className="options">
            <div className={`middle_sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {options.map((option, index) => (
             <li
             key={index}
             className={`option ${option.hasBottomBorder ? 'border-bottom-class' : ''}
             ${option.specialClass ? 'special-class' : ''} 
             ${option.setting_only ? 'setting_only' : ''}`}
             onClick={(e) => handleOptionClick(e, option)}
           >
             <span className={`option-icon ${option.iconClass}`}></span>
             <NavLink
               to={option.link}
               className={`option-link ${isCollapsed ? 'collapsed' : ''}`}
               activeClassName="active"
             >
              
               {!isCollapsed && (
                 <>
                   {option.children && option.name === "Settings" ? (
                     <>
                       {option.name}
                       <FontAwesomeIcon 
  icon={faChevronDown} 
  className={`icon-chevron-down ${isSettingsExpanded ? 'rotated' : ''}`}
/>
                     </>
                   ) : (
                     option.name
                   )}
                 </>
               )}
             </NavLink>
            
             {option.children && isSettingsExpanded && !isCollapsed && (
               <ul className="sub-options">
                 {option.children.map((child, idx) => (
                   <li key={idx} className="sub-option">
                     <span className={child.iconClass}></span> 
                     <NavLink to={child.link} activeClassName="active">
                       {child.name}
                     </NavLink>
                   </li>
                 ))}
               </ul>
             )}
           </li>


))}

            </div>
          </ul>
      <button 
        className={`collapse-btn btn-custom ${isCollapsed ? 'collapsed' : ''}`} 
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img src={ArrowRight} alt="Collapse Icon" className="arrow-icon"/>
        {!isCollapsed && ' Collapse'}
      </button>
    </div>
    </>
  );
};

export default Sidebar;



