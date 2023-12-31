"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../funcs/UserRepository';
import Modal from '../components/Modal'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

export default function DashbordLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const location = usePathname();
    const nouveauChemin = location.replace(/$\/[^\/]/, '');
    const links = [
        {
            name: "Tableau de bord",
            url: "/dashbord",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className='mr-1 ' viewBox="0 0 24 24"><path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1Zm-6-2h5V9.158l-6-5.455l-6 5.455V19h5v-6h2v6Z" /></svg>
        },
        {
            name: "Produits",
            url: "/dashbord/produits",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className='mr-1 ' viewBox="0 0 24 24"><circle cx="5" cy="19" r="1" fill="currentColor" /><path fill="currentColor" d="M4 4h2v9H4z" /><path fill="currentColor" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 19H3V3h4Zm7-18v7h-3V3h3m1-1h-5v9h5V2Zm6 1v7h-3V3h3m1-1h-5v9h5V2Zm-8 12v7h-3v-7h3m1-1h-5v9h5v-9Zm6 1v7h-3v-7h3m1-1h-5v9h5v-9Z" /></svg>
        },
        {
            name: "Commandes",
            url: "/dashbord/commandes",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className='mr-1 ' viewBox="0 0 24 24"><path fill="currentColor" d="M4 13c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2m.2 1.5l1.06 1.05l-3.99 3.95l-2.53-2.55l1.07-1.05l1.47 1.49M4 3c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M4 5h4v4H4m8-4h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z" /></svg>
        },
        {
            name: "Livraisons",
            url: "/dashbord/livraison",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className='mr-1 ' viewBox="0 0 32 32"><path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" /><path fill="currentColor" d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394ZM9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z" /></svg>
        },
        {
            name: "Users",
            url: "/dashbord/users",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className='mr-1' viewBox="0 0 256 256"><path fill="currentColor" d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89a8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30a8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68a8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8a57 57 0 0 0-98.16 0a8 8 0 1 1-13.84-8a72.06 72.06 0 0 1 33.74-29.92a48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8a24 24 0 1 1 23.24-30a8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68a8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" /></svg>
        }
    ]

    const [userProfile, setUserProfile] = useState<any>();
    const [modal, setmodal] = useState<any>(false);

    useEffect(() => {
        const initBlockchain = async () => {

            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            if (accounts.length > 0) {


                const web3UserInstance = await initUserWeb3();
                const contractUserInstance = await initUserContract(web3UserInstance);
                const accountsListUser = await initUserAccounts(web3UserInstance);

                const tabAccounts = await listAllUsers(contractUserInstance);
                const User = tabAccounts.find((x: { compte: any; }) => x.compte.toLowerCase() == accountsListUser[0].toLowerCase());
                setUserProfile(User);

                if (User.role !== "admin") {
                    window.location.href = "/"
                }

            } else {
                window.location.href = "/"
            }

        };
        initBlockchain();
    }, []);

    const Add = () => {
        setmodal(true);
    };

    const closeModal = () => {
        setmodal(false);
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className=''>
                    <div className='fixed w-[15%] h-screen overflow-auto shadow-lg bg-white'>
                        <div className='font-medium py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-md text-white text-center'>
                            {nouveauChemin}
                        </div>
                        <div className='mt-8'>
                            {
                                links.map((link, index) => (
                                    <Link href={link.url} className={`${location === link.url ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-md text-white' : 'text-gray-700'} hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xs hover:text-white flex font-medium items-center px-2 my-2  py-2`} key={index}>
                                        {link.icon} {link.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='pl-[16%] p-2 bg-gray-50 w-full'>
                        <div className='flex justify-between px-5'>
                            <input type="search" name="" id="" className='border border-gray-300 rounded-full py-1 w-64 px-2 tetx-gray-600' placeholder='Recherche...' />
                            <Link href={"/dashbord/profil"} className=' '>
                                <div className='flex items-center space-x-2'>
                                    <img src={userProfile?.photoProfil} alt="" className='h-8 w-8 rounded-full' />
                                    <div className='text-sm text-gray-800'>
                                        {userProfile?.nom} {userProfile?.postnom} {userProfile?.prenom}
                                    </div>
                                </div>
                            </Link>

                        </div>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
