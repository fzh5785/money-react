import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from '../components/Money/TagsSection';
import {NoteSection} from '../components/Money/NoteSection';
import {CategorySection} from '../components/Money/CategorySection';
import {NumberPadSection} from '../components/Money/NumberSection';
import {useRecords} from '../hooks/usrRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const {addRecord} = useRecords();
  const submit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData);
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOK={submit}/>
    </MyLayout>
  );
}

export default Money;