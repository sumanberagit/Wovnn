import React from 'react';
import './Dashboard.css';
import { 
  LineChart, Line, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Link } from 'react-router-dom';

import  User1  from '../../../assets/user1.png';
import  User2  from '../../../assets/user2.png';
import  User3  from '../../../assets/user3.png';
import  User4  from '../../../assets/user4.png';
import  User5  from '../../../assets/user5.png';
import  User6  from '../../../assets/user6.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faGoogle, /* FaRss */  } from '@fortawesome/free-brands-svg-icons';





const blockData = [
  { 
    iconClass: 'icon-vector4', 
    number: 12345, 
    text: 'Revenue', 
    chartData: [{uv: 300}, {uv: 400}, {uv: 250}, {uv: 310}, {uv: 280}, {uv: 225}, {uv: 400}],
    color: '#007AFF',
    blockClass: 'block-color1',
  },
  { 
    iconClass: 'icon-vector0', 
    number: 67890, 
    text: 'Sales in %', 
    chartData: [{uv: 200}, {uv: 100}, {uv: 200}, {uv: 310}, {uv: 20}, {uv: 325}, {uv: 800}],
    color: '#FF9600',
    blockClass: 'block-color2',
  },
  { 
    iconClass: 'icon-Vector1', 
    number: 11121, 
    text: 'Sales', 
    chartData: [{uv: 300}, {uv: 400}, {uv: 250}, {uv: 310}, {uv: 280}, {uv: 225}, {uv:1200}],
    color: '#28AC47',
    blockClass: 'block-color3',
  },
  { 
    iconClass: 'icon-Vector2', 
    number: 31415, 
    text: 'Active Listings', 
    chartData: [{uv: 300}, {uv: 500}, {uv: 100}, {uv: 600}, {uv: 50}, {uv: 100}, {uv: 400}],
    color: '#ED4949',
    blockClass: 'block-color4',
  },
];

/* Activity log chart */
const data = [
  { month: 'Jan 2023', medianList: 10000, medianSold: 200000 },
  { month: 'Feb 2023', medianList: 200000, medianSold: 100000 },
  { month: 'Mar 2023', medianList: 30000, medianSold: 1250 },
  { month: 'Apr 2023', medianList: 502144, medianSold: 260000 },
  { month: 'May 2023', medianList: 0, medianSold: 260000 },
  { month: 'June 2023', medianList: 310000, medianSold: 521254 },
  { month: 'July 2023', medianList: 310000, medianSold: 260000 },
  { month: 'Aug 2023', medianList: 340000, medianSold: 290000 },
  
];

const CustomizedXAxisTick = props => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={0} y={0} dy={16} 
        textAnchor="middle" 
        fill="#B4B9C8" 
        className="tick-label"
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomizedYAxisTick = props => {
  const { x, y, payload } = props;
  console.log("Rendering tick:", payload.value); 
  const formattedTick = `$${payload.value/1000}K`;

  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={0} y={0} dx={-16} 
        textAnchor="end" 
        fill="#B4B9C8" 
        className="tick-label"
      >
        {formattedTick}
      </text>
    </g>
  );
};



/* teammates */

const teamMates = [
  { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
  { name: 'Jane Cooper', sales: 18, imgSrc: User2 },
   { name: 'Theresa Webb', sales: 18, imgSrc: User3  },
   { name: 'Dianne Russell', sales: 18, imgSrc: User4  },
   { name: 'Jacob Jones', sales: 18, imgSrc: User5  },
   { name: 'Cody Fisher', sales: 18, imgSrc: User6  },
 
];

const TeamMate = ({ name, sales, imgSrc }) => (
  <div className="teammate">
    <img src={imgSrc} alt={name} className="teammate-img" />
    <div className="teammate-info">
      <h3>{name}</h3>
      <Link to={`/team-mates/${name.split(' ').join('-')}`} className="sales-link">
        {sales} sales
      </Link>
    </div>
  </div>
);




const Dashboard = () => {
  return (
    <div className="dashboard">
      
<div className="container-fluid main_container">
<div className="row">

 
  <div className="col-lg-10 col-sm-12 wid_adjust">



  <div className="row">
    {blockData.map((block, index) => (
        <div className={`col-lg-3 col-sm-12 col-md-6 ${block.blockClass}`} key={index}>
            <div className="block">
                <div className="icon-bg">
                    <span className={block.iconClass}></span>
                </div>
                <div className="chart-space">
                    <LineChart width={100} height={50} data={block.chartData}>
                        <Line 
                            type="monotone" 
                            dataKey="uv" 
                            stroke={block.color}
                            strokeWidth={3}
                            dot={false} 
                        />
                    </LineChart>
                    <p>{block.chartText}</p>
                </div>
                <div className="number">
                  
                    {index === 0 ? `$${block.number}` : (index === 1 ? `${block.number}%` : block.number)}
                </div>
                <p className="blockp">{block.text}</p>
            </div>
        </div>
    ))}
</div>

<div className="row">
  <div className="col-lg-12">
  <div className="mutual_blocks">
    <div className="heading_inline d-flex">
      <div className="left_head"><h2>Activity Log</h2></div>
      <div className="right_head"> <Link to="/more-details" className="details-link">
          More Details
        </Link></div>
    </div>
    <div className="mean_median d-flex">
<div className="left_mean"><span></span> Median List Price</div>
<div className="right_mean"><span></span> Median Sold Price</div>
    </div>

  <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
                }}
              >
<CartesianGrid strokeWidth={0.5} vertical={false} stroke="#efefef" />

                <XAxis dataKey="month" tick={<CustomizedXAxisTick />}  />
                <YAxis 
  tick={<CustomizedYAxisTick />} 
  domain={[0, 1000000]} 
/>
                <Tooltip />
                <Area type="monotone" dataKey="medianSold" stackId="1" stroke="#007AFF" fill="#007AFF"   fillOpacity={1} 
 />
                <Area type="monotone" dataKey="medianList" stackId="1" stroke="#22A9E0" fill="#22A9E0"   fillOpacity={1} 
 />
              </AreaChart>
            </ResponsiveContainer>
          </div>
  </div>
</div>


    </div>
    <div className="col-lg-2 col-sm-12 wid_set">

    <div className="mutual_blocks team_mamet">
    <div className="heading_inline d-flex">
      <div className="left_head"><h2>Team Mates</h2></div>
      <div className="right_head"> <Link to="/more-details" className="details-link">
          View All
        </Link></div>
    </div>

    <div className="teammate_list">
  {teamMates.map((mate, index) => (
    <TeamMate 
      key={index}
      name={mate.name}
      sales={mate.sales}
      imgSrc={mate.imgSrc}
    />
  ))}
</div>
  

          </div>

    </div>
    
    </div>
    
    <div className="row mt-4">
    <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="mutual_blocks borrom_blocks">
     <h3>Help center</h3>
     <p>Get answers to most of your questions here in the help centre.</p>
     <p className="top_set">Our friendly customers service team is standing by to help!</p>


     <div className="icon_text_area">
      
      <div className="iconing">
      <span class="icon-call icon_mut"></span>
        <span className="text_set">+1 (234) 567-8901</span>
      </div>

      <div className="iconing">
      <span class="icon-fax icon_mut"></span>
        <span className="text_set">+1 (234) 567-8901</span>
      </div>

      <div className="iconing">
      <span class="icon-message icon_mut"></span>
        <span className="text_set">Support@wonvv.com</span>
      </div>

      <div className="iconing">
      <span class="icon-calender icon_mut"></span>
        <span className="text_set">Schedule an Appointment</span>
      </div>
      
    </div>

</div>



    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="mutual_blocks ">
<div className="social_area">
<p>Sharing your Real Estate website on a regular basis will boost your visit as well as catch the eye of anyone searching for a Real Estate agent at the time.</p>
<div className="share_links d-flex">
<div className="single_social">
      <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
    <div className="single_social">
      <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div></div>
      
<div className="followme">

<h4>Follow Us</h4>

<div className="share_links d-flex">
    <div className="single_social">
      <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
    <div className="single_social">
      <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    <div className="single_social">
      <a href="https://dribbble.com/YourProfile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDribbble} />
      </a>
    </div>
    <div className="single_social">
      <a href="https://plus.google.com/YourProfile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
    
  </div>
      </div>
</div>
</div>

    </div>
    </div>
    
    </div></div>
  );
};

export default Dashboard;
