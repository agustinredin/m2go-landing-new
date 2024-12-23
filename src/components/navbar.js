'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
    const location = usePathname()
    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Nosotros',
            href: '/nosotros'
        },
        {
            name: 'Características',
            href: '/caracteristicas'
        },
        {
            name: 'Demo',
            href: '/demo',
        },
        {
            name: 'Restaurantes',
            href: '/restaurantes'
        },
        {
            name: 'Repartidor',
            href: '/repartidor'
        }
    ].map(item => ({...item, className: item.href == location ? 'underline pointer-events-none text-dgreen -translate-y-1' : 'hover:font-bold transition-all hover:-translate-y-1'}))

    return (
        <div className="flex justify-between items-center px-12 py-4">
            <Image src="/logo.png" alt="M2Go Logo" loading="eager" width={75} height={75} />
            <div className="hidden md:flex md:gap-8">
                {
                    navItems.map((item, index) => <Link key={index} href={item.href} className={item.className}>{item.name}</Link>)
                }
            </div>
            <div className="text-sm hidden md:block rounded-lg bg-dgreen text-white cursor-pointer uppercase px-6 py-3 hover:bg-green hover:text-dwhite transition-all">
                Acceder
            </div>
            {/* TODO: navbar responsive */}
            {/* <div></div> */}
        </div>
    )
}

export default NavBar