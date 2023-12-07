"use client"

import { usePathname } from 'next/navigation';
import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../../funcs/UserRepository';
import { useState, useEffect } from 'react';

export default function AdminProfil() {

    const [userProfile, setUserProfile] = useState<any>();
  
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
                const User = tabAccounts.find((x: { compte: string; }) => x.compte === accountsListUser[0]);
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


    return (
        <main className="min-h-screen mt-5 md:mx-12">
            <div className='shadow-md bg-white p-3 rounded-md'>
                <div className='flex items-center space-x-4 border-b border-gray-400 pb-3'>
                    <div>
                        <img src="/default.jpg" alt="" className='h-24 rounded-full' />
                    </div>
                    <div>
                        <div className='font-semibold text-2xl'>
                            {userProfile?.nom} {userProfile?.postnom} {userProfile?.prenom}
                        </div>
                        <div className='text-xs bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            {userProfile?.compte}
                        </div>
                        <div className='w-full flex justify-around mt-1 font-medium text-gray-600'>
                            <span><small className='block text-xs font-normal'>Email :</small> {userProfile?.email}</span>
                            <span><small className='block text-xs font-normal'>Téléphone :</small> {userProfile?.telephone}</span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-3 capitalize'>
                    <div className="col-span-4 w-full font-medium text-gray-600">
                    <span><small className='block text-xs font-normal'>Adresse physique :</small> {userProfile?.adresse}</span>
                    </div>
                    <div className="col-span-3 w-full font-medium text-gray-600">
                    <span><small className='block text-xs font-normal'>Rôle :</small> {userProfile?.role}</span>
                    </div>
                    <div className="col-span-5 w-full font-medium text-gray-600">
                    <span><small className='block text-xs font-normal'>Biographie :</small> {userProfile?.biographie}</span>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
