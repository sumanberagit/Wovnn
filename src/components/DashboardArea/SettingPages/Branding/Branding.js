
import React, { useState } from 'react';
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import Brand from '../../../../assets/brand-logo.png';
import UploaderIcon from '../../../../assets/uploader.svg'; 
import Close from '../../../../assets/closer.png';

function Branding() {
  
    const [logoAltText, setLogoAltText] = useState("All Professionals Real Estate");
    const [urlLink, handleUrl] = useState("https://");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedFavicon, setUploadedFavicon] = useState(null);

    
    const handleInputChange = (event) => {
        setLogoAltText(event.target.value);
    };
    const handleUrlChange = (event) => {
        handleUrl(event.target.value);
    };



     // Handling image upload
     const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
          setUploadedImage(URL.createObjectURL(file));
        } else {
          setUploadedImage(null);
        }
      };

    // Handling image removal
    const handleImageRemove = () => {
        setUploadedImage(null);
      };

      /* Favicon */
      const handleFaviconUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setUploadedFavicon(URL.createObjectURL(file));
        } else {
            setUploadedFavicon(null);
        }
    };
    
    const handleFaviconRemove = () => {
        setUploadedFavicon(null);
    };

    const [address, setAddress] = useState('245, local city');
    const [city, setCity] = useState('Banks');
    const [stateName, setStateName] = useState('Oregon'); // renamed to avoid confusion with React's `useState`
    const [zipCode, setZipCode] = useState('97126');
    
    

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
                                <div className="mutual_blocks amp-pages branding-page">
                                    <h2>Branding</h2>
                                   
                                   
                                    <div className="title_bar_setting">
                                    <h3>Website Logo</h3>
                                    <p className="mt-top">Click "Upload" to select an image from your file manager. The preview image will update to show the new logo.</p>

                                    <div className="logo-uploader d-flex">
      <div className="web_logo">
        {uploadedImage && (
          <div className="closer" onClick={handleImageRemove}>
            <img src={Close} alt="remove" />
          </div>
        )}
        <img src={uploadedImage || Brand} alt="Brand Logo" />
      </div>
      <div className="logo_uploader">
       
        <label htmlFor="fileInput" style={{display: 'inline-block', width: '100%', height: '100%'}}>
          <img src={UploaderIcon} alt="Brand Logo Uploader" />
          <p>Upload New Logo</p>
        </label>
       
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id="fileInput"
        />
      </div>
    </div>

  <div className="row align-items-center  search-custom brand_alt">
                <label htmlFor="sortOrder" className="col-form-label col-auto labelling">
                Logo alternate text
                </label>
                <div className="col-auto">
                <input 
                type="text"
                id="urltext"
                className="form-control" 
                value={logoAltText}
                onChange={handleInputChange}
            />
                </div>
            </div>


                              
                                  
                                    </div>

                                    <div className="center_border"></div>


<div className="company_links d-flex title_bar_setting ">

<div className="left_link_comp">                             <div className="round_checks">
                                    <h3>Logo Link</h3>
                                    <p className="mtset">Set your logo to link to your home page or any link you like.</p>
                                    <p className="logo_link_to">Link your logo to:</p>
    <div className="allchecks">
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Logo not linked
    </label>
    <label className="custom-checkbox-container">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Your Home Page
    </label>
    <label className="custom-checkbox-container last_check">
        <input type="checkbox" className="custom-checkbox" />
        <span className="checkmark"></span>
        Custom URL    <input 
    type="text"
    id="logoAltText"
    className="form-control" 
    value={urlLink}
    onChange={handleUrlChange}
/>
    </label>
    </div>
</div></div>
<div className="right_link_comp">

<h3>Fav Icon</h3>
<div className="favicon_uploader">
    {uploadedFavicon ? (
        <>
            <div className="close_fav" onClick={handleFaviconRemove}>
                <img src={Close} alt="remove" />
            </div>
            <img src={uploadedFavicon} alt="Uploaded Fav Icon" className="favicon_image"/>
        </>
    ) : (
        <label htmlFor="faviconInput" className="favicon_label">
            <img src={UploaderIcon} alt="Favicon Uploader" />
            <p>Upload Fav Icon</p>
        </label>
    )}
    <input
        type="file"
        accept="image/*"
        onChange={handleFaviconUpload}
        className="favicon_input"
        id="faviconInput"
    />
</div>

<p>Your favicon is the icon that shows in browser tabs when someone is viewing one of your website pages. Recommended size is 16x16 or 32x32 pixels.</p>

      

</div>


</div>


       
                                    <div className="center_border"></div>

                                    <div className="company_links d-flex title_bar_setting ">

<div className="left_link_comp">                             <div className="round_checks">
                                    <h3>Office Location</h3>
                                    <p className="mtset">The office location defined here is used for display purposes on your website.</p>

                                    <div className='contant_location_form'>

                                    <div className='row'>
            <div className='col-lg-6'>
                <label>Address</label>
                <input 
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className='col-lg-6'>
                <label>City</label>
                <input 
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className='col-lg-6'>
                <label>State</label>
                <input 
                    type="text"
                    className="form-control"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                />
            </div>
            <div className='col-lg-6'>
                <label>Zip Code</label>
                <input 
                    type="text"
                    className="form-control"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
            </div>
        </div>


                                    </div>
                               
</div></div>
<div className="right_link_comp">

<h3>Contact Information</h3>
<p>This information will appear on your website widgets.</p>



      

</div>


</div>
                          
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branding;
