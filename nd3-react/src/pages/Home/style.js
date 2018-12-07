import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: 83px;
  margin-bottom: 83px;
`

export const CardItem = styled.li`
  width:310px;
  height:106px;
  padding: 28px 0 26px 30px;
  position: relative;
`

export const CardHot = styled.div`
  position: absolute;
  left: 48px;
  top: 23px;
  display: none;
  &.show {
    display: block;
  }
`

export const CardTag = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width:56px;
  height:20px;
  font-size:12px;
  color:#fff;
  text-align: center;
  line-height: 20px;
  background:#3ba8f0;
`