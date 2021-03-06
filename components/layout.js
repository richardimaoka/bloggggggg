import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Akka, Concurrency, etc.'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111892799-2"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'UA-111892799-2');`
          }}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            <div className={utilStyles.bio}>
              <img
                src="/images/profile.jpg"
                alt={`Richard Imaoka`}
                className={utilStyles.biopic}
              />
              <p className={utilStyles.biodesc}>
                Written by Richard Imaoka, a Scala developer
                . You can find me on <a href="https://twitter.com/richardimaoka">twitter</a>,
                and <a href="https://github.com/richardimaoka">github</a>.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
