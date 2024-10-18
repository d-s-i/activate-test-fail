// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import { console } from "forge-std/console.sol";
import { ResourceId } from "@latticexyz/world/src/WorldResourceId.sol";
import { WorldResourceIdLib } from "@latticexyz/world/src/WorldResourceId.sol";
import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";
import { System } from "@latticexyz/world/src/System.sol";


import { FRONTIER_WORLD_DEPLOYMENT_NAMESPACE as DEPLOYMENT_NAMESPACE } from "@eveworld/common-constants/src/constants.sol";

import { Utils } from "./Utils.sol";

import { GuildAllies } from "codegen/tables/GuildAllies.sol";
import { GuildBlacklist } from "codegen/tables/GuildBlacklist.sol";
import { GuildMembers } from "codegen/tables/GuildMembers.sol";
import { GuildMemberList } from "codegen/tables/GuildMemberList.sol";
import { GuildMemberIndex } from "codegen/tables/GuildMemberIndex.sol";
import { CharactersTable } from "@eveworld/world/src/codegen/tables/CharactersTable.sol";
import { AddressToCharacterId } from "codegen/tables/AddressToCharacterId.sol";
import { IERC721 } from "@eveworld/world/src/modules/eve-erc721-puppet/IERC721.sol";

enum Rank {
    None,
    Member,
    Officer,
    Master
}

function _addNewMember(uint256 characterId) {
    address player = CharactersTable.getCharacterAddress(characterId);
    AddressToCharacterId.setCharacterId(player, characterId);
    _pushNewMember(characterId);
}

function _pushNewMember(uint256 characterId) {
    uint256 index = GuildMemberList.length();
    GuildMemberIndex.setIndex(characterId, index);
    GuildMemberList.push(characterId);
}

/**
 * @dev This contract is an example for implementing logic to a smart turret
 */
contract GuildSystem is System {

    error GuildSystem__CannotDemoteBelowZero(uint256 characterId);
    error GuildSystem__OnlyGuildMaster();

    function activate(uint256 characterId) external {
        console.logString("GuildSystem - calling activate");
        address characterAddress = CharactersTable.getCharacterAddress(characterId);
        require(_msgSender() == characterAddress, "GuildSystem - Give your own characterId to activate");
        _promoteToGuildMaster(characterId);
    }

    function _promoteToGuildMaster(uint256 characterId) internal {
        console.logString("GuildSystem - calling _promoteToGuildMaster");
        bool _isMember = isMember(characterId);
        if(!_isMember) {
            _addNewMember(characterId);
        }
        GuildMembers.setRank(characterId, uint256(Rank.Master));

    }

    function isMember(uint256 characterId) public view returns (bool) {
        console.logString("GuildSystem - calling isMember (characterId)");
        console.logUint(characterId);
        return GuildMembers.getRank(characterId) > 0;
    }

    function getMembers() public view returns (uint256[] memory) {
        console.logString("GuildSystem - calling getMembers");
        uint256[] memory members = GuildMemberList.get();
        uint256 realMemberCount = 0;

        for(uint i = 0; i < members.length; i++) {
            if(members[i] != 0) {
                realMemberCount++;
            }
        }

        // Create a new array with the correct size and copy the real members
        uint256[] memory realMembers = new uint256[](realMemberCount);
        for(uint i = 0; i < realMemberCount; i++) {
            if(members[i] != 0) {
                realMembers[i] = members[i];
            }
        }

        return realMembers;
    }
    function getRank(uint256 characterId) public view returns (uint256) {
        console.logString("GuildSystem - calling getRank");
        return GuildMembers.getRank(characterId);
    }

}

