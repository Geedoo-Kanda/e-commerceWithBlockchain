import Web3 from 'web3';
import OrderRepositoryContract from './build/contracts/OrderRepository.json';

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
        const deployedNetwork = OrderRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            OrderRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

const initAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

const placeNewOrder = async (contract, newOrder, accounts) => {
    if (contract) {
        await contract.methods.placeOrder(
            newOrder.buyer,
            newOrder.productReference,
            newOrder.quantity,
            newOrder.price,
            newOrder.balance,
            newOrder.orderDate,
            newOrder.delivered
        ).send({ from: accounts[0] });
    }
};

const getOrderById = async (contract, orderId) => {
    if (orderId !== null && contract) {
        return contract.methods.getOrderById(orderId).call();
    }
};

const listAllOrders = async (contract) => {
    if (contract) {
        return contract.methods.listOrders().call();
    }
};

export {
    initWeb3,
    initContract,
    initAccounts,
    placeNewOrder,
    getOrderById,
    listAllOrders,
};
