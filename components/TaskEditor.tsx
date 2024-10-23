import React, { useEffect, useState } from 'react';
import NavbarEdit from './NavbarEdit';

interface Task {
  taskTitle: string;
  taskCompletionStatus: boolean;
}

interface TaskEditorProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onDelete: () => void;
  taskIndex: number;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ task, onSave, onDelete, taskIndex }) => {
  const [taskTitle, setTaskTitle] = useState<string>(task.taskTitle);

  // Handle saving the task
  const handleSave = () => {
    const updatedTask = {
      ...task,
      taskTitle,
    };
    onSave(updatedTask);
  };

  useEffect(() => {
    if (taskIndex) {
      setTaskTitle(task.taskTitle)
    }
  }, [taskIndex])

  return (
    <>
      <NavbarEdit />
      <div className="my-6 mx-auto w-[85%] flex flex-col gap-4">
        <p className="text-start font-semibold">Task Name</p>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full text-[#0D2972]"
        />
        <div className="flex gap-3 mx-auto w-[60%] mt-4 fixed bottom-5">
          <button
            onClick={onDelete}
            className="bg-[#720D0D] hover:bg-[#720D0D] text-white px-3 py-1 rounded h-[7vh] w-[20%]"
          >
            Delete
          </button>
          <button
            onClick={handleSave}
            className="bg-[#0D2972] hover:bg-[#0D2972] text-white px-3 py-1 rounded h-[7vh] w-[80%]"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskEditor;
