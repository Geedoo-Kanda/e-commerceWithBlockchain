import Web3 from 'web3';
import OrderRepositoryContract from '../../../build/contracts/OrderRepository.json';

// Initialiser Web3
const initOrderWeb3 = async () => {
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
const initOrderContract = async (web3) => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = OrderRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            OrderRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

// Initialiser les comptes
const initOrderAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

// Placer une nouvelle commande
const placeNewOrder = async (contract, newOrder, accounts) => {
    if (contract) {
        const { orderReference, orderDate, totalPrice, delivered, productIds, quantities, unitPrices } = newOrder;
        const web3 = new Web3(window.ethereum);
        const totalPriceInWei = web3.utils.toWei(totalPrice.toString(), 'ether');
        await contract.methods.placeOrder(
            orderReference,
            orderDate,
            totalPriceInWei,
            delivered,
            productIds,
            quantities,
            unitPrices
        ).send({ from: accounts[0], value: totalPriceInWei });
    }
};

// Obtenir une commande par son ID
const getOrderById = async (contract, orderId) => {
    if (orderId !== null && contract) {
        return contract.methods.getOrderById(orderId).call();
    }
};

// Obtenir la liste de toutes les commandes
const listAllOrders = async (contract) => {
    if (contract) {
        return contract.methods.listOrders().call();
    }
};

export {
    initOrderWeb3,
    initOrderContract,
    initOrderAccounts,
    placeNewOrder,
    getOrderById,
    listAllOrders,
};
