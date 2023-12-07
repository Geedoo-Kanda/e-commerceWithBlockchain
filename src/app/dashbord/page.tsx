import Image from 'next/image'
import Bar from '../components/Bar'
import Donut from '../components/Donut'

export default function Dashbord() {
    return (
        <main className="min-h-screen mt-5">
            <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-4'>
                <div className='bg-white shadow-md shadow-pink-100 rounded-sm p-4'>
                    <div className='flex items-center'>
                        <span className='text-blue-500 text-3xl p-2 rounded-md font-semibold'>
                            2548
                        </span>
                        <span className='text-green-700 p-1 rounded-md relative text-[9px] bg-green-100'>
                            +14%
                        </span>
                    </div>
                    <div className='text-sm text-end text-gray-600'>
                        Total de produits vendus
                    </div>
                </div>
                <div className='bg-white shadow-purple-200 shadow-md rounded-sm p-4'>
                    <div className='flex items-center'>
                        <span className='text-blue-500 text-3xl p-2 rounded-md font-semibold'>
                            1.000.152$
                        </span>
                        <span className='text-red-700 p-1 rounded-md relative text-[9px] g-red-100'>
                            -5%
                        </span>
                    </div>
                    <div className='text-sm text-end text-gray-600'>
                        Total de ventes
                    </div>
                </div>
                <div className='bg-white shadow-md rounded-sm p-4 shadow-pink-100'>
                    <div className='flex items-center'>
                        <span className='text-blue-500 text-3xl p-2 rounded-md font-semibold'>
                            1425
                        </span>
                        <span className='text-green-700 p-1 rounded-md relative text-[9px] bg-green-100'>
                            +14%
                        </span>
                    </div>
                    <div className='text-sm text-end text-gray-600'>
                        Total de Livraison effectuées
                    </div>
                </div>
                <div className='bg-white shadow-purple-200 shadow-md rounded-sm p-4'>
                    <div className='flex items-center'>
                        <span className='text-blue-500 text-3xl p-2 rounded-md font-semibold'>
                            53
                        </span>
                        <span className='text-yellow-700 p-1 rounded-md relative text-[9px] bg-yellow-100'>
                            +0%
                        </span>
                    </div>
                    <div className='text-sm text-end text-gray-600'>
                        Total des utilisateurs
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4 mt-8'>
                <div className='col-span-3 bg-white shadow-md shadow-pink-100 p-3 rounded-sm'>
                    <Bar />
                </div>
                <div className='col-span-2 bg-white shadow-md shadow-purple-200 flex justify-center items-center p-3 rounded-sm'>
                <Donut />
                </div>
            </div>
        </main>
    )
}
