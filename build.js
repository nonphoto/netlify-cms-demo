const fs = require('fs')
const glob = require('glob')
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

glob('content/blog/*', (error, files) => {
    if (error) throw error

    const posts = files.map((file) => {
        return fs.readFileSync(file)
    })

    console.log(posts)
})
