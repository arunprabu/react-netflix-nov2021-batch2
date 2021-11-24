import React from 'react'

const LatestMovie = (props ) => { // props will fetch the props from parent comp

  console.log(props);

  /* Props 
    * Props are objects 
    * Props are read-only
    * Props can have children
  */

  return (
    <div className="card mb-3">
      <div className="card-header">
        In Theatres  
        <span className="badge rounded-pill bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary">Watch it now</button>
      </div>
    </div>
  )
}

export default LatestMovie;
