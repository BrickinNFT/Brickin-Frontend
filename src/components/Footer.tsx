import twitter from '@/assets/twitter.png'
import ins from '@/assets/in.png'
import fb from '@/assets/fb.png'
import github from '@/assets/github.png'

export default function Footer() {
  return (
    <footer className="h-[85px] flex justify-between items-center border-solid border-[#7F56D9] border-0 border-t">
      <div className="text-[#475467]">© 2023 Brickin. All rights reserved.</div>
      <div className="flex">
        <img src={twitter} alt="twitter" className="h-[24px] mx-2 cursor-pointer" />
        <img src={ins} alt="in" className="h-[24px] mx-2 cursor-pointer" />
        <img src={fb} alt="facebook" className="h-[24px] mx-2 cursor-pointer" />
        <img src={github} alt="github" className="h-[24px] mx-2 cursor-pointer" />
      </div>
    </footer>
  )
}
