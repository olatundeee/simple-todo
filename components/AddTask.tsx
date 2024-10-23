import React, { useState } from 'react';

interface AddTaskProps {
  onAddTask: (task: any) => void;
  onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
      onClose(); // Close the AddTask component after adding the task
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '40vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button" onClick={onClose} style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Cancel</button>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
