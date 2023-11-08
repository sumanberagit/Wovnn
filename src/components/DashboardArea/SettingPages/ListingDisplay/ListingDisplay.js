import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';

function ListingDisplay() {
    const [urlLink, handleUrl] = useState("https://");
    const handleCustomUrlChange = (event) => {
        handleUrl(event.target.value);
    };


    /* table-data */
    const initialLocationData = [
        {
          location: "Location 1",
          osOutside: "Os Outside 1 County Area",
          area: "Area 1",
        },
        {
          location: "Location 2",
          osOutside: "Os Outside 2 County Area",
          area: "Area 2",
        },
        //... more data
      ];
    
      const [locationData, setLocationData] = useState(initialLocationData);
    
      const handleRowDelete = (indexToDelete) => {
        // Create a new array excluding the item to delete, and set the state with it.
        const updatedLocationData = locationData.filter(
          (_, index) => index !== indexToDelete
        );
        setLocationData(updatedLocationData);
      };
       /* table-data */

    return (
        <div className="dashboard-container">
            <div className="sidebar-main">
                <Sidebar />
            </div>
            <div className="header-dasboard main_container">
                <Header />
                <div className="dashboard">
                    <div className="container-fluid main_container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mutual_blocks amp-pages ldisplay">
                                    <h2>Listing Display</h2>
                                   
                                   
                                    <div className="title_bar_setting">
                                    <h3>General</h3>

                                    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Retain the original aspect ratio of listing photos
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show acreage in the primary info for residential listings
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show bed/bath data in the primary info for multi-family listings (when available on smaller unit listings)
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        For sold listings, show a sold vs. list price comparison
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show a price reduced icon
    </label>
    <div className="sub-checkbox-container">
        <label className="custom-checkbox-container">
            <input type="checkbox" className="custom-checkbox" />
            <span className="checkmark"></span>
            Show price reduced text
        </label>
    </div>
</div>

<div className="round_checks">
    <p>Display bathrooms in the following format</p>
    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        3 ba
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        2.5 ba (reverts to whole number when there are multiple partial baths)
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        2 full 1 half ba
    </label>
    </div>
</div>



                              
                                  
                                    </div>

                                    <div className="center_border"></div>

                                    <div className="title_bar_setting ">
                                    <h3>Badges</h3>
<div className="new_badge_list d-flex">
"New" Badge: Listings are considered new if they are <input
                                            type="text"
                                            id=""
                                            className="form-control"
                                           /*  value={ampHeaderTitle} */
                                           /*  onChange={handleAmpHeaderTitleChange} */
                                            placeholder="14"
                                        />  or fewer days old.
</div>

                                    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Hide "Under Contract" and "Pending" badges
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        For sold listings, include the sold date inside the "Sold" badge
    </label>
    </div>
                                    
                              
                                 
                                    </div>
                                    <div className="center_border"></div>


                                    <div className="title_bar_setting ">
                                    <h3>Results / Listing Cards</h3>


                                    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Feature your listings at the top of relevant search results
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show your photo on listing cards (for your listings)
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show status on listing cards
    </label>
    </div>
                                    
                              
                                 
                                    </div>


                                    <div className="center_border"></div>



                                    <div className="title_bar_setting">
                                    <h3>Listing Details</h3>

                                    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show virtual tours on listing details (for listings that have one)
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        By default, expand the more info section on listing details
    </label>

 
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show an Estimated Monthly Payments section on listing details
    </label>
    <div className="sub-checkbox-container">
        <label className="custom-checkbox-container">
            <input type="checkbox" className="custom-checkbox" />
            <span className="checkmark"></span>
            Include a “Get Pre-Approved” link
        </label>
    </div>



    <div className="allchecks sub-checkbox-container round_checks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Use default link: <span className="url_linking">http://www.lendingtree.com</span>
    </label>

    <label className="custom-checkbox-container last_check">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Use custom link:   <input 
    type="text"
    id="logoAltText"
    className="form-control width-controlls" 
    value={urlLink}
    onChange={handleCustomUrlChange}
/>
    </label>
    </div>
    <div className="sub-checkbox-container">
        <label className="custom-checkbox-container">
            <input type="checkbox" className="custom-checkbox" />
            <span className="checkmark"></span>
            Open in New Window
        </label>
    </div>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show a market report section on listing details
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show your agent profile on listing details
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show listing dates on listing details (when data is available)
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show your logo on listing details
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show similar listings on listing details
    </label>

    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show printable flyer button on listing details
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Show map button on listing details
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Don't open listing details in modal windows
    </label>

    
  
</div>





                              
                                  
                                    </div>


                                    <div className="two_btns">
    <button className="btn update_btn">
       Update
    </button>
    <button className="btn cancel_btn" >
     Cancel
    </button>
</div>
                                   
                                </div>
                            </div>
                        </div>







                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mutual_blocks amp-pages ldisplay second_mtdis">
                                    <h2>Featured Locations</h2>
                                    <p>Your featured locations are the communities you want to focus on, where you spend most of your time and marketing attention. These will be used to create dynamic website content and pages.</p>
                                   
                                   
                                    <div className="title_bar_setting">
                                    <h3>Featured Locations</h3>

{/* location table */}

<div className="location_table table-responsive">
      <table className="my-custom-table">
        <tbody>
          {locationData.map((item, index) => (
            <tr key={index}>
              <td><span className="icon-map"></span></td>
              <td>{item.osOutside}</td>
              <td>{item.area}</td>
              <td>{item.osOutside}</td>
              <td>
                <span className="icon-Pencil"></span>
                <span 
  className="icon-Close" 
  onClick={() => handleRowDelete(index)} 
  style={{cursor: 'pointer'}}
  aria-hidden="true"
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleRowDelete(index)}
>
  <span className="visually-hidden">Delete location {item.location}</span>
</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-location-link">
      <Link to="/add-location">Add Location</Link>
      </div>
    


                                    </div>
                                    </div>             </div>
                                    </div>
                                    </div>
                                
                                

                                  












                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingDisplay;
