import Web3 from 'web3';
import UserRepositoryContract from '../../../build/contracts/UserRepository.json';

const initUserWeb3 = async () => {
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

const initUserContract = async (web3) => {
    if (web3) {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = UserRepositoryContract.networks[networkId];
        return new web3.eth.Contract(
            UserRepositoryContract.abi,
            deployedNetwork && deployedNetwork.address
        );
    }
};

const initUserAccounts = async (web3) => {
    if (web3) {
        return web3.eth.getAccounts();
    }
};

const createNewUser = async (contract, newUser, accounts) => {
    if (contract) {
        await contract.methods.createUser(
            newUser.nom,
            newUser.postnom,
            newUser.prenom,
            newUser.email,
            newUser.telephone,
            newUser.adresse,
            newUser.photoProfil,
            newUser.role,
            newUser.biographie,
            newUser.password
        ).send({ from: accounts[0] });
    }
};

const getUserById = async (contract, userId) => {
    if (userId !== null && contract) {
        return contract.methods.getAgentById(userId).call();
    }
};

const listAllUsers = async (contract) => {
    if (contract) {
        return contract.methods.listUsers().call();
    }
};

const compareUserPasswords = async (contract, userId, inputPassword) => {
    if (userId !== null && contract) {
        return contract.methods.comparePasswords(userId, inputPassword).call();
    }
};

export {
    initUserWeb3,
    initUserContract,
    initUserAccounts,
    createNewUser,
    getUserById,
    listAllUsers,
    compareUserPasswords,
};
