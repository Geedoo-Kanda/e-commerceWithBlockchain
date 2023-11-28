const UserRepository = artifacts.require("UserRepository");
const ProduitRepository = artifacts.require("ProduitRepository");

module.exports = function(deployer) {
   deployer.deploy(UserRepository);
   deployer.deploy(ProduitRepository);
};