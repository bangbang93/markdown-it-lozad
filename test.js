/**
 * Created by bangbang93 on 2017/10/24.
 */
'use strict';
const MarkdownIt = require('markdown-it')
const MarkdownItLozad = require('./')
require('should')

const md = new MarkdownIt().use(MarkdownItLozad)

const testMd = '![aa](https://tva3.sinaimg.cn/crop.0.0.200.200.200/56e0fc78jw1e8qgp5bmzyj2050050aa8.jpg)'

describe('markdown-it-lozad', function () {
  it('should render data-src', function () {
    const html = md.render(testMd)
    html.includes('data-src').should.true()
    html.includes('lozad').should.true()
  })
  it('should use custom class', function () {
    const md = new MarkdownIt().use(MarkdownItLozad, 'some-custom-lozad')
    const html = md.render(testMd)
    html.includes('some-custom-lozad').should.true()
  })
})
