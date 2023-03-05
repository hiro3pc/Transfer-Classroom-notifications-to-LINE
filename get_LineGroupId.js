function doPost(e) {
    const ss_LINE_GROUP_ID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LINE_GROUP_ID");
    const res = JSON.parse(e.postData.contents);
    ss_LINE_GROUP_ID.getRange(1, 1).setValue(res.events[0].source.groupId);
}
