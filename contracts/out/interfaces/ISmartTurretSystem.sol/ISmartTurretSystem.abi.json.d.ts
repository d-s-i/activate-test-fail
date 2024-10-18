declare const abi: [
  {
    "type": "function",
    "name": "aggression",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "turretOwnerCharacterId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "priorityQueue",
        "type": "tuple[]",
        "internalType": "struct TargetPriority[]",
        "components": [
          {
            "name": "target",
            "type": "tuple",
            "internalType": "struct SmartTurretTarget",
            "components": [
              {
                "name": "shipId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shipTypeId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "characterId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "hpRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shieldRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "armorRatio",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "weight",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "turret",
        "type": "tuple",
        "internalType": "struct Turret",
        "components": [
          {
            "name": "weaponTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "ammoTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "chargesLeft",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "aggressor",
        "type": "tuple",
        "internalType": "struct SmartTurretTarget",
        "components": [
          {
            "name": "shipId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shipTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "characterId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "hpRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shieldRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "armorRatio",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "victim",
        "type": "tuple",
        "internalType": "struct SmartTurretTarget",
        "components": [
          {
            "name": "shipId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shipTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "characterId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "hpRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shieldRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "armorRatio",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "updatedPriorityQueue",
        "type": "tuple[]",
        "internalType": "struct TargetPriority[]",
        "components": [
          {
            "name": "target",
            "type": "tuple",
            "internalType": "struct SmartTurretTarget",
            "components": [
              {
                "name": "shipId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shipTypeId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "characterId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "hpRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shieldRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "armorRatio",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "weight",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "configureSmartTurret",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createAndAnchorSmartTurret",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "entityRecordData",
        "type": "tuple",
        "internalType": "struct EntityRecordData",
        "components": [
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "smartObjectData",
        "type": "tuple",
        "internalType": "struct SmartObjectData",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tokenURI",
            "type": "string",
            "internalType": "string"
          }
        ]
      },
      {
        "name": "worldPosition",
        "type": "tuple",
        "internalType": "struct WorldPosition",
        "components": [
          {
            "name": "solarSystemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "position",
            "type": "tuple",
            "internalType": "struct Coord",
            "components": [
              {
                "name": "x",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "y",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "z",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          }
        ]
      },
      {
        "name": "fuelUnitVolume",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fuelConsumptionIntervalInSeconds",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fuelMaxCapacity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "inProximity",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "turretOwnerCharacterId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "priorityQueue",
        "type": "tuple[]",
        "internalType": "struct TargetPriority[]",
        "components": [
          {
            "name": "target",
            "type": "tuple",
            "internalType": "struct SmartTurretTarget",
            "components": [
              {
                "name": "shipId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shipTypeId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "characterId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "hpRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shieldRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "armorRatio",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "weight",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "turret",
        "type": "tuple",
        "internalType": "struct Turret",
        "components": [
          {
            "name": "weaponTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "ammoTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "chargesLeft",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "turretTarget",
        "type": "tuple",
        "internalType": "struct SmartTurretTarget",
        "components": [
          {
            "name": "shipId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shipTypeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "characterId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "hpRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shieldRatio",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "armorRatio",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "updatedPriorityQueue",
        "type": "tuple[]",
        "internalType": "struct TargetPriority[]",
        "components": [
          {
            "name": "target",
            "type": "tuple",
            "internalType": "struct SmartTurretTarget",
            "components": [
              {
                "name": "shipId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shipTypeId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "characterId",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "hpRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "shieldRatio",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "armorRatio",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "weight",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  }
]; export default abi;
