import React from 'react';
import './DashboardArea.css';
import GoogleAnalytics from './GoogleAnalytics/GoogleAnalytics';
import AmpPages from './AmpPages/AmpPages';
import ExtraCode from './ExtraCode/ExtraCode';
import ListingDisplay from './ListingDisplay/ListingDisplay';
import MetaTags from './MetaTags/MetaTags';
import Search from './Search/Search';
import Search from './Branding/Branding';



function SettingPages() {
    return  <div className="setting-pages">
     <AmpPages/>
     <GoogleAnalytics/>
     <ExtraCode/>
     <ListingDisplay/>
     <MetaTags/>
     <Search/>
     <Branding/>
  
</div>;
}

export default SettingPages;
