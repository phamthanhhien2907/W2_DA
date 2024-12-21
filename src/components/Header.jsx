import { logout } from '@/stores/actions/authAction'
import { LogOutIcon, Building2, Briefcase,User2 } from 'lucide-react' // Import thêm icon
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
            {/* Nút Company và Role */}
            <div className="flex items-center gap-6">
                {/* Nút Company */}
                <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300" onClick={() => navigate("/")}>
                    <User2 size={18} />
                    <span>User</span>
                </button>
                <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition duration-300" onClick={() => navigate("/company")}>
                    <Building2 size={18} />
                    <span>Company</span>
                </button>
            </div>

            {/* Nút Logout */}
            <div
                className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-800 transition duration-300"
                onClick={() => {
                    dispatch(logout())
                }}
            >
                <span>Logout</span>
                <LogOutIcon size={18} />
            </div>
        </div>
    )
}

export default Header
