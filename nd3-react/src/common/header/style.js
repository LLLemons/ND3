import styled from "styled-components";

export const HeaderWrapper = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	width: 100%;
	height:57px;
	overflow: hidden;
	background-color: #fff;
	border-bottom: 1px solid #e2e2e2;
`
export const Logo = styled.a`
	margin-top: 8px;
	margin-right: 20px;
`

export const MainNav = styled.nav`

`

export const MainNavItem = styled.div`
	float: left;
	margin-right: 25px;
	margin-left: 25px;
`

export const MainNavLink = styled.a.attrs({ 
	href: 'javascript:;',
	target: 'blank'
})`
	
	line-height: 57px;
	&.mainNav__link--current {
		color: #3ba8f0;
	}
`

export const NewFunction = styled.div`
	position: relative;
	width: 49px;
	height: 20px;
	margin-right: 60px;
	margin-top: 18px;
	padding-left: 7px;
	font-size: 12px;
	line-height: 20px;
	color: rgba(255,255,255,1);
	border-radius: 2px;
	background: #ff4200;
	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: 2px;
		right: 0;
		border: 8px solid transparent;
		border-right: 6px solid white;
	}
`

export const Search = styled.div`
	margin-top: 18px;
`
	
export const User = styled.div`
	margin-left: 82px;
`

export const Avatar = styled.div`
	width: 33px;
	height: 33px;
	border-radius: 50%;
	overflow: hidden;
	margin-top: 12px;
`

export const UserName = styled.div`
	line-height: 57px;
	margin-left: 13px;
`
