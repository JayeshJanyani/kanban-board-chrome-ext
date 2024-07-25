import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask({
      ...task,
      createdDate: new Date().toLocaleDateString(),
    })
    setTask({ title: '', description: '', dueDate: '' })
  }

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-gray-800 rounded-lg p-6 w-full max-w-sm">
          <Dialog.Title className="text-lg font-medium text-white mb-4">Add New Task</Dialog.Title>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task Title"
              className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              required
            />
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              required
            />
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
              required
            />
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                Add Task
              </button>
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Cancel
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default AddTaskModal