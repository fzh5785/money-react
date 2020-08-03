import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';

const TagList = styled.ol`
  background:white;
  font-size: 16px;
  >li {
    margin-left: 16px;
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    >a {
      display: flex;
      padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;
      >svg {
        width: 24px;
        height: 24px;
    }
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className='oneLine'>{tag.name}</span>
              <Icon name='right'/>
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;