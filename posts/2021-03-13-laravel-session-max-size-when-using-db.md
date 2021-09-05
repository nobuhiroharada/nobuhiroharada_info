---
title: "[Laravel]セッション(SESSION_DRIVERをdatabaseに設定している場合)の最大容量について"
date: "2021-03-13"
excerpt: "SESSION_DRIVER を database にしていて、セッションにデータを格納し続けるとある時点でセッションに格納していたデータが消えてしまうことがあり、セッションの最大容量について調べました。"
cover_image: "/images/posts/php.jpg"
category: "PHP"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

SESSION_DRIVER を database にしていて、セッションにデータを格納し続けるとある時点でセッションに格納していたデータが消えてしまうことがあり、セッションの最大容量について調べました。

原因は、sessions テーブルの payload カラムが text 型なので、text 型の最大文字数の 65,535 文字を超えると保存に失敗することでした。

payload カラムに保存する際、セッションデータを base64_encode するので、text 型の容量がセッションデータの最大容量になっていました。

対策としては、text 型から mediumtext 型に変更するなどが考えられますが、セッションにそれほどのデータを持たせるのはよろしくなさそうです。

以上になります。
