/*Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any 
common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'English'];

const commonCourseFunction = () => {
    let message;
    let commonCourse = student1Courses.filter(course => student2Courses.includes(course));

    if (commonCourse.length === 1){
        return message = `El curso en común es: ${commonCourse[0]}`;
    } else if (commonCourse.length > 1){
        return message = `Los cursos en común son: ${commonCourse.join(', ')}`;
    } else {
        return message = "No hay cursos en común.";
    };

    return message;
};

console.log(commonCourseFunction());