const UserRepository = artifacts.require("UserRepository");

module.exports = function(deployer) {
   deployer.deploy(UserRepository);
};