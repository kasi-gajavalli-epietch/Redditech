import {useEffect, useState, useRef, CSSProperties} from 'react';


const Sidebar = () =>{

   


    return(
        <div className="container">
            <div className="comCats">
                <div>POPULAR COMMUNITIES<i className="fas fa-chevron-down"></i></div>
                <div>GAMING<i className="fas fa-chevron-down"></i></div>
                <div>SPORTS<i className="fas fa-chevron-down"></i></div>
                <div>TV<i className="fas fa-chevron-down"></i></div>
                <div>TRAVEL<i className="fas fa-chevron-down"></i></div>
                <div>HEALTH & FITNESS<i className="fas fa-chevron-down"></i></div>
                <div>FASHION<i className="fas fa-chevron-down"></i></div>
            </div>
            <div  className="links">
                <div>
                    <div><a href="/#">Help</a></div>
                    <div><a href="/#">Reddit App</a></div>
                    <div><a href="/#">Reddit Premium</a></div>
                    <div><a href="/#">Reddit Coins</a>  </div>
                    <div><a href="/#">Reddit Gifts</a></div>
                    <div><a href="/#">Communities</a></div>
                    <div><a href="/#">Rereddit</a></div>
                    <div><a href="/#">Topics</a></div>
                </div>
                <div>
                    <div><a href="/#">About</a></div>
                    <div><a href="/#">Careers</a></div>
                    <div><a href="/#">Press</a></div>
                    <div><a href="/#">Advertise</a></div>
                    <div><a href="/#">Blog</a></div>
                    <div><a href="/#">Terms</a></div>
                    <div><a href="/#">Content Policy</a></div>
                    <div><a href="/#">Privacy Policy</a></div>
                    <div><a href="/#">Mod Policy</a></div>
                </div>
                <div>Reddit EPITECH Inc © 2022. All rights reserved</div>
            </div>
        </div>
    )
}
export default Sidebar;