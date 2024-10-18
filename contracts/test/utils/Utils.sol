// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import "forge-std/Test.sol";

import { IBaseWorld } from "@eveworld/world/src/codegen/world/IWorld.sol";

import { FRONTIER_WORLD_DEPLOYMENT_NAMESPACE } from "@eveworld/common-constants/src/constants.sol";
import { EntityRecordOffchainTableData } from "@eveworld/world/src/codegen/tables/EntityRecordOffchainTable.sol";
import { EntityRecordData as EntityRecordCharacter } from "@eveworld/world/src/modules/smart-character/types.sol";
import { SmartCharacterLib } from "@eveworld/world/src/modules/smart-character/SmartCharacterLib.sol";

import { Character } from "./types.sol";

library Utils {
    using SmartCharacterLib for SmartCharacterLib.World;

    function createCharacter(
        address worldAddress,
        uint256 characterId,
        address player,
        uint256 corpId
    ) public returns (Character memory) {

        SmartCharacterLib.World memory smartCharacter;

        smartCharacter = SmartCharacterLib.World({
            iface: IBaseWorld(worldAddress),
            namespace: FRONTIER_WORLD_DEPLOYMENT_NAMESPACE
        });

        //Create a smart character
        smartCharacter.createCharacter(
            characterId,
            player,
            corpId,
            EntityRecordCharacter({ typeId: 111, itemId: 1, volume: 10 }),
            EntityRecordOffchainTableData({ name: "characterName", dappURL: "noURL", description: "." }),
            "tokenCid"
        );

        Character memory character = Character(characterId, player, corpId);
        return character;
    }

    function createCharacters(
        address worldAddress
    ) public returns (Character[] memory) {

        address[] memory players = getPlayers();

        Character[] memory characters = new Character[](players.length);

        for(uint256 i = 0; i < players.length; i++) {
            characters[i] = createCharacter(worldAddress, i + 1, players[i], 1);
        }

        return characters;
    }

    function getPlayers() pure public returns (address[] memory) {
        address[] memory players = new address[](10);
        players[0] = address(0xF39fD6e51Aad88F6f4CE6AB8827279CFffb92267);
        players[1] = address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        players[2] = address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        players[3] = address(0x90F79bf6EB2c4f870365E785982E1f101E93b906);
        players[4] = address(0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65);
        players[5] = address(0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc);
        players[6] = address(0x976EA74026E726554dB657fA54763abd0C3a0aa9);
        players[7] = address(0x14dC79964da2C08b23698B3D3cc7Ca32193d9955);
        players[8] = address(0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f);
        players[9] = address(0xa0Ee7A142d267C1f36714E4a8F75612F20a79720);
        return players;
    }
}
