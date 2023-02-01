import TaskListJson from '../data/tasklist.json'

function TaskList() {
    return (
        TaskListJson && TaskListJson.map( task => {
            return(
                <div className='text-center'>
                    {task.title}
                </div>
            )
        })
    )
}
  
export default TaskList
  