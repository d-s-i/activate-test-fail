// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Assertions {
    function assertIsInList(uint256[] memory list, uint256 item) internal {
        bool isInList = false;
        for(uint256 i = 0; i < list.length; i++) {
            if(list[i] == item) {
                isInList = true;
                break;
            }
        }
        require(isInList, "Item is not in list");
    }

    function assertNotInList(uint256[] memory list, uint256 item) internal {
        bool isNotInList = true;
        for(uint256 i = 0; i < list.length; i++) {
            if(list[i] == item) {
                isNotInList = false;
                break;
            }
        }
        require(isNotInList, "Item found in list");
    }
}