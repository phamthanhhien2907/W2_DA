import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Public = () => {
 
  return (
    <div className=''>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Public