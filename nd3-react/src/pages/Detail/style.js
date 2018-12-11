import styled from "styled-components"
import nullPicUrl from './../../statics/images/null.png'
import avatarPicUrl from './../../statics/images/bg.png'

export const Search = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10
`
export const Input = styled.input.attrs({
  type: 'text',
  placehodler: '快捷查找'
})`
  display: block;
  width: 250px;
  height: 32px;
  padding-left: 10px;
  border: 1px solid #3ba8f0;
`
export const SearchButton = styled.div`
  width: 50px;
	height: 36px;
  position: relative;
  color:rgba(255,255,255,1);
  font-size:12px;
  line-height: 36px;
	border-radius: 0;
  text-align:center;
  background:rgba(60,168,240,1);
  transition: all .3s ease-in-out;
  cursor: pointer;
`
export const SearchIcon = styled.span`
  position: absolute;
  left: 15px;
  top: 8px;
`
export const RenderTable = styled.div``
export const ClassTitle = styled.div`
  height: 97px;
	line-height: 97px;
	text-align: center;
	position: relative;
`
export const ClassContent = styled.div`
  border: 1px solid #ddd;
  min-height: 696px;
`
export const KindTab = styled.ul`
  background-color: #ddd;
  border-bottom: 1px solid #ddd
`
export const KindTabItem = styled.li`
  width: 180px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover, &.kindTab__item--current {
    background-color: #fff;
	  color: #3ca8f0;
  }
`
export const KindList = styled.ul`
  padding: 22px 30px;
	margin-right: -42px;
	margin-bottom: -22px;
`
export const KindCard = styled.li`
  width: 131px;
  height: 151px;
  margin-right: 22px;
  margin-bottom: 22px;
`
export const TagList = styled.div`
  height: 115px;
	overflow: hidden;
	position: relative;
`
export const KindAvatar = styled.img.attrs({
  src: avatarPicUrl,
  alt: '头像'
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const MainTagList = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
`
export const MainTagItem = styled.li`
  display: inline-block;
  margin-top: 6px;
  padding: 5px;
  color: #fefefe;
  background-color: #f99d43;
`
export const FunctionList = styled.ul`
  position: absolute;
	left: 0;
	top: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	padding: 7px 4px;
	box-shadow: border-box;
	background-color: rgba(255,255,255,.9);
`
export const FunctionTag = styled.div`
  margin-right: 6px;
	margin-bottom: 6px;
	padding: 5px;
	color: #fefefe;
	background-color: #f99d43;
`

export const NullImg = styled.img.attrs({
  src: nullPicUrl,
  alt: '没有数据'
})`
  display: block;
  margin: 0 auto;
`