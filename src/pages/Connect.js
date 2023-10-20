import React, { useState, useEffect, Fragment } from 'react';
import NavbarBrand from '../assets/navbar-brand.png'
import Rafiki from '../assets/rafiki.png'
import { Alert, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Download } from '@mui/icons-material';

const Login = ()=>{
    const navigate = useNavigate()
    const [snackbarstatus, setSnackbarStatus] = useState(false)
    const [response, setResponse] = useState('')
    const connect = async()=>{
        try {
            if(typeof window.liquid !== 'undefined') {
              window.liquid.enable().then(()=>{
                window.liquid.getAddress().then(res=>{                    
                    sessionStorage.setItem('liquid_addr', JSON.stringify(res))
                    navigate('/set/display-name')
                  }).catch(err=>{
                    setResponse('Unable to retrieve wallet address')             
                    setSnackbarStatus(true)
                })
              }).catch(err=>{
                setResponse('User rejected')             
                setSnackbarStatus(true)
              })                                  
            }else {
                setResponse('Install the Alby Extension on your Browser')             
                setSnackbarStatus(true)
            }
          }
          catch(error) {
            setResponse('User denied permission or cancelled')             
            setSnackbarStatus(true)
          }
    }
    const handleClose = (event, reason)=>{
        if (reason == 'clickaway') {
            return;
        }

        setSnackbarStatus(false)

    }
    const downloadAlby = ()=>{
        window.open('https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe')
    }

    return (
        <Fragment>
            <div className='connect'>                
                <div className='row w-100 mx-auto'>
                    <div className='col-md-7 bg-plebitask px-5'>
                        <div className='py-5'>
                            <NavLink className={'navbar-brand'} to={'/'}>
                                <img  src={NavbarBrand} className="img-fluid"/>
                            </NavLink>
                        </div>
                        <div className='py-5 col-xl-7 mt-4'>
                            <p className='fw-bold fs-2 pt-5'>
                                Welcome to Plebitask
                            </p>
                            <p className='fw-light fs-3'>
                            Connect your Wallet to continue.
                            </p>
                            <Button onClick={connect} className='px-4 py-2 btn-plebitask text-white mt-1 mb-5 fw-bold'>
                                Connect Wallet
                            </Button>
                            <Button onClick={downloadAlby} className='px-4 py-2 btn-dark text-capitalize text-white mt-1 mb-5 fw-bold mx-3'>
                               <Download className='me-2' /> Alby Extension
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

            <Snackbar open={snackbarstatus} onClose={handleClose} autoHideDuration={4000} >
                <Alert severity={'error'} onClose={handleClose} className='font-poppins' >
                    {response}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

export default Login