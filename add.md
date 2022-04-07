# Errorが起きたらDiscordに通知する
```javascript

function postToDiscordError(e) {
    const Discord_WebHookURL = "";
    const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        payload: JSON.stringify({
            username: "Error",
            avater_url: "https://www.gstatic.com/images/branding/product/1x/classroom_64dp.png",
            //content: "Errorです",
            embeds: [
                {
                    author: {
                        name: "Classroom send to LINE V4",
                        url: "", // nameをクリックしたら飛べるリンク
                        icon_url: "https://www.gstatic.com/images/branding/product/1x/classroom_64dp.png",
                    },
                    //type: "rich",
                    title: e.name,
                    description: e.stack,
                    //url: "",
                    //timestamp: new Date(),
                    color: 0xdc143c, //0x{16進数}
                    footer: {
                        text: Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss"),
                        //icon_url:,
                    },
                },
            ],
        }),
        muteHttpExceptions: true,
    };
    console.log("PostToDiscordError : " + UrlFetchApp.fetch(Discord_WebHookURL, options).getResponseCode());
}

```

# LINE Notifyを使う
投稿可能件数が増えるためクラスLINE等でも使えるかも  
ただし、[Flex Message](https://developers.line.biz/ja/docs/messaging-api/message-types/#flex-messages)は使えない。

# copyリンク
https://docs.google.com/spreadsheets/d/1EndX9mZqwZRSKn6GkwfnjgoNE0deoZdEH7GpKrv40WU/copy#gid=100360778

# appsscript.jsonの表示