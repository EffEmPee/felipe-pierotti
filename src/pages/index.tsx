import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Tilt from 'react-tilt';

import { FaMapMarkerAlt, FaBook, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Felipe Pierotti</title>
        <meta name="description" content="Felipe Pierotti | Programador" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Tilt
            options={{
              scale: 1,
              max: 4,
            }}
            className={styles.picture}
          ><Image
              src={'https://avatars.githubusercontent.com/u/59894368?v=4'}
              alt="Felipe Pierotti"
              fill
            />
          </Tilt>
          <h1>Felipe Pierotti</h1>
          <p>Fascinado por tecnologia, desenvolvendo software e soluções que impactam pessoas.</p>
          <section className={styles.informations}>
            <div>
              <FaMapMarkerAlt /> <Link href='https://www.google.com/maps/place/Florian%C3%B3polis,+SC'>Florianópolis, SC</Link>
            </div>
            <div>
              <FaBook /> <Link href='https://cco.ufsc.br/'>Ciências da Computação, UFSC</Link>
            </div>
          </section>
          <nav className={styles.navigation}>
            <Tilt options={{ scale: 1, max: 4 }}>
              <button>
                <h2>Sobre mim</h2>
                <p>Aqui você vai encontrar uma breve biografia. Não é um currículo.</p>
              </button>
            </Tilt>
            <Tilt options={{ scale: 1, max: 4 }}>
              <button>
                <h2>Blog</h2>
                <p>Um projeto que sempre sonhei em fazer. Me aventuro em assuntos de tecnologia.</p>
              </button>
            </Tilt>
          </nav>
          <section className={styles.contact}>
            <p>Contato: {' '}
              <Link href={'https://github.com/EffEmPee'}>GH</Link> |{' '}
              <Link href={'https://twitter.com/PierottiFelipe'}>TT</Link> |{' '}
              <Link href={'https://br.linkedin.com/in/felipepierotti?trk=profile-badge'}>IN</Link>
            </p>
          </section>
        </div>

        <footer>Feito por mim. 😉</footer>
      </main>
    </>
  )
}

