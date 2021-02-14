import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/prism-theme.css'
import Head from 'next/head'
import siteData from '../site-data'
import { ThemeProvider } from "../components/ThemeContext"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

fun

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script data-ad-client="ca-pub-7003687861515202"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"> </script>
                </script>
                <meta name='application-name' content='nekonako' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#25293A' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#25293A' />

                <link rel='apple-touch-icon' sizes='180x180' href='/assets/icon192.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/assets/icon192.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/assets/icon192.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/assets/icon192.png' color='#25293A' />
                <link rel='shortcut icon' href='/static/icons/safari-pinned-tab.svg' />
                <meta name='twitter:card' content='Hey! there' />
                <meta name='twitter:url' content='https://nekonako.me' />
                <meta name='twitter:title' content='Galih wisnuaji' />
                <meta name='twitter:description' content='Penikmat kopi dan drama' />
                <meta name='twitter:image' content='/assets/icon192.png' />
                <meta name='twitter:creator' content='@Galih_wisnuA' />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='nekonako' />
                <meta property='og:url' content='https://nekonako.me' />
            </Head>
            <ThemeProvider>
                <div className="flex flex-col h-full min-h-screen font-sans text-base antialiased bg-primary text-primary transition-all duration-300 md:flex-row">
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
            </>
    )
}

export default MyApp
