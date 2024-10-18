import { defineWorld } from "@latticexyz/world";

const guildSystemSchema: any = {
    GuildMembers: {
        schema: { characterId: "uint256", rank: "uint256" },
        key: ["characterId"]
    },
    GuildMemberIndex: {
        schema: { characterId: "uint256", index: "uint256" },
        key: ["characterId"]
    },
    GuildMemberList: {
        schema: { members: "uint256[]" },
        key: []
    },
    AddressToCharacterId: {
        schema: { player: "address", characterId: "uint256" },
        key: ["player"]
    },
    GuildAllies: {
        schema: { characterId: "uint256", isAlly: "bool" },
        key: ["characterId"]
    },
    GuildBlacklist: {
        schema: { characterId: "uint256", isBlacklisted: "bool" },
        key: ["characterId"]
    }
};

export default defineWorld({
    namespace: "dreamin",
    systems: {
        GuildSystem: {
            name: "GuildSystem",
            openAccess: true, // need to change to false
        }
    },
    tables: {
        ...guildSystemSchema
    },
});
