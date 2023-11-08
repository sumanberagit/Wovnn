import React from 'react';
import './Listings.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';



function Listings() {
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
                        <div className="mutual_blocks listing-tables">
                         
                        

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
}

export default Listings;
