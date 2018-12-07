import styled from "styled-components"

export const FormWrapper = styled.div`
  margin-top: 20px;
`
export const Title = styled.div`
  line-height: 54px;
`
export const Form = styled.form`

`
export const FormItem = styled.div`
  margin-bottom: 20px;
`
export const Label = styled.label`
  width: 117px;
  text-align: right;
  margin-right: 30px;
  line-height: 36px;
`
export const Input = styled.input`
  width: 400px;
	height: 36px;
	padding: 0 11px;
	line-height: 36px;
	box-sizing: border-box;
  border: 1px solid #ddd;
  &::placeholder {
    color: #bbb;
  }
  &.error {
    border: 1px solid #f00;
  }
`
export const Require = styled.span`
  color: #f00;
  margin-right: 10px;
  line-height: 36px;
`
export const Select = styled.div`
  height: 36px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 9px;
    top: 12px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    transition: all .3s cubic-bezier(.42, 0, .58, 1)
  }
  &.down::after {
    border-top: 6px solid #999;
	  border-bottom: none;
  }
  &.up::after {
    border-top: none;
	  border-bottom: 6px solid #3ba8f0;
  }
`
export const SelectHead = styled.div`
  position: relative;
  cursor: pointer;
  width: 400px;
	height: 36px;
	padding: 0 11px;
	line-height: 36px;
	box-sizing: border-box;
  border: 1px solid #ddd;
`
export const SelectList = styled.ul`
  position: absolute;
  left: 0;
  z-index: 2;
  top: 38px;
  width: 100%;
  border: 1px solid #ddd;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  display: none;
`
export const SelectItem = styled.li`
  line-height: 26px;
  text-align:center;
  &:hover {
    background-color: #e9e9e9;
  }
`
export const ErrorSpan = styled.span`
  color: #f00;
  line-height: 36px;
  margin-left: 10px;
  display: none;
`
export const RadioList = styled.ul`
  line-height: 36px;
`
export const RadioItem = styled.li`
  margin-right: 20px;
`
export const Radio = styled.input`
  display: none;
  width: 400px;
	height: 36px;
	padding: 0 11px;
	line-height: 36px;
	box-sizing: border-box;
  border: 1px solid #ddd;
  &:checked+.radio__label::before {
    background-color: #3ba8f0;
    box-shadow: 0 0 0 2px #fff,
                0 0 0 3px #3ba8f0;
  }
`
export const RadioLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  min-width: 56px;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  &::before {
    content:'';
	position: absolute;
	width: 11px;
	height: 11px;
	left: 0;
	top: 12px;
	border-radius: 50%;
	background-origin: content-box;
	background-color: #fff;
	box-shadow: 0 0 0 2px #fff,
							0 0 0 3px #bbb;
  }
`