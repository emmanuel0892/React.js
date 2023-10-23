import React from 'react'
import Part from './Part'

const Content = ({content}) => {

    const parts = content

    return (
        <div>
            <Part parts={parts} />
        </div>
    )
}

export default Content