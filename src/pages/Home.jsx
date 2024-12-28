import React, { useEffect, useState} from 'react'
import Lists from '../components/Lists';
import Pagination from '../components/Pagination';
import Context from '../store/MyProvider';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState([]);

    useEffect(() => { 
        const getTasks = JSON.parse(localStorage.getItem('todos'))

        if (getTasks) { 
            setTasks(getTasks)
        }
    }, [])
    
    const delHanlder = (taskId) => {
        const updatedTasks = tasks.filter(item => item.id !== taskId)
        setTasks(updatedTasks);
        localStorage.setItem('todos', JSON.stringify(updatedTasks));
    }

    const staHanlder = (e) => {
        const { value, checked } = e.target;
        const index = tasks.findIndex((item) => item.id == value)
        const duplicateTodos = [...tasks]

        duplicateTodos[index] = {
            id: tasks[index].id,
            name: tasks[index].name,
            status: checked,
        }
        setTasks(duplicateTodos)
        localStorage.setItem('todos', JSON.stringify(duplicateTodos));
    }


    return (
        <>
            
        <div className="py-24 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Finish Your Task</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Task Managerment
                    </p>
                </div>
            </div>
        </div>
            
            <Context.Provider value={{value, setValue}}>
                <Lists del={delHanlder} items={tasks} sta={ staHanlder} />
                <Pagination data={tasks} />
            </Context.Provider>
            
        </>
  )
}

export default Home