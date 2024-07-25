import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task, index, onDelete }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-gray-700 p-4 mb-4 rounded-lg"
        >
          <p className="text-sm text-gray-400">Created: {task.createdDate}</p>
          <h3 className="text-white font-bold mb-2">{task.title}</h3>
          <p className="text-gray-300 mb-2">{task.description}</p>
          <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
          <button
            className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Task