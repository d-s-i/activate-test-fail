// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import "forge-std/Test.sol";
import { MudTest } from "@latticexyz/world/test/MudTest.t.sol";
import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";
import { FRONTIER_WORLD_DEPLOYMENT_NAMESPACE } from "@eveworld/common-constants/src/constants.sol";
import { DeployableState, DeployableStateData } from "@eveworld/world/src/codegen/tables/DeployableState.sol";
import { ResourceIds } from "@latticexyz/store/src/codegen/tables/ResourceIds.sol";
import { CharactersTableData, CharactersTable } from "@eveworld/world/src/codegen/tables/CharactersTable.sol";
import { ResourceId, WorldResourceIdLib } from "@latticexyz/world/src/WorldResourceId.sol";
import { Utils as SmartCharacterUtils } from "@eveworld/world/src/modules/smart-character/Utils.sol";
import { Utils as SmartDeployableUtils } from "@eveworld/world/src/modules/smart-deployable/Utils.sol";
import { State } from "@eveworld/world/src/codegen/common.sol";

import { Utils } from "systems/guild/Utils.sol";
import { IWorld } from "codegen/world/IWorld.sol";
import { Rank } from "systems/guild/GuildSystem.sol";
import { IGuildSystem } from "codegen/world/IGuildSystem.sol";

import { Assertions } from "../utils/Assertions.sol";
import { Utils as TestUtils } from "../utils/Utils.sol";
import { Character } from "../utils/types.sol";

import { GuildMembers } from "codegen/tables/GuildMembers.sol";

import { Utils as GuildUtils } from "systems/guild/Utils.sol";

interface IGuildSystem2 {
    function getRank(uint256 characterId) external view returns (uint256);
}

contract GuildTest is MudTest, Assertions {

    IWorld world;
    Character[] characters;

    address guildMaster = address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    Character guildMasterCharacter;

    function setUp() public override {
        super.setUp();
        world = IWorld(worldAddress);

        vm.startBroadcast(guildMaster);

        guildMasterCharacter = TestUtils.createCharacter(worldAddress, 101, guildMaster, 1);
        console.logString("GuildMaster characterId:");
        console.logUint(guildMasterCharacter.characterId);
        console.logString("GuildMaster address:");
        console.logAddress(guildMasterCharacter.player);

        world.dreamin__activate(guildMasterCharacter.characterId);
        bool isMember = world.dreamin__isMember(guildMasterCharacter.characterId);
        console.logString("setup - isMember:");
        console.logBool(isMember);
        Character[] memory tempCharacters = TestUtils.createCharacters(worldAddress);
        for (uint i = 0; i < tempCharacters.length; i++) {
            characters.push(tempCharacters[i]);
        }

        vm.stopBroadcast();

        console.logString("setup done");
    }

    function test_WorldExists() external {
        uint256 codeSize;
        address addr = worldAddress;
        assembly {
            codeSize := extcodesize(addr)
        }
        assertTrue(codeSize > 0);
    }

    // function test_GuildDeployed() external {
    //     // Test for configuration ...
    // }

    // test activation
    function test_activate() external {
        console.logString("test_activate - getting member");
        bool _isMember = world.dreamin__isMember(guildMasterCharacter.characterId);
        // bool _isMember = GuildMembers.getRank(guildMasterCharacter.characterId) > 0; // passes
        console.logString("test_activate - isMember:");
        console.logBool(_isMember);
        assertTrue(_isMember, "GuildMaster should be a member");
    }

    function test_isMember() external {
        vm.startBroadcast(guildMaster);
        world.dreamin__promote(characters[0].characterId);

        assertTrue(world.dreamin__isMember(characters[0].characterId), "Character 0 should be a member");
        assertTrue(!world.dreamin__isMember(characters[1].characterId), "Character 1 should NOT be a member");
        vm.stopBroadcast();
    }

}
