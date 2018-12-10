import React from 'react'
import { Link } from 'react-router-dom'
export default  () => (
  <div className='btns fr'>
    <div className='button mgr-20 fl'>加入班级</div>
    <Link to='/create'>
      <div className='button fl'>创建班级</div>
    </Link>
  </div>
)