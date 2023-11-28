// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract UserRepository {
    struct User {
        uint id;
        string nom;
        string postnom;
        string prenom;
        string email;
        string telephone;
        string adresse;
        string photoProfil;
        address compte;
        string role;
        string biographie;
        bytes32 passwordHash;
    }

    mapping(uint => User) public user;
    uint public nextId = 1;

    event UserCreated(
        uint indexed id,
        string nom,
        string postnom,
        string prenom,
        string email,
        string telephone,
        string adresse,
        string photoProfil,
        address compte,
        string role,
        string biographie
    );

    constructor() public {
        createUser(
            "John",
            "Doe",
            "John",
            "john@example.com",
            "+243972062655",
            "123 Main Street",
            "default.jpg",
            "admin",
            "Some bio information",
            "123456789"
        );
    }

    function createUser(
        string memory _nom,
        string memory _postnom,
        string memory _prenom,
        string memory _email,
        string memory _telephone,
        string memory _adresse,
        string memory _photoProfil,
        string memory _role,
        string memory _biographie,
        string memory _password
    ) public {
        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));

        User memory newUser = User(
            nextId,
            _nom,
            _postnom,
            _prenom,
            _email,
            _telephone,
            _adresse,
            _photoProfil,
            msg.sender,
            _role,
            _biographie,
            hashedPassword
        );
        user[nextId] = newUser;

        emit UserCreated(
            nextId,
            _nom,
            _postnom,
            _prenom,
            _email,
            _telephone,
            _adresse,
            _photoProfil,
            msg.sender,
            _role,
            _biographie
        );

        nextId++;
    }

    function getAgentById(
        uint _id
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            address,
            string memory,
            string memory
        )
    {
        User memory selectedUser = user[_id];
        return (
            selectedUser.nom,
            selectedUser.postnom,
            selectedUser.prenom,
            selectedUser.adresse,
            selectedUser.telephone,
            selectedUser.adresse,
            selectedUser.photoProfil,
            selectedUser.compte,
            selectedUser.role,
            selectedUser.biographie
        );
    }

    function listUsers() public view returns (User[] memory) {
        User[] memory UserList = new User[](nextId);

        for (uint i = 0; i < nextId; i++) {
            UserList[i] = user[i];
        }

        return UserList;
    }

    function comparePasswords(
        uint _id,
        string memory _inputPassword
    ) public view returns (bool) {
        return
            keccak256(abi.encodePacked(_inputPassword)) ==
            user[_id].passwordHash;
    }
}
