import styled from 'styled-components';

const NotesSection = styled.section`
  padding: 0 16px;
  font-size: 14px;
  >label {
    display: flex;
    align-items: center;
    >span { margin-right: 16px}
    >input {
      flex-grow: 1;
      height: 72px;
      background:none;
      border: none;
    }
  }
`
export {NotesSection}