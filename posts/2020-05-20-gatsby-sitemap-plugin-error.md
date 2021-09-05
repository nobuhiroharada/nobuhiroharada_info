---
title: "Gatsbyのサイトマップ対応のプラグイン(gatsby-plugin-sitemap)がエラーになった時の対応例"
date: "2020-05-20"
excerpt: "Gatsby のプラグイン gatsby-plugin-sitemap を追加して、sitemap.xml を出力しようとしたのですが、下記エラーになり追加できませんでした。"
cover_image: "/images/posts/javascript.jpg"
category: "JavaScript"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

### 検証環境

Gatsby 2.21.13

<br />

### エラー内容

Gatsby のプラグイン "gatsby-plugin-sitemap" を追加して、sitemap.xml を出力しようとしたのですが、下記エラーになり追加できませんでした。

<br />

    Error: Cannot query field "siteUrl" on type "SiteSiteMetadata".
    GraphQL request:5:11
    4 |         siteMetadata {
    5 |           siteUrl
    |           ^
    6 |         }

<br />

### 対処法

gatsby-config.js の siteMetadata に siteUrl を追記することでエラーは解消されました。

<br />

**修正前**

    siteMetadata: {
        title: 'nobuhiroharada.com',
        author: 'Nobuhiro Harada'
    },

<br />

**修正後**

    siteMetadata: {
        title: 'nobuhiroharada.com',
        author: 'Nobuhiro Harada',
        siteUrl: 'localhost:8000'
    },

<br />

これでビルドすると、ブラウザにて http://localhost:8000/sitemap.xml アクセスするとサイトマップ確認できました。

<br />

出力先の page-data フォルダ直下にも sitemap.xml が出力されます。

<br />

以上になります。

<br />

### 参考

Issues with Sitemap plugin integration
https://github.com/gatsbyjs/gatsby/issues/2407#issuecomment-495950517

<br />

Gatsby 公式サイト　サイトマッププラグイン追加手順
https://www.gatsbyjs.org/docs/creating-a-sitemap/
