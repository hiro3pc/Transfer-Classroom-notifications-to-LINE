function runOnlyFirst() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.insertSheet("announcements");
  ss.insertSheet("courseWorks");
  ss.insertSheet("courseWorkMaterials");

  ss.getSheetByName("announcements")
    .getRange(1, 1, 1, 14)
    .setValues([["alternateLink", "assigneeMode", "courseId", "creationTime", "creatorUserId", "id", "individualStudentsOptions", "materials", "scheduledTine", "state", "text", "updateTime", "", "sent or not"]]);
  ss.getSheetByName("courseWorks")
    .getRange(1, 1, 1, 25)
    .setValues([["alternateLink", "assigneeMode", "assingnment", "associatedWithDeveloper", "courseId", "creationTime", "creatorUserId", "description", "dueDate", "dueTime", "id", "individualStudentOptions", "materials", "maxPoints", "multipleChoiceQuestion", "scheduledTime", "state", "submissionModeficationMode", "title", "topicId", "updateTime", "workType", "materialArray", "", "sent or not"]]);
  ss.getSheetByName("courseWorkMaterials")
    .getRange(1, 1, 1, 16)
    .setValues([["alternateLink", "assigneeMode", "courseId", "creationTime", "creatorUserId", "description", "id", "individualStudentOptions", "materials", "scheduledTine", "state", "title", "topicId", "updateTime", "", "sent or not"]]);
}
