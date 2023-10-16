import React, { useState, useEffect, Fragment } from 'react';
import NavbarBrand from '../assets/navbar-brand.png'
import { Button, IconButton } from '@mui/material';
import { Logout, Notifications, Person, Search, VerifiedUser } from '@mui/icons-material';
import { Outlet } from 'react-router';
import SecondPic from '../assets/second-pic.png'
import Verify from '../assets/verified.png'
import Footer from '../layouts/Footer';
import { NavLink } from 'react-router-dom';

const User = ()=>{
    return (
        <Fragment>
            <div className='user'>
                <nav className="navbar navbar-expand-md navbar-light bg-navbar p-md-5 py-3">
                    <div className="container-fluid">
                        <a href='/' className='navbar-brand'>
                            <img  src={NavbarBrand} className="img-fluid"/>
                        </a>
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
                                <a className="nav-link text-white light-bold" href="#">Create Task</a>
                            </li>
                            <li className="nav-item px-md-2 menuItems">
                                <NavLink className="nav-link text-white light-bold" to={'/user/tasks'}>Task</NavLink>
                            </li>
                            <li className="nav-item px-md-2 menuItems">
                                <NavLink className="nav-link text-white light-bold" to={'/user/about'}>About</NavLink>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link text-white light-bold" href="#shop">FAQ</a>
                            </li> 
                            <li className='nav-item px-md-2 d-md-block d-none'>
                                <Button className='btn-plebitask text-white fw-bold'>
                                    Become Influencer
                                </Button>
                            </li> 
                            <div className='d-flex'>
                                <li className="nav-item px-md-2">
                                    <IconButton>
                                        <Search className='text-white' />
                                    </IconButton>
                                </li>
                                <li className="nav-item px-md-2">
                                    <IconButton>
                                        <Notifications className='text-white' />
                                    </IconButton>
                                </li>
                                <li className="nav-item px-md-2">
                                    <IconButton>
                                        <Person className='text-white' />
                                    </IconButton>
                                </li>
                                <li className="nav-item px-md-2">
                                    <IconButton>
                                        <Logout className='text-white' />
                                    </IconButton>
                                </li>
                            </div>                          
                        </ul>
                        </div>
                    </div>
                </nav>
                <section className='toolbar py-4'>
                    <div className='px-md-5 px-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='d-flex'>
                                    <div className='me-3'>
                                        <img src={SecondPic} className='rounded-circle border border-2 border-white' height={'70px'} />
                                    </div>
                                    <div className='ms-md-2'>
                                        <p className='fw-bold fs-4 text-white my-0'>Timotheus <img src={Verify} className='img-fluid' alt='verified' /> </p>
                                        <div className='d-flex'>
                                            <div>
                                                <p className='my-0 text-center fw-bold text-green fs-5'>122</p>
                                                <p className='text-white fs-7 fw-bold text-center'>followers</p>
                                            </div>
                                            <div className='mx-4'>
                                                <p className='my-0 text-center fw-bold text-green fs-5'>67</p>
                                                <p className='text-white fs-7 fw-bold text-center'>following</p>
                                            </div>
                                            <div>
                                                <p className='my-0 text-center fw-bold text-green fs-5'>37K</p>
                                                <p className='text-white fs-7 fw-bold text-center'>Task</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 d-md-block d-none'>
                                <div className='d-flex flex-md-row flex-column'>
                                    <div className='mt-3'>
                                        <p className='my-0 fw-normal'>Membership</p>
                                        <p className='text-white fw-bold fs-5'>Validator</p>
                                    </div>
                                    <div className='mx-5 mt-4'>
                                        <Button className='btn-yellow fw-bold px-5 rounded-2 font-poppins'>
                                            Deposit
                                        </Button>
                                    </div>
                                    <div className='mt-4'>
                                        <Button className='btn-grey fw-bold px-5 rounded-2 font-poppins'>
                                            Withdraw
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='bg-wallet-balance p-3 rounded-4 mx-auto'>
                                    <p className='text-white fs-6 fw-light my-0'>Wallet Balance</p>
                                    <p className='text-white fw-bold fs-5'><span>0.0002624 BTC</span> <span className='ps-2'>($7.05)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Outlet />
                <Footer />
            </div>
        </Fragment>
    )
}

export default User