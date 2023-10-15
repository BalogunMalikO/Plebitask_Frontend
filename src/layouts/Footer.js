import React, { Fragment } from 'react';

const Footer = ()=>{
    return (
        <Fragment>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <p className='text-white fw-bold pb-md-0 pb-3'>
                            Plebitask Technology  - &copy; 2023  All rights reserved.
                        </p>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex justify-content-around flex-md-row flex-column'>
                            <div>
                                <ul className='list-unstyled'>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Privacy Policy</a>
                                    </li>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Create Task</a>
                                    </li>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Active Task</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-unstyled'>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Terms & Conditions</a>
                                    </li>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Wallet Funding</a>
                                    </li>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Referral Bonus</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-unstyled'>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>About</a>
                                    </li>
                                    <li className='pb-1'>
                                        <a href='#' className='text-white text-decoration-none fw-bold-0'>Saved Task</a>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer