import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 58px;
  z-index: 10;
  width: 240px;
  height: 100%;
  background-color: #fff;
`
export const SideBarContainer = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
  height: 100%;
  border-right: 1px solid #999;
`
export const SideBarTop = styled.div`
  margin-bottom: 36px;
`
export const TabList = styled.div`
  width: 240px;
`
export const TabItem = styled.div`
  height: 60px;
  padding-left: 27px;
  line-height: 60px;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: #f4f5f5;
	  position: relative;
  }
  &.sideTab__item--current{
    background-color: #f4f5f5;
	  position: relative;
  }
  &.sideTab__item--current::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #3ba8f0;
  }
`
export const TabLink = styled.a.attrs({
  href:'javascript:;'
})`
  display: block;
  font-size: 14px;
  &:hover {
    color: #333;
    font-size:14px;
  }
`
export const TabIcon = styled.span`
  display: inline-block;
  margin-right: 18px;
  vertical-align: middle;
`