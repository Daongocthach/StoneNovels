export const metadata = {
  title: 'Đăng nhập',
  description: 'Trang đăng nhập',
}
import FormLogin from '@/components/auth/form-login'

export default function SignIn() {

  return (
    <section className="relative">
      <div >
        <div className="pt-10 pb-12">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-7">
            <h1 className="h3">Đăng nhập</h1>
          </div>
          {/* Form */}
          <FormLogin />
        </div>
      </div>
    </section>
  )
}
