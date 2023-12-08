const UserRepository = artifacts.require("UserRepository");
const ProductRepository = artifacts.require("ProductRepository");
const OrderRepository = artifacts.require("OrderRepository");
const OrderProductRepository = artifacts.require("OrderProductRepository");
const DeliveryRepository = artifacts.require("DeliveryRepository");

module.exports = async function(deployer) {
   await deployer.deploy(UserRepository);

   await deployer.deploy(ProductRepository);
   
   // Déployer OrderProductRepository avant OrderRepository
   await deployer.deploy(OrderProductRepository);
   
   // Récupérer l'instance déployée de OrderProductRepository
   const orderProductRepository = await OrderProductRepository.deployed();

   // Déployer OrderRepository en passant l'adresse de OrderProductRepository
   await deployer.deploy(OrderRepository, orderProductRepository.address);

   await deployer.deploy(DeliveryRepository);
};
