npm, npm 環境設定, npm スクリプト、npm パッケージインストール、babel, es6(es2015), javascript 旧新、toString(), ファイル分け方, export, import, node_module ディレクトリ、npm init -y, src ディレクトリ、README.md ファイル, package.json ファイル

# 🔥 環境設定方法

### プロジェクト作成

npm init

### ♥️ github 管理

git init

import と export：輸入と輸出。他ファイルから呼び出す、呼び込ませる事(ES6 の書き方)
　　　　　　　　　 import Restrant from "./restrant";
　　　　　　　　　 export default Restrant;
　　 ⇅
旧記載：const Restrant = require("./restrant");　呼び出し
　　　　 module.exports = Restrant;　呼び込ませる

babel：javascript の新旧の文法を翻訳するもの。

下記コードをコピペしてインストール

npm install --save-dev babel-cli
　　　　 npm install --save-dev babel-preset-env

### '.babelrc'ファイルに下記をコピペ

{
"presets": [
[
"env", {
"targets": {
"node": "current"
}
}
]
]
}

【ターミナル】
mkdir：make directory = フォルダ作成
touch：新規ファイル作成
init：初期構成

【commit の仕方】
terminal 「git add」→ [git commit]
github の git init〜以降をコピペ

# MVC モデル

＃オブジェクト指向

#問題解決手法
　問題を細かく分けていく。
　大分割 ⇒ 中分割 ⇒ 小分割

ex)アプリを作る。
　　 ⇒ 機能・・・・・・・・・⇒ 数度コードに落とし込む

＃「function」と「メソッド」の違い
　　 function =　関数
　　メソッド = クラスの中にある function

javascript ブラウザに定義されている
　 ∟prompt が使えなかった理由：定義されていないから。使用するには定義をすることから始める

インスタンス化とは：実例を作ること
new：インスタンスを新しく作るときに呼び出す　
↓
constructor：インスタンスを作成するときに呼ばれる。そしてインスタンスデータを返す
