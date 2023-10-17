import { ArrowBack } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import Sidenav from '../layouts/Sidenav';

const CreateTask = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className='container mb-5'>
                <IconButton onClick={()=>navigate('/user/dashboard')} className='text-green py-5'>
                    <ArrowBack /> back
                </IconButton>
                <div className='row w-100 mx-auto'>
                    <Sidenav />
                    <div className='col-md-6 ps-md-4'>
                        <p className='text-white fw-bold fs-5'>Create Task</p>
                        <div className='form-group my-4'>
                            <label className='text-white'>Task Title</label>
                            <input className='form-control rounded-0 task-input py-2 my-1' />
                        </div>
                        <div className='form-group my-4'>
                            <label className='text-white'>Task Description</label>
                            <textarea placeholder='2000 words' className='form-control rounded-0 task-input py-2 my-1' rows={4} />
                        </div>
                        <div className='form-group my-4'>
                            <label className='text-white'>Reward in Sats</label>
                            <input className='form-control rounded-0 task-input py-2 my-1' />
                        </div>
                        <div className='form-group my-4'>
                            <label className='text-white'>Paste Task Link</label>
                            <input className='form-control rounded-0 task-input py-2 my-1' />
                        </div>
                        <div className='d-flex'>
                            <Button className='btn-plebitask text-white px-5 py-2 fs-5 me-md-2'>
                                Create Task
                            </Button>
                            <Button className='text-capitalize text-white fs-5 px-5 py-2 border ms-md-2'>
                                Schedule for Later
                            </Button>
                        </div>
                    </div>
                </div>  
            </div>
        </Fragment>
    )
}

export default CreateTask