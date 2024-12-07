import {
    signInWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword
} from "firebase/auth"
import { auth } from "@/firebase"
import { toast } from "react-toastify"

export async function signInEmailAndPassword(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        toast.success("Đăng nhập thành công!")
        return user
    } catch (error: any) {
        toast.error("Đăng nhập thất bại!")
        switch (error.code) {
            case "auth/user-not-found":
                toast.success("Tài khoản không tồn tại.")
                break
            case "auth/wrong-password":
                toast.success("Mật khẩu không chính xác.")
                break
            case "auth/invalid-email":
                toast.success("Email không hợp lệ.")
                break
            default:
                toast.success("Đăng nhập thất bại!")
                break
        }
        throw error
    }
}

export async function signInWithGooglePopup() {
    const provider = new GoogleAuthProvider()
    try {
        const userCredential = await signInWithPopup(auth, provider)
        const user = userCredential.user
        toast.success("Đăng nhập Google thành công!")
        return user
    } catch (error: any) {
        toast.error("Đăng nhập Google thất bại!")
        throw error
    }
}
export async function signInWithGoogleRedirect() {
    const provider = new GoogleAuthProvider()
    try {
        await signInWithRedirect(auth, provider)
        console.log("Chuyển hướng đăng nhập Google thành công!")
    } catch (error: any) {
        console.error("Đăng nhập Google thất bại:", error.message)
        throw error
    }
}
export async function logOut() {
    try {
        await signOut(auth)
        toast.success("Đăng xuất thành công!")
    } catch (error: any) {
        toast.error("Đăng xuất thất bại!")
        throw error
    }
}
export async function signUp(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        toast.success("Đăng ký thành công!")
        return user
    } catch (error: any) {
        toast.error("Đăng ký thất bại!")
        switch (error.code) {
            case "auth/email-already-in-use":
                toast.error("Email đã được sử dụng.")
                break
            case "auth/invalid-email":
                toast.error("Email không hợp lệ.")
                break
            case "auth/weak-password":
                toast.error("Mật khẩu quá yếu.")
                break
            default:
                toast.error("Đăng ký thất bại!")
                break
        }
        throw error
    }
}