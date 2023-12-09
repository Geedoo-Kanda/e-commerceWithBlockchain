"use client"


import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "../cartContext";
import { initProduitWeb3, initProduitContract, initProduitAccounts, listAllProducts } from "../funcs/ProduitRepository";
import { initOrderWeb3, initOrderContract, initOrderAccounts, placeNewOrder } from "../funcs/OrderRepository";

export default function Panier() {

    const { getCart, addToCart, getTotal, clearCart, removeFromCart } = useCart();
    const cart = getCart();
    const total = getTotal();

    const [contractOrder, setContractOrder] = useState<any | null>(null);
    const [accountsOrder, setAccountsOrder] = useState<string[]>([]);
    const [contractProduit, setContractProduit] = useState<any | null>(null);
    const [accountsProduit, setAccountsProduit] = useState<string[]>([]);
    const [produits, setProduits] = useState<string[]>([]);

    useEffect(() => {
        const initBlockchain = async () => {
            const web3ProduitInstance = await initProduitWeb3();
            const contractProduitInstance = await initProduitContract(web3ProduitInstance);
            const accountsListProduit = await initProduitAccounts(web3ProduitInstance);

            setContractProduit(contractProduitInstance);
            setAccountsProduit(accountsListProduit);

            const web3OrderInstance = await initOrderWeb3();
            const contractOrderInstance = await initOrderContract(web3OrderInstance);
            const accountsListOrder = await initOrderAccounts(web3OrderInstance);

            setContractOrder(contractOrderInstance);
            setAccountsOrder(accountsListOrder);

            setProduits(await listAllProducts(contractProduitInstance));
        };
        initBlockchain();
    }, []);


    const handleSubmit = async () => {

        const orderReference = generateorderReference();

        const orderDate = new Date().toISOString();

        await placeNewOrder(contractOrder, {
            orderReference,
            orderDate,
            totalPrice: total,
            delivered: false,
            productIds: cart.map((item) => item.product.id),
            quantities: cart.map((item) => item.quantity),
            unitPrices: cart.map((item) => item.product.price),
        }, accountsOrder);

        clearCart();
    };

    // Fonction pour générer une référence de produit alphanumérique
    const generateorderReference = (): string => {
        const alphanumericChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const referenceLength = 20;
        let reference = '';

        for (let i = 0; i < referenceLength; i++) {
            const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
            reference += alphanumericChars.charAt(randomIndex);
        }

        return reference;
    };

    const handleAddToCart = (produit: { id: any; name: any; category: any; price: any; image: any; }) => {
        addToCart({ id: produit.id, name: produit.name, category: produit.category, price: produit.price, photo: produit.image })
        toast.success(`"${produit.name}" a été ajouté au panier.`, {
            position: 'bottom-right',
        });
    };

    return (
        <main className="min-h-screen pt-20">

            <section className='container px-8 md:px-0 md:mx-auto'>
                <div className='grid gap-4 md:grid-cols-2'>
                    <div className="bg-white p-5">
                        <div className="flex justify-between">
                            <div className='text-gray-700 font-semibold text-2xl'>
                                Votre Panier
                            </div>
                            <div>
                                <div className="flex text-xs items-center bg-red-500 text-white p-1 rounded-md cursor-pointer" onClick={() => clearCart()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15H5Zm2-2h10V6H7v13Zm2-2h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" /></svg>
                                    Vider le panier
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 space-y-1 p-5 shadow-lg bg-gray-50'>
                            {
                                cart.length > 0 ?
                                    cart.map((item: any, index) => (
                                        <div className="grid grid-cols-12 border-b border-gray-300 pb-1" key={index}>
                                            <div className="md:col-span-2 col-span-3">
                                                <img src={item.product.photo} alt="" className='w-full h-auto' />
                                            </div>
                                            <div className="col-span-6 md:col-span-7 grid grid-cols-3 pl-4">
                                                <div className="col-span-2">
                                                    <small className="text-[10px] text-gray-500">Nom</small>
                                                    <div className="-mt-1">
                                                        <p className="text-xl font-semibold text-gray-700">{item.product.name} </p>
                                                        <p className="text-xs text-gray-700">{item.product.category} </p>
                                                    </div>
                                                </div>
                                                <div className="border-x border-gray-300 px-2 text-center">
                                                    <small className="text-[10px] text-gray-500">Quantité</small>
                                                    <p>{item.quantity} </p>
                                                </div>
                                            </div>
                                            <div className="col-span-2 text-3xl flex items-center justify-center text-gray-800 font-semibold">
                                                {item.product.price.toString()} <small className='text-xs ml-1 text-gray-500'>$</small>
                                            </div>
                                            <div className="col-span-1  flex items-center justify-center">
                                                <div className="flex text-xs items-center bg-red-500 text-white p-1 rounded-md cursor-pointer" onClick={() => removeFromCart(item.product.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15H5Zm2-2h10V6H7v13Zm2-2h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    )) :
                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img src="/vide.jpg" alt="" className='w-36 h-auto' />
                                        </div>
                                        <p className="text-gray-700 text-sm">Le panier est vide, veillez selectionner des produits</p>
                                    </div>
                            }


                            <div className='flex justify-between items-center'>
                                <div className=' text-lg'>
                                    Solde Totale
                                </div>
                                <div className='text-4xl flex items-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                                    {total.toString()} <small className='text-xs ml-1 text-gray-500'>$</small>
                                </div>
                            </div>
                            {
                                cart.length > 0 ?
                                    <div className='flex justify-between'>
                                        <button className='text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium px-5 py-2 text-sm rounded-md mt-3 flex w-full justify-center' onClick={handleSubmit}>Valider le panier</button>
                                    </div>
                                    : ""
                            }

                        </div>
                    </div>
                    <div>
                        <div className='text-center mt-5 texx-2xl text-gray-600'>
                            Autres articles
                        </div>
                        <div className='grid gap-4 grid-cols-2 mt-4 sm:grid-cols-3'>
                            {
                                produits?.slice(1, 7).map((produit: any, index) => (
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
                    </div>
                </div>
            </section>
        </main>
    )
}
