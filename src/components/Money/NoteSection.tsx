import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../Input';

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 14px;
`
type Props = {
  value: string
  onChange: (value: string)=> void
}
const NoteSection: React.FC<Props> = (props)=> {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e)=> {
    props.onChange(e.target.value)
  }

  return (
    <Wrapper>
      <Input label='备注' placeholder='请在这里输入备注'
              onChange={onChange} value={note}/>
    </Wrapper>
  )
}
export {NoteSection}