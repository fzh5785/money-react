import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  background:white;
  font-size: 16px;
  >li {
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >svg {
      width: 24px;
      height: 24px;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  color: white;
  background:#f60;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className='oneLine'>{tag}</span>
            <Icon name='right'/>
          </li>)}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;