"use client"


// Import des modules nécessaires
import React, { useEffect, useState } from 'react';
import { initProduitWeb3, initProduitContract, initProduitAccounts, createNewProduct} from '../../../funcs/ProduitRepository';

interface FormProduit {
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;
    compte: string;
}
const AddProduit: React.FC = () => {
    const [contractProduit, setContractProduit] = useState<any | null>(null);
    const [accountsProduit, setAccountsProduit] = useState<string[]>([]);

    useEffect(() => {
        const initBlockchain = async () => {
            const web3ProduitInstance = await initProduitWeb3();
            const contractProduitInstance = await initProduitContract(web3ProduitInstance);
            const accountsListProduit = await initProduitAccounts(web3ProduitInstance);

            setContractProduit(contractProduitInstance);
            setAccountsProduit(accountsListProduit);


            formProduit.compte = accountsListProduit[0]
        };
        initBlockchain();
    }, []);

    const [formProduit, setFormProduit] = useState<FormProduit>({
        name: '',
        price: '',
        description: '',
        category: '',
        image: '',
        compte: ''
    });
    // Gérer le changement des champs du formulaire
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEventHandler<HTMLSelectElement> | any): void => {
        const { name, value } = e.target;
        setFormProduit((prevState) => ({ ...prevState, [name]: value }));
    };
    // Gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();


        await createNewProduct(contractProduit, formProduit, accountsProduit);

        setFormProduit({
            name: '',
            price: '',
            description: '',
            category: '',
            image: '',
            compte: accountsProduit[0]
        });
    }
    return (
        <form className="w-full bg-white max-w-3xl py-6 px-3 rounded-md" onSubmit={handleSubmit}>
            <h2 className='text-violet-500 text-2xl font-semibold text-center mb-3'>Ajouter un nouveau produit</h2>
            <div className='grid grid-cols-2 gap-3 px-4'>
                <div>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="name">Nom du produit</label>
                    <input
                        type="text"
                        name="name"
                        value={formProduit.name}
                        onChange={handleInputChange}
                        className='border block py-1 rounded-md px-1 border-gray-400 w-full'
                    />
                </div>
                <div>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="price">Prix du produit</label>
                    <input
                        type="number"
                        name="price"
                        value={formProduit.price}
                        onChange={handleInputChange}
                        className='border block py-1 rounded-md px-1 border-gray-400 w-full'
                    />
                </div>
                <div>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="image">Lien de l'image</label>
                    <input
                        type="text"
                        name="image"
                        value={formProduit.image}
                        onChange={handleInputChange}
                        className='border block py-1 rounded-md px-1 border-gray-400 w-full'
                    />
                </div>

                <div>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="category">Category produit</label>
                    <select
                        name="category"
                        value={formProduit.category}
                        onChange={handleInputChange}
                        className='border block py-2 bg-white rounded-md px-1 border-gray-400 w-full'
                    >
                        <option className='p-2 my-1 text-gray-700 text-md' value="">Sélectionnez</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Running (Course)">Running (Course)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Basketball (Basketball)">Basketball (Basketball)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Football (Football)">Football (Football)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Training (Entraînement)">Training (Entraînement)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Skateboarding (Skate)">Skateboarding (Skate)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Golf (Golf)">Golf (Golf)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Tennis (Tennis)">Tennis (Tennis)</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Air Max">Air Max</option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="Air Force 1">Air Force 1 </option>
                        <option className='p-2 my-1 text-gray-700 text-md' value="SB Dunk">SB Dunk</option>
                    </select>
                </div>
                <div className='col-span-full'>
                    <label className='text-sm text-gray-700 font-semibold' htmlFor="description">Description</label>
                    <textarea name="description" id="" cols={30} rows={4} value={formProduit.description}
                        onChange={handleInputChange} className='border block py-1 rounded-md px-1 border-gray-400 w-full'></textarea>
                </div>
            </div>
            <div className='flex justify-between'>
                <button className='text-white bg-violet-500 font-medium px-5 py-2 text-sm rounded-md mt-3 flex w-full justify-center' type="submit">Enregistrer</button>
            </div>

        </form>
    );
};

export default AddProduit;

