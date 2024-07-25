import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const Column = ({ column, onAddTask, onDeleteTask }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg min-w-[250px]">
      <h2 className="text-white font-bold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} onDelete={() => onDeleteTask(task.id)} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onAddTask}
      >
        + Add Task
      </button>
    </div>
  )
}

export default Column