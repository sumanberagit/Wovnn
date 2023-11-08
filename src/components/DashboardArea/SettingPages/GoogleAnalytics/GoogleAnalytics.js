import React, { useState } from 'react';
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';



function GoogleAnalytics() {
    const [analyticsCode, setAnalyticsCode] = useState(''); 
    const [verificationTag, setVerificationTag] = useState('');

    const handleAnalyticsCodeChange = (e) => {
        setAnalyticsCode(e.target.value);
    };

    const handleVerificationTagChange = (e) => {
        setVerificationTag(e.target.value);
    };
    return    <div className="dashboard-container">
    <div className="sidebar-main">
        <Sidebar />
    </div>
    <div className="header-dasboard main_container">
        <Header />
        <div className="dashboard">
            <div className="container-fluid main_container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mutual_blocks amp-pages ga">
                            <h2>Google Analytics</h2>
                            <p>You can use <a href="https://analytics.google.com/analytics/attribution/onboarding">Google Analytics</a> to track your website traffic. You must register with <a href="https://analytics.google.com/analytics/attribution/onboarding">Google Analytics</a> before activating this feature. Use the form below to set up the tracking option on your website.</p>
                       
                            <div className="title_bar_setting">
                            <h3>Code Here <span className="smaller_text">It can take up to 24 hours for results to appear on Google Analytics.</span></h3>
                            <div className="form-group">
   
                            <textarea
            id="ampHeaderTitle"
            className="form-control area_control"
            value={analyticsCode}
            onChange={handleAnalyticsCodeChange}
            placeholder="Copy & Paste code here:"
        />
</div>

                            <label className="custom-checkbox-container">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className="checkmark"></span>
                                Include a “Get Pre-Approved” link
                            </label>
                            </div>

                            <div className="title_bar_setting second_input">
                          
                            <div className="form-group">
                                <label htmlFor="callMeNowPhone">If Google requires you to add a verification meta-tag, add the "content" field for the meta-tag here:</label>
                                <input
            type="text"
            id="callMeNowPhone"
            className="form-control"
            value={verificationTag}
            onChange={handleVerificationTagChange}
            placeholder="Copy & Paste code here:"
        />
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
</div>;
}

export default GoogleAnalytics;
