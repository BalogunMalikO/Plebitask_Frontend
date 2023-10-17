import { Button } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import Banner from '../assets/banner-dash.png'
import Amico from '../assets/amico.png'

const About = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className='container px-md-0 px-4'>                
                <div className='d-flex justify-content-between pt-4 flex-md-row flex-column'>
                    <p className='fw-bold fs-4 text-white'>About Plebitask</p>
                    <Button onClick={()=>navigate('/user/dashboard')} className='text-capitalize border border-yellow rounded-0 text-white px-4 fw-bold'>
                        Return to Dashboard
                    </Button>
                </div>
                {/* Banner */}
                <div className='row banner rounded-4 my-4'>
                    <div className='col-md-5 ps-md-4 pt-md-4'>
                        <p className='text-white fw-bold fs-4 px-md-5 px-2 pt-md-5 pt-3'>
                            Perform tasks or create on Plebitask to earn sats.
                        </p>
                        <Button onClick={()=>navigate('/user/create-task')} className='btn-plebitask text-white px-4 fw-bold mx-md-5 mx-2'>
                            Get Started
                        </Button>
                    </div>
                    <div className='col-md-7'>
                        <img src={Banner} className='img-fluid mt-md-0 mt-3' />
                    </div>
                </div>
                {/* Banner */}
                {/* Welcome */}
                <div className='row btn-plebitask p-md-5 p-2 rounded-4'>
                    <div className='col-md-6'>
                        <img src={Amico} className='img-fluid' />
                    </div>
                    <div className='col-md-6 text-white pt-5'>
                        <p className='fw-bold fs-2'>
                            Welcome to Plebitask.
                        </p>
                        <p className='fs-5 fw-light'>
                            Plebitask is a decentralized platform where you can  earn Satoshi by completing various tasks. The tasks vary depending on the demand from the task creator, ensuring a diverse range of opportunities. 
                        </p>
                        <p className='fs-5 fw-light'>
                            Our dedicated team ensures that a real human being attends to your terms and conditions while you earn Satoshi for your efforts
                        </p>
                    </div>
                </div>
                {/* Welcome */}
                {/* How it works */}
                <div className='how-it-works py-5 mb-5'>
                    <p className='text-white fs-4 fw-bold'>
                        How it works
                    </p>
                    <div className='row w-100 row-cols-md-3 row-cols-1 g-4 mx-auto'>
                        <div className='col'>
                            <div className='card how-card rounded-4 p-3 h-100 shadow'>
                                <div className='d-flex'>
                                    <p className='fw-bold fs-3 how-title'>1</p>
                                    <p className='ps-4 fs-4 fw-bold how-title'>Connect Wallet</p>
                                </div>
                                <p className='text-white text-justify fs-10'>
                                    Visit Plebitask website and click on the "Connect Wallet" button. Connect your wallet, set display name and display picture. Once logged in, you'll have access to our platform's features.
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card how-card rounded-4 p-3 h-100 shadow'>
                                <div className='d-flex'>
                                    <p className='fw-bold fs-3 how-title'>2 </p>
                                    <p className='ps-4 fw-bold how-title fs-4'>Find task or create task on Plebitask</p>
                                </div>
                                <p className='text-white text-justify fs-10'>
                                    On your dashboard menu, find a task, browse through the available listings or search for specific tasks based on your interests or skills. Each task entails its details, requirements, and payment information.
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card how-card rounded-4 p-3 h-100 shadow'>
                                <div className='d-flex'>
                                    <p className='fw-bold fs-3 how-title'>3</p>
                                    <p className='ps-4 fw-bold how-title fs-4'>Perform task and get paid</p>
                                </div>                                
                                <p className='text-white text-justify fs-10'>
                                    Once you've chosen a task, carefully read the task details, terms, and conditions set by the task creator. If you agree, start performing the task as instructed. Complete the task according to the specified guidelines and submit it. The task creator will review your work, and upon approval, you'll receive payment. Payments can be withdrawn only to your bitcoin wallet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About