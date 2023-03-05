const COURSE_ID = "";
const LINE_CHANNEL_ACCESS_TOKEN = "";
const LINE_GROUP_ID = "";

// LINE Flexの色
const PARTS_COLOR = { contentsType: "#000000", title: "#e9b24c", background: "#f7f9f8", text: "#303030", finePrint: "#aaaaaa" };

// 添付ファイルのリンクの色とアイコン
const ICON_COLOR = {
    //google
    googleclassroom: "#71af54",
    googledocs: "#2584fc",
    googleforms: "#703ab5",
    googlesheets: "#01ac47",
    googleslides: "#ffba00",
    pdf: "#e04e43",
    youtube: "#ff0015",
    //microsoft
    docx: "#1f3275",
    pptx: "#d24625",
    xlsx: "#217244",

    //others
    link: "#0000ff",
    image: "#C8C8C8",
    video: "#C8C8C8",
    audio: "#C8C8C8",

    file: "#C8C8C8",
    others: "#C8C8C8",

    //color
    black: "#000000",
    white: "#ffffff",
};

const ICON_LINK = {
    //google
    googledocs: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/800px-Google_Docs_2020_Logo.svg.png",
    googleforms: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/Google_Forms_2020_Logo.svg.png",
    googlesheets: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/800px-Google_Sheets_2020_Logo.svg.png",
    googleslides: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/800px-Google_Slides_2020_Logo.svg.png",
    youtube: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/YouTube_full-color_icon_(2017).svg.png",

    //microsoft
    docx: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/Microsoft_Office_Word_(2019-present).svg.png",
    pptx: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/Microsoft_Office_PowerPoint_(2019-present).svg.png",
    xlsx: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/Microsoft_Office_Excel_(2019-present).svg.png",

    //others
    pdf: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_picture_as_pdf_black_24dp.png",
    image: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_image_black_24dp.png",
    link: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_link_black_24dp.png",
    video: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_movie_black_24dp.png",
    audio: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_music_note_black_24dp.png",

    others: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_insert_drive_file_black_24dp.png",
    file: "https://raw.githubusercontent.com/hiro3pc/Transfer-Classroom-notifications-to-LINE/default/icons/outline_insert_drive_file_black_24dp.png",
};

const EXTENTIONS_ARRAY = ["googledocs", "googleforms", "googlesheets", "googleslides", "pdf", "youtube", "docx", "pptx", "xlsx", "link", "image", "video", "audio", "others", "file"];
