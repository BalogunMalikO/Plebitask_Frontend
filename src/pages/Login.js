import React, { useState, useEffect, Fragment } from 'react';
import NavbarBrand from '../assets/navbar-brand.png'
import Cuate from '../assets/cuate.png'
import { Button } from '@mui/material';

const Login = ()=>{
    return (
        <Fragment>
            <div className='login p-md-5 p-2'>
                <nav className="navbar navbar-expand-md navbar-light bg-navbar">
                    <div className="container-fluid">
                        <img  src={NavbarBrand} className="navbar-brand img-fluid"/>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon color-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-md-2 menuItems">
                                <a className="nav-link text-white light-bold" href="#">Create Account</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link text-white light-bold" href="#shop">FAQ</a>
                            </li>                            
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className='form py-5'>
                    <p className='text-white fw-bold fs-3'>
                        Log In to Plebitask
                    </p>
                    <div className='row w-100 mx-auto'>
                        <div className='col-md-5'>
                            <div className='form-group'>
                                <label className='form-label plebitask-label'>
                                    Enter Email
                                </label>
                                <input className='form-control form-control-lg rounded-0 plebitask-input' />
                            </div>
                            <Button className='w-100 btn-plebitask text-white'>
                                Sign In
                            </Button>
                        </div>
                        <div className='col-md-7 d-md-block d-none'>
                            <div className='d-flex justify-content-center'>
                                <img src={Cuate} className='img-fluid' alt='cuate'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login