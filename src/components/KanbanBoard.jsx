import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'
import AddColumnButton from './AddColumnButton'
import AddTaskModal from './AddTaskModal'

const KanbanBoard = () => {
  const [columns, setColumns] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeColumn, setActiveColumn] = useState(null)

  const onDragEnd = (result) => {
    // Implement drag and drop logic
    console.log(result)
  }

  const addColumn = (title) => {
    setColumns([...columns, { id: Date.now().toString(), title, tasks: [] }])
  }

  const addTask = (task) => {
    const updatedColumns = columns.map(col => {
      if (col.id === activeColumn) {
        return { ...col, tasks: [...col.tasks, { ...task, id: Date.now().toString() }] }
      }
      return col
    })
    setColumns(updatedColumns)
    setIsModalOpen(false)
  }

  const deleteTask = (columnId, taskId) => {
    const updatedColumns = columns.map(col => {
      if (col.id === columnId) {
        return { ...col, tasks: col.tasks.filter(task => task.id !== taskId) }
      }
      return col
    })
    setColumns(updatedColumns)
  }

  return (
    <div className="bg-[#242424] min-h-[600px] p-4 border border-red-500">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {columns.map(column => (
            <Column
              key={column.id}
              column={column}
              onAddTask={() => {
                setActiveColumn(column.id)
                setIsModalOpen(true)
              }}
              onDeleteTask={(taskId) => deleteTask(column.id, taskId)}
            />
          ))}
          <AddColumnButton onAddColumn={addColumn} />
        </div>
      </DragDropContext>
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />
    </div>
  )
}

export default KanbanBoard