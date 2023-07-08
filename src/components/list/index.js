import React, { useEffect, useState } from 'react'
import { Button, Image, Input, Space } from 'antd'
import DeleteIcon from '../../images/delete-icon.svg'
import selectedIcon from '../../images/selected.svg'
import NonSelectedIcon from '../../images/non-selected.svg'
import ClearData from '../../images/clear-data.png'

const Personal = ({ index }) => {
  const [selectTodo, setSelectTodo] = useState([])
  const [addTodoName, setAddTodoName] = useState('')

  const [professionalData, setProfessionalData] = useState([
    'Professional Work No. 7',

    'Professional Work No. 8',

    'Professional Work No. 9',
  ])

  const [personalData, setPersonalData] = useState([
    'Personal Work No. 1',

    'Personal Work No. 2',

    'Personal Work No. 3',
  ])

  const handleChange = (e) => {
    setAddTodoName(e.target.value)
  }

  const handleClick = () => {
    if (index === '1') {
      setPersonalData([...personalData, addTodoName])
    } else {
      setProfessionalData([...professionalData, addTodoName])
    }
    setAddTodoName('')
  }

  const handleDelete = (key) => {
    if (index === '1') {
      setPersonalData(personalData?.filter((item, index) => index !== key))
    } else {
      setProfessionalData(
        professionalData?.filter((item, index) => index !== key)
      )
    }
  }

  const handleBulkDelete = () => {
    if (index === '1') {
      setPersonalData(
        personalData?.filter((item, index) => !selectTodo.includes(index))
      )
    } else {
      setProfessionalData(
        professionalData?.filter((item, index) => !selectTodo.includes(index))
      )
    }
    setSelectTodo([])
  }

  return (
    <>
      <div className='banner'>
        <div className='add-todo-list-input'>
          <Space.Compact
            style={{
              width: '100%',
              height: '78px',
            }}
          >
            <Input
              value={addTodoName}
              onChange={handleChange}
              placeholder='What do you need to do?'
            />
            <Button
              className='add-todo-button'
              type='primary'
              onClick={handleClick}
              disabled={addTodoName.length ? false : true}
            >
              Add
            </Button>
          </Space.Compact>
        </div>
        <div className='display-todos'>
          <div className='fix-todos'>
            {index === '1' &&
              personalData.map((item, key) => {
                return (
                  <>
                    <div className='todos-list-div'>
                      <div className='todo-name-block'>
                        <div
                          onClick={() => {
                            if (selectTodo?.includes(key)) {
                              setSelectTodo(
                                selectTodo?.filter((i) => i !== key)
                              )
                            } else {
                              setSelectTodo([...selectTodo, key])
                            }
                          }}
                        >
                          <Image
                            src={
                              selectTodo?.includes(key)
                                ? selectedIcon
                                : NonSelectedIcon
                            }
                            alt='true img'
                            preview={false}
                          />
                        </div>
                        <div
                          className={`${
                            selectTodo?.includes(key)
                              ? 'todo-text-selected'
                              : 'todo-text'
                          }`}
                        >
                          {item}
                        </div>
                      </div>
                      <div
                        className='delete-icon'
                        onClick={() => handleDelete(key)}
                      >
                        <Image
                          src={DeleteIcon}
                          alt='true img'
                          preview={false}
                          style={{ opacity: '0.4' }}
                        />
                      </div>
                    </div>
                    <hr className='bottom-line-after-todo' />
                  </>
                )
              })}

            {index === '2' &&
              professionalData.map((item, key) => {
                return (
                  <>
                    <div className='todos-list-div'>
                      <div className='todo-name-block'>
                        <div
                          onClick={() => {
                            if (selectTodo?.includes(key)) {
                              setSelectTodo(
                                selectTodo?.filter((i) => i !== key)
                              )
                            } else {
                              setSelectTodo([...selectTodo, key])
                            }
                          }}
                        >
                          <Image
                            src={
                              selectTodo?.includes(key)
                                ? selectedIcon
                                : NonSelectedIcon
                            }
                            alt='true img'
                            preview={false}
                          />
                        </div>
                        <div
                          className={`${
                            selectTodo?.includes(key)
                              ? 'todo-text-selected'
                              : 'todo-text'
                          }`}
                        >
                          {item}
                        </div>
                      </div>
                      <div
                        className='delete-icon'
                        onClick={() => handleDelete(key)}
                      >
                        <Image
                          src={DeleteIcon}
                          alt='true img'
                          preview={false}
                          style={{ opacity: '0.4' }}
                        />
                      </div>
                    </div>
                    <hr className='bottom-line-after-todo' />
                  </>
                )
              })}
          </div>
        </div>
      </div>
      <div className='clear-completed' onClick={handleBulkDelete}>
        <Image src={ClearData} alt='' preview={false} />
        <div className='clear-completed-text'>Clear Completed</div>
      </div>
    </>
  )
}

export default Personal
