---
title: "[Gatsby] NetlifyでGatsby3系がビルドエラーになるのを解消する"
date: "2021-04-17"
excerpt: "結論： Netlify の環境変数設定画面で Node のバージョンを 12 以上に設定する"
cover_image: "/images/posts/javascript.jpg"
category: "JavaScript"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

## 結論： Netlify の環境変数設定画面で Node のバージョンを 12 以上に設定する

<br>

以下、結論に至る過程です

Gatsby 2.21.13 を使用していて、3.3.0 にバージョンを上げました

ローカル環境では特にエラーはなかったのですが、Netlify でビルドした際にエラーが起きました

Netlify の管理画面でデプロイ時のログを追うと、下記ログが出力されていました

    2:28:31 PM: $ gatsby build
    2:28:33 PM: error Gatsby requires Node.js 12.13.0 or higher (you have v10.24.1).
    2:28:33 PM: Upgrade Node to the latest stable release: https://gatsby.dev/upgrading-node-js
    2:28:33 PM: ​
    2:28:33 PM: ────────────────────────────────────────────────────────────────
    2:28:33 PM:   "build.command" failed
    2:28:33 PM: ────────────────────────────────────────────────────────────────
    2:28:33 PM: ​
    2:28:33 PM:   Error message
    2:28:33 PM:   Command failed with exit code 1: gatsby build

gatsby build コマンドでこけており、Node のバージョンは 12 系以上が必要なのに、10 系でビルドしてる、と怒られています

Node のバージョンを設定した覚えがなかったので、ググっていますと、下記投稿を見つけました

<br>

**Node.js version on Netlify outdated**

https://answers.netlify.com/t/node-js-version-on-netlify-outdated/34768

<br>

おそらく Netlify の中の人が、、、

<br>

> Netlify sites are built in the “Xenial” build image, which includes this software 2 automatically installed. As you can see, Xenial’s default is reported as Node v10.

> You can override the build image’s default Node version in a number of ways — perhaps setting the NODE_VERSION environment variable for your project is the easiest. Just set the value to something like 15.12.0 and the build should automatically install and use v15.12.0.

<br>

と、返答しており、意訳しますと、、、

<br>

・Netlify 上のサイトは Ubuntu version 16.04 (aka Xenial) ビルドイメージで作られてんねん。そのイメージのデフォルトの Node のバージョンは v10 やねん

・ビルドイメージの Node のバージョンを上書きする方法は、まぁ、色々あんねんけど、自分のプロジェクトの環境変数に NODE_VERSION 設定するんが、一番簡単でええんとちゃう？

<br>

とのことなので、環境変数を設定します

公式サイトにある通り、、

https://docs.netlify.com/configure-builds/environment-variables/

<br>

**Site settings > Build & deploy > Environment > Environment variables**

<br>

と、移動して、

    Key: NODE_VERSION
    Value: 15

と、設定して、ビルドし直しましたら、ビルドが成功し、デプロイできました

最初ビルドがこけた時は、(デプロイしてるサーバーに入って、エラーログ出力してるとこ探さないといけないのか？)と思ったのですが、Netlify のプロジェクトの管理画面からデプロイログをすぐに確認できたので、簡単に対応できました

以上になります
