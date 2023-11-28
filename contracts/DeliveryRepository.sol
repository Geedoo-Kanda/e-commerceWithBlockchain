// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract DeliveryRepository {
    struct Delivery {
        uint id;
        address deliveryPerson;
        string orderReference;
        string deliveryDate;
        string observations;
    }

    mapping(uint => Delivery) public deliveries;
    uint public nextId = 1;

    event DeliveryMade(
        uint indexed id,
        address deliveryPerson,
        string orderReference,
        string deliveryDate,
        string observations
    );

    function makeDelivery(
        address _deliveryPerson,
        string memory _orderReference,
        string memory _deliveryDate,
        string memory _observations
    ) public {
        Delivery memory newDelivery = Delivery(
            nextId,
            _deliveryPerson,
            _orderReference,
            _deliveryDate,
            _observations
        );
        deliveries[nextId] = newDelivery;

        emit DeliveryMade(
            nextId,
            _deliveryPerson,
            _orderReference,
            _deliveryDate,
            _observations
        );

        nextId++;
    }

    function getDeliveryById(uint _id) public view returns (Delivery memory) {
        return deliveries[_id];
    }

    function listDeliveries() public view returns (Delivery[] memory) {
        Delivery[] memory deliveryList = new Delivery[](nextId);

        for (uint i = 0; i < nextId; i++) {
            deliveryList[i] = deliveries[i];
        }

        return deliveryList;
    }
}
