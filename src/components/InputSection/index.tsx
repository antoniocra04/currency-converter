import React from 'react'

import Box from '../Box/index'
import Select, { ISelect } from '../Select'

import { TextInput } from 'carbon-components-react'

interface IInputSecton extends ISelect {
    labelText: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputSection: React.FC<IInputSecton> = (props) => {
    return (
        <Box
            margin={{
                top: '10px',
                right: '10px',
                bottom: '40px',
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
                <TextInput
                    id={props.id}
                    labelText={props.labelText}
                    onChange={(element) => props.setValue(element.target.value)}
                    value={props.value}
                />
            </Box>
            <div>
                <Select
                    selects={props.selects}
                    id={props.id}
                    setSelectValue={props.setSelectValue}
                />
            </div>
        </Box>
    )
}

export default InputSection
