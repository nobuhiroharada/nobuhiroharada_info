---
title: "プログラミング言語、FW、ツールに関する私見"
date: "2021-04-04"
excerpt: "プログラマーになり、早 6 年。これまで様々な言語、FW、ツールを使ってきたので、私見をまとめてみました"
cover_image: "/images/posts/column.jpg"
category: "Column"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

プログラマーになり、早 6 年

これまで様々な言語、FW、ツールを使ってきたので、私見をまとめてみました

<br />

## PHP

悪くいう人は多けれど、なんだかんだ使われ続け、型を意識したい人はガチガチに書くこともできるようになった

実行速度も悪くなく、7 でも速くなったが、8 ではさらに速くなっているとの噂をちらほら

WordPress でも使われている

PHPer というだけで蔑まれることがあるという話を聞いたことがあったが、個人的にはこれまでそういったことはなかった

尊敬されたこともないが

<br />

## Laravel

PHP で何か Web アプリを開発する時は真っ先に名前が上がるほど定着

カスタマイズ性が高いのがいいのか悪いのか、現場現場で構成が違うことが多い(リポジトリ層、エンティティあったり、サービス層あったり、モデルにメソッド書いてたり、モデルにリレーションがあったりなかったり、生 SQL だったり、ビルドクエリと Eloquent が混在してたり、View から db に xxx など、もうようわかりません)

最近は周辺ツールが豊富になり、それぞれの機能が切り出せたり、利便性があがってるんじゃないですかね

個人的にも非常にお世話になっており、かねづるになってるので感謝しかない

<br />

## cakePHP2

コントローラーのメソッド内に $this->set($fuga, \$fuga); がいくつもあり、コントローラーとビューがガッツリである

なんというか、分離する気が欠片もない

メソッドのステップ数が少なければいいが、ステップ数が多く、しかも変数名が他のメソッドでも使われてるのと同じ名前だと探すのに時間がかかったり

SQL を作成する際の recursive だが、どれだけクエリ投げまんねん、という

一昔前の PHP フレームワークってこんなのだったのね、と考えさせられる

<br />

## ZendFramework1.7

cakePHP と同じで $this->set($fuga, \$fuga); と書いて、ビューに変数を返す

(返すというよりは当て込むという感じだろうか、ビューとコントローラーのメソッドとルーティングが一体型なので)

今では考えられないことが、クラス名とファイル名が違っていて、クラス名がやたら長かったような、、、

びっくりするくらい古いバージョンだったが、それでも 10 年以上元気に動いていたのだから実はすばらしいフレームワークなのかもしれない

フレームワークの話からは逸れるが、長く運用保守してるとコードも構成も複雑怪奇になる、という現実を目の当たりし、空気を読めない筆者は「ハウルの動く城みたいですね」と、ポロッと言ってしまい、失笑を買った

当時の Zend や cake のように規約に従って書かせるフレームワークがあって、それから Laravel のような自由度の高いフレームワークが人気が出てきたと思われる

そう考えると、Rails は(ry

<br />

## WordPress

「クセが強いんじゃ」

Web アプリ開発やってた人が WordPress に携わった際に全員が抱く感想

どう考えたら、この書き方&構成になるの？という想いがコードを見る度、DB を覗く度に駆け巡る

これが世界中で使われ、今日も元気に動いてることを考えると、最初に導入したものや普及したものは後々簡単に置き換わることはあらしまへんな、とつくづく思う

プラグイン、テンプレが豊富で導入事例が多く、枯れてることが WordPress 沼から抜け出せない要因になっており、これは jQuery にも当てはまる

<br />

## JavaScript

JavaScript を触ったことがない、というプログラマー、エンジニアはいないんじゃないかと思うくらい使われてる

この世に Web ブラウザがある限り、今後も使われ続けるのは間違いあらしません

型がゆるゆるなのがたまに傷だが、環境構築もいらないのでこれからプログラミング学習を始める人にとってはとっつきやすい

略して JS だが、現場で「JS、JS」と言ってると、非エンジニアの方からは(あの人は女子 ○ 学生好きのロリコンなのか？)と誤解されるので、筆者は「ジャバスク」と呼ぶようにしている

<br />

## jQuery

重い、ファットだ、ごちゃつきやすい、と愚痴をよく耳にするが、それでもぼくらは使い続けている

jQuery に対して、JavaScript のことを「素の JavaScript」と呼んだりするくらい使ってるのに嫌われてる(特に意識高い系に)

jQuery は中毒性が強い

書きやすかったり、読みやすかったり、一撃で課題解決してくれる便利なプラグインが豊富なせいだが、jQuery を外す勇者はそれらを「素の JavaScript」「素の CSS」で書かなければならない可能性が出てくる

(ハナから jQuery 中毒にかかってない人にとってはなんのこっちゃだが)

Web 業界では何年も前から jQuery を外すことに精を出しており、とうとう BootStrap5 でも完全に外される予定だ

だが、BootStrap の周辺プラグイン、コンポーネントは jQuery に依存しており、果たして jQuery を切って、どれだけ導入されるのだろうか？

直接 DOM を扱う古き良き jQuery 派と仮想 DOM を扱う革命軍 React, Vue の戦いは終わらず、分断は広がるばかり

続く

<br />

## React

jQuery が部分最適なら、React、Vue は全体最適

コンポーネントを分けやすく、TypeScript とも相性が良く(たぶん)、jQuery みたいに周辺のプラグインが増えてきた印象(たぶん)

BootStrap5 が jQuery を切りにいったのも React、Vue で使われることを想定してるのだとか、してないのだとか

<br />

## Vue2

JavaScript と HTML が悪魔合体してる React よりは習得しやすい

data、created、methods、computed とかなんやようわからんけど、いろいろあるので縦方向にコードが膨らみやすい印象

Vue2 から Vue3 へ移行するケースはどれだけあるのだろうか？

<br />

## Python

Web スクレイピングで Python2、3 を使ったことがあるが、2 と 3 で「こんなに書き方変えまっか？」と思うことがしばしばあり、PHP の後方互換性の高さにありがたみを感じまくりクリスティ

コードブロックがインデントなので、スッキリ書けるとのことだが、筆者は{}に慣れてしまってる、というかそれしか書いたことがなかったので、書いていてスッキリするというよりは書かないと物足りなさというか、ほんとに大丈夫か、と感じることがしばしばある

<br />

## Swift

一時期 iOS エンジニアを目指していた筆者なので、それなりにかじったが、全体的に API のメソッド名が長い

Web アプリ開発から入った人はスマホ開発固有の機能、API に慣れる必要がある

サーバーサイド Swift という単語をみかけたこともあるが、そこまでは普及しなそうな気がする

だって、node.js ですら PHP に置き換わってないのだもの

繰り返しになるが、API のメソッド名が長い

<br />

## Objective-C

WordPress は構成や仕様のクセが強いが、ob-c は記法のクセが強い

Swift がリリースされ、早 7 年

今も元気に ob-c で動いてるアプリ、ob-c で書かれてるライブラリはどれだけあるのだろうか

<br />

## MySQL

Web 開発するにあたり PHP から入った人は最初は MySQL を使うのでは？というくらい自然に使われる

(Rails、Ruby から入った人は PostgreSQL なんだろうか？知らんけど)

開発者の娘さんの名前(ミーさん)からとって、MySQL としたらしい(MariaDB はマリアさん)

そのせいで今日もわれわれはどこかの国にお住まいのお嬢さんの名前を開発現場の中心で叫んでいる

もし、機会があったら娘さんに「世界中で使われている DBMS の名前にお父様がお嬢さんたちの名前を使ってることに対して、どうお考えでしょうか？」と、質問してみたい

<br />

## PostgreSQL

「MySQL とほぼ同じでしょ？いつ使うの？今じゃないでしょ？」というスタンスでおり、それまで関わることが一切なかった

が、とある現場でガッツリ使うことがあり、「ほぼ同じ」と「同じ」は全く別物であるということを思い知らされたことがある

ベタ書き PHP のアプリでテーブル構成は全く同じだが、A 向けのデータが入ってる DB は MySQL、B 向けのデータが入ってる DB は PostgreSQL を使用していて、全く同じクエリでデータを取りにいったら、PostgreSQL の方だけエラーになり、ハマったことがあった

フレームワークを使ってないのでそれぞれの DB の差分を吸収してくれなかったり、カラム名に MySQL ではひっかからない PosgreSQL の予約語が使われていたりと、いろいろございました

結局メソッド内で A 向けのデータを取り行くのか、B 向けのデータを取り行くのか分岐し、「ほぼ同じ」クエリを分けるという非常によろしくない対応をすることに

DBMS に限らないが、「同じ」と「ほぼ同じ」は「違う」ので気をつけたい
