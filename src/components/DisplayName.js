import { ArrowBack } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router';

const SetDisplayName = ()=>{
    const navigate = useNavigate()
    const next = ()=>{
        navigate('/set/display-picture')
    }
    return (
        <Fragment>
            <div className='py-5'>
                <IconButton onClick={()=>navigate('/')} className='text-green pb-3'>
                    <ArrowBack /> back
                </IconButton>
                <div className='d-flex justify-content-center'>
                    <div className='col-md-6 col-xl-4'>
                        <p className='text-center h2 fw-bold'>
                            Set Display Name
                        </p>
                        <p className='text-center'>
                            Your Display Name is how you want to be known in the Plebitask community
                        </p>
                        <div className='form-group'>
                            <p className='text-green text-center'>
                                Input Display Name
                            </p>
                            <input className='form-control rounded-0 plebitask-input py-3' />
                            <Button onClick={next} className='px-4 py-2 btn-plebitask text-white my-4 w-100 fw-bold'>
                                NEXT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SetDisplayName