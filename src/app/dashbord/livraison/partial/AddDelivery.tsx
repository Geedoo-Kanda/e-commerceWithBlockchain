"use client"


// Import des modules nécessaires
import React, { useEffect, useState } from 'react';
import { initDeliveryWeb3, initDeliveryContract, initDeliveryAccounts, makeNewDelivery, listAllDeliveries } from '../../../funcs/DeliveryRepository';
import { initOrderWeb3, initOrderContract, initOrderAccounts, listAllOrders } from '../../../funcs/OrderRepository';


interface FormDelivery {
    deliveryPerson: string;
    orderReference: string;
    deliveryDate: string;
    observations: string;
}
const AddDelivery: React.FC = () => {
    const [contractDelivery, setContractDelivery] = useState<any | null>(null);
    const [accountsDelivery, setAccountsDelivery] = useState<string[]>([]);
    const [orders, setOrders] = useState<any>();


    useEffect(() => {
        const initBlockchain = async () => {
            const web3DeliveryInstance = await initDeliveryWeb3();
            const contractDeliveryInstance = await initDeliveryContract(web3DeliveryInstance);
            const accountsListDelivery = await initDeliveryAccounts(web3DeliveryInstance);

            setContractDelivery(contractDeliveryInstance);
            setAccountsDelivery(accountsListDelivery);

            formDelivery.deliveryPerson = accountsListDelivery[0]

            const web3OrderInstance = await initOrderWeb3();
            const contractOrderInstance = await initOrderContract(web3OrderInstance);
            const accountsListOrder = await initOrderAccounts(web3OrderInstance);

            const tabOrders = await listAllOrders(contractOrderInstance);
            setOrders(tabOrders);
        };
        initBlockchain();
    }, []);

    const [formDelivery, setFormDelivery] = useState<FormDelivery>({
        deliveryPerson: accountsDelivery[0],
        orderReference: "",
        deliveryDate: new Date().toISOString(),
        observations: ""
    });
    // Gérer le changement des champs du formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEventHandler<HTMLSelectElement> | any): void => {
        const { name, value } = e.target;
        setFormDelivery((prevState) => ({ ...prevState, [name]: value }));
    };
    // Gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();


        await makeNewDelivery(contractDelivery, formDelivery, accountsDelivery);

        setFormDelivery({
            deliveryPerson: accountsDelivery[0],
            orderReference: "",
            deliveryDate: new Date().toISOString(),
            observations: ""
        });
    }
    return (
        <form className="w-full bg-white max-w-3xl py-6 px-3 rounded-md" onSubmit={handleSubmit}>
            <h2 className='text-violet-500 text-2xl font-semibold text-center mb-3'>Ajouter une nouvelle livraison</h2>
            <div className='gap-3 px-4'>
                <div>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="orderReference">Reference de la commande</label>
                    <select
                        name="orderReference"
                        value={formDelivery.orderReference}
                        onChange={handleInputChange}
                        className='border block py-2 bg-white rounded-md px-1 border-gray-400 w-full'
                    >
                        <option className='p-2 my-1 text-gray-700 text-md' value="">Sélectionnez</option>

                        {
                            orders?.map((order: any, index: any) => (
                                <option className='p-2 my-1 text-gray-700 text-md' value={order.orderReference} key={index}>{order.orderReference}</option>
                            ))
                        }

                    </select>
                </div>
                <div className=''>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="observations">Observations</label>
                    <textarea name="observations" id="" cols={30} rows={4} value={formDelivery.observations}
                        onChange={handleInputChange} className='border block py-1 rounded-md px-1 border-gray-400 w-full'></textarea>
                </div>
            </div>
            <div className='flex justify-between'>
                <button className='text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-medium px-5 py-2 text-sm rounded-md mt-3 flex w-full justify-center' type="submit">Enregistrer</button>
            </div>
        </form>
    );
};

export default AddDelivery;

