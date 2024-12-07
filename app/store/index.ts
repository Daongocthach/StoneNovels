import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { toast } from "react-toastify"
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth"
import { auth } from "@/firebase"

type StoreState = {
  isLoading: boolean
  isLoggedIn: boolean
  displayName: string | null
  email: string | null
  avatar: string | null
  signUp: (email: string, password: string) => Promise<void>
  signInEmail: (email: string, password: string) => Promise<void>
  signInGooglePopup: () => Promise<void>
  signInGoogleRedirect: () => Promise<void>
  logOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  createNewPassword: (newPassword: string) => Promise<void>
  updateUserProfile: (displayName: string, photoURL: string) => Promise<void>
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        isLoggedIn: false,
        displayName: null,
        email: null,
        avatar: null,
        updateUserProfile: async (displayName, photoURL) => {
          try {
            set({ isLoading: true })
            if (!auth.currentUser) {
              throw new Error("Không tìm thấy người dùng hiện tại.")
            }
            await updateProfile(auth.currentUser, {
              displayName,
              photoURL,
            })
            set({
              displayName,
              avatar: photoURL,
            })
            toast.success("Cập nhật thông tin cá nhân thành công!")
          } catch (error: any) {
            toast.error("Cập nhật thông tin cá nhân thất bại!")
            throw error
          } finally {
            set({ isLoading: false })
          }
        },
        signUp: async (email, password) => {
          try {
            set({ isLoading: true })
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            set({
              isLoggedIn: true,
              displayName: user.displayName,
              email: user.email,
            })
            toast.success("Đăng ký thành công!")
          } catch (error: any) {
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
          } finally {
            set({ isLoading: false })
          }
        },

        signInEmail: async (email, password) => {
          try {
            set({ isLoading: true })
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            set({
              isLoggedIn: true,
              displayName: user.displayName,
              email: user.email,
              avatar: user.photoURL
            })
            toast.success("Đăng nhập thành công!")
          } catch (error: any) {
            switch (error.code) {
              case "auth/user-not-found":
                toast.error("Tài khoản không tồn tại.")
                break
              case "auth/wrong-password":
                toast.error("Mật khẩu không chính xác.")
                break
              case "auth/invalid-email":
                toast.error("Email không hợp lệ.")
                break
              default:
                toast.error("Đăng nhập thất bại!")
                break
            }
            throw error
          } finally {
            set({ isLoading: false })
          }
        },

        signInGooglePopup: async () => {
          const provider = new GoogleAuthProvider()
          try {
            set({ isLoading: true })
            const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user
            set({
              isLoggedIn: true,
              displayName: user.displayName,
              email: user.email,
            })
            toast.success("Đăng nhập Google thành công!")
          } catch (error: any) {
            toast.error("Đăng nhập Google thất bại!")
            throw error
          } finally {
            set({ isLoading: false })
          }
        },

        signInGoogleRedirect: async () => {
          const provider = new GoogleAuthProvider()
          try {
            await signInWithRedirect(auth, provider)
            toast.success("Chuyển hướng đăng nhập Google thành công!")
          } catch (error: any) {
            toast.error("Đăng nhập Google thất bại!")
            throw error
          }
        },

        logOut: async () => {
          try {
            await signOut(auth)
            set({
              isLoggedIn: false,
              displayName: null,
              email: null,
            })
            toast.success("Đăng xuất thành công!")
          } catch (error: any) {
            toast.error("Đăng xuất thất bại!")
            throw error
          }
        },

        resetPassword: async (email) => {
          try {
            set({ isLoading: true })
            await sendPasswordResetEmail(auth, email)
            toast.success("Đã gửi email đặt lại mật khẩu!")
          } catch (error: any) {
            toast.error("Gửi email đặt lại mật khẩu thất bại!")
            throw error
          } finally {
            set({ isLoading: false })
          }
        },

        createNewPassword: async (newPassword) => {
          try {
            set({ isLoading: true })
            if (!auth.currentUser) {
              throw new Error("Không tìm thấy người dùng hiện tại.")
            }
            console.log(auth.currentUser)
            await updatePassword(auth.currentUser, newPassword)
            toast.success("Mật khẩu đã được cập nhật!")
          } catch (error: any) {
            toast.error("Cập nhật mật khẩu thất bại!")
            throw error
          } finally {
            set({ isLoading: false })
          }
        },
      }),
      {
        name: "auth-store",
        partialize: (state) => ({
          isLoggedIn: state.isLoggedIn,
          displayName: state.displayName,
          email: state.email,
        }),
      }
    )
  )
)

export default useStore
