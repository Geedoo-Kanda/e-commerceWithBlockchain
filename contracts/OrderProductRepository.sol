// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract OrderProductRepository {
    struct OrderProduct {
        uint id;
        uint orderId;
        uint productId;
        uint quantity;
        uint unitPrice;
    }

    mapping(uint => OrderProduct) public orderProducts;
    uint public nextId = 1;


    event OrderProductAdded(
        uint indexed id,
        uint orderId,
        uint productId,
        uint quantity,
        uint unitPrice
    );

    function addOrderProduct(
        uint _orderId,
        uint _productId,
        uint _quantity,
        uint _unitPrice
    ) public {
        require(_orderId > 0 && _productId > 0, "Invalid order or product ID");
        require(_quantity > 0, "Invalid quantity");

        OrderProduct memory newOrderProduct = OrderProduct({
            id: nextId,
            orderId: _orderId,
            productId: _productId,
            quantity: _quantity,
            unitPrice: _unitPrice
        });

        orderProducts[nextId] = newOrderProduct;

        emit OrderProductAdded(
            nextId,
            _orderId,
            _productId,
            _quantity,
            _unitPrice
        );

        nextId++;
    }


    function listOrderProducts() public view returns (OrderProduct[] memory) {
        OrderProduct[] memory orderProductList = new OrderProduct[](nextId - 1);

        for (uint i = 1; i < nextId; i++) {
            orderProductList[i - 1] = orderProducts[i];
        }

        return orderProductList;
    }
}
