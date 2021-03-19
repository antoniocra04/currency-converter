import React from 'react'
import { useQuery } from 'react-query'

import Box from './components/Box'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'

import { convert } from './services/api'

import { selects } from './utils/selects'

function App() {
    const [currencyAmount, setCurrencyAmount] = React.useState('0')
    const [inputCurrency, setInputCurrency] = React.useState('USD')
    const [outputCurrency, setOutputCurrency] = React.useState('USD')

    const { isLoading, data } = useQuery(
        ['convert', currencyAmount, inputCurrency, outputCurrency],
        () => convert(inputCurrency, outputCurrency, currencyAmount)
    )

    return (
        <Box
            margin={{
                top: '40px',
                right: '40px',
                bottom: '40px',
                left: '40px',
            }}
            display="block"
        >
            <InputSection
                id="calculateCurrency"
                labelText="Input currency"
                value={currencyAmount}
                setValue={setCurrencyAmount}
                selects={selects}
                setSelectValue={setInputCurrency}
            />
            <OutputSection
                id="outputCurency"
                selects={selects}
                value={isLoading ? 'Loading' : data?.data.result}
                setSelectValue={setOutputCurrency}
            />
        </Box>
    )
}

export default App
