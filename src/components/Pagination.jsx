import React, { useState, useContext, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Context from '../store/MyProvider';

const Pagination = ({ data }) => {
  
  const { value, setValue } = useContext(Context);
  const [current, setCurrent] = useState(1);
  const dataPerPage = 10;
  const lastIndex = current * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const npage = Math.ceil(data.length / dataPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => { 
    getData();
  }, [data, current])

  const getData = () => { 
    const datas = data.slice(firstIndex, lastIndex);
    setValue(datas);
  }

  const changePage = (id) => { 
    setCurrent(id);
  }

  const nextPage = () => { 
    if (current !== npage) { 
      setCurrent(current + 1);
    }
  }

  const prevPage = () => { 
    if (current !== 1) { 
      setCurrent(current - 1);
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only" onClick={ () => prevPage()}>Previous</span>
              <span className="" onClick={ () => prevPage()}>Prev</span>
            </a>
            { 
              numbers.map((n, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={ () => changePage(n)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${current === n ? 'bg-indigo-600 text-white' : ''}`}
                  >
                    { n}
                  </a>
              ))
            }
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only" onClick={ () => nextPage()}>Next</span>
              <span className="" onClick={ () => nextPage()}>Next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination