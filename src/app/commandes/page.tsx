"use client"

import { useEffect, useState } from 'react'
import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../funcs/UserRepository';
import Modal from '../components/Modal';
import CompleteProfil from './parial/CompleteProfile';
export default function Commandes() {
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
                const User = tabAccounts.find((x: { compte: string; }) => x.compte === accountsListUser[0]);
                setUserProfile(User);

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
        <main className="min-h-screen pt-20">
            {
                userProfile === undefined || userProfile === null ?
                    <div className="w-screen flex justify-center items-center bg-white">
                        <div >
                            <div className='flex items-center justify-center'>
                                <img src="/Profile.gif" className='h-72 w-auto' />
                            </div>
                            <div className="text-gray-600 my-2 max-w-lg text-sm text-center">
                                Pour profiter pleinement de la plateforme cadastrale RDCryptoMarket, vous devez completer votre profil en cliquant sur le button en bas.
                            </div>
                            <div className="">
                                <div onClick={Add} className="p-3 flex justify-center space-x-2 cursor-pointer rounded-md bg-blue-50 border-blue-300 border text-blue-500 text-sm hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-white">
                                    Completer votre profil
                                    <span className="relative flex justify-center items-center h-6 w-6 ml-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
                                    </span>
                                </div>
                                <Modal show={modal} onClose={closeModal}>
                                    <svg className="text-xl md:text-2xl text-gray-500 absolute right-3 top-3 cursor-pointer hover:text-red-500" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26"><g fill="currentColor"><path d="M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z" /><path d="M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z" /><path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13Z" clip-rule="evenodd" /></g></svg>
                                    <CompleteProfil />
                                </Modal>
                            </div>
                        </div>
                    </div>
                    :
                    <section className='container px-8 md:px-0 md:mx-auto'>
                        <div className='grid gap-4 md:grid-cols-12'>
                            <div className="bg-white shadow-lg p-5 col-span-8">
                                <div className='text-gray-700 font-semibold text-2xl'>
                                    Mes commandes
                                </div>
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
                                                            Date
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                                            Reference
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                                            Nombre de produits
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                                            Cout total
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                            1
                                                        </td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">12/11/2019</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">RGVGFGhjvjdvjv55s42s45</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">5 produits</td>
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">700$</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white shadow-lg p-5 col-span-4'>

                                <div className='space-y-3'>
                                    <div className='bg-gradient-to-b from-blue-500 to-purple-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
                                        <div className='text-3xl font-semibold'>
                                            995.95$
                                        </div>
                                        <div className='text-lg'>
                                            Somme totale depensée
                                        </div>
                                    </div>
                                    <div className='bg-purple-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
                                        <div className='text-3xl font-semibold'>
                                            152
                                        </div>
                                        <div className='text-lg'>
                                            Nombre de produits achetés
                                        </div>
                                    </div>
                                    <div className='bg-gradient-to-b from-purple-500 to-pink-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
                                        <div className='text-3xl font-semibold'>
                                            127
                                        </div>
                                        <div className='text-lg'>
                                            Nomme de produits livrés
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }


        </main>
    )
}
