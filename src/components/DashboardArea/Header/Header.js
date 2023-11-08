import React/* , { useState } */ from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header.css';
import My  from './../../../assets/my.png';

const Header = () => {
    const notificationCount = 5; 

   /*  const [websiteUrl, setWebsiteUrl] = useState(''); */
    /* const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [inputUrl, setInputUrl] = useState(websiteUrl); */

/*   const handleUrlSubmit = (e) => {
    e.preventDefault();
    setWebsiteUrl(inputUrl);
    setIsEditingUrl(false);


    
  }; */

  return (
    <div className="header">
      <div className="left-section">
        {/* {isEditingUrl ? ( */}
          <form /* onSubmit={handleUrlSubmit} */>
            <input
              type="text"
            /*   value={inputUrl} */
            placeholder="www.allprofessionalsre.com"
              /* onChange={(e) => setInputUrl(e.target.value)} */
            />
          </form>
       {/*  ) : ( */}
          {/* <p> {websiteUrl} </p> */}
      {/*   )} */}
       <span 
          className="icon-pencil" 
          /* onClick={() => setIsEditingUrl(!isEditingUrl)} */
        ></span>
        {/* <a href={`http://${websiteUrl}`} target="_blank" rel="noopener noreferrer"> */}
          <span className="icon-eye"></span>
      {/*   </a> */}
      </div>
      
      <div className="right-section">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <span className="icon-search"></span>
        </div>
        <div className="bell_notification">
        <span className="icon-bell"></span>
        {notificationCount > 0 && (
          <span className="notification_count">{notificationCount}</span>
        )}
      </div>
        <Dropdown>
          <Dropdown.Toggle  className="user_set" id="dropdown-basic">
          <img src={My} alt="user" className="user-image" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
