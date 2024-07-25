import React, { useState } from 'react'

const AddColumnButton = ({ onAddColumn }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAddColumn(title)
      setTitle('')
      setIsAdding(false)
    }
  }

  return (
    <div className="min-w-[250px]">
      {isAdding ? (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter column title"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">
            Add
          </button>
          <button type="button" onClick={() => setIsAdding(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 flex items-center justify-center h-full"
        >
          + Add Column
        </button>
      )}
    </div>
  )
}

export default AddColumnButton