const appElement = document.getElementById("app");

let courseApi = "http://localhost:3000/courses";

fetch(courseApi)
  .then(function (res) {
    return res.json();
  })
  .then(function (courses) {
    htmls = courses.map(function (course) {
      console.log(course);
      return `
        <h2 class='course-name'>${course.name}</h2>
        <p class='course-desc'>${course.description}</p>
      `;
    });
    appElement.innerHTML = htmls.join("");
  })
  .catch(function () {
    document.write("Error!");
  });
