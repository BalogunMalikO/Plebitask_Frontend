import React, { useState, useEffect, Fragment } from 'react';
import NavbarBrand from '../assets/navbar-brand.png'
import Rafiki from '../assets/rafiki.png'
import { Button } from '@mui/material';

const Login = ()=>{
    return (
        <Fragment>
            <div className='connect'>                
                <div className='row w-100 mx-auto'>
                    <div className='col-md-7 bg-plebitask px-5'>
                        <div className='py-5'>
                            <img  src={NavbarBrand} className="navbar-brand img-fluid"/>
                        </div>
                        <div className='py-5 col-xl-6 mt-4'>
                            <p className='fw-bold fs-2 pt-5'>
                                Welcome to Plebitask
                            </p>
                            <p className='fw-light fs-3'>
                            Connect your Wallet to continue.
                            </p>
                            <Button className='px-4 py-2 btn-plebitask text-white mt-1 mb-5 fw-bold'>
                                Connect Wallet
                            </Button>
                        </div>
                    </div>
                    <div className='col-md-5 plebitask-complement p-5'>
                        <p className='fw-bold fs-4'>
                            Perform task on Plebitask and earn Sats.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <img src={Rafiki} className='img-fluid' alt='cuate'/>
                        </div>
                        <p className='fw-bold fs-5'>
                            How it works
                        </p>
                        <p className='fs-6 fw-light'>
                            Welcome to Plebitask. Click on the <strong className='fw-bold'>"Connect Wallet"</strong> button. Connect your wallet, set display name and display picture. Once logged in, you'll have access to our platform's features.
                        </p>
                    </div>
                </div>                
            </div>
        </Fragment>
    )
}

export default Login