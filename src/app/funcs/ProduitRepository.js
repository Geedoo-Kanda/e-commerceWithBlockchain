import Web3 from 'web3';
import ProductRepositoryContract from './build/contracts/ProductRepository.json';

const initWeb3 = async () => {
    if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            return web3Instance;
        } catch (error) {
            console.error('Erreur lors de l\'activation de MetaMask :', error);
        }
    } else if (window.web3) {
        return new Web3(window.web3.currentProvider);
    } else {
        console.error('Aucun fournisseur Web3 détecté. Veuillez utiliser MetaMask ou Mist.');
    }
};

const initContract = async (web3) => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ProductRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            ProductRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

const initAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

const createNewProduct = async (contract, newProduct, accounts) => {
    if (contract) {
        await contract.methods.createProduct(
            newProduct.name,
            newProduct.price,
            newProduct.description,
            newProduct.category,
            newProduct.image
        ).send({ from: accounts[0] });
    }
};

const getProductById = async (contract, productId) => {
    if (productId !== null && contract) {
        return contract.methods.getProductById(productId).call();
    }
};

const listAllProducts = async (contract) => {
    if (contract) {
        return contract.methods.listProducts().call();
    }
};

export {
    initWeb3,
    initContract,
    initAccounts,
    createNewProduct,
    getProductById,
    listAllProducts,
};
