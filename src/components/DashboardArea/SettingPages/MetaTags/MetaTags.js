import React, { useState } from 'react';
import '../SettingPages.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';

function MetaTags() {
    const [metaTitle, setMetaTitle] = useState(''); 
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState(''); 

const handleMetaTitleChange = (e) => {
    setMetaTitle(e.target.value);
};

const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value);
};

const handleMetaKeywordsChange = (e) => {
    setMetaKeywords(e.target.value); 
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
                                <div className="mutual_blocks amp-pages mtags">
                                    <h2>Meta Tags</h2>
                                    <p>Instructions: Your Title, Description and Keywords Meta Tags are used by search engines to help rank your web pages. Please do not attempt to format the text or insert html coding.</p>
                                   
                                    <div className="title_bar_setting">
                                    <h3>Title</h3>




                                    <div className="form-group">
                                        <label htmlFor="ampHeaderTitle">This title will be appended to the page name for each of your pages, unless you override it by providing a page specific meta title in its Advanced Page Settings.</label>
                                        <div className="d-flex custom_fcontrol">
    <div className="left_farea">        <input
                                        type="text"
                                        id="metaTitleInput"
                                        className="form-control"
                                        value={metaTitle}
                                        onChange={handleMetaTitleChange}
                                        placeholder="Banks Real Estate | All Professional Real Estates"
                                    /></div>
    <div className="right_farea">Should be no more than 8-10 words</div>
</div>

                                
                                    </div>
                                  
                                    </div>

                                    <div className="center_border"></div>

                                    <div className="title_bar_setting second_input">
                                    <h3>Meta Description</h3>
                                    
                                    <div className="form-group">
                                        <label htmlFor="callMeNowPhone">This meta description will be used for your homepage, and as the default description for each of your pages, unless you override it by providing a page specific description in its Advanced Page Settings.</label>

                                        <div className="d-flex custom_fcontrol">
    <div className="left_farea">           <input
                                        type="text"
                                        id="metaDescriptionInput"
                                        className="form-control"
                                        value={metaDescription}
                                        onChange={handleMetaDescriptionChange}
                                        placeholder="Banks Homes for Sale, Property Search in Banks"
                                    /></div>
    <div className="right_farea">Should be no more than 2 to 3 sentences</div>
</div>

                                        
                             
                                    </div>
                                 
                                    </div>
                                    <div className="center_border"></div>
                                    <div className="title_bar_setting second_input">
                                    <h3>Meta Keywords</h3>
                                    <div className="form-group">
                                    <div className="d-flex custom_fcontrol">
    <div className="left_farea">  <input
                                        type="text"
                                        id="metaKeywordsInput"
                                        className="form-control"
                                        value={metaKeywords}
                                        onChange={handleMetaKeywordsChange}
                                        placeholder="Property Search in Banks | Real Estate in Banks | Property Buy"
                                    /></div>
    <div className="right_farea"></div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetaTags;
