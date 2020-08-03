import React from 'react';
import {useTags} from '../useTags';
import {useParams,useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';
import {Input} from '../components/Input';


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
const InputWrapper = styled.div`
  background:#fff;
  margin-top: 16px;
  padding: 0 16px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label='标签名' type='text'
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}/>
      </InputWrapper>
      <Center>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  };
  return (
    <Layout>
      <Header>
        <Icon name='left' onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      {tag ? tagContent(tag) : <div>tag不存在</div>}
    </Layout>
  );
};

export {TagEdit};