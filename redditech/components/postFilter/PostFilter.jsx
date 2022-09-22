import React from 'react'


const PostFilter = () => {
  return (
    <div className="filterBox">
        <button  className="hot"><i className="fas fa-fire"></i>Hot</button>
        <button className="new"><i className="fas fa-certificate"></i>New</button>
        <button className="top"><i className="fas fa-angle-up"></i>Top</button>
        <button  className="rising"><i className="fas fa-chart-line"></i>Rising</button>
        
    </div>
  )
}

export default PostFilter

