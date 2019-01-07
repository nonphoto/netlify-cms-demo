#! /usr/bin/env node

const fs = require('fs')
const YAML = require('yaml')
const markdown = require('markdown')

function template(content) {
    return `
        <html>
            <head>
                <title>Netlify CMS Demo</title>
            </head>
            <body>
                ${content}
            </body>
        </html>
    `
}

const files = process.argv.slice(2)
files.forEach((file) => {
    fs.createReadStream(file).pipe(process.stdout)
})
