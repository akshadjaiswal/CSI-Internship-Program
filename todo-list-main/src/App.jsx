import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [attemptedSave, setAttemptedSave] = useState(false);
  const [filter, setFilter] = useState('all'); // Filter state

  useEffect(() => {
    let todoString = localStorage.getItem('todos');
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setAttemptedSave(true);
    if (todo.trim() === '') {
      setErrorMessage('Task cannot be empty');
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
    setErrorMessage('');
    setAttemptedSave(false);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    if (attemptedSave && e.target.value.trim() !== '') {
      setErrorMessage('');
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh] md:w-[35%]">
        <h1 className='font-bold text-center text-3xl'>To-Do List</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className='w-full rounded-full px-5 py-1'
            />
            <button
              onClick={handleAdd}
              className='bg-blue-700 mx-2 rounded-full hover:bg-blue-800 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'
            >
              Save
            </button>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className="filters my-4">
          <button onClick={() => handleFilterChange('all')} className={`mx-2 ${filter === 'all' ? 'font-bold' : ''}`}>All</button>
          <button onClick={() => handleFilterChange('active')} className={`mx-2 ${filter === 'active' ? 'font-bold' : ''}`}>Active</button>
          <button onClick={() => handleFilterChange('completed')} className={`mx-2 ${filter === 'completed' ? 'font-bold' : ''}`}>Completed</button>
        </div>
        <div className="todos">
          {filteredTodos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {filteredTodos.map(item => {
            return (
              <div key={item.id} className={"todo flex my-3 justify-between"}>
                <div className='flex gap-5 '>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full ">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className='bg-blue-700 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => { handleDelete(e, item.id) }}
                    className='bg-blue-700 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
