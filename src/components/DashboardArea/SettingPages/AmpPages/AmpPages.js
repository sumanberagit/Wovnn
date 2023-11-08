import React, { useState } from 'react';
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';

function AmpPages() {
    const [ampHeaderTitle, setAmpHeaderTitle] = useState(''); 
    const [callMeNowPhone, setCallMeNowPhone] = useState('');

    const handleAmpHeaderTitleChange = (e) => {
        setAmpHeaderTitle(e.target.value);
    };

    const handleCallMeNowPhoneChange = (e) => {
        setCallMeNowPhone(e.target.value);
    };

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
                                <div className="mutual_blocks amp-pages">
                                    <h2>AMP Page Settings</h2>
                                    <p>Having AMP Pages enabled helps to capture leads from mobile devices. AMP pages are simplified lightweight versions of your saved search pages that are cached on lightning fast Google servers. This helps improve performance on mobile devices, which can improve your overall ranking in Google Searches.</p>
                                    <label className="custom-checkbox-container">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="checkmark"></span>
                                        Enable Google Amp Saved Search Pages
                                    </label>
                                    <div className="title_bar_setting">
                                    <h3>Title Bar Settings</h3>
                                    <div className="form-group">
                                        <label htmlFor="ampHeaderTitle">Amp Header Title:</label>
                                        <input
                                            type="text"
                                            id="ampHeaderTitle"
                                            className="form-control"
                                            value={ampHeaderTitle}
                                            onChange={handleAmpHeaderTitleChange}
                                            placeholder="Amp Header Title"
                                        />
                                    </div>
                                    <div className="small_text">
                                    This is the text that will appear in the fixed header bar for all of your amp pages. If nothing is entered here it will display your company name (if set) or your name.
                                    </div>
                                    </div>

                                    <div className="title_bar_setting second_input">
                                  
                                    <div className="form-group">
                                        <label htmlFor="callMeNowPhone">"Call Me Now" Phone Number:</label>
                                        <input
                                            type="text"
                                            id="callMeNowPhone"
                                            className="form-control"
                                            value={callMeNowPhone}
                                            onChange={handleCallMeNowPhoneChange}
                                            placeholder="Ph. No. here"
                                        />
                                    </div>
                                    <div className="small_text">
                                    Entering a value here will cause a phone icon to appear in the amp page title bar that will allow a potential client to call you directly. This is a great feature to enable since amp pages are designed for users already on mobile devices.
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmpPages;
