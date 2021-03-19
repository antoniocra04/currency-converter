import React from 'react'

import { Select as CarbonSelect, SelectItem } from 'carbon-components-react'

export interface ISelect {
    id: string
    selects: Array<{ text: string; value: string }>
    setSelectValue: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<ISelect> = (props) => {
    return (
        <CarbonSelect
            onChange={(e) => props.setSelectValue(e.target.value)}
            id={props.id}
        >
            {props.selects.map((select, index) => (
                <SelectItem
                    key={index}
                    text={select.text}
                    value={select.value}
                ></SelectItem>
            ))}
        </CarbonSelect>
    )
}

export default Select
