import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  >span { margin-right: 16px}
  >input {
      flex-grow: 1;
      height: 44px;
      background:none;
      border: none;
    }
`
type Props = {
  label: string
}& React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props>=(props )=> {
  const {label, ...rest} = props
  return(
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  )
}

export {Input}