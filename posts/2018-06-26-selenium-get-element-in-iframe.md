---
title: "Seleniumでiframe内の要素を取得する"
date: "2018-06-26"
excerpt: "iframe 内の要素はそのまま指定しても要素がないといわれるので、driver の向き先を iframe に切り替えてやる必要があります。"
cover_image: "/images/posts/python.jpg"
category: "Python"
author: "Nobuhiro Harada"
author_image: "/images/chicken.png"
---

iframe 内の要素はそのまま指定しても要素がないといわれるので、driver の向き先を iframe に切り替えてやる必要があります。

HTML クイックリファレンスさんのサイト(http://www.htmq.com/html5/iframe.shtml)を使わせていただいて、iframe 内の要素を取得するスクリプトを作成しました。

まず、driver の向き先を iframe に切り替えない場合です。

<br />

test.py

```
# coding:utf-8
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

# ブラウザを開く。
driver = webdriver.Chrome()

# HTMLクイック・リファレンスさんのホームページを開く
driver.get("http://www.htmq.com/html5/iframe.shtml")

# 「ヒント 未来からやってきたネコ型ロボットという設定でした。」 というテキストを取りたい
# XPATH は「/html/body/p」
text_hint = driver.find_element_by_xpath("/html/body/p").text

print text_hint

sleep(10)
# ブラウザを閉じる
driver.close()
```

<br />

実行結果

```
python test.py
File "test.py", line 13, in
  text_hint = driver.find_element_by_xpath("/html/body/p").text
File "/Library/Python/2.7/site-packages/selenium/webdriver/remote/webdriver.py", line 387, in find_element_by_xpath
  return self.find_element(by=By.XPATH, value=xpath)
File "/Library/Python/2.7/site-packages/selenium/webdriver/remote/webdriver.py", line 957, in find_element
  'value': value})['value']
File "/Library/Python/2.7/site-packages/selenium/webdriver/remote/webdriver.py", line 314, in execute
  self.error_handler.check_response(response)
File "/Library/Python/2.7/site-packages/selenium/webdriver/remote/errorhandler.py", line 242, in check_response
  raise exception_class(message, screen, stacktrace)
selenium.common.exceptions.NoSuchElementException: Message: no such element: Unable to locate element: {"method":"xpath","selector":"/html/body/p"}
```

要素がないとエラーメッセージが出力されました。

<br />

次に switch_to_frame メソッドを使って、driver の向き先を iframe に切り替えた場合です。

<br />

test.py

```
# coding:utf-8
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

# ブラウザを開く。
driver = webdriver.Chrome()

# HTMLクイック・リファレンスさんのホームページを開く
driver.get("http://www.htmq.com/html5/iframe.shtml")

# iframe の XPATH 「//*[@id='content_left']/div[10]/iframe」 を指定
iframe = driver.find_element_by_xpath("//*[@id='content_left']/div[10]/iframe")

# driver を切り替える
driver.switch_to_frame(iframe)

# 「ヒント 未来からやってきたネコ型ロボットという設定でした。」 というテキストを取りたい
text_hint = driver.find_element_by_xpath("/html/body/p").text

print text_hint

sleep(10)
# ブラウザを閉じる
driver.close()
```

実行結果

```
python test.py
ヒント
未来からやってきたネコ型ロボットという設定でした。
```

<br />

iframe 内のテキストが取れました。

以上になります。
