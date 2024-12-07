'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import useStore from '@/app/store'

function FormLogin() {
    const { signInEmail, signInGooglePopup } = useStore()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleGoogleSignIn = async () => {
        try {
            await signInGooglePopup()
            router.push("/")
        } catch (error) {
            console.error("Google Sign-In failed:", error)
            toast.error("Đăng nhập bằng Google thất bại")
        }
    }

    const handleSignIn = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            await signInEmail(email, password)
            router.push("/")
        } catch (error) {
            console.error("Email Sign-In failed:", error)
            toast.error("Đăng nhập thất bại")
        }
    }

    return (
        <div className="max-w-sm mx-auto">
            <form onSubmit={handleSignIn}>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                        >
                            <svg
                                className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                            </svg>
                            <span
                                className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                                aria-hidden="true"
                            ></span>
                            <span className="flex-auto pl-16 pr-8 -ml-16">Đăng nhập với Google</span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center my-6">
                    <div
                        className="border-t border-gray-700 border-dotted grow mr-3"
                        aria-hidden="true"
                    ></div>
                    <div className="text-gray-400">Hoặc đăng nhập với email</div>
                    <div
                        className="border-t border-gray-700 border-dotted grow ml-3"
                        aria-hidden="true"
                    ></div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label
                            className="block text-gray-300 text-sm font-medium mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            className="form-input w-full text-gray-300"
                            placeholder="you@gmail.com"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label
                            className="block text-gray-300 text-sm font-medium mb-1"
                            htmlFor="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            className="form-input w-full text-gray-300"
                            placeholder="Mật khẩu"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <div className="flex justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="text-gray-400 ml-2">Ghi nhớ đăng nhập</span>
                            </label>
                            <Link
                                href="/reset-password"
                                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button
                            type="submit"
                            className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
                Bạn chưa có tài khoản?{" "}
                <Link
                    href="/signup"
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                >
                    Đăng ký
                </Link>
            </div>
        </div>
    )
}

export default FormLogin
