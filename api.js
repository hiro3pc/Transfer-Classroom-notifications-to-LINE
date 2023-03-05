/**
 * LINE公式アカウントと友達になっているすべてのユーザーに送信する
 * @param {object} flexBody
 * @param {string} altText 代替テキスト
 */
function postFlexToBroadcast(flexBody, altText) {
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
            Authorization: "Bearer " + LINE_CHANNEL_ACCESS_TOKEN,
        },
        method: "post",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true,
    };
    const res = UrlFetchApp.fetch(LINE_API_URL, options);
    console.log(`postFlexToBroadcast: ${res.getResponseCode()}\n${res.getContentText()}`);
    if (res.getResponseCode() != 200) {
        throw new Error(`postFlexToBroadcast :${res.getResponseCode()}\n${res.getContentText()}`);
    }
}
/**
 * LINEグループに送信する
 * @param {object} flexBody
 * @param {string} altText
 */
function postFlexToLineGroup(flexBody, altText) {
    const LINE_API_URL = "https://api.line.me/v2/bot/message/push";

    const payload = {
        to: LINE_GROUP_ID,
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
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + LINE_CHANNEL_ACCESS_TOKEN,
        },
        method: "post",
        payload: JSON.stringify(payload),

        muteHttpExceptions: true,
    };

    const res = UrlFetchApp.fetch(LINE_API_URL, options);
    console.log(`postFlexToLineGroup: ${res.getResponseCode()}\n${res.getContentText()}`);
    if (res.getResponseCode() != 200) {
        throw new Error(`postFlexToLineGroup :${res.getResponseCode()}\n${res.getContentText()}`);
    }
}
