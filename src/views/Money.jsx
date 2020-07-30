import Layout from "../components/Layout"
import React, {useState} from "react"
import styled from "styled-components"
import {TagsSection} from "../components/Money/TagsSection"
import {NoteSection} from "../components/Money/NoteSection"
import {CategorySection} from "../components/Money/CategorySection"
import {NumberPadSection} from "../components/Money/NumberSection"


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  const [selected, setSelected] = useState({
    tags: [],
    note: "",
    category: "-",
    amount: 0
  })
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags: tags
                   })}/>
      <NoteSection value={selected.note}
                   onChange={(note) => setSelected({
                     ...selected,
                     note: note
                   })}/>
      <CategorySection value={selected.category}
                       onChange={(category) => setSelected({
                         ...selected,
                         category: category
                       })}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => setSelected({
                          ...selected,
                          amount: amount
                        })}/>
    </MyLayout>
  )
}

export default Money