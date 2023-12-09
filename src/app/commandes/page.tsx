"use client"

import { Key, useEffect, useState } from 'react'
import { initUserWeb3, initUserContract, initUserAccounts, listAllUsers } from '../funcs/UserRepository';
import { initOrderProductWeb3, initOrderProductContract, initOrderProductAccounts, listAllOrderProducts } from '../funcs/OrderProductRepository';
import { initProduitWeb3, initProduitContract, initProduitAccounts, listAllProducts } from '../funcs/ProduitRepository';
import { initOrderWeb3, initOrderContract, initOrderAccounts, listAllOrders } from '../funcs/OrderRepository';
import { initDeliveryWeb3, initDeliveryContract, initDeliveryAccounts, makeNewDelivery, listAllDeliveries } from '../funcs/DeliveryRepository';
import Modal from '../components/Modal';
import CompleteProfil from './parial/CompleteProfile';
import Web3 from 'web3';
import DetailOrder from './parial/detailOrder';


export default function Commandes() {
    const [userProfile, setUserProfile] = useState<any>();
    const [orders, setOrders] = useState<any>();
    const [deliveries, setDeliveries] = useState<string[]>([]);
    const [modal, setmodal] = useState<any>(false);
    const [id, setid] = useState('');
    const [singlemodal, setsinglemodal] = useState<any>(false);
    const [contractDelivery, setContractDelivery] = useState<any | null>(null);
    const [accountsDelivery, setAccountsDelivery] = useState<string[]>([]);

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
                const User = tabAccounts.find((x: { compte: string; }) => x.compte.toLowerCase() === accountsListUser[0].toLowerCase());
                setUserProfile(User);

                const web3OrderInstance = await initOrderWeb3();
                const contractOrderInstance = await initOrderContract(web3OrderInstance);
                const accountsListOrder = await initOrderAccounts(web3OrderInstance);

                const tabOrders = await listAllOrders(contractOrderInstance);
                const Order = tabOrders.filter((x: { buyer: string; }) => x.buyer == accountsListOrder[0]);
                setOrders(Order);

                const web3DeliveryInstance = await initDeliveryWeb3();
                const contractDeliveryInstance = await initDeliveryContract(web3DeliveryInstance);
                const accountsListDelivery = await initDeliveryAccounts(web3DeliveryInstance);

                setContractDelivery(contractDeliveryInstance);
                setAccountsDelivery(accountsListDelivery);

                setDeliveries(await listAllDeliveries(contractDeliveryInstance));

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
        setsinglemodal(false);
    };

    const detail = (p: any) => {
        setsinglemodal(true);
        setid(p)
    };

    // Initialisez Web3 avec votre fournisseur Ethereum (par exemple, MetaMask)
    const web3 = new Web3(window.ethereum);

    let sommeDesSoldes = 0;
    orders?.forEach((objet: { totalPrice: any; }) => {
        let soldeDeCetObjet = parseInt(web3.utils.fromWei(objet.totalPrice, 'ether'), 10);
        sommeDesSoldes += soldeDeCetObjet;
    });

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
                                                        <th scope="col" className="py-2 px-3 text-xs flex items-center justify-center text-center text-white font-bold whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                #
                                                            </div>
                                                        </th>

                                                        <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                                            Date
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                                            Reference
                                                        </th>

                                                        <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                                            Cout total
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                                            À Livrer
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                                            Voir plus
                                                        </th>


                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {
                                                        orders?.map((order: any, index: any) => (
                                                            <tr key={index}>
                                                                <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase">{order.orderDate}</td>
                                                                <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">{order.orderReference}</td>
                                                                <td className="py-2 px-3 text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap text-center">{web3.utils.fromWei(order.totalPrice, 'ether')?.toString()} <span className='font-normal text-xs text-gray-600'>$</span></td>
                                                                <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center">
                                                                    {
                                                                        deliveries
                                                                            ?.find((x: any) => x.orderReference === order.orderReference) && (
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" className='text-green-600' height="30" viewBox="0 0 16 16">
                                                                                <path fill="currentColor" d="M11.334 2.064l.077.153l.576 1.533c.045.12.14.216.261.261l1.48.556c.65.243.999.937.826 1.594l-.042.13l-.688 1.523a.446.446 0 0 0 0 .37l.654 1.44a1.34 1.34 0 0 1-.544 1.71l-.153.077l-1.533.576a.447.447 0 0 0-.26.261l-.556 1.48a1.34 1.34 0 0 1-1.595.826l-.13-.042l-1.523-.688a.446.446 0 0 0-.37 0l-1.439.654a1.34 1.34 0 0 1-1.71-.544l-.077-.153l-.577-1.533a.447.447 0 0 0-.261-.26l-1.48-.556a1.34 1.34 0 0 1-.826-1.595l.042-.13l.689-1.523a.447.447 0 0 0 0-.37L1.52 6.375a1.34 1.34 0 0 1 .543-1.71l.153-.077L3.75 4.01a.447.447 0 0 0 .261-.261l.556-1.48a1.34 1.34 0 0 1 1.594-.826l.13.042l1.523.689a.447.447 0 0 0 .37 0l1.44-.654a1.34 1.34 0 0 1 1.71.543Zm-5.931.52l-.555 1.48a1.34 1.34 0 0 1-.784.784l-1.48.555l-.098.051a.447.447 0 0 0-.152.552l.654 1.439c.16.352.16.756 0 1.108l-.66 1.454l-.027.091a.447.447 0 0 0 .283.497l1.48.556c.362.136.648.421.784.784l.555 1.48l.051.098c.12.174.352.242.552.151l1.439-.653a1.34 1.34 0 0 1 1.108 0l1.454.66l.091.026a.447.447 0 0 0 .497-.282l.556-1.48a1.34 1.34 0 0 1 .784-.784l1.48-.556l.098-.05a.447.447 0 0 0 .151-.552l-.653-1.44a1.34 1.34 0 0 1 0-1.108l.66-1.453l.026-.092a.447.447 0 0 0-.282-.497l-1.48-.555a1.34 1.34 0 0 1-.784-.784l-.556-1.48l-.05-.098a.447.447 0 0 0-.552-.152l-1.44.654a1.34 1.34 0 0 1-1.108 0l-1.44-.654l-.027-.012a.447.447 0 0 0-.575.262Zm1.574 6.762l3.186-3.64a.447.447 0 0 1 .725.514l-.053.073l-3.5 4a.447.447 0 0 1-.578.082l-.074-.06l-1.5-1.5a.447.447 0 0 1 .562-.689l.07.057l1.162 1.163l3.186-3.64l-3.186 3.64Z" />
                                                                            </svg>
                                                                        )
                                                                    }
                                                                </td>

                                                                <td className="flex justify-center items-center">
                                                                    <span className='bg-blue-500 p-1 text-white rounded-md cursor-pointer' onClick={() => detail(order.id)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='' width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z" /></svg>
                                                                    </span>
                                                                    <Modal show={id == order.id ? singlemodal : false} onClose={closeModal} maxWidth="2xl">
                                                                        <svg className="text-xl md:text-2xl text-gray-500 absolute right-3 top-3 cursor-pointer hover:text-red-500" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26"><g fill="currentColor"><path d="M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z" /><path d="M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z" /><path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11Zm0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13Z" clip-rule="evenodd" /></g></svg>
                                                                        <DetailOrder id={order.id} />
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
                            </div>
                            <div className='bg-white shadow-lg p-5 col-span-4'>

                                <div className='space-y-3'>
                                    <div className=' p-4 rounded-md'>
                                        <div className='text-md text-gray-600'>
                                            Somme totale depensée
                                        </div>
                                        <div className='bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent text-5xl font-semibold flex items-center'>
                                            {
                                                sommeDesSoldes
                                            }   <span className='font-normal text-sm ml-4 text-gray-600'>Dollars americain</span>
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
