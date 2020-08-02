import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#fff;
  line-height: 20px;
  padding: 12px;
  >svg {
    width: 24px;
    height: 24px;
  }
`;
type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Header>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text"/>
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export {TagEdit};