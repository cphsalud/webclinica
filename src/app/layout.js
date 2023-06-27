'use client'

import { useEffect } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { Red_Hat_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import 'animate.css';
import TagManager from 'react-gtm-module';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })

const tagManagerArgs = {
  gtmId: 'GTM-PWN9HRZ'
}

export default function RootLayout({ children }) {

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])

  useEffect(() => {
    <NextSeo
      name="facebook-domain-verification"
      content="y1kt4e5vsxp6llyytndaplvkt5pmqd"
    />
  }, [])

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
