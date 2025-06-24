import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div>
      <h1>Error Page</h1>
      <h2>Oops ! an error occured</h2>
      <p>{error.data}</p>
      <div>
        <NavLink to="/">
          <button>Go Home</button>
        </NavLink>
      </div>
     
    </div>
  );
}
