/**コースリスト取得
 * Lists 10 course names and IDs.
 */
function getCourseList() {
    var optionalArgs = {
        pageSize: 10,
    };
    var response = Classroom.Courses.list(optionalArgs);
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
