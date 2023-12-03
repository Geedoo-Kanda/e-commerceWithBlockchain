import Image from 'next/image'

export default function Commandes() {
    return (
        <main className="min-h-screen pt-20">

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
        </main>
    )
}
