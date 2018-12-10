import React from 'react'
import { Link } from 'react-router-dom'
export default  () => (
  <div className='btns fr'>
    <Link to='/'>
      <div className='button fl'>返回上一级</div>
    </Link>
  </div>
)