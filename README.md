<h1 align="center"> :sparkles: Code Makeup :sparkles: </h1>

<p align="center">
  <b>:construction: WIP :construction:</b><br />
  Makeup the code you wrote!!
</p>


## ToDo
* [ ] シンタックスハイライトの導入  
* [ ] PNG でのダウンロード機能

## 使い方

```bash
yarn dev
```

### ウェブページから作成する場合

* code と color を設定する


### URL に直接入力する場合

* 下記にある事前処理が必要な文字を変換してから、URL に入力する

| 処理前の文字 | 処理後の文字 |
|:---:|:---:|
| # | \h |
| & | \amp |
| (タブ) | \t |
| (改行) | \n |

```html
localhost:3000/api/makeup?code=[written code]&color=[color]
```

---

<!--
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
-->
