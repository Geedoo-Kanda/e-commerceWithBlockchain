import Web3 from 'web3';
import DeliveryRepositoryContract from '../../../build/contracts/DeliveryRepository.json';

const initDeliveryWeb3 = async () => {
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

const initDeliveryContract = async (web3) => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = DeliveryRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            DeliveryRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

const initDeliveryAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

const makeNewDelivery = async (contract, newDelivery, accounts) => {
    if (contract) {
        await contract.methods.makeDelivery(
            newDelivery.deliveryPerson,
            newDelivery.orderReference,
            newDelivery.deliveryDate,
            newDelivery.observations
        ).send({ from: accounts[0] });
    }
};

const getDeliveryById = async (contract, deliveryId) => {
    if (deliveryId !== null && contract) {
        return contract.methods.getDeliveryById(deliveryId).call();
    }
};

const listAllDeliveries = async (contract) => {
    if (contract) {
        return contract.methods.listDeliveries().call();
    }
};

export {
    initDeliveryWeb3,
    initDeliveryContract,
    initDeliveryAccounts,
    makeNewDelivery,
    getDeliveryById,
    listAllDeliveries,
};
