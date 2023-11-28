const UserRepository = artifacts.require("UserRepository");
const ProduitRepository = artifacts.require("ProduitRepository");
const OrderRepository = artifacts.require("OrderRepository");
const DeliveryRepository = artifacts.require("DeliveryRepository");

module.exports = function(deployer) {
   deployer.deploy(UserRepository);
   deployer.deploy(ProduitRepository);
   deployer.deploy(OrderRepository);
   deployer.deploy(DeliveryRepository);
};