function getTeachersId() {
  let teachersData = Classroom.Courses.Teachers.list(COURSE_ID).teachers; //リスト取得
  let teachersId = [];
  let teachersName = [];
  for (i of teachersData) {
    teachersId.push(parseInt(i.userId));
  }
  for (i of teachersData) {
    teachersName.push(i.profile.name.familyName);
  }
  teachersData = { id: teachersId, name: teachersName };
  console.log(teachersData);
}

function convertTeachersId(teachersId) {
  let dataBaseOfTeachers; //上記のコード(getTeachersId())を実行後ログを"dataBaseOfTeachers"に代入してください。
  return dataBaseOfTeachers.name[dataBaseOfTeachers.id.indexOf(teachersId)];
}
