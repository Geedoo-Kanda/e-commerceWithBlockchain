// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import "./OrderProductRepository.sol";

contract OrderRepository {
    struct Order {
        uint id;
        address payable buyer;
        string orderReference;
        string orderDate;
        uint totalPrice;
        bool delivered;
    }

    mapping(uint => Order) public orders;
    uint public nextId = 1;

    OrderProductRepository public orderProductRepository;

    event OrderPlaced(
        uint indexed id,
        address payable buyer,
        string orderReference,
        string orderDate,
        uint totalPrice,
        bool delivered
    );

    constructor(OrderProductRepository _orderProductRepository) public {
        orderProductRepository = _orderProductRepository;
    }

    function placeOrder(
        string memory _orderReference,
        string memory _orderDate,
        uint _totalPrice,
        bool _delivered,
        uint[] memory _productIds,
        uint[] memory _quantities,
        uint[] memory _unitPrices
    ) public payable {
        require(msg.value >= _totalPrice, "Insufficient funds sent");

        Order memory newOrder = Order({
            id: nextId,
            buyer: msg.sender,
            orderReference: _orderReference,
            orderDate: _orderDate,
            totalPrice: _totalPrice,
            delivered: _delivered
        });

        orders[nextId] = newOrder;

        emit OrderPlaced(
            nextId,
            msg.sender,
            _orderReference,
            _orderDate,
            _totalPrice,
            _delivered
        );

        // Ajouter les produits à la commande
        for (uint i = 0; i < _productIds.length; i++) {
            orderProductRepository.addOrderProduct(
                nextId,
                _productIds[i],
                _quantities[i],
                _unitPrices[i]
            );
        }

        nextId++;
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getOrderById(uint _id) public view returns (Order memory) {
        return orders[_id];
    }

    function listOrders() public view returns (Order[] memory) {
        Order[] memory orderList = new Order[](nextId - 1);

        for (uint i = 1; i < nextId; i++) {
            orderList[i - 1] = orders[i];
        }

        return orderList;
    }
}
