import React, { useState} from 'react'
import Modal from './Modal';

const ListTask = ({ item, delHandler, staHandler, status }) => {

    const [open, setOpen] = useState(false)

  return (
      <>
        <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto w-full">
                  <p className={`text-lg font-semibold text-gray-900 ${status ? "line-through" : ""}`}>{item.name}</p>
                  <p className={`mt-1 truncate text-xs/5 text-gray-500 ${item.status ? "text-lime-500" : "text-red-500"}`}>{item.status ? "completed" : "incompleted"}</p>
            </div>
        </div>
        <div className="shrink-0 sm:flex sm:items-end">
              <button className="bg-red-500 py-2 px-4 rounded mr-4" onClick={() => setOpen(true)}>Delete</button>
              <Modal open={ open} onClose={() => setOpen(false)}>
                  <div className="text-center w-56">
                      <div className="mx-auto my-4 w-48">
                          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
                          <p className="text-sm text-gray-500">Are you sure you want to delete this task?</p>
                      </div>
                      <div className="flex gap-4 justify-between">
                          <button
                              onClick={() => { delHandler(item.id); setOpen(false) }}
                              className="bg-red-500 py-2 px-4 rounded">
                              Delete
                          </button>
                          <button
                              onClick={() => setOpen(false)}
                              className="bg-blue-300 py-2 px-4 rounded">
                              Cancel
                          </button>
                      </div>
                  </div>
              </Modal>
              <input type="checkbox" id={item.name} value={item.id} className="hidden peer" required="" onChange={(e) => staHandler(e)}></input>
              { !status ? (<label htmlFor={item.name } className="inline-flex items-center justify-between px-4 py-2 rounded cursor-pointer bg-lime-500">
                    <div className="block">
                        <div className="font-semibold">Done</div>
                    </div>
                </label>) : ""}
                
        </div>
      </>
  )
}

export default ListTask
