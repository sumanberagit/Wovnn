
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import React, { useState } from 'react';
import Close from '../../../../assets/closer.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

/* import { Link } from 'react-router-dom';
 */
function Search() {
    const [selectedOption, setSelectedOption] = useState("Days on Site (old to new)");
    

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
 


    /* add-remove-location-row */
    const [inputs, setInputs] = useState([
        {value: '', id: Math.random()}
    ]);

    const handleInputChange = (id, event) => {
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, value: event.target.value } : input
        );
        setInputs(newInputs);
    };

    const handleAddInput = () => {
        setInputs([...inputs, {value: '', id: Math.random()}]);
    };

    const handleRemoveInput = (id) => {
        const newInputs = inputs.filter(input => input.id !== id);
        setInputs(newInputs);
    };

/* add-remove-location-row */

/* city-enter */


const [cityInput, setCityInput] = useState('');
const [searchedCities, setSearchedCities] = useState([]); 

const handleCitySubmit = (e) => {
    e.preventDefault();
    if(cityInput && !searchedCities.includes(cityInput)) { 
        setSearchedCities([...searchedCities, cityInput]);
        setCityInput(''); 
    }
}

const handleCityDelete = (city) => {
    setSearchedCities(searchedCities.filter(searchedCity => searchedCity !== city)); 
}

/* city-enter */


/* state */

const [stateInput, setStateInput] = useState('');
const [searchedStates, setSearchedStates] = useState([]); 

const handleStateSubmit = (e) => {
    e.preventDefault();
    if(stateInput && !searchedStates.includes(stateInput)) { 
        setSearchedStates([...searchedStates, stateInput]);
        setStateInput(''); 
    }
}

const handleStateDelete = (state) => {
    setSearchedStates(searchedStates.filter(searchedState => searchedState !== state)); 
}




/* state */


/* listing-status */
const [statusInput, setStatusInput] = useState('');
const [searchedListingStatuses, setSearchedListingStatuses] = useState([]);

const handleStatusSubmit = (e) => {
    e.preventDefault();
    if(statusInput && !searchedListingStatuses.includes(statusInput)) {
        setSearchedListingStatuses([...searchedListingStatuses, statusInput]);
        setStatusInput('');
    }
}

const handleStatusDelete = (status) => {
    setSearchedListingStatuses(searchedListingStatuses.filter(searchedStatus => searchedStatus !== status));
}

/* listing-status */

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
                                <div className="mutual_blocks amp-pages search_page">
                                    <h2>Search Defaults</h2>
                                    <p>Here you can change the way that your users interact with your search pages.</p>
                                   
                                   
                                    <div className="title_bar_setting">
                                    <h3>Default Listing Sort Order</h3>


                                   
            <div className="row align-items-center  search-custom">
                <label htmlFor="sortOrder" className="col-form-label col-auto labelling">
                    By default, sort search results by:
                </label>
                <div className="col-auto">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Days on Site (old to new)">Days on Site (old to new)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
            </div>
      



                              
                                  
                                    </div>

                                    <div className="center_border"></div>

                                    <div className="title_bar_setting ">
                                    <h3>Default Results View</h3>

<div className="d-flex jus_set">
<div className="lfselect">   
                <label htmlFor="sortOrder" className="labelling">
                For dynamic search results:
                </label>
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Show Map & Listing Card">Show Map & Listing Card</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
           </div>
            <div className="lfselect rfselect">  
                <label htmlFor="sortOrder" className="labelling">
                For saved searches, featured listings, and search links from featured locations
                </label>
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Show Map & Listing Card">Show Map & Listing Card</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
            </div>

</div>
      
                                    
                              
                                 
                                    </div>
                                    <div className="center_border"></div>


                                    <div className="title_bar_setting ">
                                    <h3>Listing and Property Type Options</h3>

                                    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Define pending as any listing under contract
    </label>

    <div className="d-flex bottom_select_custom jus_set">
<div className="lfselect">   
                <label htmlFor="sortOrder" className="labelling">
                Default listing type when creating new pages:
                </label>
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Default Property Types">Default Property Types</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
           </div>
            <div className="lfselect rfselect">  
                <label htmlFor="sortOrder" className="labelling">
                Default property types when creating new pages:
                </label>
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Default Property Types">Default Property Types</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
            </div>

</div>


      
                                    
                              
                                 
                                    </div>
                                   


                                    <div className="center_border"></div>



                                  



<div className="title_bar_setting ">
<h3>Listing and Property Type Options</h3>
<label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        List simple zips before zip, city combinations in search recommendations.
    </label>
    {inputs.map((input, idx) => (
    <div className="form-group" key={input.id}>
        {idx === 0 && (
            <label htmlFor="callMeNowPhone">
                In the location filter, before you start typing to search for a location, these recommended options will show up in the menu.
            </label>
        )}
        <div className="d-flex custom_fcontrol search_page_only">
            <div className="left_farea">
                <input
                    type="text"
                    className="form-control"
                    value={input.value}
                    onChange={(e) => handleInputChange(input.id, e)}
                    placeholder="Type a neighbourhood, city, counter, zip or area"
                />
            </div>
            <div className="right_farea">
                <img 
                    src={Close} 
                    alt="remove" 
                    style={{cursor: 'pointer'}}
                    onClick={() => handleRemoveInput(input.id)} 
                />
            </div>
        </div>
    </div>
))}

            <div className="add-location-link">
                <button onClick={handleAddInput}>Add Location</button>
            </div>
        </div>
        <div className="center_border"></div>

        <div className="title_bar_setting ">
<h3>Market Report Options</h3>


<div className="d-flex checkboxes_set round_checks">

<div className="left_check_content">Default location type when searching:</div>
<div className="right_checks d-flex">

<label className="custom-checkbox-container">
<input type="checkbox" className="custom-checkbox" />
<span className="checkmark"></span>
Neighbourhood
</label>
<label className="custom-checkbox-container second_check_fl">
<input type="checkbox" className="custom-checkbox" />
<span className="checkmark"></span>
Zip
</label>

</div>

</div>


<div className="d-flex bottom_select_custom jus_set">
<div className="lfselect">   
<label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Use simple zips rather than zip, city combos for Market Reports
    </label>
</div>
<div className="lfselect rfselect">  
<label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Hide Nearby Markets section
    </label>

</div>

</div>

<p>Note: this option allow zips to be presented independent of city, but will remove some comparison options.</p>






</div>
<div className="center_border"></div>

<div className="title_bar_setting ">
                                    <h3>Price Options</h3>


                                    <div className="lfselect">   
                <label htmlFor="sortOrder" className="labelling">
                Default start price options
                </label>
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Default Property Types">Choose Price Range</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
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
                                <div className="mutual_blocks amp-pages ldisplay search_page second_mtdis searchresctrivction">
                                    <h2>Search Restrictions</h2>
                                    <p>By default, your website searches will use all the possible data from your MLS. If you want, you can choose to restrict the data to only find listings from certain locations, and to exclude certain types of listings.</p>
                                   
                                   
                                    <div className="title_bar_setting">
                                    <h3>Exclude Listings</h3>

                                    <div className="flex_p d-flex">
                                        <div className="left_p">Choose the types of listings (if any) that you would like to exclude from your IDX searches.
                                        <div className="d-flex bottom_select_custom jus_set">
<div className="lfselect">   
               
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Default Property Types">Listing Types to Exclude</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
           </div>
            <div className="lfselect rfselect">  
                
                <div className="">
                <select 
            className="form-select" 
            aria-label="Default select example" 
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="Default Property Types">Property Types to Exclude</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
                </div>
            </div>

</div>
                                        </div>
                                        <div className="right_check">
                                        <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
Exclude Pendings Listings    </label>
                                            
                                        </div>
                                    </div>
                                    <div class="center_border"></div>

<h3>Only Show Listings In These Locations</h3>
<p>All IDX searches will be restricted to ONLY search for listings in the locations you enter.</p>

<div className="city_state d-flex">

<div className="left_cities_enter">


   
<form onSubmit={handleCitySubmit}>
        <div className="input-group mb-3">
        <label >
        Cities
                
            <input 
                type="text" 
                className="form-control" 
                placeholder="Add your city..." 
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
            /></label>
        </div>
    </form>

    <div className="d-flex flex-wrap">
        {searchedCities.map(city => (
            <div key={city} className="m-2 d-flex align-items-center location_seting">
                {city}
                <button 
                    className="btn btn-sm ml-2 delete_location" 
                    onClick={() => handleCityDelete(city)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        ))}
    </div>




</div>
<div className="right_state_enter">

    <form onSubmit={handleStateSubmit}>
        <div className="input-group mb-3">
        <label>
                States
               
            <input 
                type="text" 
                className="form-control" 
                placeholder="Add your state..." 
                value={stateInput}
                onChange={(e) => setStateInput(e.target.value)}
            /> </label>
        </div>
    </form>

    <div className="d-flex flex-wrap">
        {searchedStates.map(state => (
            <div key={state} className="m-2 d-flex align-items-center location_seting">
                {state}
                <button 
                    className="btn btn-sm ml-2 delete_location" 
                    onClick={() => handleStateDelete(state)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        ))}
    </div>

</div>


</div>


<div class="center_border"></div>

<h3>Listing Status Restrictions</h3>
<p>Values selected below will be filtered out of your search results</p>

<div className="city_state d-flex">

<div className="left_cities_enter full_width_small">


   
<form onSubmit={handleStatusSubmit}>
        <div className="input-group mb-3">
        <label>
            Listing Status
                
            <input 
                type="text" 
                className="form-control" 
                placeholder="Add your listing status..." 
                value={statusInput}
                onChange={(e) => setStatusInput(e.target.value)}
            />
        </label>
        </div>
    </form>

    <div className="d-flex flex-wrap">
        {searchedListingStatuses.map(status => (
            <div key={status} className="m-2 d-flex align-items-center location_seting">
                {status}
                <button 
                    className="btn btn-sm ml-2 delete_location" 
                    onClick={() => handleStatusDelete(status)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        ))}
    </div>



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
                                    </div></div>
                                    </div>




                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
