# 作り方

## 注意点

- `courseWorks`は`課題`
- `announcements`は`通知`
- `courseWorkMaterials`は`課題資料`

と訳しています。

### 1. 事前準備

- LINE 公式アカウントを作成してチャンネルアクセストークンを取得する。  
  グループに送信したい場合は、グループ id なども取得する。
- 新規スプレッドシートを作成して、Apps Script を開きコードをすべてコピーする。
- GAS のサービスから`Google Classrooom API (最新バージョン)`を追加する。

### 2. runOnlyFirst を実行

シートが作成されます。

### 3. manage.gs の getCourseList()を実行し、投稿を転送したいクラスの`courseId`を取得して、７行目の`courseId`に代入する。

### 4. teachersId.gs の getTeachersId()を実行し、ログに出力されたものを`convertTeachersId(teachersId)`の`dataBase`に代入する。

### 5. `postFlexToLineOfficialAccount(flexBody, altText) `の`CHANNEL_ACCESS_TOKEN`に LINE 公式アカウントの CHANNEL_ACCESS_TOKEN を代入する。

### 6. トリガー設定で`actionPer1minuite()`が定期実行されるようにする。

すると、投稿が転送されます。最初はアクセス回数に関するエラーが出るかもしれません。 シートの`sent or not`の列に`sent`を入力すると既に転送したとみなされます。
