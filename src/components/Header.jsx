import { logout } from '@/stores/actions/authAction'
import { LogOutIcon } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <div className='flex items-center justify-end px-8 gap-2 cursor-pointer' onClick={() => {
            dispatch(logout())
        }}>
            <span>Logout</span>
            <LogOutIcon color='black'/>
        </div>
    </div>
  )
}

export default Header