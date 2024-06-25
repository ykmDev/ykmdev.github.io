import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Yan Kyaw Min - Portfolio </title>
            <meta charSet="utf-8" />
            <meta name="title" content="Yan Kyaw Min - Portfolio " />
            <meta name="description"
                content="Yan Kyaw Min Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS. && inspired by vivek9patel.github.io" />
            <meta name="author" content="Yan Kyaw Min inspired by Vivek Patel (vivek9patel)" />
            <meta name="keywords"
                content="yankyawmin, yankyawmin's portfolio, yankyawmin linux, ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/ykm_logo.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Yan Kyaw Min - Portfolio " />
            <meta itemProp="description"
                content="Yan Kyaw Min Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS. && inspired by vivek9patel.github.io" />
            <meta itemProp="image" content="images/logos/ykm_logo.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Yan Kyaw Min - Portfolio " />
            <meta name="twitter:description"
                content="Yan Kyaw Min Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS. && inspired by vivek9patel.github.io" />
            <meta name="twitter:site" content="yan kyaw min" />
            <meta name="twitter:creator" content="yan kyaw min" />
            <meta name="twitter:image:src" content="images/logos/ykm_logo.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Yan Kyaw Min - Portfolio " />
            <meta name="og:description"
                content="Yan Kyaw Min Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS. && inspired by vivek9patel.github.io" />
            <meta name="og:image" content="images/logos/ykm_logo.png" />
            <meta name="og:url" content="http://www.yankyawmin.tech/" />
            <meta name="og:site_name" content="Yan Kyaw Min Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/ykm_logo.png" />
            <link rel="apple-touch-icon" href="images/logos/ykm_logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
