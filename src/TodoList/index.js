import React, { useEffect, useState } from 'react'
import { Image, Tabs } from 'antd'
import Personal from '../components/list'
import HeaderLogo from '../images/header-logo.png'
import './index.css'

const TodoList = () => {
  const [key, setKey] = useState('1')

  const onChange = (key) => {
    setKey(key)
  }

  const items = [
    {
      key: '1',
      label: `Personal`,
      children: <Personal index={key} />,
    },
    {
      key: '2',
      label: `Professional`,
      children: <Personal index={key} />,
    },
  ]
  return (
    <>
      <div className='header-logo'>
        <Image src={HeaderLogo} alt='Header-logo' preview={false} />
      </div>
      <div className='tabs-div'>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </div>
    </>
  )
}
export default TodoList
