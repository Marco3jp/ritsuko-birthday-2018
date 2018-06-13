# json reference
## Elements
- source
    - array(string)
- main
    - array(string)
- args
    - object
        - key : mainの添字(string)
        - value : mainに記載された命令の引数(array,string)
- endpoints
    - object
        - key : 任意のラベル(string)
        - value : そのときにアクセスすべきエンドポイント(string)

## struct
### source
**発生源** を示す。

- キャラクター名
    - ナレーション時は "ナレーション" "narration" "no name"とする。このとき名前の欄が空白になって表示される。
- "event"

この要素で通常通りの発言なのかイベントが発生するのか判断する。

### main
中心になる情報を示す。
sourceがどちらであったかに基づいて、以下の要素であるとみなして処理する。
仮にイベント名が記載されていても、sourceが"event"でなければ発言とみなして表示される。

- 表示文字列
- イベント名

イベント・イベント名の一覧は別にまとめる。
