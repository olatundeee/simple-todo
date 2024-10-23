import TaskList from "@/components/TaskList";

export default function Home() {
  const tasksArray = [
    {
      taskTitle: 'Training at the Gym',
      taskCompletionStatus: true
    },
    {
      taskTitle: 'Play Paddle with friends',
      taskCompletionStatus: true
    },
    {
      taskTitle: 'Burger BBQ with family',
      taskCompletionStatus: true
    }
  ];


  
  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <TaskList tasks={tasksArray} />
    </div>
  );
}
