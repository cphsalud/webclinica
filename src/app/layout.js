import StyledComponentsRegistry from '@/lib/registry';
import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
import { Red_Hat_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import 'animate.css';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

const analytics = Analytics({
  app: 'cph-app',
  plugins: [
    googleTagManager({
      containerId: 'GTM-PWN9HRZ'
    })
  ]
})

analytics.page()

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <body className={redHatDisplay.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></Script>
          <Script id="hs-script-loader" async defer src="//js.hs-scripts.com/39948634.js"></Script>
        </body>
      </html>
    </>
  )
}
