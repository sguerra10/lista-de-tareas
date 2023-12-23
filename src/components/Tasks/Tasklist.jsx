
import { useContext } from 'react';
import { Task } from './Task';
import { TaskContext } from '../../context/TaskProvider';
import axios from 'axios';


export const Tasklist = () => {
  // uso de local storages.
 // const { tasks } = useContext(TaskContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    
    axios.get('http://localhost:3000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      {tasks.map((todo) => (
        <Task key={todo.id} nombre={todo.description} completed={todo.status}  ids={todo.id} title={todo.title} />
      ))}
    </>
  )
}
