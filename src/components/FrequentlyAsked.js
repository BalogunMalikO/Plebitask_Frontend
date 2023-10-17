import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import Sidenav from '../layouts/Sidenav';

const FrequentlyAsked = ()=>{
    const [arr, setArr] = useState([1,2,3,4,5,6,7])
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className='container mb-5'>
                <IconButton onClick={()=>navigate('/user/dashboard')} className='text-green py-5'>
                    <ArrowBack /> back
                </IconButton>
                <div className='row w-100 mx-auto'>
                    <Sidenav />
                    <div className='col-md-9'>   
                        <p className='fw-bold fs-5 text-white'>
                            Frequently Asked Questions  
                        </p>                     
                        <div className='accordion accordion-flush'>
                            {
                                arr.map((each, i)=>(
                                    <div className="accordion-item border-0">
                                        <h2 className="accordion-header py-2" id={'flush-heading'+i}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse'+i} aria-expanded="false" aria-controls={'flush-collapse'+i}>
                                            Deposit and withdraw bitcoin on Plebitask
                                        </button>
                                        </h2>
                                        <div id={'flush-collapse'+i} className="accordion-collapse collapse" aria-labelledby={'flush-heading'+i} data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Plebitask Is A Decentralized Platform Where You Can Earn Satoshi By Completing Various Tasks. The Tasks Vary Depending On The Demand From The Task Creator, Ensuring A Diverse Range Of Opportunities.
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FrequentlyAsked