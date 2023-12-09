"use client"


import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../../funcs/UserRepository';
import { useState, useEffect } from 'react';


export default function AdminUsers() {
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
                setUserProfile(tabAccounts);

            } else {
                window.location.href = "/"
            }

        };
        initBlockchain();
    }, []);
    return (
        <main className="min-h-screen mt-5">
            <div className="overflow-x-auto mt-3">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden border border-blue-200  md:rounded-lg">
                        <table className="min-w-full divide-y divide-blue-300 ">
                            <thead className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-sm flex items-center justify-center text-center text-white font-bold">
                                        <div className="flex items-center">
                                            #
                                        </div>
                                    </th>

                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Profil
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Noms complets
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Contact
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Adresse
                                    </th>

                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Biographie
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    userProfile?.slice(1).map((user: any, index: any) => (
                                        <tr key={index}>
                                            <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                                12/11/2019
                                            </td>
                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap uppercase font-semibold text-center">
                                                {user.nom} {user.prenom} {user.postnom}
                                            </td>
                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                                <div>
                                                  {user.email}
                                                </div>
                                                <div>
                                                    {user.telephone}
                                                </div>
                                            </td>

                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">{user.adresse}</td>
                                            <td className="py-2 px-3 text-sm text-gray-700 max-w-[300px] text-center">{user.biographie}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
