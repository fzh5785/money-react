import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordsList = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}
type newRecordsList = Omit<RecordsList, 'createdAt'> // 不要createdAt

const useRecords = () => {
  const [records, setRecords] = useState<RecordsList[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  const addRecord = (newRecord: newRecordsList) => {
    if(newRecord.amount<=0 ){
      alert('请输入金额')
      return false
    }
    if(newRecord.tagIds.length===0){
      alert('请选择标签')
      return false
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  return {records, addRecord};
};

export {useRecords};