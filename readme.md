## markdown-it-lozad

[![Greenkeeper badge](https://badges.greenkeeper.io/bangbang93/markdown-it-lozad.svg)](https://greenkeeper.io/)

## usage
```javascript
const MarkdownIt = require('markdown-it')
const MarkdownItLozad = require('markdown-it-lozad')
const Lozad = require('lozad')

const md = new MarkdownIt().use(MarkdownItLozad)

md.render(`![aa](https://tva3.sinaimg.cn/crop.0.0.200.200.200/56e0fc78jw1e8qgp5bmzyj2050050aa8.jpg)
          ![aa](https://tva3.sinaimg.cn/crop.0.0.200.200.200/56e0fc78jw1e8qgp5bmzyj2050050aa8.jpg)`)
// <p><img data-src="https://tva3.sinaimg.cn/crop.0.0.200.200.200/56e0fc78jw1e8qgp5bmzyj2050050aa8.jpg" alt="aa" class="lozad">
//   <img data-src="https://tva3.sinaimg.cn/crop.0.0.200.200.200/56e0fc78jw1e8qgp5bmzyj2050050aa8.jpg" alt="aa" class="lozad"></p>

const observer = Lozad();
observer.observe();
```

## params
```javascript
const MarkdownIt = require('markdown-it')
const MarkdownItLozad = require('markdown-it-lozad')
const Lozad = require('lozad')

const md = new MarkdownIt().use(MarkdownItLozad, 'some-custom-class')

const observer = Lozad('.some-custom-class', {
  rootMargin: '10px 0px',
  threshold: 0.1,
});
observer.observe();
```
