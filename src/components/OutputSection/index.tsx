import React from 'react'

import Box from '../Box/index'
import Select, { ISelect } from '../Select'

interface IOutputSection extends ISelect {
    value: string
}

const OutputSection: React.FC<IOutputSection> = (props) => {
    return (
        <Box
            margin={{
                top: '40px',
                right: '10px',
                bottom: '10px',
                left: '10px',
            }}
            display="flex"
        >
            <Box
                margin={{
                    top: '0px',
                    right: '30px',
                    bottom: '0px',
                    left: '0px',
                }}
                display="flex"
            >
                <h1>{props.value}</h1>
            </Box>
            <div>
                <Select
                    id={props.id}
                    selects={props.selects}
                    setSelectValue={props.setSelectValue}
                />
            </div>
        </Box>
    )
}

export default OutputSection
