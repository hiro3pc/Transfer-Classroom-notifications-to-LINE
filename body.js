function convertCourseWorkIntoLineFlex(data) {
    let body = {
        type: "bubble",
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "baseline",
                            contents: [
                                {
                                    type: "text",
                                    size: "xl",
                                    margin: "md",
                                    contents: [],
                                    text: "New assignment",
                                    color: PARTS_COLOR.contentsType,
                                    weight: "bold",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "text",
                    text: data.title,
                    weight: "bold",
                    size: "xl",
                    margin: "md",
                    wrap: true,
                    color: PARTS_COLOR.text,
                },
                {
                    type: "text",
                    text: data.description,
                    wrap: true,
                    size: "md",
                    margin: "md",
                    color: PARTS_COLOR.text,
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "button",
                    action: {
                        type: "uri",
                        label: "Open GoogleClassroom",
                        uri: data.alternateLink,
                    },
                    margin: "md",
                    color: ICON_COLOR.googleclassroom,
                    height: "md",
                    style: "secondary",
                },
            ],
            margin: "md",
            spacing: "md",
        },
        footer: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "text",
                    text: data.updateTime,
                    size: "xs",
                    color: "#aaaaaa",
                    align: "start",
                },
                {
                    type: "text",
                    text: data.creatorUserName,
                    color: "#aaaaaa",
                    size: "xs",
                    align: "end",
                },
            ],
        },
        styles: {
            body: {
                backgroundColor: PARTS_COLOR.background,
            },
            footer: {
                separator: true,
                backgroundColor: PARTS_COLOR.background,
            },
        },
    };

    if (data.materialTitleAndUrlObj != "null") {
        let materialsArray = JSON.parse(data.materialTitleAndUrlObj);

        let addDataArray = [];
        materialsArray.forEach((element) => {
            addDataArray.push({
                type: "button",
                action: {
                    type: "uri",
                    label: composeLineFlexLabel(element.title),
                    uri: element.link,
                },
                margin: "sm",
                color: ICON_COLOR[element.format],
                style: "secondary",
                height: "sm",
            });
        });

        body.body.contents.push({
            type: "box",
            layout: "vertical",
            contents: addDataArray,
            margin: "md",
        });
    }
    return body;
}

function convertCourseWorkMaterialIntoLineFlex(data) {
    let body = {
        type: "bubble",
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "baseline",
                            contents: [
                                {
                                    type: "text",
                                    size: "xl",
                                    margin: "md",
                                    contents: [],
                                    text: "New materials",
                                    color: PARTS_COLOR.text,
                                    weight: "bold",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "text",
                    text: data.title,
                    weight: "bold",
                    size: "xl",
                    margin: "md",
                    wrap: true,
                    color: PARTS_COLOR.text,
                },
                {
                    type: "text",
                    text: data.description,
                    wrap: true,
                    size: "md",
                    margin: "md",
                    color: PARTS_COLOR.text,
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "button",
                    action: {
                        type: "uri",
                        label: "Open GoogleClassroom",
                        uri: data.alternateLink,
                    },
                    margin: "md",
                    color: ICON_COLOR.googleclassroom,
                    height: "md",
                    style: "secondary",
                },
            ],
            margin: "md",
            spacing: "md",
        },
        footer: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "text",
                    text: data.updateTime,
                    size: "xs",
                    color: "#aaaaaa",
                    align: "start",
                },
                {
                    type: "text",
                    text: data.creatorUserName,
                    color: "#aaaaaa",
                    size: "xs",
                    align: "end",
                },
            ],
        },
        styles: {
            body: {
                backgroundColor: PARTS_COLOR.background,
            },
            footer: {
                separator: true,
                backgroundColor: PARTS_COLOR.background,
            },
        },
    };

    if (data.materialTitleAndUrlObj != "null") {
        let materialsArray = JSON.parse(data.materialTitleAndUrlObj);

        let addDataArray = [];
        materialsArray.forEach((element) => {
            addDataArray.push({
                type: "button",
                action: {
                    type: "uri",
                    label: composeLineFlexLabel(element.title),
                    uri: element.link,
                },
                margin: "sm",
                color: ICON_COLOR[element.format],
                style: "secondary",
                height: "sm",
            });
        });

        body.body.contents.push({
            type: "box",
            layout: "vertical",
            contents: addDataArray,
            margin: "md",
        });
    }
    return body;
}

function convertAccouncementIntoLineFlex(data) {
    let body = {
        type: "bubble",
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "baseline",
                            contents: [
                                {
                                    type: "text",
                                    size: "xl",
                                    margin: "md",
                                    contents: [],
                                    text: "New announcement",
                                    color: PARTS_COLOR.contentsType,
                                    weight: "bold",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "text",
                    text: data.text,
                    wrap: true,
                    size: "md",
                    margin: "md",
                    color: PARTS_COLOR.text,
                },
                {
                    type: "separator",
                    margin: "md",
                },
                {
                    type: "button",
                    action: {
                        type: "uri",
                        label: "Open GoogleClassroom",
                        uri: data.alternateLink,
                    },
                    margin: "md",
                    color: ICON_COLOR.googleclassroom,
                    height: "md",
                    style: "secondary",
                },
            ],
            margin: "md",
            spacing: "md",
        },
        footer: {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "text",
                    text: data.updateTime,
                    size: "xs",
                    color: "#aaaaaa",
                    align: "start",
                },
                {
                    type: "text",
                    text: data.creatorUserName,
                    color: "#aaaaaa",
                    size: "xs",
                    align: "end",
                },
            ],
        },
        styles: {
            body: {
                backgroundColor: PARTS_COLOR.background,
            },
            footer: {
                separator: true,
                backgroundColor: PARTS_COLOR.background,
            },
        },
    };

    if (data.materialTitleAndUrlObj != "null") {
        let materialsArray = JSON.parse(data.materialTitleAndUrlObj);

        let addDataArray = [];
        materialsArray.forEach((element) => {
            addDataArray.push({
                type: "button",
                action: {
                    type: "uri",
                    label: composeLineFlexLabel(element.title),
                    uri: element.link,
                },
                margin: "sm",
                color: ICON_COLOR[element.format],
                style: "secondary", //文字色 黒
                height: "sm",
            });
        });

        body.body.contents.push({
            type: "box",
            layout: "vertical",
            contents: addDataArray,
            margin: "md",
        });
    }

    return body;
}
