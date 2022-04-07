## 注意点

- `courseWorks`は`課題`
- `announcements`は`通知`
- `courseWorkMaterials`は`資料`

と訳しています。

## 関数の実行について

## 1. 事前準備

- 以下のリンクからSpreadsheetのコピーを作成し、`拡張機能`から`Apps Script`を開いてください。
  [https://docs.google.com/spreadsheets/d/1EndX9mZqwZRSKn6GkwfnjgoNE0deoZdEH7GpKrv40WU/copy#gid=100360778
](https://docs.google.com/spreadsheets/d/1EndX9mZqwZRSKn6GkwfnjgoNE0deoZdEH7GpKrv40WU/copy#gid=100360778
)
- LINE 公式アカウントを作成してチャンネルアクセストークンを取得する。
  方法は後日書きます。



## 2. get_courses.jsのgetCourseList()を実行する
`承認が必要です`というウィンドウが表示されると思います。  
`権限を確認`をクリックし、`アカウントを選択`し、`許可`をクリックしてください。

## 3.COURSE_IDを入力
実行ログに表示されたクラスの中で、通知の転送をしたいクラスのクラス名の横の`（）`の中にある数字(course id)を`grobal_variables.js`の`2行目`の`const COURSE_ID = "";`の`""`の中に入力してください。

例（course id が`000000000000`の場合）
```js
const COURSE_ID = "000000000000";
```

## 5. 関数: `actionPer1minute`を実行する
`actionPer1minute`を実行すると、スプレッドシートに`課題`・`資料`・`通知`の一覧が書き込まれます。

実行が終わったら、それぞれ最後の一つの投稿以外すべてのシートで`sent or not`の行に`sent`と入力してください。
入力をしなくても実行できますが、LINE公式アカウントの投稿数

## 4.LINE_CHANNEL_ACCESS_TOKENの入力
`1.事前準備`で取得した`Channnel Access Token`を`grobal_variables.js`の`1行目`の`const LINE_CHANNEL_ACCESS_TOKEN = "";`の`""`の中に入力してください。

例（Channnel Access Tokenが`1a1a1a1a1a1a1a1a1a1a1a1aa/1a1a1a1a1a1a1a1a1a/1a1a1a1a1a1a1a1/1a1a1a/1a1a1a1a1a=`の場合）
```js
const LINE_CHANNEL_ACCESS_TOKEN = "1a1a1a1a1a1a1a1a1a1a1a1aa/1a1a1a1a1a1a1a1a1a/1a1a1a1a1a1a1a1/1a1a1a/1a1a1a1a1a="; //LINE_CHANNEL_ACCESS_TOKEN
```

## 5.トリガーの設定
左上にある時計マークをクリックしてトリガー設定を開く。  
右下の`トリガーを追加`をクリック、以下のように変更する。
- 実行する関数 : `actionPer1minuite`
- イベントのソース : `時間主導型`
- 時間ベースのトリガーのタイプ : `分ベースのタイマー`
- 時間の間隔 : `1分おき`

エラー通知設定は各自で設定してください。

最後に`保存`をクリック。

## 注意点: Google formについて

Google FormをBOTの投稿のリンクから開くと、Classroomの課題の完了ボタンが自動的に押されません。  
そのため、デフォルトではGoogle formのリンクは投稿されないようにしています。

Google formも投稿されるようにするには、以下のように設定してください。

後日書きます。

## 注意点

- 初回設定時、自分で`sent or not`の列に`sent`を書き込まないと、多数の投稿が一度に転送され**メッセージ通数を多数消費する**可能性があります。