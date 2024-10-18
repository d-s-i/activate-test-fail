pragma solidity >=0.8.20;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { ResourceId, WorldResourceIdLib } from "@latticexyz/world/src/WorldResourceId.sol";
import { IBaseWorld } from "@eveworld/world/src/codegen/world/IWorld.sol";
import { RESOURCE_SYSTEM } from "@latticexyz/world/src/worldResourceTypes.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { IBaseWorld } from "@eveworld/world/src/codegen/world/IWorld.sol";

import { FRONTIER_WORLD_DEPLOYMENT_NAMESPACE } from "@eveworld/common-constants/src/constants.sol";
import { Utils as SmartCharacterUtils } from "@eveworld/world/src/modules/smart-character/Utils.sol";
import { SmartCharacterLib } from "@eveworld/world/src/modules/smart-character/SmartCharacterLib.sol";
import { EntityRecordData as EntityRecordCharacter } from "@eveworld/world/src/modules/smart-character/types.sol";
import { EntityRecordOffchainTableData } from "@eveworld/world/src/codegen/tables/EntityRecordOffchainTable.sol";
import { EntityRecordData, WorldPosition, Coord } from "@eveworld/world/src/modules/smart-storage-unit/types.sol";
import { SmartObjectData } from "@eveworld/world/src/modules/smart-deployable/types.sol";
import { SmartDeployableLib } from "@eveworld/world/src/modules/smart-deployable/SmartDeployableLib.sol";
import { Utils as SmartDeployableUtils } from "@eveworld/world/src/modules/smart-deployable/Utils.sol";

contract MockData is Script {
    using SmartCharacterUtils for bytes14;
    using SmartDeployableUtils for bytes14;
    using SmartCharacterLib for SmartCharacterLib.World;
    using SmartDeployableLib for SmartDeployableLib.World;

    SmartCharacterLib.World smartCharacter;
    SmartDeployableLib.World smartDeployable;

    function run(address worldAddress) public {
        StoreSwitch.setStoreAddress(worldAddress);
        // Load the private key from the `PRIVATE_KEY` environment variable (in .env)
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address player = vm.addr(deployerPrivateKey);

        // Start broadcasting transactions from the deployer account
        vm.startBroadcast(deployerPrivateKey);
        uint256 guildId = vm.envUint("GUILD_ID");
        uint256 characterId = vm.envUint("CHARACTER_ID");
        uint256 corpId = vm.envUint("CORP_ID");

        smartCharacter = SmartCharacterLib.World({
            iface: IBaseWorld(worldAddress),
            namespace: FRONTIER_WORLD_DEPLOYMENT_NAMESPACE
        });

        smartDeployable = SmartDeployableLib.World({
            iface: IBaseWorld(worldAddress),
            namespace: FRONTIER_WORLD_DEPLOYMENT_NAMESPACE
        });

        //Create a smart character
        smartCharacter.createCharacter(
            characterId,
            address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266),
            corpId,
            EntityRecordCharacter({ typeId: 111, itemId: 1, volume: 10 }),
            EntityRecordOffchainTableData({ name: "characterName", dappURL: "noURL", description: "." }),
            "tokenCid"
        );

        // Mock your system data here ...

        vm.stopBroadcast();
    }


}
