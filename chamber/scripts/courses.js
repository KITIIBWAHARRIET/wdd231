const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Programming Basics", credits: 2, completed: true }
];

const coursesDiv = document.getElementById("courses");
const creditsP = document.getElementById("credits");

function displayCourses(courseList) {
  coursesDiv.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course");
    if (course.completed) card.classList.add("completed");

    card.textContent = `${course.code} - ${course.name}`;
    coursesDiv.appendChild(card);
  });

  const totalCredits = courseList.reduce((sum, c) => sum + c.credits, 0);
  creditsP.textContent = `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.getElementById("all").onclick = () => displayCourses(courses);
document.getElementById("wdd").onclick = () =>
  displayCourses(courses.filter(c => c.code.startsWith("WDD")));
document.getElementById("cse").onclick = () =>
  displayCourses(courses.filter(c => c.code.startsWith("CSE")));
