import React from 'react'

interface IBox {
    margin: {
        top: string
        right: string
        bottom: string
        left: string
    }
    display: string
}

const Box: React.FC<IBox> = (props) => {
    const calculateMargin = `${props.margin.top} ${props.margin.right} ${props.margin.bottom} ${props.margin.left}`

    return (
        <div style={{ margin: calculateMargin, display: props.display }}>
            {props.children}
        </div>
    )
}

export default Box
