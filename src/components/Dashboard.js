import { Add, HeartBroken, MonitorHeart, Search, Settings, Star, ViewAgendaOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { useState, useEffect, Fragment } from 'react';
import Banner from '../assets/banner-dash.png'
import SecondPic from '../assets/second-pic.png'
import Verify from '../assets/verified.png'
import BTC from '../assets/btc.png'
import EditUser from '../assets/edit-user-02.png'
import CoinBtc from '../assets/coins-bitcoin.png'

const Dashboard = ()=>{
    const [task, setTask] = useState([1,2,3,4,5,6])
    return (
        <Fragment>
            <div className='container'>
                <div className='row w-100 my-5 mx-auto'>
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
                    <div className='col-md-9'>
                        <div className='px-md-4 px-1'>
                            {/* Banner */}
                            <div className='row banner'>
                                <div className='col-md-5 ps-4 pt-4'>
                                    <p className='text-white fw-bold fs-4'>
                                        Perform tasks or create on Plebitask to earn sats.
                                    </p>
                                    <Button className='btn-plebitask text-white px-4 fw-bold'>
                                        Get Started
                                    </Button>
                                </div>
                                <div className='col-md-7'>
                                    <img src={Banner} className='img-fluid' />
                                </div>
                            </div>
                            {/* Banner */}
                            {/* Trending Task */}
                            <div className='trending-task mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-white fw-bold fs-5'>Trending Task</p>
                                    <Button className='text-white text-capitalize'>
                                        View All Task
                                    </Button>
                                </div>
                            </div>
                            {/* Trending Task */}
                            <div className='row w-100 mx-auto'>
                                {
                                    task.map((each, i)=>(
                                        <div key={i} className='col-xl-4 col-md-6 mb-4'>
                                            <div className='task-card border rounded-3 py-3 px-2'>
                                                <div className='row'>
                                                    <div className='col-7'>
                                                        <div className='d-flex'>
                                                            <div className='pe-1'>
                                                                <img className='rounded-3' src={SecondPic} height={'30px'} />
                                                            </div>
                                                            <div className='ps-1'>
                                                                <p className='fw-bold fs-8 text-white my-0'>Timotheus <img src={Verify} className='' height={'10px'} alt='verified' /> </p>
                                                                <p className='fs-9 text-white'>Blockchain Expert l NFT Geeks #Bitcoin #Moon #Crypto</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-5'>
                                                        <p className='text-center text-yellow fs-8 border border-yellow bg-light-yellow rounded-3 py-2'><img src={BTC} alt='btc'/> 300 sats</p>
                                                    </div>
                                                </div>
                                                {/* Card Title */}
                                                <p className='text-white fs-7 fw-bold'>
                                                    Completely watch, like and comment two (2) YouTube videos (45mins view time)
                                                </p>
                                                {/* Card Action */}
                                                <div className='action'>
                                                    <div className='d-flex text-white justify-content-between my-0'>
                                                        <p className='fs-7 fw-bold my-0'><img src={EditUser} alt='edit' /> 50/303 Completed</p>
                                                        <p className='fs-7 my-0'><img src={CoinBtc} alt='coin' /> <strong>90,900</strong> sats paid</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between my-0'>
                                                        <p className='fs-7 text-white my-0'>
                                                            <i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i><i className='fa fa-star'></i><i className='fa fa-star'></i> (60)
                                                        </p>
                                                        <p className='fs-7 text-yellow my-0'><i className='fa fa-heart'></i> Save Task</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard