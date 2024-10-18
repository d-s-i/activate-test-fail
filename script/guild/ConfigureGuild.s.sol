// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { ResourceId, WorldResourceIdLib } from "@latticexyz/world/src/WorldResourceId.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";

import { Utils } from "../../src/systems/guild/Utils.sol";
import { FRONTIER_WORLD_DEPLOYMENT_NAMESPACE } from "@eveworld/common-constants/src/constants.sol";

contract ConfigureGuild is Script {

    function run(address worldAddress) external {
        // Load the private key from the `PRIVATE_KEY` environment variable (in .env)
        uint256 playerPrivateKey = vm.envUint("PLAYER_PRIVATE_KEY");
        vm.startBroadcast(playerPrivateKey);

        StoreSwitch.setStoreAddress(worldAddress);
        IBaseWorld world = IBaseWorld(worldAddress);

        // Configure here ...

        vm.stopBroadcast();
    }
}
