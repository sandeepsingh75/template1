import React from 'react';
import './People.css'
import { details } from '../details/PeopleDetails';

const People = () => {
    // console.log("details", details)
    return (
        // <div>
        //     <div className='img'>
        //     <img src="https://mountainlaurelrecoverycenter.com/wp-content/uploads/2018/02/valentines-day-for-the-single-person-in-recovery.jpg" alt="" className='image'/>
        //     </div>
        
        //    <h3 className='text-center'> title </h3>
        //    <p className='text-center'> description </p>
        // </div>
<>
        {
            details.map(detail=>(
                <div>
                <div className='img'>
                <img src="https://mountainlaurelrecoverycenter.com/wp-content/uploads/2018/02/valentines-day-for-the-single-person-in-recovery.jpg" alt="" className='image'/>
                </div>
            
               <h3 className='text-center'> {detail.name} </h3>
               <p className='text-center'> {detail.about} </p>
            </div>
            ))
        }
        </>
    );
};

export default People;