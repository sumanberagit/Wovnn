import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginRegister from "./components/LoginRegister/LoginRegister";
import DashboardArea from "./components/DashboardArea/DashboardArea";
import TeamMates from "./components/DashboardArea/TeamMates/TeamMates";

import Listings from "./components/DashboardArea/Listings/Listings";
import AmpPages from "./components/DashboardArea/SettingPages/AmpPages/AmpPages";
import GoogleAnalytics from "./components/DashboardArea/SettingPages/GoogleAnalytics/GoogleAnalytics";
import ExtraCode from "./components/DashboardArea/SettingPages/ExtraCode/ExtraCode";
import MetaTags from "./components/DashboardArea/SettingPages/MetaTags/MetaTags";
import ListingDisplay from "./components/DashboardArea/SettingPages/ListingDisplay/ListingDisplay";
import Search from "./components/DashboardArea/SettingPages/Search/Search";
import Branding from "./components/DashboardArea/SettingPages/Branding/Branding";



function App() {
  return (
      <div className="app-container">
          <BrowserRouter>
             {/*  <Navigation /> */}
             
              <Routes>
                  <Route path="/" index element={<LoginRegister />} /> 
                  <Route path="dashboard" index element={<DashboardArea />} />
                  <Route path="team-mates" index element={<TeamMates />} /> 
                  <Route path="listings" index element={<Listings />} /> 
                  <Route path="amp-pages" index element={<AmpPages />} /> 
                  <Route path="google-analytics" index element={<GoogleAnalytics />} /> 
                  <Route path="extra-code" index element={<ExtraCode />} />
                  <Route path="meta-tags" index element={<MetaTags />} />
                  <Route path="listing-display" index element={<ListingDisplay />} />
                  <Route path="search" index element={<Search />} />
                  <Route path="branding" index element={<Branding />} />
                
              </Routes>
            {/*   <Footer /> */}
          </BrowserRouter>
      </div>
  );
}

export default App;
