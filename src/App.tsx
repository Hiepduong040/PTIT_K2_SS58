import React from 'react'
import GetAllStudent from './components/Ex2/GetAllStudent'
import GetStudentById from './components/Ex3/GetStudentById'
import RemoveById from './components/Ex4/RemoveById'
import CreateStudent from './components/Ex5/CreateStudent'
import UpdateStudent from './components/Ex6/UpdateStudent'


export default function App() {
  return (
    <div>
      <GetAllStudent></GetAllStudent>
      <GetStudentById></GetStudentById>
      <RemoveById></RemoveById>
      <CreateStudent></CreateStudent>
      <UpdateStudent></UpdateStudent>
      
    </div>
  )
}
