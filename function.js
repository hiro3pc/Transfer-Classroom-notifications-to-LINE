function actionPer1minuite() {
    try {
        getAnnouncements();
        getCourseWorks();
        getCourseWorkMaterials();
    } catch (e) {
        printError(e);
    }
}

function printError(e) {
    console.error("[名前] " + e.name + "\n" + "[メッセージ]" + e.message + "\n" + "[StackTrace]\n" + e.stack);
}

function getCourseWorks() {
    const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("courseWorks");
    const courseWorksList = Classroom.Courses.CourseWork.list(COURSE_ID).courseWork;
    if (typeof courseWorksList === "undefined" || courseWorksList.length === 0) {
        console.log("courseWorksList is empty");
    } else {
        const courseWorks = [];
        courseWorksList.forEach((element) => {
            if (element.materials != undefined) {
                const material = converteMaterial(element.materials);
                element.materialTitleAndUrlText = material.materialsTextAndUrlLists;
                element.materialTitleAndUrlObj = material.materialsObjArray;
                element.materialUnique = material.materialUnique;
            }
            courseWorks.unshift([
                element.alternateLink,
                element.assigneeMode,
                element.assignment,
                element.associatedWithDeveloper,
                element.courseId,
                element.creationTime,
                element.creatorUserId,
                element.description,
                element.dueDate,
                element.dueTime,
                element.id,
                element.individualStudentsOptions,
                element.materials,
                element.maxPoints,
                element.multipleChoiceQuestion,
                element.scheduledTime,
                element.state,
                element.submissionModificationMode,
                element.title,
                element.topicId,
                element.updateTime,
                element.workType,
                element.materialTitleAndUrlText,
                element.materialTitleAndUrlObj,
                element.materialUnique,
            ]);
        });
        ss.getRange(2, 1, courseWorks.length, courseWorks[0].length).setValues(courseWorks);

        const status = ss.getRange(2, 26, ss.getLastRow() - 1, 1).getValues();
        status.forEach((element, index) => {
            if (element[0] !== "sent") {
                const unsentCourseWork = ss.getRange(index + 2, 1, 1, 25).getValues()[0];
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
                    materialTitleAndUrlText: unsentCourseWork[22],
                    materialTitleAndUrlObj: `${unsentCourseWork[23]}`,
                    materialUnique: `${unsentCourseWork[24]}`,
                };

                //データ一部書き換え
                unsentCourseWorkObj.creatorUserName = getTeacherName(unsentCourseWorkObj.creatorUserId) + "先生";
                unsentCourseWorkObj.updateTime = convertTime(unsentCourseWorkObj.updateTime);

                //データなしに"null"を代入
                for (key in unsentCourseWorkObj) {
                    if (unsentCourseWorkObj[key] == "" || unsentCourseWorkObj[key] == "[]") {
                        unsentCourseWorkObj[key] = "null";
                    }
                }

                //テキスト用のデータ
                /*
                let textToPost = `${unsentCourseWorkObj.title}\n${unsentCourseWorkObj.description}}`;
                if (unsentCourseWorkObj.materialTitleAndUrlText != "null") {
                    textToPost += `\n${unsentCourseWorkObj.materialTitleAndUrlText}`;
                }
                */

                //post
                postFlexToLineGroup(convertCourseWorkIntoLineFlex(unsentCourseWorkObj), composeAltText(unsentCourseWorkObj.title));

                //Write "sent" on sheet
                ss.getRange(index + 2, 26, 1, 1).setValue("sent");
            }
        });
    }
}

function getCourseWorkMaterials() {
    const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("courseWorkMaterials");
    const courseWorkMaterialsList = Classroom.Courses.CourseWorkMaterials.list(COURSE_ID).courseWorkMaterial;
    const courseWorkMaterials = [];
    if (typeof courseWorkMaterialsList === "undefined" || courseWorkMaterialsList.length === 0) {
        console.log("courseWorkMaterialsList is empty");
    } else {
        courseWorkMaterialsList.forEach((element) => {
            if (element.materials != undefined) {
                const material = converteMaterial(element.materials);
                courseWorkMaterials.unshift([
                    element.courseId,
                    element.id,
                    element.title,
                    element.description,
                    element.materials,
                    element.state,
                    element.alternateLink,
                    element.creationTime,
                    element.updateTime,
                    element.scheduledTime,
                    element.assigneeMode,
                    element.individualStudentsOptions,
                    element.creatorUserId,
                    element.topicId,
                    material.materialsTextAndUrlLists,
                    material.materialsObjArray,
                    material.materialUnique,
                ]);
            }
        });
        ss.getRange(2, 1, courseWorkMaterials.length, courseWorkMaterials[0].length).setValues(courseWorkMaterials);

        const status = ss.getRange(2, 18, ss.getLastRow() - 1, 1).getValues();
        status.forEach((element, index) => {
            if (element[0] !== "sent") {
                const unsentCourseWorkMaterial = ss.getRange(index + 2, 1, 1, 17).getValues()[0];
                let unsentCourseWorkMaterialObj = {
                    courseId: unsentCourseWorkMaterial[0],
                    id: unsentCourseWorkMaterial[1],
                    title: unsentCourseWorkMaterial[2],
                    description: unsentCourseWorkMaterial[3],
                    materials: unsentCourseWorkMaterial[4],
                    state: unsentCourseWorkMaterial[5],
                    alternateLink: unsentCourseWorkMaterial[6],
                    creationTime: unsentCourseWorkMaterial[7],
                    updateTime: unsentCourseWorkMaterial[8],
                    scheduledTime: unsentCourseWorkMaterial[9],
                    assigneeMode: unsentCourseWorkMaterial[10],
                    individualStudentsOpsions: unsentCourseWorkMaterial[11],
                    creatorUserId: unsentCourseWorkMaterial[12],
                    topicId: unsentCourseWorkMaterial[13],
                    materialTitleAndUrlText: unsentCourseWorkMaterial[14],
                    materialTitleAndUrlObj: `${unsentCourseWorkMaterial[15]}`, //stringにしないとsheetに書き込めない
                    materialUnique: `${unsentCourseWorkMaterial[16]}`,
                };

                //データ一部書き換え
                unsentCourseWorkMaterialObj.creatorUserName = getTeacherName(unsentCourseWorkMaterialObj.creatorUserId) + "先生";
                unsentCourseWorkMaterialObj.updateTime = convertTime(unsentCourseWorkMaterialObj.updateTime);

                //データ無しにnullを代入
                for (key in unsentCourseWorkMaterialObj) {
                    if (unsentCourseWorkMaterialObj[key] == "" || unsentCourseWorkMaterialObj[key] == "[]") {
                        unsentCourseWorkMaterialObj[key] = "null"; //stringにしないとLINE側でエラーになる
                    }
                }

                //テキスト用のデータ
                /*
                let textToPost = `${unsentCourseWorkMaterialObj.title}\n${unsentCourseWorkMaterialObj.description}`;
                if (unsentCourseWorkMaterialObj.materialTitleAndUrlText != "null") {
                    textToPost += `\n${unsentCourseWorkMaterialObj.materialTitleAndUrlText}`;
                }
                */

                //post
                postFlexToLineGroup(convertCourseWorkMaterialIntoLineFlex(unsentCourseWorkMaterialObj), composeAltText(unsentCourseWorkMaterialObj.title));
                //Write "sent" on sheet
                ss.getRange(index + 2, 18, 1, 1).setValue("sent");
            }
        });
    }
}

function getAnnouncements() {
    const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("announcements");
    const announcementsList = Classroom.Courses.Announcements.list(COURSE_ID).announcements;
    const announcements = [];
    if (typeof announcementsList === "undefined" || announcementsList.length === 0) {
        console.log("announcementsList is empty");
    } else {
        announcementsList.forEach((element) => {
            if (element.materials != undefined) {
                const material = converteMaterial(element.materials);
                element.materialTitleAndUrlText = material.materialsTextAndUrlLists;
                element.materialTitleAndUrlObj = material.materialsObjArray;
                element.materialUnique = material.materialUnique;
            }
            announcements.unshift([
                element.alternateLink,
                element.assigneeMode,
                element.courseId,
                element.creationTime,
                element.creatorUserId,
                element.id,
                element.individualStudentsOptions,
                element.materials,
                element.state,
                element.text,
                element.updateTime,
                element.materialTitleAndUrlText,
                element.materialTitleAndUrlObj,
                element.materialUnique,
            ]);
        });
        ss.getRange(2, 1, announcements.length, announcements[0].length).setValues(announcements);

        const status = ss.getRange(2, 15, ss.getLastRow() - 1, 1).getValues();
        status.forEach((element, index) => {
            if (element[0] !== "sent") {
                const unsentAnnouncement = ss.getRange(index + 2, 1, 1, 14).getValues()[0];
                let unsentAnnouncementObj = {
                    alternateLink: unsentAnnouncement[0],
                    assigneeMode: unsentAnnouncement[1],
                    courseId: unsentAnnouncement[2],
                    creationTime: unsentAnnouncement[3],
                    creatorUserId: unsentAnnouncement[4],
                    id: unsentAnnouncement[5],
                    individualStudentsOptions: unsentAnnouncement[6],
                    materials: unsentAnnouncement[7],
                    state: unsentAnnouncement[8],
                    text: unsentAnnouncement[9],
                    updateTime: unsentAnnouncement[10],
                    materialTitleAndUrlText: unsentAnnouncement[11],
                    materialTitleAndUrlObj: `${unsentAnnouncement[12]}`,
                    materialUnique: `${unsentAnnouncement[13]}`,
                };
                //データ一部書き換え
                unsentAnnouncementObj.creatorUserName = getTeacherName(unsentAnnouncementObj.creatorUserId) + "先生";
                unsentAnnouncementObj.updateTime = convertTime(unsentAnnouncementObj.updateTime);

                //データなしに"null"を代入
                for (key in unsentAnnouncementObj) {
                    if (unsentAnnouncementObj[key] == "" || unsentAnnouncementObj[key] == "[]") {
                        unsentAnnouncementObj[key] = "null";
                    }
                }

                /*
                //テキスト用のデータ
                let textToPost = `${unsentAnnouncementObj.text}\n}`;
                if (unsentAnnouncementObj.materialTitleAndUrlText != "null") {
                    textToPost += `\n${unsentAnnouncementObj.materialTitleAndUrlText}`;
                }
                */

                //post
                postFlexToLineGroup(convertAccouncementIntoLineFlex(unsentAnnouncementObj), composeAltText(unsentAnnouncementObj.text));
                //Write "sent" on sheet
                ss.getRange(index + 2, 15, 1, 1).setValue("sent");
            }
        });
    }
}

/**
 * 400文字以内に切り取る
 * @param {string} text
 * @returns {string} text up to 400 characters
 */
function composeAltText(text) {
    if (text != "null") {
        if (text.length >= 397) {
            return text.slice(0, 397) + "...";
        } else {
            return text;
        }
    }
}

/**
 * 40文字以内に切り取る
 * @param {string} text
 * @returns {string} text up to 40 characters
 */
function composeLineFlexLabel(text) {
    if (text != "null") {
        if (text.length >= 40) {
            return text.slice(0, 36) + "...";
        } else {
            return text;
        }
    }
}

/**
 * Materialsオブジェクトを変換する
 * @param {Object} materials
 * @return {object}
 */
function converteMaterial(materials) {
    let materialsTextAndUrlLists = "";
    let materialsObjArray = [];
    let materialUnique = [];
    for (let i of materials) {
        //url判断
        if (i.form != undefined) {
            materialUnique.push("googleforms");
            //  materialsTextAndUrlLists += i.form.title + " : " + i.form.formUrl + "\n";
            //  materialsObjArray.push({ title: i.form.title, link: i.form.formUrl ,color:""});
        } else if (i.link != undefined) {
            materialsTextAndUrlLists += i.link.title + " : " + i.link.url + "\n";
            materialsObjArray.push({ title: i.link.title, link: i.link.url, format: "link", color: "#0000ff" });
            materialUnique.push("link");
        } else if (i.youtubeVideo != undefined) {
            materialsTextAndUrlLists += i.youtubeVideo.title + " : " + i.youtubeVideo.alternateLink + "\n";
            materialsObjArray.push({ title: i.youtubeVideo.title, link: i.youtubeVideo.alternateLink, format: "youtube", color: "#ff0015" });
            materialUnique.push("youtube");
        } else if (i.driveFile != undefined) {
            let title = i.driveFile.driveFile.title;
            let alternateLink = i.driveFile.driveFile.alternateLink;
            materialsTextAndUrlLists += title + " : " + alternateLink + "\n";
            if (alternateLink.indexOf("spreadsheets") != -1) {
                materialUnique.push("googlesheets");
                materialsObjArray.push({ title: title, link: alternateLink, format: "googlesheets", color: "#01ac47" }); //同名　怖い
            } else if (alternateLink.indexOf("document") != -1) {
                materialUnique.push("googledocs");
                materialsObjArray.push({ title: title, link: alternateLink, format: "googledocs", color: "#2584fc" }); //同名　怖い
            } else if (alternateLink.indexOf("presentation") != -1) {
                materialUnique.push("googleslides");
                materialsObjArray.push({ title: title, link: alternateLink, format: "googleslides", color: "#ffba00" }); //同名　怖い
                //} else if (title.indexOf("forms") != -1) {
                //  materialUnique.push("googleforms");
            } else if (title != undefined) {
                let extention = "file";
                extention = title.split(".").pop(); //拡張子切り出し
                if (extention == "mp3" || extention == "m4a") {
                    extention = "audio";
                } else if (extention == "JPG" || extention == "png" || extention == "HEIC") {
                    extention = "image";
                } else if (extention == "MOV" || extention == "mp4" || extention == "m4v" || extention == "mov" || extention == "avi" || extention == "MKV") {
                    extention = "video";
                } else if (EXTENTIONS_ARRAY.indexOf(extention) == -1) {
                    //上記にもでEXTENTIONS_ARRAYにもない拡張子
                    extention = "file";
                }
                materialUnique.push(extention);
                materialsObjArray.push({ title: title, link: alternateLink, format: extention, color: giveColorAndUrl(extention).color }); //同名　怖い
            }
        }
    }

    //ユニークと並び替え
    materialUnique = [...new Set(materialUnique)];
    materialUnique = materialUnique.sort();
    return { materialsTextAndUrlLists: materialsTextAndUrlLists, materialsObjArray: JSON.stringify(materialsObjArray), materialUnique: JSON.stringify(materialUnique) }; //3つめ JSON or 配列をjoin
}

/**
 * GMTをJSTに変換
 * @param {Number} UNIXTIME
 * @returns {String} JST(yyyy/mm/dd hh:mm:ss)
 */
function convertTime(time) {
    const date = new Date(time);
    return Utilities.formatDate(date, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss");
}

/**
 * materialUniqueをもとにcolorとurlを付与
 */
function giveColorAndUrl(extention) {
    return { ICON_LINK: ICON_LINK[extention], color: ICON_COLOR[extention] };
}

/**
 * 先生の名前を取得する
 * @param {string} teacherId
 * @returns {string} 先生の名前
 */
function getTeacherName(teacherId) {
    return Classroom.UserProfiles.get(teacherId).name.familyName;
    //return Classroom.UserProfiles.get(teacherId).name.fullName;
}
