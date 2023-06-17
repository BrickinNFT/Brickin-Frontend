import { Outlet } from 'umi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E3FA] to-[#D8ACEC]">
      <div className="container mx-auto flex flex-col justify-between">
        <Header></Header>
        <main className="flex-1 border-red-500 border border-solid">
          <Outlet />
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}
