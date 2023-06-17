import { Outlet } from 'umi'
import logo from '@/assets/logo.png'
import twitter from '@/assets/twitter.png'
import ins from '@/assets/in.png'
import fb from '@/assets/fb.png'
import github from '@/assets/github.png'
const navList = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'API',
    link: '#',
  },
  {
    name: 'Pricing',
    link: '#',
  },
  {
    name: 'Our Team',
    link: '#',
  },
]
export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3E3FA] to-[#D8ACEC]">
      <div className="container mx-auto flex flex-col justify-between">
        <header className=" h-[144px] flex justify-between items-center">
          <img src={logo} alt="logo" className="h-[144px]" />
          <div className="flex-1 flex justify-evenly cursor-pointer">
            {navList.map((item, index) => {
              return (
                <div key={index} onClick={() => console.log(item.link)}>
                  {item.name}
                </div>
              )
            })}
          </div>
          <div className="bg-[#7f56D9] rounded-lg px-4 py-2 text-[#fff] cursor-default">Connect Wallet to Start</div>
        </header>
        <main className="flex-1 border-red-500 border border-solid">
          <Outlet />
        </main>
        <footer className="h-[85px] flex justify-between items-center border-solid border-[#7F56D9] border-0 border-t">
          <div className="text-[#475467]">© 2023 Brickin. All rights reserved.</div>
          <div className="flex">
            <img src={twitter} alt="twitter" className="h-[24px] mx-2" />
            <img src={ins} alt="in" className="h-[24px] mx-2" />
            <img src={fb} alt="facebook" className="h-[24px] mx-2" />
            <img src={github} alt="github" className="h-[24px] mx-2" />
          </div>
        </footer>
      </div>
    </div>
  )
}
