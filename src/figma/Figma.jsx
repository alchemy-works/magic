import { css, cx } from '@emotion/css'
import React from 'react'

const FigmaClassName = css`
  box-sizing: border-box;
  background-color: #000;
  width: 4rem;
  height: 4rem;
  display: flex;
  padding: .5rem 1rem;
  flex-wrap: wrap;
  border-radius: .75rem;

  .item {
    width: 1rem;
    height: 1rem;
  }

  .item1 {
    background-color: rgba(248, 113, 113);
    border-radius: .5rem 0 0 .5rem;
  }

  .item2 {
    background-color: rgba(244, 114, 182);
    border-radius: 0 .5rem .5rem 0;
  }

  .item3 {
    background-color: rgba(167, 139, 250);
    border-radius: .5rem 0 0 .5rem;
  }

  .item4 {
    background-color: rgba(96, 165, 250);
    border-radius: .5rem;
  }

  .item5 {
    background-color: rgba(52, 211, 153);
    border-radius: .5rem 0 .5rem .5rem;
  }
`

export default function Figma(props = { className: '' }) {

    return (
        <div className={cx(FigmaClassName, props.className)}>
            <span className="item item1"/>
            <span className="item item2"/>
            <span className="item item3"/>
            <span className="item item4"/>
            <span className="item item5"/>
        </div>
    )
}