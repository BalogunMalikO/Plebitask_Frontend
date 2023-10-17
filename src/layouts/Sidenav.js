import React, { Fragment } from 'react';
import { IconButton } from '@mui/material';
import { Add, HeartBroken, MonitorHeart, Search, Settings, Star, ViewAgendaOutlined } from '@mui/icons-material';

const Sidenav = ()=>{
    return (
        <Fragment>
            <div className='col-md-1 px-2 bg-sidenav d-md-block d-none'>
                <div className='pt-4'>
                    <div className='d-flex justify-content-center'>                                
                        <IconButton className='sidenav-icon-bg p-3'>
                            <Search className='text-white' />
                        </IconButton>
                    </div>
                    <div className='d-flex justify-content-center pt-4'>
                        <IconButton className='sidenav-icon-bg p-3'>
                            <Add className='text-white' />
                        </IconButton>
                    </div>
                    <div className='d-flex justify-content-center pt-4'>
                        <IconButton className='sidenav-icon-bg p-3'>
                            <ViewAgendaOutlined className='text-white' />
                        </IconButton>
                    </div>
                    <div className='d-flex justify-content-center pt-4'>
                        <IconButton className='sidenav-icon-bg p-3'>
                            <Settings className='text-white' />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='col-md-2 d-md-block d-none px-3'>
                <div className='bg-sidenav text-white p-3'>
                    <p>Dashboard</p>
                    <p>Profile</p>
                    <p>Create Task</p>
                    <p>Trending Task</p>
                    <p>Saved</p>
                    <p>Task History</p>
                    <p>Wallet</p>
                    <p>FAQ</p>
                    <p>Referral Bonus</p>
                    <p>Settings</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidenav