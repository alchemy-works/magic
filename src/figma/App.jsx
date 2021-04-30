import React from 'react'
import { css } from '@emotion/css'
import Figma from './Figma.jsx'

const AppClassName = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .figma {
    position: relative;
    bottom: 10vh;
  }
`

export default function App(props) {

    return (
        <div className={AppClassName}>
            <Figma className="figma"/>
        </div>
    )
}