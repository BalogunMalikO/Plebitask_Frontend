import { BookmarkAddedOutlined, BookmarkOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import BTC from '../assets/btc.png'
import SecondPic from '../assets/second-pic.png'
import Verify from '../assets/verified.png'
import EditUser from '../assets/edit-user-02.png'
import CoinBtc from '../assets/coins-bitcoin.png'

const Tasks = ()=>{
    const navigate = useNavigate()
    const [tasks, setTasks] = useState([1,2,3,4,5,6,7,8,9])

    return (
        <Fragment>
            <div className='container px-md-0 px-4'>
                <div className='d-flex justify-content-between py-4 flex-md-row flex-column'>
                    <p className='fw-bold fs-4 text-white'>Active Tasks</p>
                    <Button onClick={()=>navigate('/user/dashboard')} className='text-capitalize border border-yellow rounded-0 text-white px-4 fw-bold'>
                        Return to Dashboard
                    </Button>
                </div>
                {
                    tasks.map((each, i)=>(
                        <div key={i} className='row w-100 mx-auto mb-3 p-4 bg-task'>
                            <div className='col-md-10'>
                                <div className='d-flex flex-md-row flex-column'>
                                    <div className='pe-md-2'>
                                        <img src={SecondPic} className='rounded-circle border border-2 border-white' height={'70px'} />
                                    </div>
                                    <div className='ps-md-2 pt-md-0 pt-2 text-white'>
                                        <p>
                                            <span className='fw-bold pe-md-4 pe-2'>Timotheus <img src={Verify} className='img-fluid' alt='verified' /></span>
                                            <span className='text-muted ps-md-4 ps-2 fs-7'>Posted 6 hours ago</span>
                                        </p>
                                        <p>
                                            Completely watch, like and comment two (2) YouTube videos (45mins view time)
                                        </p>
                                        <p>
                                            <span className='fw-bold fs-7'><img src={EditUser} alt='edit' /> 50/303 Completed</span>
                                            <span className='px-md-5 px-3 fw-bold fs-7'><img src={CoinBtc} alt='coin' /> 90,900 sats paid</span>
                                            <span className='fs-7'><i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i><i className='fa fa-star text-yellow'></i> <span className='text-muted'>(100)</span> (200 Task Review) </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                            <div className='text-center'>
                                    <span className='text-center text-yellow fs-8 border border-yellow bg-light-yellow rounded-3 py-2 px-2'>
                                        <img src={BTC} alt='btc'/> 300 sats
                                    </span>
                            </div>
                                <p className='text-white text-center pt-4'><IconButton><BookmarkOutlined className='text-white' /></IconButton> Save Task</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Tasks