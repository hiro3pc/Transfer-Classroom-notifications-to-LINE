function postFlexToMe(flexBody, altText) {
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
    console.log(`postFlexToMe: ${res.getResponseCode()}\n${res.getContentText()}`);

    if (res.getResponseCode() != 200) {
        throw new Error(`postFlexToMe :${res.getResponseCode()}\n${res.getContentText()}`);
    }
}
