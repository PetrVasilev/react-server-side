import React from 'react'
import styled from 'styled-components'

const View = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`

const Padding = ({ children }) => {
    return <View>{children}</View>
}

export default Padding
