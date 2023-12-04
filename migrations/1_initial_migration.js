const UserRepository = artifacts.require("UserRepository");
const ProductRepository = artifacts.require("ProductRepository");
const OrderRepository = artifacts.require("OrderRepository");
const DeliveryRepository = artifacts.require("DeliveryRepository");

module.exports = function(deployer) {
   deployer.deploy(UserRepository);
   deployer.deploy(ProductRepository);
   deployer.deploy(OrderRepository);
   deployer.deploy(DeliveryRepository);
};