const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh Sir"
};
// course.courseInstructor;
// console.log(course.courseInstructor); // hitesh Sir
// object destructure krna ise kehte hai ''''
const{courseInstructor: instructor} = course; // Object Destructure
console.log(instructor); // hitesh Sir

// Json
// {
//     "name":"surendra",
//     "coursename":"Js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]
