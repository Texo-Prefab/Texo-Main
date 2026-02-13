// 'use client'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import { Merriweather } from 'next/font/google'
// import { Home, Building2, Factory, Briefcase, FileText, Package, ChevronDown, ChevronRight, Menu } from 'lucide-react'
// import Link from 'next/link'

// const merri = Merriweather({
//   subsets: ['latin'],
//   weight: ['300','400','700','900'], 
// })

// const Nav = () => {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > window.innerHeight) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <div 
//         className={`absolute top-0 left-0 right-0 z-40 transition-all duration-500 ${
//           scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
//         }`}
//       >

//         <div className="bg-black/50 backdrop-blur-md border border-black">
//           <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            
//             <div className="shrink-0">
//               <Image src='/logo.webp' width={90} height={90} alt='Prefab Construction Company Logo' className="h-auto w-auto" />
//             </div>

//             <nav className="hidden lg:block">
//               <ul className={`${merri.className} flex items-center gap-1`}>
//                 <Link href={'/'} className="group relative px-4 py-2">
//                   <span  className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     HOME
//                   </span>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <li className="group relative px-4 py-2">
//                   <div className="flex items-center gap-1 cursor-pointer">
//                     <span className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                       PRODUCTS
//                     </span>
//                     <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-[#886c46] transition-all duration-300 group-hover:rotate-180" />
//                   </div>
                  
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
                  
//                   <div className="absolute left-0 top-full pt-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-100">
//                     <div className="min-w-70 rounded-2xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-2xl">
//                       <ul className="py-2">
//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <Home className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">Wooden Series</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">A-Frame Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Arc Pod</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Wooden House</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Smart House</a></li>
//                             </ul>
//                           </div>
//                         </li>

//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <Building2 className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">Portable Solutions</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Porta Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Farmhouse</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Portable Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Bunk House Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Containers House</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Modular Toilet</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Mobile Toilet</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Portable Toilet Cabin</a></li>
//                             </ul>
//                           </div>
//                         </li>

//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <Factory className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">Prefab Solutions</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Prefab Site Offices</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Prefab Structures</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Prefabricated Accommodation</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Prefab House</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Prefab Schools</a></li>
//                             </ul>
//                           </div>
//                         </li>

//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <Briefcase className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">Specialized Structures</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Clinic Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Restaurant Cabin</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Smoking Room</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Electrical Room</a></li>
//                             </ul>
//                           </div>
//                         </li>

//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <FileText className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">Security Solutions</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Security Cabins</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Toll Booth</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">ATM Cabin</a></li>
//                             </ul>
//                           </div>
//                         </li>

//                         <li className="group/item relative px-2">
//                           <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors rounded-lg cursor-pointer">
//                             <div className="flex items-center gap-3">
//                               <div className="h-8 w-8 rounded-lg bg-linear-to-br from-[#886c46] to-[#6f5838] flex items-center justify-center shrink-0">
//                                 <Package className="w-4 h-4 text-white" />
//                               </div>
//                               <span className="text-sm text-white/80 group-hover/item:text-[#886c46] transition-colors font-light">PUF Insulated Cabin</span>
//                             </div>
//                             <ChevronRight className="w-4 h-4 text-white/40 group-hover/item:text-[#886c46] transition-all duration-300 group-hover/item:translate-x-1" />
//                           </div>
                          
//                           <div className="absolute left-full top-0 ml-2 min-w-55 rounded-xl bg-[#111110] backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible -translate-x-2 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300">
//                             <ul className="py-2">
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Control Room</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Solar Control Room</a></li>
//                               <li><a href="#" className="block px-4 py-2.5 text-sm text-white/60 hover:text-[#886c46] hover:bg-white/5 transition-all font-light hover:translate-x-1 rounded-lg mx-2">Clean Room</a></li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>

//                       <div className="border-t border-white/5 p-4 bg-linear-to-r from-[#886c46]/5 to-transparent">
//                         <button className="w-full rounded-lg px-4 py-2.5 text-xs font-light tracking-wider bg-linear-to-r from-[#886c46] to-[#6f5838] hover:from-[#6f5838] hover:to-[#886c46] transition-all duration-300 text-white shadow-lg hover:shadow-[#886c46]/20">
//                           <Link href={'/products'}>View All Products</Link>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     FEATURES
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     INSPIRATION GALLERY
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//                 <li className="mx-2 h-6 w-px bg-white/20"></li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     ABOUT US
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     BLOGS
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     VLOGS
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//                 <li className="group relative px-4 py-2">
//                   <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
//                     CAREER
//                   </a>
//                   <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex items-center gap-4">
//               <button className={`${merri.className} group relative overflow-hidden rounded-full border border-[#886c46]/30 bg-linear-to-r from-[#886c46] to-[#6f5838] px-6 py-2.5 text-sm font-light tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#886c46]/20`}>
//                 <span className="relative z-10">CONTACT US</span>
//                 <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//               </button>
              
//               <button className="lg:hidden text-white">
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div 
//         className={`fixed top-5 left-1/2 -translate-x-1/2 z-999 transition-all rounded-full border border-[#886c46] duration-500 ${
//           scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'
//         }`}
//       >
//         <div className="relative">
          
//           <div className="absolute inset-0 rounded-full border border-[#886c46] blur-xl bg-[#886c46]/10"></div>

// <ul 
//   className={`${merri.className}
//   relative
//   flex justify-center items-center gap-8
//   px-10 py-4
//   rounded-full
//   bg-white/80 backdrop-blur-xl
//   border border-white/40
//   shadow-[0_10px_40px_rgba(0,0,0,0.25)]
//   before:absolute before:inset-0 before:rounded-full
//   before:border before:border-[#886c46]/20
//   before:opacity-60
//   `}
// >
//   {[
//     { label: "HOME", href: "/" },
//     { label: "PRODUCTS", href: "/products" },
//     { label: "FEATURES", href: "/features" },
//     { label: "CONTACT US", href: "/contact" },
//   ].map((item) => (
//     <li key={item.label}>
//       <Link
//         href={item.href}
//         className="
//         relative cursor-pointer
//         text-[13px] tracking-[0.15em]
//         text-black/80
//         transition-all duration-300
//         hover:text-[#886c46]
//         after:absolute after:left-1/2 after:-bottom-1.5
//         after:h-px after:w-0
//         after:bg-[#886c46]
//         after:transition-all after:duration-300
//         hover:after:left-0 hover:after:w-full
//         "
//       >
//         {item.label}
//       </Link>
//     </li>
//   ))}
// </ul>

//         </div>
//       </div>

//     </>
//   )
// }

// export default Nav


'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Merriweather } from 'next/font/google'
import { Home, Building2, Factory, Briefcase, FileText, Package, ChevronDown, Menu } from 'lucide-react'
import Link from 'next/link'

const merri = Merriweather({
  subsets: ['latin'],
  weight: ['300','400','700','900'], 
})

const productCategories = [
  {
    label: 'Wooden Series',
    icon: Home,
    items: ['A-Frame Cabin', 'Arc Pod', 'Wooden House', 'Smart House'],
  },
  {
    label: 'Portable Solutions',
    icon: Building2,
    items: ['Porta Cabin', 'Farmhouse', 'Portable Cabin', 'Bunk House Cabin', 'Containers House', 'Modular Toilet', 'Mobile Toilet', 'Portable Toilet Cabin'],
  },
  {
    label: 'Prefab Solutions',
    icon: Factory,
    items: ['Prefab Site Offices', 'Prefab Structures', 'Prefabricated Accommodation', 'Prefab House', 'Prefab Schools'],
  },
  {
    label: 'Specialized Structures',
    icon: Briefcase,
    items: ['Clinic Cabin', 'Restaurant Cabin', 'Smoking Room', 'Electrical Room'],
  },
  {
    label: 'Security Solutions',
    icon: FileText,
    items: ['Security Cabins', 'Toll Booth', 'ATM Cabin'],
  },
  {
    label: 'PUF Insulated Cabin',
    icon: Package,
    items: ['Control Room', 'Solar Control Room', 'Clean Room'],
  },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div 
        className={`absolute top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >

        {/* ── MAIN NAV ROW ── */}
        <div className="bg-black/50 backdrop-blur-md border border-black">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            
            <div className="shrink-0">
              <Image src='/logo.webp' width={90} height={90} alt='Prefab Construction Company Logo' className="h-auto w-auto" />
            </div>

            <nav className="hidden lg:block">
              <ul className={`${merri.className} flex items-center gap-1`}>
                <Link href={'/'} className="group relative px-4 py-2">
                  <span className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    HOME
                  </span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </Link>
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    FEATURES
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    INSPIRATION GALLERY
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
                <li className="mx-2 h-6 w-px bg-white/20" />
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    ABOUT US
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    BLOGS
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    VLOGS
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
                <li className="group relative px-4 py-2">
                  <a href="#" className="text-sm font-light tracking-wide text-white transition-colors duration-300 group-hover:text-[#886c46]">
                    CAREER
                  </a>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button className={`${merri.className} group relative overflow-hidden rounded-full border border-[#886c46]/30 bg-linear-to-r from-[#886c46] to-[#6f5838] px-6 py-2.5 text-sm font-light tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#886c46]/20`}>
                <span className="relative z-10">CONTACT US</span>
                <div className="absolute inset-0 z-0 bg-linear-to-r from-[#6f5838] to-[#886c46] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
              <button className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* ── PRODUCT CATEGORY STRIP ── */}
        <div className="hidden lg:block bg-black border-t border-white/6 rounded-b-full">
          <div className="mx-auto flex max-w-screen items-center justify-center px-6 py-2  ">

            

            {/* Category items */}
            <ul className="flex items-center">
              {productCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <li key={cat.label} className="group relative">
                    {/* Trigger button */}
                    <div className={`${merri.className} flex items-center gap-1.5 cursor-pointer px-4 py-3 text-[11px] font-light tracking-widest uppercase text-white transition-colors duration-200 hover:text-white group-hover:text-white`}>
                      {/* <Icon className="h-3.5 w-3.5 shrink-0 text-[#886c46]" /> */}
                      <span>{cat.label}</span>
                      <ChevronDown className="h-3 w-3 text-white/30 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#886c46]" />
                    </div>

                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#886c46] transition-all duration-300 group-hover:w-full" />

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full z-99 pt-1 opacity-0 invisible -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      <div className="min-w-50 rounded-xl border border-white/10 bg-[#111110] shadow-2xl shadow-black/60 overflow-hidden">
                        
                        {/* Dropdown header */}
                        <div className="flex items-center gap-2.5 border-b border-white/5 px-4 py-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-[#886c46] to-[#6f5838]">
                            <Icon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className={`${merri.className} text-[10px] uppercase tracking-widest text-[#886c46]`}>
                            {cat.label}
                          </span>
                        </div>

                        {/* Items */}
                        <ul className="py-1.5">
                          {cat.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className={`${merri.className} flex items-center gap-2.5 px-4 py-2 text-[12px] font-light text-white/50 transition-all duration-150 hover:bg-white/4 hover:text-white hover:pl-5`}
                              >
                                <span className="h-px w-2.5 bg-[#886c46]/50 shrink-0 transition-all duration-150 group-hover:w-4" />
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>

                        {/* Footer CTA */}
                        <div className="border-t border-white/5 p-3">
                          <a
                            href="#"
                            className={`${merri.className} flex items-center justify-center gap-1.5 rounded-lg bg-linear-to-r from-[#886c46]/80 to-[#6f5838]/80 px-3 py-2 text-[10px] uppercase tracking-widest text-white/90 transition-all hover:from-[#886c46] hover:to-[#6f5838]`}
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            
          </div>
        </div>

      </div>

      {/* ── PILL NAV (scrolled) ── */}
      <div 
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-999 transition-all rounded-full border border-[#886c46] duration-500 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full border border-[#886c46] blur-xl bg-[#886c46]/10" />
          <ul 
            className={`${merri.className}
              relative flex justify-center items-center gap-8
              px-10 py-4 rounded-full
              bg-white/80 backdrop-blur-xl
              border border-white/40
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              before:absolute before:inset-0 before:rounded-full
              before:border before:border-[#886c46]/20 before:opacity-60
            `}
          >
            {[
              { label: "HOME", href: "/" },
              { label: "PRODUCTS", href: "/products" },
              { label: "FEATURES", href: "/features" },
              { label: "CONTACT US", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    relative cursor-pointer
                    text-[13px] tracking-[0.15em] text-black/80
                    transition-all duration-300 hover:text-[#886c46]
                    after:absolute after:left-1/2 after:-bottom-1.5
                    after:h-px after:w-0 after:bg-[#886c46]
                    after:transition-all after:duration-300
                    hover:after:left-0 hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav