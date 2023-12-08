// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract ProductRepository {
    struct Product {
        uint id;
        string name;
        uint price;
        string description;
        string category;
        string image;
    }

    mapping(uint => Product) public products;
    uint public nextId = 1;

    event ProductCreated(
        uint indexed id,
        string name,
        uint price,
        string description,
        string category,
        string image
    );

    function createProduct(
        string memory _name,
        uint _price,
        string memory _description,
        string memory _category,
        string memory _image
    ) public {
        Product memory newProduct = Product({
            id: nextId,
            name: _name,
            price: _price,
            description: _description,
            category: _category,
            image: _image
        });
        products[nextId] = newProduct;

        emit ProductCreated(
            nextId,
            _name,
            _price,
            _description,
            _category,
            _image
        );

        nextId++;
    }

    function getProductById(uint _id) public view returns (Product memory) {
        return products[_id];
    }

    function listProducts() public view returns (Product[] memory) {
        Product[] memory productList = new Product[](nextId);

        for (uint i = 0; i < nextId; i++) {
            productList[i] = products[i];
        }

        return productList;
    }
}
