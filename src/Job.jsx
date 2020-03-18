import React from 'react'

const Job = ({job}) => {
    // console.log(props)
    return (
        <div className={'job'}>
            {job.title}
            {job.company}
        </div>
    )
}

export default Job;