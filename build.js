const fs = require('fs')
const YAML = require('yaml')
const markdown = require('markdown').markdown

function template(content) {
    return `
        <html>
            <head>
                <title>Netlify CMS Demo</title>
            </head>
            <body>
                <h1>${content.title}</h1>
                ${content.body}
            </body>
        </html>
    `
}

process.stdin.setEncoding('utf8')
process.stdin.on('data', function(chunk) {
    const parsedChunk = chunk.match(/---((.|\n)*)---((.|\n)*)/m)
    const data = YAML.parse(parsedChunk[1])
    data.body = markdown.toHTML(parsedChunk[3])
    process.stdout.write(template(data))
})
