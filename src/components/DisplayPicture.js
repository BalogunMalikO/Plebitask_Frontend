import { ArrowBack } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router';
import FirstPic from '../assets/first-pic.png'
import SecondPic from '../assets/second-pic.png'
import ThirdPic from '../assets/third-pic.png'
import FourthPic from '../assets/fourth-pic.png'

const SetDisplayPicture = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className='py-5'>
                <IconButton onClick={()=>navigate('/set/display-name')} className='text-green pb-3'>
                    <ArrowBack /> back
                </IconButton>
                <div className='d-flex justify-content-center'>
                    <div className='col-md-8 col-xl-6'>
                        <p className='text-center h2 fw-bold pb-4'>
                            Set Display Picture
                        </p>
                        <div className='row mx-auto'>
                            <div className='col-md-3 col-6'>
                                <div className='border border-white rounded-2 p-2'>
                                    <img alt='display-picture' className='img-fluid' src={FirstPic} />
                                </div>
                            </div>
                            <div className='col-md-3 col-6'>
                                <div className='border border-white rounded-2 p-2'>
                                    <img alt='display-picture' className='img-fluid' src={SecondPic} />
                                </div>
                            </div>
                            <div className='col-md-3 col-6'>
                                <div className='border border-white rounded-2 p-2'>
                                    <img alt='display-picture' className='img-fluid' src={ThirdPic} />
                                </div>
                            </div>
                            <div className='col-md-3 col-6'>
                                <div className='border border-white rounded-2 p-2'>
                                    <img alt='display-picture' className='img-fluid' src={FourthPic} />
                                </div>
                            </div>
                        </div>                        
                        <div className='d-flex justify-content-center'>
                            <div className='col-md-8'>                                
                                <Button className='w-100 py-2 btn-plebitask text-white my-4 fw-bold'>
                                    NEXT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SetDisplayPicture