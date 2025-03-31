async function TasksPage() {
  try {
    const response = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const tasks = await response.json();
    console.log("tasks:", tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }

  return <div>TasksPage</div>;
}

export default TasksPage;
