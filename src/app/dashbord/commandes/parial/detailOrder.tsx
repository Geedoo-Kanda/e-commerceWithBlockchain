// Import des modules nécessaires
import React, { useEffect, useState } from 'react';
import { initOrderProductWeb3, initOrderProductContract, initOrderProductAccounts, listAllOrderProducts } from '../../../funcs/OrderProductRepository';
import { initProduitWeb3, initProduitContract, initProduitAccounts, listAllProducts } from '../../../funcs/ProduitRepository';

interface DetailOrderProps {
    id: any;
}

const DetailOrder: React.FC<DetailOrderProps> = ({ id }) => {

    const [orderProducts, setOrderProducts] = useState<any>();
    const [products, setProducts] = useState<any>();
    const [modal, setmodal] = useState<any>(false);

    useEffect(() => {
        const initBlockchain = async () => {

            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            if (accounts.length > 0) {

                const web3OrderProductInstance = await initOrderProductWeb3();
                const contractOrderProductInstance = await initOrderProductContract(web3OrderProductInstance);
                const tabOrderProducts = await listAllOrderProducts(contractOrderProductInstance);
                const OrderProduct = tabOrderProducts.filter((x: { orderId: any; }) => x.orderId == id);
                setOrderProducts(OrderProduct);


                const web3ProductInstance = await initProduitWeb3();
                const contractProductInstance = await initProduitContract(web3ProductInstance);
                const tabProducts = await listAllProducts(contractProductInstance);
                setProducts(tabProducts);

            } else {
                window.location.href = "/"
            }

        };
        initBlockchain();
    }, [id]);


    return (
        <div className="w-full bg-white max-w-3xl py-6 px-3 rounded-md">
            <h2 className='bg-clip-text text-transparent text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold text-center mb-3'>Détail de la commende</h2>
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
                                        Photo
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                        Nom
                                    </th>

                                    <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                        Prix
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                        Quantité
                                    </th>
                                    <th scope="col" className="px-3 py-2 text-xs text-center text-white font-bold whitespace-nowrap">
                                        Total
                                    </th>


                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    orderProducts?.map((order: any, index: any) => (
                                        products?.filter((x: { id: any; }) => x.id == order.productId)
                                            .map((product: any) => (
                                                <tr key={index}>
                                                    <td className="py-2 px-3 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                                                        {index + 1}
                                                    </td>
                                                    <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase">
                                                        <img src={product.image} alt="" className='w-24 h-auto' />
                                                    </td>
                                                    <td className="py-2 px-3 text-sm text-gray-700 whitespace-nowrap text-center uppercase font-medium">
                                                        <p>{product.name}</p>
                                                        <small>{product.category}</small>
                                                    </td>
                                                    <td className="py-2 px-3 text-md text-gray-700 whitespace-nowrap text-center"> {product.price.toString()} $</td>
                                                    <td className="py-2 px-3 text-md text-gray-700 whitespace-nowrap text-center">{order.quantity.toString()}</td>
                                                    <td className="py-2 px-3 text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap text-center">
                                                        {product.price.toString() * order.quantity.toString()} <span className='font-normal text-xs text-gray-600'>$</span>
                                                    </td>


                                                </tr>
                                            ))
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailOrder;

