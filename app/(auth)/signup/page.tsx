export const metadata = {
  title: 'Đăng ký',
  description: 'Trang đăng ký',
} 
import FormSignUp from '@/components/auth/form-signup'

export default function SignUp() {
  return (
    <section className="relative">
      <div className="">
        <div className="pt-10 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-2 ">
            <h1 className="h3">Tạo tài khoản</h1>
          </div>
          {/* Form */}
          <FormSignUp />
        </div>
      </div>
    </section>
  )
}
