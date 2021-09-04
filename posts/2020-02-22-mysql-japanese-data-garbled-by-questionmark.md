---
title: "[MySQL] Macのターミナルだと日本語のデータがはてな(?)に文字化けしている場合の対処法"
date: "2020-02-22"
excerpt: "ある現場で MySQL に入っているデータを Mac のターミナルで確認した際、下記のように日本語のデータがクエスチョンマーク(はてな、?)で表示されました。"
cover_image: "/images/posts/sql.jpg"
category: "MySQL"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

### MySQL の日本語データがはてな(?)に文字化けする

ある現場で MySQL に入っているデータを Mac のターミナルで確認した際、下記のように日本語のデータがクエスチョンマーク(はてな、?)で表示されました。

    mysql> SELECT id, data FROM fugatable;
    +-----+-------------------------------------+
    | id  | data                                |
    +-----+-------------------------------------+
    |   1 | ????                                |
    |   2 | ????                                |
    |   3 | ????                                |
    |   4 | ????                                |
    |   5 | ????                                |
    +----+--------------------------------------+
    5 rows in set (0.01 sec)

MySQL の文字コードの設定が「Japanese(EUC)」で、ターミナルのデフォルトの言語設定「Unicode(UTF-8)」のままだとこうなるようです。

MySQL が複数あって、文字コードがそれぞれ違っている場合、都度言語設定を変更するのも手間なので、iTerm2 を使って、別のターミナルで対応するようにしました。

### iTerm2 ダウンロード

公式サイト（[https://iterm2.com/](https://iterm2.com/)）からダウンロードできます。

### iTerm2 言語設定手順

    1. iTerm2起動
    2. 左上メニューバー「iTerm2」を選択
    3. 「Preferences」を選択
    4. 「Profiles」アイコン選択
    5. ナビゲーションバー「Terminal」を選択
    6. 「Terminal Emulation」: Character Encoding を「Japanese(EUC)」を選択

設定を終えたら、iTerm2 を再起動します。

前述の文字化けしていた MySQL にアクセスし直すと、文字化けせずに日本語が表示されます。

    mysql> SELECT id, data FROM fugatable;
    +-----+-------------------------------------+
    | id  | data                                |
    +-----+-------------------------------------+
    |   1 | 東京                                 |
    |   2 | 沖縄                                 |
    |   3 | 大阪                                 |
    |   4 | 福岡                                 |
    |   5 | 滋賀                                 |
    +----+--------------------------------------+
    5 rows in set (0.01 sec)

MySQL のインスタンスがいくつもあり、Japanese(EUC)や Unicode(UTF-8)」など言語設定が違うのがある時などに便利なのではないかと思います。

以上になります。
