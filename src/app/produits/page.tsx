"use client"

import { useState, useEffect } from 'react';
import { initProduitWeb3, initProduitContract, initProduitAccounts, listAllProducts } from '../funcs/ProduitRepository';
import { toast } from 'react-toastify';
import { useCart } from '../cartContext';

export default function Produits() {

    const [contractProduit, setContractProduit] = useState<any | null>(null);
    const [accountsProduit, setAccountsProduit] = useState<string[]>([]);
    const [produits, setProduits] = useState<string[]>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const initBlockchain = async () => {
            const web3ProduitInstance = await initProduitWeb3();
            const contractProduitInstance = await initProduitContract(web3ProduitInstance);
            const accountsListProduit = await initProduitAccounts(web3ProduitInstance);

            setContractProduit(contractProduitInstance);
            setAccountsProduit(accountsListProduit);

            setProduits(await listAllProducts(contractProduitInstance));
        };
        initBlockchain();
    }, []);
    const handleAddToCart = (produit: { id: any; name: any; category: any; price: any; image: any; }) => {
        addToCart({ id: produit.id, name: produit.name, category: produit.category, price: produit.price, photo: produit.image })
        toast.success(`"${produit.name}" a été ajouté au panier.`, {
            position: 'bottom-right',
        });
    };
    return (
        <main className="min-h-screen pt-28">

            <section className='container px-8 md:px-0 md:mx-auto'>
                <div className='bg-white shadow-lg px-5 py-3 '>
                    <div className='text-gray-700 font-semibold text-2xl'>
                        Liste de produits
                    </div>
                    <div>

                    </div>
                </div>
                <div className='grid gap-4 grid-cols-2 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    {
                        produits?.slice(1).map((produit: any, index) => (
                            <div className='shadow-xl rounded-md' key={index}>
                                <div className='overflow-hidden max-h-[200px]'>
                                    <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2' onClick={() => handleAddToCart(produit)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                                    </button>
                                    <img src={produit.image} alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                                </div>
                                <div className='px-auto pt-2 pb-4 justify-between flex px-4'>
                                    <div className='col-span-4'>
                                        <h3 className='text-md font-medium text-gray-700 uppercase'>{produit.name} </h3>
                                        <h4 className='text-gray-500 -mt-1 text-[12px]'>{produit.category}</h4>
                                    </div>
                                    <div className='col-sapn-1 flex items-center'>
                                        <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>{produit.price.toString()}</h2>
                                        <small className='text-xs text-gray-500'>$</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </main>
    )
}
