import React, { useContext} from 'react'
import ListTask from './ListTask';
import { Link } from "react-router-dom";
import Context from '../store/MyProvider';

const Lists = ({ del, sta, items }) => {
  
  // const tasks = useSelector((state) => state.taskStore.tasks);
  const { value } = useContext(Context)

  if (value.length <= 0) { 
    return (
      <>
        <div className="flex flex-col">
          <Link to={`/addtask`}>
              <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded float-left mx-10 w-32">
                  Add Task
              </button>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-red-500 text-2xl">Tasks Not Found!</h1>
          <h4>Add your task!</h4>
        </div>
      </>
      
    )
  }

  return (
      <div className="flex flex-col">
          <div>
            <Link to={`/addtask`}>
                <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded float-left mx-10 w-32">
                    Add Task
                </button>
            </Link>
          </div>
        
        <ul role="list" className="divide-y divide-gray-100 px-10">
              {value && value.map((item, index) => (
                <li key={index} className="flex justify-between gap-x-6 py-5">
                  <ListTask item={item} delHandler={del} staHandler={sta} id={item.id} status={ item.status} />
                </li>
            ))}
        </ul>
      </div>
  )
}

export default Lists