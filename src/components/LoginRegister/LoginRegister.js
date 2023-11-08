/* import React, { useState } from 'react';
import './LoginRegister.css';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/arrow.png';


function LoginRegister() {
 const [activeSection, setActiveSection] = useState('login'); 

    return ( <div className="login-register">

<div className="login-header">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 col-sm-6">
<div className="logo"> <img src={Logo} alt="Logo" /></div>

        </div>
        <div className="col-lg-6 col-sm-6">

<div className="mobile">(415) 144 0781</div>
</div>

    </div>
    </div>
    </div>
  
<div className="log_reg_area">
<div className="container container_bg ">

    </div>


    <div className="container container_bg second-options">
<div className="row">
<div className="col-lg-12">

</div>

</div>
    </div>



    </div>
    
    </div>
        
    );
}

export default LoginRegister;

 */









import React, { useState } from 'react';
import './LoginRegister.css';
import Logo from '../../assets/logo.png';
import Arrow from '../../assets/arrow.png';
import User from '../../assets/users.png';
import Account from '../../assets/account.png';
import Location from '../../assets/location.svg';
import Search from '../../assets/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Building from '../../assets/building.svg';

import Mls1 from '../../assets/mls1.png';
import Mls2 from '../../assets/mls2.png';
import Mls3 from '../../assets/mls3.png';
import Mls4 from '../../assets/mls4.png';
import Mls5 from '../../assets/mls5.png';
import Cross from '../../assets/close.png';


function LoginRegister() {
  const [activeSection, setActiveSection] = useState('login');
  const [showMain, setShowMain] = useState(true);
const [selectedOption, setSelectedOption] = useState(0);

/* mls */

  const [input, setInput] = useState('');
  const [locations, setLocations] = useState([]); 

  const handleSubmit = (e) => {
      e.preventDefault();
      if(input && !locations.includes(input)) { 
          setLocations([...locations, input]);
          setInput(''); 
      }
  }

  const handleDelete = (loc) => {
      setLocations(locations.filter(location => location !== loc)); 
    }


      /* for mls-search */

      const [mlsInput, setMlsInput] = useState('');

      const initialMlsData = [
          { image: Mls1, alt: "mls" },
          { image: Mls2, alt: "mls" },
          { image: Mls3, alt: "mls" },
          { image: Mls4, alt: "mls" },
          { image: Mls5, alt: "mls" },
      ];
  
      const [mlsData, setMlsData] = useState(initialMlsData);
  
      const handleMlsSubmit = (e) => {
          e.preventDefault();
          if (mlsInput && !mlsData.some(d => d.image === mlsInput)) {
              setMlsData([...mlsData, { image: mlsInput, alt: "mls" }]);
              setMlsInput(''); 
          }
      }
  
      const handleMlsDelete = (data) => {
          setMlsData(mlsData.filter(d => d.image !== data.image)); 
      }

 


  
/* mls */

  return (
    <div className="login-register">
      <div className="login-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="logo"> <img src={Logo} alt="Logo" /></div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="mobile">(415) 144 0781</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container container_bg ${showMain ? '' : 'd-none'}`}>
      <div className="row ">
<div className="col-lg-4 offset-lg-1 com-sm-12 md_none" >
<div className="log_text_one">
Simplify Unlock Efficiency and Elevate
Your Real Estate Business with with
</div>
<div className="log_text_two">WOVNN</div>
<div className="log_image"><img src={Arrow} alt="Logo" /></div>
<div className="bottom_text_one">Get Started Today for Seamless Property Management</div>
<div className="bottom_multiple_text">
    <div className="b1">No card details required</div>
    <div className="b1 b2">Senior technical architect's assistance</div>
    <div className="b1 b3">Keep all the work secure</div>
</div>
</div>
<div className="col-lg-4 offset-lg-2 onset-lg-1 com-sm-12">

<div className="loginRegister">
            <div className="d-flex log_reg">
                <button className={`btn border-end px-4 ${activeSection === 'login' ? 'active' : ''}`} onClick={() => setActiveSection('login')}>Login</button>
                <button className={`btn px-4 ${activeSection === 'register' ? 'active' : ''}`} onClick={() => setActiveSection('register')}>Register</button>
            </div>

            <div className={`section mt-4 login ${activeSection === 'login' ? 'active' : 'd-none'}`}>
              
            <form>
    <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email Address*" />
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password*" />
    </div>
    <button type="submit" className="logreg_btn btn btn-primary">Login</button>
</form>

            </div>

            <div className={`section mt-4 register ${activeSection === 'register' ? 'active' : 'd-none'}`}>
              
            <form>
    <div className="row mb-3">
        <div className="col mcol">
            <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="col mcol">
            <input type="text" className="form-control" placeholder="Last Name" />
        </div>
    </div>
    <div className="mb-3">
        <input type="text" className="form-control" placeholder="Phone No*" />
    </div>
    <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email Address*" />
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password*" />
    </div>
    <button 
          type="submit" 
          className="btn btn-primary logreg_btn"
          onClick={(e) => {
            e.preventDefault();
            setShowMain(false);
          }}
        >
          Get Your Website
        </button>
</form>

            </div>
        </div>


</div>
</div>
    
      </div>

      <div className={`container container_bg second-options ${showMain ? 'd-none' : ''}`}>
  <div className="row">
    <div className="col-lg-12">
      {/* Top Three Options */}
      <div className="top-options">
        <button style={{ 
          backgroundColor: '#80C342', 
          color: '#fff',
          borderBottomRightRadius: selectedOption === 2 ? '0px' : 'inherit',
          borderTopRightRadius: selectedOption === 2 ? '0px' : 'inherit'
        }}>
          Signup
        </button>
        <button style={{ 
          backgroundColor: selectedOption === 2 ? '#80C342' : '#D4EEDA',
          color: selectedOption === 2 ? '#fff' : '#141928',
          borderTopLeftRadius: selectedOption === 2 ? '0px' : 'inherit',
          borderBottomLeftRadius: selectedOption === 2 ? '0px' : 'inherit' 
        }}>
          Choose your Package
        </button>
        <button style={{ 
            backgroundColor: '#D4EEDA', 
            color: selectedOption === 2 ? '#141928' : '#B4B9C8' 
        }}>
            What is your MLS?
        </button>
      </div>

      {/* Package Selection */}
      {selectedOption === 0 && (
        <div className="package-selection">
          <div className="websites_data d-flex">
            <div className="websites agent-website">
              <h3>Agent Website</h3>
              <div className="web_icon"><img src={Account} alt="Agent Website" /></div>
              <div className="webtext">Perfect for an independent agent or broker.</div>
              <button className="clicker first_click" onClick={() => setSelectedOption(2)}>Select</button>
            </div>
            <div className="websites broker_sol">
              <h3>Brokerage Solutions</h3>
              <div className="web_icon"><img src={User} alt="Brokerage Solutions" /></div>
              <div className="webtext">Website and back office tools for the entire team.</div>
              <div className="web_select_option">
                <p>How many agents are on your team?</p>
                <select className="form-select" aria-label="Default select example">
                  <option selected>1-10 Agents</option>
                  <option value="1">11-50 Agents</option>
                  <option value="2">51-100 Agents</option>
                  <option value="3">+100 Agents</option>
                </select>
              </div>
              <button className="clicker second_click" onClick={() => setSelectedOption(2)}>Select</button>
            </div>
          </div>
        </div>
      )}

      {/* MLS Information */}
      {selectedOption === 2 && (
        <div className="mls">
      <div className="working_area">
   
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text image_set bdr1"><img src={Location} alt="location" /></span>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Add your working area..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text image_set bdr2"><img src={Search} alt="search" /></span>
                    </div>
                </div>
            </form>

            <div className="d-flex flex-wrap">
                {locations.map(loc => (
                    <div key={loc} className="m-2 d-flex align-items-center   location_seting">
                        {loc}
                        <button className="btn btn-sm ml-2 delete_location" onClick={() => handleDelete(loc)}>
  <FontAwesomeIcon icon={faTimes} />
</button>

                    </div>
                ))}
            </div>
      
      </div>

      {/* add-mls */}

      <div className="working_area add mls-images">
      <form onSubmit={handleMlsSubmit}>
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text image_set bdr1"><img src={Building} alt="Brokerage Solutions" /></span>
        </div>
        <input 
            type="text" 
            className="form-control" 
            placeholder="Add your MLS" 
            value={mlsInput}
            onChange={(e) => setMlsInput(e.target.value)}
        />
        <div className="input-group-append">
            <button type="submit" className="input-group-text  second_search"><img src={Search} alt="Search" /></button>
        </div>
    </div>
    <div className="mls_locations">
            {mlsData.map(data => (
                <div key={data.image} className="location_all">
                    <img src={data.image} alt={data.alt} />
                    <button 
                        className="btn btn-sm ml-2 delete_mls" 
                        onClick={() => handleMlsDelete(data)}>
                        <img src={Cross} alt="Delete" />
                    </button>
                </div>
            ))}
        </div>
</form>


      
      </div>

      {/* add-mls */}
      
      <Link to="/dashboard">
    <button className="explore_more">Explore More</button>
  </Link>



        </div>
      )}
    </div>
  </div>
</div>





    </div>
  );
}

export default LoginRegister;


