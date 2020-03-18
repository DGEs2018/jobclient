import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const Jobs = ({jobs}) => {
    console.log({jobs});
    console.log(jobs.map(
        jobs => <Job job={'job'}></Job>
    ))
    return (
        <div className='jobs'>
            <Typography variant="h1">Entry level web dev jobs</Typography>
            {
                jobs.map(
                    job => <Job job={job}></Job>
                )
            }
        </div>
    )
}

export default Jobs;
