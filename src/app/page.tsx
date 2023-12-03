import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative h-[90vh] bg-cover bg-center w-full bg-fixed max-h-[600px]" style={{ backgroundImage: "url('/home.jpg');" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 grid md:grid-cols-2 items-center ">
          <div className="text-white px-5">
            <div className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                RDCryptoMarket
              </span>
            </div>
            <p className="text-lg">Plongez dans une expérience unique révélant la beauté culturelle du Congo où la technologie rencontre la confiance, redéfinissant le commerce en ligne.</p>
          </div>
          <div className='flex items-end  justify-center h-full'>
            <div className='bg-white flex items-center justify-center w-2/3 h-5/6 rounded-t-md'>
              <div className='flex flex-col items-center'>
                <img src="/home1.png" alt="" className='h-56 md:h-72 w-auto' />
                <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-md w-full justify-center py-2 text-white rounded-md mt-3 md:mt-16 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='mr-3' width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M15.53 12.53a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H6a.75.75 0 0 0 0 1.5h7.19l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5Z" /><path fill="currentColor" fill-rule="evenodd" d="M13.945 1.25h1.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.869-.805-1.402c-.951-.001-1.744-.012-2.386-.098c-.764-.103-1.426-.325-1.955-.854c-.529-.529-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79c.103-.763.325-1.425.854-1.954c.529-.529 1.19-.751 1.955-.854c.642-.086 1.435-.097 2.386-.098c.157-.533.406-1.002.805-1.402c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117ZM7.25 16.055c0 1.05 0 1.943.053 2.694c-.835-.003-1.455-.018-1.946-.084c-.598-.08-.89-.224-1.094-.428c-.204-.203-.348-.496-.428-1.094c-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643c.08-.598.224-.89.428-1.094c.203-.204.496-.348 1.094-.428c.491-.066 1.111-.08 1.946-.084C7.25 6 7.25 6.895 7.25 7.945V8a.75.75 0 1 0 1.5 0c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v8c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-1c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191a.75.75 0 0 0-1.5 0v.055Z" clip-rule="evenodd" /></svg>
                  Se connecter</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section className='my-5 mt-12 container px-8 md:px-0 md:mx-auto'>
        <div className='grid lg:grid-cols-3 gap-5'>
          <div className='bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 448 512"><path fill="currentColor" d="M166.837 8.01c-9.87-.173-19.5 1.902-28.958 7.65l.009-.026c-4.663 2.837-9.57 6.947-14.223 7.941C108.44 26.837 95.6 35.512 81.107 40.12c-6.894 2.187-10.21 6.407-10.003 13.554c-2.828 5.123-7.292 8.33-12.479 10.78c-4.595 2.162-8.973 4.632-10.341 10.085c-.022.018-.045.034-.067.053C42.813 80.89 37.13 86.97 31.619 96.385l168.968-55.451c-7.31-6.949-14.9-12.83-6.452-23.493c-7.577.515-12.934 4.91-19.317 3.923c3.622-5.39 11.373-4.249 15.514-9.544c-7.997-2.182-15.819-3.676-23.495-3.81zm90.675 33.646c-7.12.442-13.97 1.004-19.879 6.118c-7.02 6.036-14.91 7.751-22.87 1.038c-6.008-5.07-11.863-4.11-18.676-.812c-15.732 7.635-31.869 14.457-47.826 21.604a125887.23 125887.23 0 0 0-111.023 50.03c-11.828 3.868-12.352 4.943-9.632 16.725c1.988 8.602 5.575 17.657-4.518 24.072a6.244 6.244 0 0 0-3.667 5.77c-.01.006-.019.009-.029.013c-2.62 9.154-.423 18.053 1.24 27.044c1.057 5.692 3.704 5.475 8.077 3.397c9.894-4.716 19.933-9.135 29.962-13.553c31.71-13.94 63.426-27.87 95.147-41.79a10.129 10.129 0 0 0 2.647-.242c-1.03.544-1.982 1.19-2.502 2.402l-32.529 19.065l-48.983 24.955c-14.033 2.422-26.204 10.003-39.505 14.304c-8.232 2.656-6.596 5.522-.985 9.217c5.25 6.325 12.985 7.888 20.24 10.346c.01-.006.02-.01.03-.017c5.622 2.636 11.21 5.36 16.895 7.868c5.286 2.35 10.2 3.162 13.417-3.542c1.808-3.804 5.097-4.356 9.036-2.548c6.138 2.86 12.636 2.945 19.206 1.81l-.006.006c.014.001.028 0 .04.002l.033.027l.046-.021c2.49.217 4.949.249 7.11-1.334c2.973 0 5.972-.235 8.909.063c13.987 1.428 28.552-3.326 42.024 4.12c2.558 1.409 4.943-1.382 7.229-2.547a17892.373 17892.373 0 0 0 72.737-37.437c32.167-16.577 64.324-33.151 96.467-49.723c2.756-1.427 9.035-2.05 3.56-7.625v-.046c-3.754-7.561-7.118-15.266-8.45-23.69c.01-.01.018-.02.026-.03c-.425-6.279-2.566-12.034-5.277-17.654c-2.35-4.816-4.996-6.155-10.481-3.715c-12.695 5.656-25.717 10.817-38.728 15.47c-13.012 4.654-25.093 11.963-39.08 13.86c-.014-.002-.028-.002-.042-.005l.007-.004c-.127-2.142 1.806-1.898 2.972-2.548L318.9 73.67c.253-6.443-2.06-12.235-4.518-17.982a.042.042 0 0 1-.015.007l.003-.007c-3.307-8.376-9.107-10.826-17.492-7.474a52.037 52.037 0 0 1-17.892 3.923v-.019l-.044.016l-4.78-.386c-6.723-1.437-10.951-6.976-16.653-10.093zm101.581 109.007c-1.563.094-3.33.75-5.414 1.844c-25.445 13.346-51.116 26.256-76.714 39.295c-30.08 15.36-60.206 30.559-90.177 46.082c-1.888.967-7.19.76-4.66 5.485c3.304 6.15 2.303 12.651 2.473 19.099c-.003 0-.006.003-.009.004v.026c-.072 3.16-.137 6.316-.197 9.47a33.432 33.432 0 0 0 5.421 14.124l.032.007l-.023.01l3.659 4.871l8.575 10.734c1.464 9.984 6.55 10.092 15.135 7.156c31.119-10.662 62.546-20.457 93.855-30.577l1.807 1.862a13.228 13.228 0 0 0 .025-.004l-34.125 16.15c-5.684 1.518-10.843 4.175-15.949 7.057a4.093 4.093 0 0 0-3.866 1.807a327.662 327.662 0 0 0-39.532 17.764a.904.904 0 0 0-1.184.397a13.048 13.048 0 0 0-7.382 3.334c-4.744 1.066-10.076 2.612-9.823 8.268c.632 14.14-4.274 26.997-7.924 40.188l-.009.003a11.015 11.015 0 0 0 1.112 12.56c2.783 3.334 6.478-.597 9.532-1.708a32126.206 32126.206 0 0 0 138.935-50.736c6.117-2.241 13.967-3.235 17.681-7.617c3.994-4.726-1.41-12.343-.994-18.822c.522-2.78 1.053-5.56 1.575-8.35c.002-.004.003-.006.008-.008c2.783-8.556 9.596-14.855 13.075-23.023l15.867-22.046c3.37-7.228 11.637-9.506 16.028-15.713l-.205.07l.16-.088c9.442-5.792 13.48-15.605 20.13-25.815l-42.936 13.191c-2.432.16-4.826.517-7.199.976a11.1 11.1 0 0 0 3.251-2.846c2.639-1.265 5.304-2.502 7.924-3.812c13.825-6.903 28.996-10.925 42.007-19.563a1.581 1.581 0 0 1-.903-.515c.298.162.596.325.903.515c1.256-3.768.786-7.6.073-11.332l.026.055c-1.012-5.286-3.334-7.997-9.035-4.184a28.499 28.499 0 0 1-12.135 4.98a46.182 46.182 0 0 1-.034.021a.14.14 0 0 1 .008-.04c-7.924-.597-16.102-.442-21.541-7.878h.026c-2.548-3.497-5.258-.977-7.842.053a46052.414 46052.414 0 0 0-59.899 24.117c-1.498.139-2.93.48-4.333.923c.857-.83 1.609-1.764 2.12-2.938a13397.233 13397.233 0 0 0 43.262-22.535c6.28-3.289 16.545-5.656 17.738-10.3c1.554-6.019-8.196-10.962-11.747-17.287c-1.987-3.518-4.025-4.918-6.63-4.761zm2.614 185.677c-.869-.058-1.986.193-3.42.783a35619.937 35619.937 0 0 1-151.43 62.094c-3.858 1.609-4.69 3.018-2.71 7.03c4.824 9.757 9.26 19.722 11.746 30.41a14.114 14.114 0 0 1-.018.003h.018v.012c.298 2.936 1.012 5.91.822 8.82c-.452 6.732.768 8.8 8.087 5.547c33.486-14.91 67.334-28.987 100.811-43.905c14.25-6.352 23.954-17.637 29.908-32.094a21.939 21.939 0 0 0-.034.003c.008-.003.011-.007.019-.015c8.638-9.885 9.985-21.703 9.036-34.118c-.218-2.82-.922-4.445-2.833-4.571zm55.596 18.477c-4.025.03-6.658 4.19-8.524 7.913c-1.668 3.317-2.876 6.868-4.29 10.32l-.012.011c-2.475 5.105-4.455 9.667-12.307 8.42c-5.521-.877-13.093 3.506-12.56 8.737c1.102 10.924-6.207 20.277-3.966 30.939c.862.791 1.701 1.09 2.527 1.112c-.997.604-1.928 1.327-2.717 2.304c-1.392 5.304-2.91 10.59-1.437 16.146c.008 0 .015-.003.027-.003c4.302 9.476 7.533 10.682 16.829 8.028c11.26-3.23 11.214-12.821 13.077-21.477c1.706-4.434 2.96-8.914 2.446-14.196l-16.265 4.933l-.01.045c-1.279.48-2.74.116-4.023.648c.83-.661 1.567-1.436 2.125-2.428c2.765-1.618 5.393-3.577 8.33-4.806c20.357-8.466 23.656-26.312 25.183-45.178c.09-4.04 2.891-9.678-2.62-11.214a6.52 6.52 0 0 0-1.813-.252zM325.55 413.99c-34.255 17.683-66.981 34.942-100.106 51.396c-8.512 4.238-10.012 8.846-5.63 16.482c1.86 6.9 6.7 11.243 12.641 14.658v.008l.006-.002c.001 0 .003 0 .004.002l.018.003c2.203 2.957 5.308 4.11 8.81 4.488c12.406 7.319 27.215.713 34.037-15.19c8.675-4.915 17.295-10.029 26.042-14.854c5.617-3.098 9.575-6.928 8.243-13.979c.003-.003.003-.008.007-.011c1.672-4.635 7.654-5.792 8.792-10.843c-1.02-10.906 8.176-19.879 7.146-32.14z" /></svg>
            </div>
            <div className='text-xl font-bold'>
              Redécouvrez la beauté culturelle du Congo à chaque clic
            </div>
          </div>
          <div className='bg-purple-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 48 48"><circle cx="24" cy="26.158" r="8.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><circle cx="24" cy="9.597" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.108 18.85c.01-.082.01-.165.01-.248v-2.37h7.764v2.37c0 .083 0 .166.01.249m.766-9.254a5.177 5.177 0 0 1 5.175 5.176v3.83a2.971 2.971 0 0 1-2.94 2.98m-13.786 0a2.98 2.98 0 0 1-2.94-2.98v-3.83a5.177 5.177 0 0 1 5.175-5.176" /><circle cx="9.658" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.617 33.183a1.84 1.84 0 0 0-.22.115l-2.053 1.185l-3.881-6.723l2.053-1.185c.071-.042.143-.083.21-.133m-8.397 3.963a5.177 5.177 0 0 1 1.894-7.07l3.317-1.915a2.972 2.972 0 0 1 4.051 1.056m6.894 11.94a2.98 2.98 0 0 1-1.112 4.036l-3.317 1.915a5.177 5.177 0 0 1-7.07-1.894" /><circle cx="38.342" cy="34.439" r="4.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.274 26.442c.067.05.139.091.21.133l2.053 1.185l-3.881 6.723l-2.053-1.185a2.005 2.005 0 0 0-.22-.116m7.63 5.291a5.177 5.177 0 0 1-7.07 1.894l-3.316-1.915a2.971 2.971 0 0 1-1.112-4.036m6.894-11.94a2.98 2.98 0 0 1 4.051-1.055l3.317 1.914a5.177 5.177 0 0 1 1.894 7.07m-15.566.253v-9l-4.83 6.046h5.962" /></svg>
            </div>
            <div className='text-xl font-bold'>
              Profitez de notre réseau de collaborateurs professionnels
            </div>
          </div>
          <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white rounded-md flex items-center justify-between gap-4'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8L9 9.75v3.5L12 15l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L12 9.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM3 0L0 1.75v3.5L3 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 1.155ZM.99 2.921l1.484.866v1.75L.99 4.674Zm2.474 2.653V3.808l1.546-.902v1.767ZM3 17l-3 1.75v3.5L3 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L3 18.155Zm-3.527.882l1.484.866v1.75L.99 21.674Zm2.474 2.653v-1.767l1.546-.902v1.767ZM21 0l-3 1.75v3.5L21 7l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885L21 1.155Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653V3.808l1.546-.902v1.767ZM21 17l-3 1.75v3.5L21 24l3-1.75v-3.5Zm1.517 2.04l-1.53.892l-1.517-.885l1.53-.892Zm-3.527.882l1.484.866v1.75l-1.484-.865Zm2.474 2.653v-1.767l1.546-.902v1.767ZM9 3h6v1H9zm0 17h6v1H9zM3.5 9v6h-1V9zm3.793-.172L5.172 6.707L5.879 6L8 8.12zM16 8.293l2.121-2.121l.707.707L16.707 9zm-7.872 6.586L6.007 17l-.707-.707l2.121-2.121zm8.751-.75L19 16.25l-.707.707l-2.121-2.121zM21.5 9v6h-1V9z" /></svg>    </div>
            <div className='text-xl font-bold'>
              Plongez dans une expérience unique où la technologie rencontre la confiance
            </div>
          </div>
        </div>
        <div className='grid gap-4 grid-cols-2 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
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
