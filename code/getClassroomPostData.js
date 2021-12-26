function getCourseWorks() {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("courseWorks");
  let courseWorksList = Classroom.Courses.CourseWork.list(COURSE_ID).courseWork; //課題のリスト取得
  let courseWorks = []; //課題の2次元配列
  for (let i of courseWorksList) {
    if (i.materials != undefined) {
      let materials = i.materials;
      i.materials = convertMaterial(materials)[0]; //materialsのタイトル・リンクのリスト
      i.materialsObjArray = convertMaterial(materials)[1]; //materialsオブジェクトの配列
    }

    courseWorks.unshift([i.alternateLink, i.assigneeMode, i.assignment, i.associatedWithDeveloper, i.courseId, i.creationTime, i.creatorUserId, i.description, i.dueDate, i.dueTime, i.id, i.individualStudentsOptions, i.materials, i.maxPoints, i.multipleChoiceQuestion, i.scheduledTime, i.state, i.submissionModificationMode, i.title, i.topicId, i.updateTime, i.workType, i.materialsObjArray]);
  }
  ss.getRange(2, 1, courseWorks.length, courseWorks[0].length).setValues(courseWorks); //write to sheet

  //未送信の課題を探す
  let status = ss.getRange(2, 25, ss.getLastRow() - 1, 1).getValues(); //sent or not
  for (let i = 0; i <= status.length - 1; i++) {
    if (status[i][0] !== "sent") {
      let unsentCourseWork = ss.getRange(i + 2, 1, 1, 25).getValues()[0]; //未送信のcourseWorkをシートより取得
      let unsentCourseWorkObj = {
        alternateLink: unsentCourseWork[0],
        assigneeMode: unsentCourseWork[1],
        assingnment: unsentCourseWork[2],
        associatedWithDeveloper: unsentCourseWork[3],
        courseId: unsentCourseWork[4],
        creationTime: unsentCourseWork[5],
        creatorUserId: unsentCourseWork[6],
        description: unsentCourseWork[7],
        dueDate: unsentCourseWork[8],
        dueTimeid: unsentCourseWork[9],
        id: unsentCourseWork[10],
        individualStudentaOptions: unsentCourseWork[11],
        materials: unsentCourseWork[12],
        maxPoints: unsentCourseWork[13],
        multipleChoiceQuestion: unsentCourseWork[14],
        scheduledTIme: unsentCourseWork[15],
        state: unsentCourseWork[16],
        submissionModeficationMode: unsentCourseWork[17],
        title: unsentCourseWork[18],
        topicId: unsentCourseWork[19],
        updateTime: unsentCourseWork[20],
        worktype: unsentCourseWork[21],
        materialsObjArray: `${unsentCourseWork[22]}`,
      };

      //データ一部書き換え
      unsentCourseWorkObj.creatorUserName = convertTeachersId(parseInt(unsentCourseWorkObj.creatorUserId)) + "先生"; //先生の名前取得
      unsentCourseWorkObj.updateTime = convertTime(unsentCourseWorkObj.updateTime); //GMT -> JST

      //データ無しにnullを代入 (LINE APIでのエラー防止)
      for (let key in unsentCourseWorkObj) {
        if (unsentCourseWorkObj[key] == "") {
          unsentCourseWorkObj[key] = "null";
        }
      }

      //テキスト用のデータ
      let textData = `${unsentCourseWorkObj.title}\n${unsentCourseWorkObj.description}\n${unsentCourseWorkObj.alternateLink}`;
      if (unsentCourseWorkObj.materials != null) {
        textData += `\n${unsentCourseWorkObj.materials}`;
      }
      //LINE Flex用のデータ作成
      let lineFlexBody = convertIntoLineFlexCourseWorks(unsentCourseWorkObj);

      //Post
      postFlexToLineOfficialAccount(lineFlexBody, unsentCourseWorkObj.title);

      //Write "send" on sheet
      ss.getRange(i + 2, 25, 1, 1).setValue("sent");
    }
  }
}

function getCourseWorkMaterials() {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("courseWorkMaterials");
  let courseWorkMaterialsList = Classroom.Courses.CourseWorkMaterials.list(COURSE_ID).courseWorkMaterial; //courseWorkMaterialsのリスト取得
  let courseWorkMaterials = []; //courseWorkMaterialsの2次元配列
  for (let i of courseWorkMaterialsList) {
    if (i.materials != undefined) {
      let materials = i.materials;
      i.materials = convertMaterial(materials)[0]; //materialsのタイトル・リンクのリスト
      i.materialsObjArray = convertMaterial(materials)[1]; //materialsオブジェクトの配列
    }
    courseWorkMaterials.unshift([i.alternateLink, i.assigneeMode, i.courseId, i.creationTime, i.creatorUserId, i.description, i.id, i.individualStudentsOptions, i.materials, i.scheduledTime, i.state, i.title, i.topicId, i.updateTime, i.materialsObjArray]);
  }
  ss.getRange(2, 1, courseWorkMaterials.length, courseWorkMaterials[0].length).setValues(courseWorkMaterials); //write to sheet

  //未送信のcourseWorkMaterialsを探す
  let status = ss.getRange(2, 16, ss.getLastRow() - 1, 1).getValues(); //sent or not
  for (let i = 0; i <= status.length - 1; i++) {
    if (status[i][0] !== "sent") {
      let unsentCourseWorkMaterial = ss.getRange(i + 2, 1, 1, 15).getValues()[0];

      let unsentCourseWorkMaterialObj = {
        alternateLink: unsentCourseWorkMaterial[0],
        assigneeMode: unsentCourseWorkMaterial[1],
        courseId: unsentCourseWorkMaterial[2],
        creationTime: unsentCourseWorkMaterial[3],
        creatorUserId: unsentCourseWorkMaterial[4],
        description: unsentCourseWorkMaterial[5],
        id: unsentCourseWorkMaterial[6],
        individualStudentsOptions: unsentCourseWorkMaterial[7],
        materials: unsentCourseWorkMaterial[8],
        scheduledTime: unsentCourseWorkMaterial[9],
        state: unsentCourseWorkMaterial[10],
        title: unsentCourseWorkMaterial[11],
        topicId: unsentCourseWorkMaterial[12],
        updateTime: unsentCourseWorkMaterial[13],
        materialsObjArray: `${unsentCourseWorkMaterial[14]}`,
      };

      //データ一部書き換え
      unsentCourseWorkMaterialObj.creatorUserName = convertTeachersId(parseInt(unsentCourseWorkMaterialObj.creatorUserId)) + "先生"; //先生の姓を取得・敬称をつける
      unsentCourseWorkMaterialObj.updateTime = unsentCourseWorkMaterialObj.updateTime = convertTime(unsentCourseWorkMaterialObj.updateTime); //時間をyyyy/MM/dd hh:mm:ssに変換

      //データ無しにnullを代入 (LINE APIでのエラー防止)
      for (let key in unsentCourseWorkMaterialObj) {
        if (unsentCourseWorkMaterialObj[key] == "") {
          unsentCourseWorkMaterialObj[key] = "null";
        }
      }

      //テキスト用のデータ
      let textData = `${unsentCourseWorkMaterialObj.title}\n${unsentCourseWorkMaterialObj.alternateLink}`;
      if (unsentCourseWorkMaterialObj.materials != "null") {
        textData += `\n${unsentCourseWorkMaterialObj.materials}`;
      }

      //LINE Flex用のデータ作成
      let lineFlexBody = convertIntoLineFlexCourseWorkMaterials(unsentCourseWorkMaterialObj);

      //Post
      postFlexToLineOfficialAccount(lineFlexBody, unsentCourseWorkMaterialObj.title);

      //Write "send" on sheet
      ss.getRange(i + 2, 16, 1, 1).setValue("sent");
    }
  }
}

function getAnnouncements() {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("announcements");
  let announcementsList = Classroom.Courses.Announcements.list(COURSE_ID).announcements; // Get the list of announcements
  let announcements = []; //通知の2次元配列;
  for (let i of announcementsList) {
    if (i.materials != undefined) {
      let materials = i.materials;
      i.materials = convertMaterial(materials)[0]; //materialsのタイトル・リンクのリスト
      i.materialsObjArray = convertMaterial(materials)[1]; //materialsオブジェクトの配列
    }
    announcements.unshift([i.alternateLink, i.assigneeMode, i.courseId, i.creationTime, i.creatorUserId, i.id, i.individualStudentsOptions, i.materials, i.scheduledTime, i.state, i.text, i.updateTime, i.materialsObjArray]);
  }
  ss.getRange(2, 1, announcements.length, announcements[0].length).setValues(announcements);

  //未送信の通知を探す
  let status = ss.getRange(2, 14, ss.getLastRow() - 1, 1).getValues(); //sent or not
  for (let i = 0; i <= status.length - 1; i++) {
    if (status[i][0] !== "sent") {
      let unsentAnnouncement = ss.getRange(i + 2, 1, 1, 13).getValues()[0];

      let unsentAnnouncementObj = {
        alternateLink: unsentAnnouncement[0],
        assigneeMode: unsentAnnouncement[1],
        courseId: unsentAnnouncement[2],
        creationTime: unsentAnnouncement[3],
        creatorUserId: unsentAnnouncement[4],
        id: unsentAnnouncement[5],
        individualStudentsOptions: unsentAnnouncement[6],
        materials: unsentAnnouncement[7],
        scheduledTime: unsentAnnouncement[8],
        state: unsentAnnouncement[9],
        text: unsentAnnouncement[10],
        updateTime: unsentAnnouncement[11],
        materialsObjArray: `${unsentAnnouncement[12]}`,
      };

      //データ一部書き換え
      unsentAnnouncementObj.creatorUserName = convertTeachersId(parseInt(unsentAnnouncementObj.creatorUserId)) + "先生"; //先生の名前取得
      unsentAnnouncementObj.updateTime = unsentAnnouncementObj.updateTime = convertTime(unsentAnnouncementObj.updateTime); //GMT -> JST

      //データ無しにnullを代入 (LINE APIでのエラー防止)
      for (let key in unsentAnnouncementObj) {
        if (unsentAnnouncementObj[key] == "") {
          unsentAnnouncementObj[key] = "null";
        }
      }

      //テキスト用のデータ
      let textData = `${unsentAnnouncementObj.text}\n${unsentAnnouncementObj.alternateLink}`;
      if (unsentAnnouncementObj.materials != "null") {
        textData += `\n${unsentAnnouncementObj.materials}`;
      }

      //LINE Flex用のデータ作成
      let lineFlexBody = convertIntoLineFlexAnnoucements(unsentAnnouncementObj);

      //Post
      postFlexToLineOfficialAccount(lineFlexBody, unsentAnnouncementObj.text);

      //Write "send" on sheet
      ss.getRange(i + 2, 14, 1, 1).setValue("sent");
    }
  }
}

/**
 *
 * @param {object} materialsObject // https://developers.google.com/classroom/reference/rest/v1/courses.courseWorkMaterials?hl=en
 * @returns {array} [materialstextLists, materialsObjArray]
 */
function convertMaterial(materials) {
  let materialsTextLists = "";
  let materialsObjArray = [];
  for (let i of materials) {
    if (i.driveFile != undefined) {
      materialsTextLists += i.driveFile.driveFile.title + " : " + i.driveFile.driveFile.alternateLink + "\n";
      materialsObjArray.push({
        title: i.driveFile.driveFile.title,
        link: i.driveFile.driveFile.alternateLink,
      });
    } else if (i.form != undefined) {
      materialsTextLists += i.form.title + " : " + i.form.formUrl + "\n";
      materialsObjArray.push({ title: i.form.title, link: i.form.formUrl });
    } else if (i.link != undefined) {
      materialsTextLists += i.link.title + " : " + i.link.url + "\n";
      materialsObjArray.push({ title: i.link.title, link: i.link.url });
    } else if (i.youtubeVideo != undefined) {
      materialsTextLists += i.youtubeVideo.title + " : " + i.youtubeVideo.alternateLink + "\n";
      materialsObjArray.push({
        title: i.youtubeVideo.title,
        link: i.youtubeVideo.alternateLink,
      });
    }
  }
  return [materialsTextLists, JSON.stringify(materialsObjArray)];
}

/**
 * GMTをJSTに変換
 * @param {Number} UNIXTIME
 * @returns {String} JST(yyyy/mm/dd hh:mm:ss)
 */
function convertTime(time) {
  time = {
    year: parseInt(time.slice(0, 4)),
    month: parseInt(time.slice(5, 7)),
    day: parseInt(time.slice(8, 10)),
    hour: parseInt(time.slice(11, 13)) + 9,
    minuite: parseInt(time.slice(14, 16)),
    second: parseInt(time.slice(17, 19)),
  };
  if (time.hour >= 24) {
    time.hour -= 24;
    time.day += 1;
  }

  //0追記
  for (key in time) {
    if (time[key] <= 9) {
      time[key] = "0" + String(time[key]);
    } else {
      time[key] = String(time[key]);
    }
  }
  return time.year + "/" + time.month + "/" + time.day + " " + time.hour + ":" + time.minuite + ":" + time.second;
}
