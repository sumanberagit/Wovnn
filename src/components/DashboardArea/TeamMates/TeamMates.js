import React, { useState } from 'react';
import './TeamMates.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';
import User6 from '../../../assets/user6.png';
import LeftArrow from '../../../assets/larrow.svg';

/* teammates */

const teamMates = [
    { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
    { name: 'Jane Cooper', sales: 18, imgSrc: User2 },
     { name: 'Theresa Webb', sales: 18, imgSrc: User3  },
     { name: 'Dianne Russell', sales: 18, imgSrc: User4  },
     { name: 'Jacob Jones', sales: 18, imgSrc: User5  },
     { name: 'Cody Fisher', sales: 18, imgSrc: User6  },
     { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
     { name: 'Jane Cooper', sales: 18, imgSrc: User2 },
      { name: 'Theresa Webb', sales: 18, imgSrc: User3  },
      { name: 'Dianne Russell', sales: 18, imgSrc: User4  },
      { name: 'Jacob Jones', sales: 18, imgSrc: User5  },
      { name: 'Cody Fisher', sales: 18, imgSrc: User6  },
      { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
      { name: 'Jane Cooper', sales: 18, imgSrc: User2 },
       { name: 'Theresa Webb', sales: 18, imgSrc: User3  },
       { name: 'Dianne Russell', sales: 18, imgSrc: User4  },
       { name: 'Jacob Jones', sales: 18, imgSrc: User5  },
       { name: 'Cody Fisher', sales: 18, imgSrc: User6  },
       { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
       { name: 'Jacob Jones', sales: 18, imgSrc: User5  },
       { name: 'Cody Fisher', sales: 18, imgSrc: User6  },
       { name: 'Kathryn Murphy', sales: 22, imgSrc: User1  },
      
   
  ];

const TeamMate = ({ name, sales, imgSrc }) => (
    <div className="teammatess">
        <img src={imgSrc} alt={name} className="teammate-img" />
        <div className="teammate-info">
            <h3>{name}</h3>
            <Link to={`/team-mates/${name.split(' ').join('-')}`} className="sales-link">

                {sales} sales
            </Link>
        </div>
    </div>
);

function TeamMates() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalResults = teamMates.length;
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTeammates = teamMates.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
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
                                <div className="mutual_blocks team_mamet">
                                    <div className="heading_inline d-flex team-matew-page">
                                        <div className="left_head">
                                            <h2>Team Mates</h2>
                                        </div>
                                        <div className="right_head">
                                            {`${indexOfFirstItem + 1}-${indexOfLastItem} of ${totalResults} Results`}
                                        </div>
                                    </div>

                                    <div className="teammate_list d-flex team-mate-page-only">
                                        {currentTeammates.map((mate, index) => (
                                            <TeamMate
                                                key={mate.PageNation} 
                                                name={mate.name}
                                                sales={mate.sales}
                                                imgSrc={mate.imgSrc}
                                            />
                                        ))}
                                    </div>

                                    <div className="custom-pagination">
                                        <ul>
                                            <li className="left_page" onClick={prevPage}>
                                                <span>
                                                    <img src={LeftArrow} alt="arrow" />
                                                </span>{' '}
                                                Prev
                                            </li>
                                            
                                            {pageNumbers.map((number) => (
                                                <li
                                                    key={number}
                                                    onClick={() => handleClick(number)}
                                                    className={currentPage === number ? 'active-page' : null}
                                                >
                                                    {number}
                                                </li>
                                            ))}
                                            
                                            <li className="right_page" onClick={nextPage}>
                                                Next{' '}
                                                <span>
                                                    <img src={LeftArrow} alt="arrow" className="rotate_img" />
                                                </span>
                                            </li>
                                        </ul>
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

export default TeamMates;
