import React, { useState } from 'react';
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';



function ExtraCode() {
    const [headerCode, setHeaderCode] = useState(''); 
    const [footerCode, setFooterCode] = useState('');

    // Handler Functions
    const handleHeaderCodeChange = (e) => {
        setHeaderCode(e.target.value);
    };

    const handleFooterCodeChange = (e) => {
        setFooterCode(e.target.value);
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
                            <h2>Extra Code</h2>
                            <p>Use at your own risk. Malformed code you put here can completely break your website.</p>
                       
                            <div className="title_bar_setting">
                            <h3>Header Code</h3>
                            <div className="form-group">
   
                            <textarea
                                                id="headerCodeTextArea"
                                                className="form-control area_control"
                                                value={headerCode}
                                                onChange={handleHeaderCodeChange}
                                                placeholder="Write your code here for header"
                                            />
</div>

                           
                            </div>
<div className="center_border"></div>
                              
                            <div className="title_bar_setting second_input">
                            <h3>Footer Code</h3>
                            <div className="form-group">
   
                            <textarea
                                                id="footerCodeTextArea"
                                                className="form-control area_control"
                                                value={footerCode}
                                                onChange={handleFooterCodeChange}
                                                placeholder="Write your code here for footer"
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

export default ExtraCode;
