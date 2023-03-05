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

/**
 * 課題の下書きを作成する
 */
/*
function createAssignment() {
    const resource = {
        title: "課題のタイトル",
        description: "課題の説明",
        state: "DRAFT",
        workType: "ASSIGNMENT",
    };
    const res = Classroom.Courses.CourseWork.create(resource, COURSE_ID);
    console.log(res);
}
*/
