import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import Layout from '../components/Layout'

export const createHtml = (Component, options = {}) => {
    const { title, props } = options

    const sheet = new ServerStyleSheet()

    const html = renderToString(
        sheet.collectStyles(
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        )
    )

    const styles = sheet.getStyleTags()

    return `
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet">

                ${title ? `<title>${title}</title>` : ''}
                ${styles}
            </head>
            <body>
                ${html}
            </body>
        </html>
    `
}
