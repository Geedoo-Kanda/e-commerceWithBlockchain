// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract OrderRepository {
    struct Order {
        uint id;
        address buyer; // Mettre 'payable' pour accepter les paiements
        string orderReference;
        string products;
        uint quantity;
        uint price;
        uint balance;
        string orderDate;
        bool delivered;
    }

    mapping(uint => Order) public orders;
    uint public nextId = 1;

    event OrderPlaced(
        uint indexed id,
        address buyer,
        string orderReference,
        string products,
        uint quantity,
        uint price,
        uint balance,
        string orderDate,
        bool delivered
    );

    function placeOrder(
        string memory _orderReference,
        string memory _products,
        uint _quantity,
        uint _price,
        uint _balance,
        string memory _orderDate,
        bool _delivered
    ) public payable {
        require(msg.value == _balance);

        Order memory newOrder = Order(
            nextId,
            msg.sender,
            _orderReference,
            _products,
            _quantity,
            _price,
            _balance,
            _orderDate,
            _delivered
        );
        orders[nextId] = newOrder;

        emit OrderPlaced(
            nextId,
            msg.sender,
            _orderReference,
            _products,
            _quantity,
            _price,
            _balance,
            _orderDate,
            _delivered
        );

        nextId++;
    }

    function getOrderById(uint _id) public view returns (Order memory) {
        return orders[_id];
    }

    function listOrders() public view returns (Order[] memory) {
        Order[] memory orderList = new Order[](nextId);

        for (uint i = 0; i < nextId; i++) {
            orderList[i] = orders[i];
        }

        return orderList;
    }
}
