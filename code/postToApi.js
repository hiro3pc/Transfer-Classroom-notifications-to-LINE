function postFlexToLineOfficialAccount(flexBody, altText) {
  const CHANNEL_ACCESS_TOKEN = ""; //LINEChannelAccessToken
  const LINE_API_URL = "https://api.line.me/v2/bot/message/broadcast";
  const payload = {
    messages: [
      {
        type: "flex",
        altText: altText,
        contents: flexBody,
      },
    ],
  };
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN,
    },
    method: "post",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };
  let res = UrlFetchApp.fetch(LINE_API_URL, options);
  if (res.getResponseCode() != 200) {
    console.log(res.getContentText());
  }
}
