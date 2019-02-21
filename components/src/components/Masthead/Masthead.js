import React from 'react'
import PropTypes from 'prop-types'
import {Box } from 'rebass'
import styled from 'styled-components'
import {Link} from 'rebass'

const Outer  = styled(Box)`
height: ${props => props.height}
width: 100%;
background-color: rebeccapurple;
margin-bottom: 1.45rem;
`
export const Masthead = ({height,setTitle}) =>{
    return(
        <Outer height={height}>
        <Link 
        href="/"
        stylle={{
            color: `white`,
            textDecoration:'none'
        }}
        >
        {setTitle}
        ></Link>
        </Outer>
    )
}

Masthead.PropTypes ={
    height: PropTypes.string.isRequired,
    setTitle: PropTypes.string
}
