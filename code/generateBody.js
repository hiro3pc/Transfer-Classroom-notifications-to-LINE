function convertIntoLineFlexAnnoucements(sendData) {
  let body;
  if (sendData.materialsObjArray != "null") {
    sendData.materialsObjArray = JSON.parse(sendData.materialsObjArray.replace("`", ""));

    let addMaterialDataArray = [];
    for (let i = 0; i <= sendData.materialsObjArray.length - 1; i++) {
      let addMaterialDataObj = {
        type: "button",
        action: {
          type: "uri",
          label: sendData.materialsObjArray[i].title,
          uri: sendData.materialsObjArray[i].link,
        },
        margin: "xs",
        color: "#d1d1e9",
        style: "secondary",
        height: "sm",
      };
      addMaterialDataArray.push(addMaterialDataObj);
    }

    let addData = {
      type: "box",
      layout: "vertical",
      contents: addMaterialDataArray,
      margin: "md",
    };

    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New announcement",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.text,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
          },
          {
            type: "separator",
            margin: "md",
          },

          addData,
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
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },
          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
        spacing: "none",
        margin: "none",
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  } else {
    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New announcement",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.text,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
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
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },
          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
        spacing: "none",
        margin: "none",
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  }

  return body;
}

function convertIntoLineFlexCourseWorks(sendData) {
  let body;
  if (sendData.materialsObjArray != "null") {
    sendData.materialsObjArray = JSON.parse(sendData.materialsObjArray.replace("'", ""));

    let addMaterialDataArray = [];
    for (let i = 0; i <= sendData.materialsObjArray.length - 1; i++) {
      let addMaterialDataObj = {
        type: "button",
        action: {
          type: "uri",
          label: sendData.materialsObjArray[i].title,
          uri: sendData.materialsObjArray[i].link,
        },
        margin: "xs",
        color: "#d1d1e9",
        style: "secondary",
        height: "sm",
      };
      addMaterialDataArray.push(addMaterialDataObj);
    }

    let addData = {
      type: "box",
      layout: "vertical",
      contents: addMaterialDataArray,
      margin: "md",
    };

    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New assignment",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.title,
            weight: "bold",
            size: "xl",
            margin: "none",
            wrap: true,
            color: "#2b2c34",
          },
          {
            type: "text",
            text: sendData.description,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
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
              uri: sendData.alternateLink,
            },
            margin: "md",
            color: "#6246ea",
            style: "primary",
            height: "md",
          },
          addData,
        ],
        margin: "md",
        spacing: "md",
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "none",
        margin: "none",
        contents: [
          //時間
          {
            type: "text",
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },

          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  } else {
    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New assignment",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.title,
            weight: "bold",
            size: "xl",
            margin: "none",
            wrap: true,
            color: "#2b2c34",
          },
          {
            type: "text",
            text: sendData.description,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
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
              uri: sendData.alternateLink,
            },
            margin: "md",
            color: "#6246ea",
            style: "primary",
            height: "md",
          },
        ],
        margin: "md",
        spacing: "md",
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "none",
        margin: "none",
        contents: [
          {
            type: "text",
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },
          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  }

  return body;
}

function convertIntoLineFlexCourseWorkMaterials(sendData) {
  let body;
  if (sendData.materialsObjArray != "null") {
    sendData.materialsObjArray = JSON.parse(sendData.materialsObjArray.replace("'", ""));

    let addMaterialDataArray = [];
    for (let i = 0; i <= sendData.materialsObjArray.length - 1; i++) {
      let addMaterialDataObj = {
        type: "button",
        action: {
          type: "uri",
          label: sendData.materialsObjArray[i].title,
          uri: sendData.materialsObjArray[i].link,
        },
        margin: "xs",
        color: "#d1d1e9",
        style: "secondary",
        height: "sm",
      };
      addMaterialDataArray.push(addMaterialDataObj);
    }

    let addData = {
      type: "box",
      layout: "vertical",
      contents: addMaterialDataArray,
      margin: "md",
    };

    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New materials",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.title,
            weight: "bold",
            size: "xl",
            margin: "none",
            wrap: true,
            color: "#2b2c34",
          },
          {
            type: "text",
            text: sendData.description,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
          },
          {
            type: "separator",
            margin: "md",
          },
          addData,
        ],
        margin: "md",
        spacing: "md",
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "none",
        margin: "none",
        contents: [
          //時間
          {
            type: "text",
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },

          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  } else {
    body = {
      type: "bubble",
      header: {
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "New materials",
            color: "#ffffff",
            size: "md",
            margin: "md",
            weight: "bold",
          },
        ],
        backgroundColor: "#e45858",
        spacing: "none",
        margin: "md",
        cornerRadius: "none",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: sendData.title,
            weight: "bold",
            size: "xl",
            margin: "none",
            wrap: true,
            color: "#2b2c34",
          },
          {
            type: "text",
            text: sendData.description,
            wrap: true,
            size: "md",
            margin: "md",
            color: "#2b2c34",
          },
          {
            type: "separator",
            margin: "md",
          },
        ],
        margin: "md",
        spacing: "md",
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "none",
        margin: "none",
        contents: [
          {
            type: "text",
            text: sendData.updateTime,
            size: "xs",
            color: "#aaaaaa",
            align: "start",
          },
          {
            type: "text",
            text: sendData.creatorUserName,
            color: "#aaaaaa",
            size: "xs",
            align: "end",
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };
  }

  return body;
}
