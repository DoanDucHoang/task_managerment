import React, { useState, useEffect } from 'react'
import { useToast } from '../components/ToastService';
import { AlertCircle } from "react-feather";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

    const toast = useToast();
    const navigate = useNavigate();
    const [task, setTask] = useState("");
    const [navg, setNavg] = useState(false);
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState(() => { 
        return JSON.parse(localStorage.getItem('todos')) || []
    });  

    useEffect(() => { 
        localStorage.setItem('todos', JSON.stringify(tasks));
        if (navg) { 
            navigate("/")
        }
    }, [tasks])

    const handleSuccess = () => { 
        toast.open(
            <div className="flex gap-2 bg-green-300 text-green-800 p-4 rounded shadow-lg">
                <div>
                    <AlertCircle size={40} />
                    <h3 className="font-blod">Successed</h3>                
                    <p className="text-sm">Task add successed!</p>                
                </div>
            </div>
        )
    }

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (task.length === 0) {
            setError("input required!")
            return false
        } else if (task.length > 25) { 
            setError("Must be 25 character or less!")
            return false
        }

        setTasks([{ "id": Date.now(), "name": task, "status": false }, ...tasks])
        localStorage.setItem('todos', JSON.stringify(tasks));
        handleSuccess();
        setError('');
        setNavg(true);
    }; 

  return (
    <>
        <div className="py-24 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Add Your Task</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Task Managerment
                    </p>
                </div>
            </div>
        </div>
          
          <form onSubmit={handleSubmit} error={ error}>
            <div className="flex mx-auto max-w-7xl px-6 lg:px-8 place-items-center">
              <div className="w-full">
                    <input
                    id="title"
                    name="title"
                    type="text"
                    value={task}
                    onChange={ handleChange}
                    className="block w-full h-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                      {error && <small className="text-red-500"> { error}</small> }
                  </div>
                  
                  <div>
                  <button className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded float-right mx-5 w-32" type="submit" onClick={handleSubmit}>
                    Submit
                    </button>
            </div>
            </div>
              
            
        </form>
    </>
  )
}

export default AddTask