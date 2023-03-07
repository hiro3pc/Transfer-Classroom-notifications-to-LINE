/**コースリスト取得
 * Lists all course names and IDs.
 */
function getCourseList() {
    var response = Classroom.Courses.list();
    var courses = response.courses;
    if (courses && courses.length > 0) {
        for (i = 0; i < courses.length; i++) {
            var course = courses[i];
            Logger.log("%s (%s)", course.name, course.id);
        }
    } else {
        Logger.log("No courses found.");
    }
}
