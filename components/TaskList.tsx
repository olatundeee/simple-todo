import React, { useState } from 'react';
import TaskEditor from './TaskEditor';
import Navbar from './Navbar';
import GoPro from './GoPro';
import AddTask from './AddTask';
import Add from '@/icons/Add';

interface Task {
  taskTitle: string;
  taskCompletionStatus: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [tasksArray, setTasksArray] = useState<Task[]>(tasks);
  const [editingTaskIndex, setEditingTaskIndex] = useState<number>(0);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTask = (newTask: string) => {
    setTasksArray([...tasksArray, {taskTitle: newTask, taskCompletionStatus: false}]);
  };

  // Toggle the task completion status
  const toggleTaskStatus = (index: number) => {
    const updatedTasks = tasksArray.map((task, i) =>
      i === index ? { ...task, taskCompletionStatus: !task.taskCompletionStatus } : task
    );
    setTasksArray(updatedTasks);
  };

  // Start editing a task
  const editTask = (index: number) => {
    setEditingTaskIndex(index);
  };

  // Save the edited task
  const saveTask = (index: number, updatedTask: Task) => {
    const updatedTasks = tasksArray.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasksArray(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index: number) => {
    const updatedTasks = tasksArray.filter((_, i) => i !== index);
    setTasksArray(updatedTasks);
  };

  return (
    <div className="flex">
        <div className="w-1/3 z-50 shadow">
            <Navbar />
            <GoPro />
            <div className="flex flex-col gap-6 my-6">
                {tasksArray.map((task, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded shadow bg-white h-[12vh] mx-auto w-[90%]">
                    <div className="flex items-center space-x-4">
                        <div
                            onClick={() => toggleTaskStatus(index)}
                            className={`cursor-pointer rounded-full form-radio h-5 w-5 ${task.taskCompletionStatus ? 'bg-[#53DA69]' : 'bg-white border border-[#071D55]'}`}
                        />
                        <span className={task.taskCompletionStatus ? 'line-through text-[#8D8D8D]' : 'text-[#071D55]'}>
                        {task.taskTitle}
                        </span>
                    </div>
                    <button
                        onClick={() => editTask(index)}
                        className="bg-white border border-[#071D55] text-[#071D55] px-3 py-1 rounded hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    </div>
                ))}
            </div>
            <div>
                {/* Add task button */}
                <div className="w-full flex justify-end">
                    <button className="fixed bottom-5 flex justify-center items-center text-white rounded shadow cursor-pointer bg-[#0D2972] rounded-full text-center w-10 h-10" onClick={() => setIsAddTaskOpen(true)}><Add /></button>
                </div>
                


                {/* Conditionally render the AddTask component */}
                {isAddTaskOpen && <AddTask onAddTask={handleAddTask} onClose={() => setIsAddTaskOpen(false)} />}
            </div>
        </div>

        <div className="w-2/3">
            {editingTaskIndex !== null && (
                <TaskEditor
                    task={tasksArray[editingTaskIndex]}
                    onSave={(updatedTask: Task) => saveTask(editingTaskIndex, updatedTask)}
                    onDelete={() => deleteTask(editingTaskIndex)}
                    taskIndex={editingTaskIndex}
                />
            )}
        </div>
    </div>
  );
};

export default TaskList;
