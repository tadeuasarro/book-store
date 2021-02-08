import React from 'react';

const NavBar = () => (
  <nav className="d-flex a-items-center font-montserrat bg-white">
    <h2 className="title text-blue">
      Bookstore CMS
    </h2>
    <p className="nav-link text-uppercase">
      books
    </p>
    <p className="nav-link text-uppercase">
      categories
    </p>
    <div className="user-icon text-blue d-flex a-items-center j-c-center thin-grey-border">
      <i className="fas fa-user" />
    </div>
  </nav>
);

export default NavBar;
