---
title: "PHPのオブジェクトのキーに特殊文字が含まれていた場合の値の取り出し方"
date: "2020-06-05"
excerpt: "PHP のオブジェクトのキーにドットなど特殊文字が含まれていた場合、下記のように書いてしまうと警告になり、値が出力されません。"
cover_image: "/images/posts/php.jpg"
category: "PHP"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

PHP のオブジェクトのキーにドットなど特殊文字が含まれていた場合、下記のように書いてしまうと警告になり、値が出力されません。

    echo $value->test.id;

<br />

警告メッセージ

    Warning: Use of undefined constant id - assumed 'id'

<br />

そこで公式ページ（ https://www.php.net/manual/ja/language.variables.variable.php ）にあるように波括弧を使って、プロパティ名の区切りを明確にすることで出力します。

<br />

> _波括弧を使って、プロパティ名の区切りを明確にすることもできます。 これが特に有用なのは、配列が格納されているプロパ> ティにアクセスするときや プロパティ名が複数のパーツからなる場合、 あるいはプロパティ名として無効な文字を含む場合 (たとえば json_decode() や SimpleXML に由来するプロパティ) などです。_

<br />

下記のように書き換えれば、警告は消え、値が取れます。

    echo $value->{'test.id'};

<br />

また、$value を配列に型変換することでも値を取り出すことができます。

    $valueArray = (array)$value;
    echo $valueArray['test.id'];

<br />

以上になります。

<br />

### 検証環境

PHP 7.3.11

<br />

### 参考

Special characters in property name of object

https://stackoverflow.com/questions/10455775/special-characters-in-property-name-of-object
