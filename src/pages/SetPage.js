import React, { useState, useEffect, Fragment } from 'react';
import NavbarBrand from '../assets/navbar-brand.png'
import { Outlet } from 'react-router';

const SetPage = ()=>{
    return (
        <Fragment>
            <div className='set-my-page p-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img  src={NavbarBrand} className="navbar-brand img-fluid"/>
                    </div>
                    <div>
                        <p className='d-md-block d-none'>
                            Plebitask Technology  - &copy; 2023  All rights reserved.
                        </p>
                    </div>
                </div>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default SetPage