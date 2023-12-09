"use client"

import AddDelivery from './partial/AddDelivery'
import Modal from '@/app/components/Modal'
import { useState, useEffect } from 'react';
import { initDeliveryWeb3, initDeliveryContract, initDeliveryAccounts, makeNewDelivery, listAllDeliveries } from '../../funcs/DeliveryRepository';
import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../../funcs/UserRepository';
import DetailDelivery from './partial/detailDelivery';

export default function AdminLivraison() {
    const [search, setSearch] = useState("");
    const [modal, setmodal] = useState<any>(false);
    const [contractDelivery, setContractDelivery] = useState<any | null>(null);
    const [accountsDelivery, setAccountsDelivery] = useState<string[]>([]);
    const [deliveries, setDeliveries] = useState<string[]>([]);
    const [userProfile, setUserProfile] = useState<any>();
    const [id, setid] = useState('');
    const [singlemodal, setsinglemodal] = useState<any>(false);

    useEffect(() => {
        const initBlockchain = async () => {

            const web3UserInstance = await initUserWeb3();
            const contractUserInstance = await initUserContract(web3UserInstance);
            const accountsListUser = await initUserAccounts(web3UserInstance);

            const tabAccounts = await listAllUsers(contractUserInstance);
            setUserProfile(tabAccounts);

            const web3DeliveryInstance = await initDeliveryWeb3();
            const contractDeliveryInstance = await initDeliveryContract(web3DeliveryInstance);
            const accountsListDelivery = await initDeliveryAccounts(web3DeliveryInstance);

            setContractDelivery(contractDeliveryInstance);
            setAccountsDelivery(accountsListDelivery);

            setDeliveries(await listAllDeliveries(contractDeliveryInstance));
        };
        initBlockchain();
    }, []);
    const Add = () => {
        setmodal(true);
    };
    const closeModal = async () => {
        setmodal(false);
        setDeliveries(await listAllDeliveries(contractDelivery));
        setsinglemodal(false);
    };

    const detail = (p: any) => {
        setsinglemodal(true);
        setid(p)
    };

    return (
        <main className="min-h-screen mt-5">
            <div className="max-w-full text-gray-700 my-3">
                <div className="w-full md:flex md:justify-between">
                    <div className='mt-3'>
                        <span onClick={Add} className="p-3 cursor-pointer rounded-md bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border-blue-500 border text-blue-500 text-sm">
                            <svg className="inline-flex mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z" /></svg>
                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                                Ajouter une livraison
                            </span>
                        </span>
                        <Modal show={modal} onClose={closeModal}>
                            <svg className="text-xl md:text-2xl text-gray-500 absolute right-3 top-3 cursor-pointer hover:text-red-500" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26"><g fill="currentColor"><path d="M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z" /><path d="M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z" /><path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13Z" clip-rule="evenodd" /></g></svg>
                            <AddDelivery />
                        </Modal>
                    </div>
                    <div className="max-w-xs w-full">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" id="search-dropdown" className="bg-white border md:mt-0 mt-8 text-sm text-gray-600 rounded-full w-full py-2 px-3" placeholder="Recherche..." />
                    </div>
                </div>

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
                                        Dates
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        References
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Agent
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Observation
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-sm text-center text-white font-bold">
                                        Option
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    deliveries?.slice(1).map((delivery: any, index: any) => (
                                        <tr key={index}>
                                            <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                                {delivery.deliveryDate}
                                            </td>
                                            <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">{delivery.orderReference}</td>
                                            {
                                                userProfile?.filter((x: { compte: any; }) => x.compte == delivery.deliveryPerson)
                                                    .map((user: any, index2: any) => (
                                                        <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center" key={index2}>{user.nom} {user.postnom} {user.prenom}</td>
                                                    ))
                                            }
                                            <td className="py-2 px-3 text-sm text-gray-700 max-w-[300px] text-center">{delivery.observations}</td>
                                            <td className="flex justify-center items-center">
                                                <span className='bg-blue-500 p-1 text-white rounded-md cursor-pointer' onClick={() => detail(delivery.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='' width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" /></svg>
                                                </span>
                                                <Modal show={id == delivery.id ? singlemodal : false} onClose={closeModal} maxWidth="2xl">
                                                    <svg className="text-xl md:text-2xl text-gray-500 absolute right-3 top-3 cursor-pointer hover:text-red-500" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26"><g fill="currentColor"><path d="M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z" /><path d="M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z" /><path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13Z" clip-rule="evenodd" /></g></svg>
                                                    <DetailDelivery reference={delivery.orderReference} />
                                                </Modal>
                                            </td>
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