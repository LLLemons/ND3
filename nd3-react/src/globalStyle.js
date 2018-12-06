import { createGlobalStyle } from 'styled-components'
import SpritePic from './statics/images/sprite.png'

export const ResetStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }

  a:hover {
    color: #3ba8f0
  }

  input:focus {
    outline: none;
  }
`

export const BaseStyle = createGlobalStyle`
  body,html{
    height: 100%;
  }
  body {
    height: 100%;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
  }
  /* 通用颜色 */
  .col-333{
    color: #333
  }
  .col-666 {
    color: #666
  }
  .col-999 {
    color: #999
  }
  .col-3ba8f0 {
    color: #3ba8f0;
  }
  /* 通用背景色 */
  .bgc-fa4b5b {
    background-color: #fa4b5b !important;
  }
  .bgc-f96543 {
    background-color: #f96543 !important;
  }
  /* 通用字号 */
  .font12px{
    font-size: 12px
  }
  .font14px{
    font-size: 14px
  }
  .font16px {
    font-size: 16px;
  }
  .font20px {
    font-size: 20px;
  }
  /* 通用边距 */
  .mgr-14 {
    margin-right: 14px;
  }
  .mgt-7 {
    margin-top: 7px;
  }
  .mgr-20 {
    margin-right: 20px;
  }
  .mgb-20 {
    margin-bottom: 20px;
  }
  .mgb--11 {
    margin-bottom: -11px;
  }
  .mgt-30 {
    margin-top: 30px;
  }
  /* 鼠标手 */
  .cur-p {
    cursor: pointer;
  }
  /* 通用行高 */
  .lineheight30px {
    line-height: 30px;
  }
  .lineheight53px {
    line-height: 53px;
  }
  .lineheight24px {
    line-height: 24px;
  }
  .lineheight35px {
    line-height: 35px;
  }
  /* 通用字重 */
  .fw-bold{
    font-weight: bold
  }
  /* 文字排版方向 */
  .ta-center {
    text-align:center;
  }
  /* 按钮通用样式 */
  .button {
    width:100px;
    height:35px;
    color:rgba(255,255,255,1);
    font-size:12px;
    line-height: 35px;
    text-align:center;
    border-radius:2px;
    background:rgba(60,168,240,1);
    transition: all .3s ease-in-out;
    cursor: pointer;
  }
  .button:hover {
    background:rgba(60,168,240,.8);
    color: #fff;
  }
  /* 左浮动 */
  .fl {
    float: left;
  }
  /* 右浮动 */
  .fr {
    float: right;
  }
  /* 清除浮动 */
  .clearfix::after {
    content: '';
    height: 0;
    line-height: 0;
    visibility: hidden;
    display: block;
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }
  /* 外部容器 */
  .wrapper {
    height: 100%;
    margin: 0 auto;
  }
  /* 居中容器 */
  .container {
    width: 1411px;
    margin: 0 auto;
  }
  /* 卡片的通用样式 */
  .card {
    display: inline-block;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    border-color: #3ba8f0;
  }
`

export const SpriteStyle = createGlobalStyle`
  .sprite {
    background-image: url( ${SpritePic} )
  }
  .icon_cover {
    width: 105px;
    height: 104px;
    background-position: 0 0;
  }

  .icon_logo {
    width: 284px;
    height: 40px;
    background-position: -105px 0;
  }

  .icon_back {
    width: 30px;
    height: 30px;
    background-position: -389px 0;
  }

  .icon_hot {
    width: 24px;
    height: 24px;
    background-position: -419px 0;
  }

  .icon_search_blue {
    width: 20px;
    height: 20px;
    background-position: -443px 0;
  }

  .icon_menu {
    width: 20px;
    height: 20px;
    background-position: -463px 0;
  }

  .icon_search_white {
    width: 20px;
    height: 20px;
    background-position: -483px 0;
  }

  .icon_class {
    width: 16px;
    height: 16px;
    background-position: -503px -0px;
  }

  .icon_class_pre {
    width: 16px;
    height: 16px;
    background-position: -519px 0;
  }

  .icon_content {
    width: 16px;
    height: 16px;
    background-position: -535px 0;
  }

  .icon_content_pre {
    width: 16px;
    height: 16px;
    background-position: -551px 0;
  }

  .icon_home {
    width: 16px;
    height: 16px;
    background-position: -567px 0;
  }

  .icon_home_pre {
    width: 16px;
    height: 16px;
    background-position: -583px 0;
  }

  .icon_statistics {
    width: 16px;
    height: 16px;
    background-position: -105px -40px;
  }

  .icon_statistics_pre {
    width: 16px;
    height: 16px;
    background-position: -121px -40px;
  }
`