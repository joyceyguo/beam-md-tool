import { style } from '@material-ui/system';
import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
    <div>
        <div>
            <Head>
            <title>BEAM Mentor Hub</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <header>
                <nav>
                    <div className={styles.navbar}>
                        <a className={styles.logo} href="https://beam.berkeley.edu/">
                            <img className={styles.img} src="/beam_logo_transp.png" alt="">     
                            </img>
                        </a>
                        
                        <div className={styles.nav}>
                            <Link href="/">
                                <a className={styles.link}>home</a>
                            </Link>
                            <Link href="/lessons/">
                                <a className={styles.link}>lessons</a>
                            </Link>
                            <Link href="/resources">
                                <a className={styles.link}>resources</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        <div>{ children }</div>
        <div>
            <footer className={styles.footer}> 
                Made with ❤ and ☕ by BEAM Secret Service © 2020
            </footer>
        </div>
    </div>
    
)

export default Layout