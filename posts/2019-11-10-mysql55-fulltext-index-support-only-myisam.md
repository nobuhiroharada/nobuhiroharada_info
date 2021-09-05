---
title: "MySQL 5.5 のFULLTEXTインデックスはMyISAM エンジンにしか対応してない"
date: "2019-11-10"
excerpt: "MySQL 5.5 では FULLTEXT インデックスは MyISAM エンジンにしか対応してないようで、innoDB に変更しようとすると、、、"
cover_image: "/images/posts/sql.jpg"
category: "MySQL"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

MySQL 5.5 では FULLTEXT インデックスは MyISAM エンジンにしか対応してないようで、innoDB に変更しようとすると、、、

<br />

```
ERROR 1214 (HY000): The used table type doesn't support FULLTEXT indexes
```

<br />

とエラーになりました。

<br />

MySQL 5.5 の FULLTEXT インデックスは MyISAM エンジンにしか対応おらず

<br />

MySQL 5.6 以上では、MyISAM、innoDB ともに FULLTEXT インデックスに対応しているようです。

<br />

**参考**

1214 – The used table type doesn’t support FULLTEXT indexes

https://stackoverflow.com/questions/20964269/1214-the-used-table-type-doesnt-support-fulltext-indexes

<br />

以上になります。
