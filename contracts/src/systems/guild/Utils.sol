//SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";
import { WorldResourceIdLib } from "@latticexyz/world/src/WorldResourceId.sol";
import { RESOURCE_SYSTEM } from "@latticexyz/world/src/worldResourceTypes.sol";

import { GUILD_DEPLOYMENT_NAMESPACE, GUILD_SYSTEM_NAME } from "./constants.sol";

library Utils {
    function guildSystemId() internal pure returns (ResourceId) {
        return WorldResourceIdLib.encode({
            typeId: RESOURCE_SYSTEM,
            namespace: GUILD_DEPLOYMENT_NAMESPACE,
            name: GUILD_SYSTEM_NAME
        });
    }

    function myUtilFunction() internal {
        // Write your utility function here ...
    }

}
