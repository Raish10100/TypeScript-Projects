import React from 'react'
import { useTodos } from '../store/todos'

export default function DisplayTodos() {
    const {todos} = useTodos();

    const filterData = todos;

  return (
    <ul>
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                    <input type="checkbox" id='' />
                    <label htmlFor="">{todo.task}</label>
                </li>
            })
        }
    </ul>
  )
}
