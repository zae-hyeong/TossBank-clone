// import Logo from "../../public/logo-bank-mono-light.svg"
import Image from 'next/image'
import Logo from "@/public/logo-bank-mono-light.svg"
import HeaderNavigationMenu from '@/public/class/HeaderNavigationMenu';

const navMenu = [
  new HeaderNavigationMenu({title: '통장', path: 'account', navId: 'acc1'}),
  new HeaderNavigationMenu({title: '예금·적금', path: 'deposit-saving', navId: 'de-sa'}),
  new HeaderNavigationMenu({title: '대출', path: 'loan', navId: 'loan'}),
  new HeaderNavigationMenu({title: '외환', path: 'foreign-exchange', navId: 'foreign-exchange'}),
  new HeaderNavigationMenu({title: '카드', path: 'card', navId: 'card'}),
  new HeaderNavigationMenu({title: '은행소개', path: 'introduce', navId: 'introduce'}),
  new HeaderNavigationMenu({title: '고객센터', path: 'customer-service', navId: 'service'}),
  new HeaderNavigationMenu({title: '채용', path: 'recruit', navId: 'rec'}),
]

export default function Home() {
  return (
    <main className="">
     {/* <Image src={Logo} alt={'main logo'} /> */}
     {/* <Logo /> */}
      <header className='w-full h-16 bg-black opacity-85'>
        <nav className='h-full flex justify-center items-center'>
          {/* <img src={Logo} alt="" /> */}
          <ul className='flex text-sub'>
            {navMenu.map(menu => <li key={menu.navId} className='mr-5'>{menu.title}</li>)}
          </ul>
        </nav>
      </header>
    </main>
  );
}
