import Image from 'next/image'

export default function Produits() {
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
                <div className='grid gap-4 grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/1.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/2.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/3.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/4.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/5.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/6.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/7.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/8.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/9.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/10.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl rounded-md'>
                        <div className='overflow-hidden max-h-[200px]'>
                            <button className='text-white p-1.5 absolute z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" /><path d="M9 11V6a3 3 0 0 1 6 0v5" /></g></svg>
                            </button>
                            <img src="/produits/11.jpg" alt="" className='w-full h-auto rounded-t-md min-h-[200px] transition-transform transform hover:scale-110' />

                        </div>
                        <div className='px-4 pt-2 pb-4 justify-between grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h3 className='text-lg font-medium text-gray-800'>Basket  ozbonb onz </h3>
                                <h4 className='text-gray-500 -mt-1 text-xs'>Categorie</h4>
                            </div>
                            <div className='col-sapn-1 flex'>
                                <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>45</h2>
                                <small className='text-xs text-gray-500'>$</small>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}
