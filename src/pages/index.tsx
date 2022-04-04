import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

const Home: NextPage = () => {
  const [code, setCode] = useState<string>("Code Makeup!!");
  const [color, setColor] = useState<string>("#2ca9e1");

  let src: string = "/api/makeup?";

  if (code) {
    src += `code=${code.replace(/#/g, '\\h').replace(/&/g, '\\amp').replace(/\t/g, '\\t').replace(/\n/g, '\\n')}`;

    if (color) {
      src += `&color=${color.substring(1)}`;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Code Makeup</title>
        <meta name="description" content="✨ Makeup the code you wrote" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          ✨ Code Makeup ✨
        </h1>

        <form className={styles.form}>
          <label>Code:</label>
          <textarea
            title="code"
            name="code"
            spellCheck="false"
            value={code}
            onChange={({ target }) => setCode(target.value)}
          />
          <label>Color:</label>
          <input
            title="color"
            name="color"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </form>

        <figure className={styles.figure}>
          <a href={src} rel="noopener noreferrer" target="_blank">
            <img src={src} alt="" />
          </a>
        </figure>

      </main>
    </div>
  )
}

export default Home
