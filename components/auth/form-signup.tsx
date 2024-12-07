'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signUp } from '@/app/api/auth-fire-api'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function FormSignUp() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== rePassword) {
            toast.warning("Mật khẩu không khớp")
            return
        }
        try {
            await signUp(email, password)
            router.push("/")
        } catch (error: any) {
            console.error("Đăng ký thất bại:", error)
        }
    }
    return (
        <div className="max-w-sm mx-auto">
            <div className="flex items-center my-6">
                <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                <div className="text-gray-400">Đăng ký với email và mật khẩu</div>
                <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form onSubmit={handleSignUp}>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@gmail.com" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Mật khẩu</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            id="password" type="password" className="form-input w-full text-gray-300" placeholder="Mật khẩu" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="repassword">Xác nhận mật khẩu</label>
                        <input value={rePassword} onChange={(e) => setRePassword(e.target.value)}
                            id="repassword" type="password" className="form-input w-full text-gray-300" placeholder="Xác nhận mật khẩu" required />
                    </div>
                </div>
                <div className="text-sm text-gray-500 text-center">
                    Tôi đồng ý với các chính sách và điều khoản sử dụng <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Chính sách bảo mật</Link>.
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button type="submit"
                            className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Đăng ký</button>
                    </div>
                </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
                Bạn đã có tài khoản? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Đăng nhập</Link>
            </div>
        </div>
    )
}

export default FormSignUp
