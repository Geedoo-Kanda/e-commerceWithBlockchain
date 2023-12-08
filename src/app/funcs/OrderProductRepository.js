import Web3 from 'web3';
import OrderProductRepositoryContract from '../../../build/contracts/OrderProductRepository.json';

// Initialiser Web3
const initOrderProductWeb3 = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            return new Web3(window.ethereum);
        } catch (error) {
            console.error('Erreur lors de l\'activation de MetaMask :', error);
        }
    } else if (window.web3) {
        return new Web3(window.web3.currentProvider);
    } else {
        console.error('Aucun fournisseur Web3 détecté. Veuillez utiliser MetaMask ou Mist.');
    }
};

// Initialiser le contrat
const initOrderProductContract = async (web3) => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = OrderProductRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            OrderProductRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

// Initialiser les comptes
const initOrderProductAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

// Ajouter un nouvel OrderProduct
const addNewOrderProduct = async (contract, newOrderProduct, accounts) => {
    if (contract) {
        const { orderId, productId, quantity, unitPrice } = newOrderProduct;

        await contract.methods.addOrderProduct(
            orderId,
            productId,
            quantity,
            unitPrice
        ).send({ from: accounts[0] });
    }
};

// Obtenir la liste de tous les OrderProducts
const listAllOrderProducts = async (contract) => {
    if (contract) {
        return contract.methods.listOrderProducts().call();
    }
};

// Obtenir les détails d'un OrderProduct spécifique
const getOrderProductDetails = async (contract, orderProductId) => {
    if (orderProductId !== null && contract) {
        return contract.methods.getOrderProductDetails(orderProductId).call();
    }
};

export {
    initOrderProductWeb3,
    initOrderProductContract,
    initOrderProductAccounts,
    addNewOrderProduct,
    listAllOrderProducts,
    getOrderProductDetails,
};
