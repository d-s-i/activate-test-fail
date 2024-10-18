declare const abi: [
  {
    "type": "function",
    "name": "batchCall",
    "inputs": [
      {
        "name": "systemCalls",
        "type": "tuple[]",
        "internalType": "struct SystemCallData[]",
        "components": [
          {
            "name": "systemId",
            "type": "bytes32",
            "internalType": "ResourceId"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "returnDatas",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "batchCallFrom",
    "inputs": [
      {
        "name": "systemCalls",
        "type": "tuple[]",
        "internalType": "struct SystemCallFromData[]",
        "components": [
          {
            "name": "from",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "systemId",
            "type": "bytes32",
            "internalType": "ResourceId"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "returnDatas",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "call",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "callData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "callFrom",
    "inputs": [
      {
        "name": "delegator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "callData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "creator",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "deleteRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__aggression",
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
    "name": "eveworld__anchor",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "locationData",
        "type": "tuple",
        "internalType": "struct LocationTableData",
        "components": [
          {
            "name": "solarSystemId",
            "type": "uint256",
            "internalType": "uint256"
          },
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
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__bringOffline",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__bringOnline",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__canJump",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__configureSmartGate",
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
    "name": "eveworld__configureSmartTurret",
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
    "name": "eveworld__createAndAnchorSmartGate",
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
      },
      {
        "name": "maxDistance",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createAndAnchorSmartStorageUnit",
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
      },
      {
        "name": "storageCapacity",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralStorageCapacity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createAndAnchorSmartTurret",
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
    "name": "eveworld__createAndDepositItemsToEphemeralInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralInventoryOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createAndDepositItemsToInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createCharacter",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "characterAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "corpId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "entityRecord",
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
        "name": "entityRecordOffchain",
        "type": "tuple",
        "internalType": "struct EntityRecordOffchainTableData",
        "components": [
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "dappURL",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "description",
            "type": "string",
            "internalType": "string"
          }
        ]
      },
      {
        "name": "tokenCid",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createEntityRecord",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "itemId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "typeId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "volume",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__createEntityRecordOffchain",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "dappURL",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "description",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__currentFuelAmount",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "eveworld__currentFuelAmountInWei",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "eveworld__depositFuel",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "unitAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__depositToEphemeralInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralInventoryOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__depositToInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__destroyDeployable",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__ephemeralToInventoryTransfer",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct TransferItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__globalPause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__globalResume",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__inProximity",
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
  },
  {
    "type": "function",
    "name": "eveworld__inventoryToEphemeralTransfer",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralInventoryOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct TransferItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__isGateLinked",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "eveworld__isWithinRange",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "eveworld__linkSmartGates",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__registerDeployable",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
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
        "name": "fuelUnitVolumeInWei",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fuelConsumptionIntervalInSeconds",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fuelMaxCapacityInWei",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__registerDeployableToken",
    "inputs": [
      {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__registerERC721Token",
    "inputs": [
      {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__reportKill",
    "inputs": [
      {
        "name": "killMailId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "killMailTableData",
        "type": "tuple",
        "internalType": "struct KillMailTableData",
        "components": [
          {
            "name": "killerCharacterId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "victimCharacterId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lossType",
            "type": "uint8",
            "internalType": "enum KillMailLossType"
          },
          {
            "name": "solarSystemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "killTimestamp",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__saveLocation",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "location",
        "type": "tuple",
        "internalType": "struct LocationTableData",
        "components": [
          {
            "name": "solarSystemId",
            "type": "uint256",
            "internalType": "uint256"
          },
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
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setAccessEnforcement",
    "inputs": [
      {
        "name": "target",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "isEnforced",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setAccessListByRole",
    "inputs": [
      {
        "name": "accessRoleId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "accessList",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setAccessListPerSystemByRole",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "accessRoleId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "accessList",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setAllInventoryTransferAccess",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isEnforced",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setApprovedAccessList",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "accessList",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setBaseURI",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "baseURI",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setCharClassId",
    "inputs": [
      {
        "name": "classId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setCid",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "cid",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setDappURL",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dappURL",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setDeployableMetadata",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "dappURL",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "description",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setDescription",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "description",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setEntityMetadata",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "dappURL",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "description",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setEphemeralInventoryCapacity",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralStorageCapacity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setEphemeralToInventoryTransferAccess",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isEnforced",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setFuelConsumptionPerMinute",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "fuelConsumptionIntervalInSeconds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setFuelMaxCapacity",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "capacityInWei",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setInventoryCapacity",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "storageCapacity",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setInventoryToEphemeralTransferAccess",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isEnforced",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setMetadata",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "data",
        "type": "tuple",
        "internalType": "struct StaticDataGlobalTableData",
        "components": [
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "symbol",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "baseURI",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setName",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setName",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setSSUClassId",
    "inputs": [
      {
        "name": "classId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setSmartAssemblyType",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "smartAssemblyType",
        "type": "uint8",
        "internalType": "enum SmartAssemblyType"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__setSymbol",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "symbol",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__unanchor",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__unlinkSmartGates",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__updateCorpId",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "corpId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__updateFuel",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__withdrawFromEphemeralInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "ephemeralInventoryOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__withdrawFromInventory",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "items",
        "type": "tuple[]",
        "internalType": "struct InventoryItem[]",
        "components": [
          {
            "name": "inventoryItemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "itemId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "typeId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "volume",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "quantity",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "eveworld__withdrawFuel",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "unitAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getDynamicField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDynamicFieldLength",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDynamicFieldSlice",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "start",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "end",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFieldLayout",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFieldLength",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFieldLength",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getKeySchema",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [
      {
        "name": "keySchema",
        "type": "bytes32",
        "internalType": "Schema"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [
      {
        "name": "staticData",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "encodedLengths",
        "type": "bytes32",
        "internalType": "EncodedLengths"
      },
      {
        "name": "dynamicData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [
      {
        "name": "staticData",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "encodedLengths",
        "type": "bytes32",
        "internalType": "EncodedLengths"
      },
      {
        "name": "dynamicData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStaticField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getValueSchema",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [
      {
        "name": "valueSchema",
        "type": "bytes32",
        "internalType": "Schema"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "grantAccess",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "grantee",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "name": "initModule",
        "type": "address",
        "internalType": "contract IModule"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "installModule",
    "inputs": [
      {
        "name": "module",
        "type": "address",
        "internalType": "contract IModule"
      },
      {
        "name": "encodedArgs",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "installRootModule",
    "inputs": [
      {
        "name": "module",
        "type": "address",
        "internalType": "contract IModule"
      },
      {
        "name": "encodedArgs",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "popFromDynamicField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "byteLengthToPop",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "pushToDynamicField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "dataToPush",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerDelegation",
    "inputs": [
      {
        "name": "delegatee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "delegationControlId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "initCallData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerFunctionSelector",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "systemFunctionSignature",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "worldFunctionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerNamespace",
    "inputs": [
      {
        "name": "namespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerNamespaceDelegation",
    "inputs": [
      {
        "name": "namespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "delegationControlId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "initCallData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerRootFunctionSelector",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "worldFunctionSignature",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "systemFunctionSignature",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "worldFunctionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerStoreHook",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "hookAddress",
        "type": "address",
        "internalType": "contract IStoreHook"
      },
      {
        "name": "enabledHooksBitmap",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerSystem",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "system",
        "type": "address",
        "internalType": "contract System"
      },
      {
        "name": "publicAccess",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerSystemHook",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "hookAddress",
        "type": "address",
        "internalType": "contract ISystemHook"
      },
      {
        "name": "enabledHooksBitmap",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerTable",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      },
      {
        "name": "keySchema",
        "type": "bytes32",
        "internalType": "Schema"
      },
      {
        "name": "valueSchema",
        "type": "bytes32",
        "internalType": "Schema"
      },
      {
        "name": "keyNames",
        "type": "string[]",
        "internalType": "string[]"
      },
      {
        "name": "fieldNames",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [
      {
        "name": "namespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeAccess",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "grantee",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDynamicField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "staticData",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "encodedLengths",
        "type": "bytes32",
        "internalType": "EncodedLengths"
      },
      {
        "name": "dynamicData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setStaticField",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "fieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "fieldLayout",
        "type": "bytes32",
        "internalType": "FieldLayout"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "spliceDynamicData",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "startWithinField",
        "type": "uint40",
        "internalType": "uint40"
      },
      {
        "name": "deleteCount",
        "type": "uint40",
        "internalType": "uint40"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "spliceStaticData",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "start",
        "type": "uint48",
        "internalType": "uint48"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "storeVersion",
    "inputs": [],
    "outputs": [
      {
        "name": "version",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferBalanceToAddress",
    "inputs": [
      {
        "name": "fromNamespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "toAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferBalanceToNamespace",
    "inputs": [
      {
        "name": "fromNamespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "toNamespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "namespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unregisterDelegation",
    "inputs": [
      {
        "name": "delegatee",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unregisterNamespaceDelegation",
    "inputs": [
      {
        "name": "namespaceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unregisterStoreHook",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "hookAddress",
        "type": "address",
        "internalType": "contract IStoreHook"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unregisterSystemHook",
    "inputs": [
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "hookAddress",
        "type": "address",
        "internalType": "contract ISystemHook"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "worldVersion",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "HelloStore",
    "inputs": [
      {
        "name": "storeVersion",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "HelloWorld",
    "inputs": [
      {
        "name": "worldVersion",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Store_DeleteRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "indexed": false,
        "internalType": "bytes32[]"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Store_SetRecord",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "indexed": false,
        "internalType": "bytes32[]"
      },
      {
        "name": "staticData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      },
      {
        "name": "encodedLengths",
        "type": "bytes32",
        "indexed": false,
        "internalType": "EncodedLengths"
      },
      {
        "name": "dynamicData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Store_SpliceDynamicData",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "indexed": false,
        "internalType": "bytes32[]"
      },
      {
        "name": "dynamicFieldIndex",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      },
      {
        "name": "start",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      },
      {
        "name": "deleteCount",
        "type": "uint40",
        "indexed": false,
        "internalType": "uint40"
      },
      {
        "name": "encodedLengths",
        "type": "bytes32",
        "indexed": false,
        "internalType": "EncodedLengths"
      },
      {
        "name": "data",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Store_SpliceStaticData",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "ResourceId"
      },
      {
        "name": "keyTuple",
        "type": "bytes32[]",
        "indexed": false,
        "internalType": "bytes32[]"
      },
      {
        "name": "start",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      },
      {
        "name": "data",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "EncodedLengths_InvalidLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_Empty",
    "inputs": []
  },
  {
    "type": "error",
    "name": "FieldLayout_InvalidStaticDataLength",
    "inputs": [
      {
        "name": "staticDataLength",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "computedStaticDataLength",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_StaticLengthDoesNotFitInAWord",
    "inputs": [
      {
        "name": "index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_StaticLengthIsNotZero",
    "inputs": [
      {
        "name": "index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_StaticLengthIsZero",
    "inputs": [
      {
        "name": "index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_TooManyDynamicFields",
    "inputs": [
      {
        "name": "numFields",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "maxFields",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "FieldLayout_TooManyFields",
    "inputs": [
      {
        "name": "numFields",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "maxFields",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Module_AlreadyInstalled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Module_MissingDependency",
    "inputs": [
      {
        "name": "dependency",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "Module_NonRootInstallNotSupported",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Module_RootInstallNotSupported",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Schema_InvalidLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Schema_StaticTypeAfterDynamicType",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Slice_OutOfBounds",
    "inputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "start",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "end",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_GateAlreadyLinked",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_GateNotLinked",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_NotConfigured",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_NotWithtinRange",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_SameSourceAndDestination",
    "inputs": [
      {
        "name": "sourceGateId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "destinationGateId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartGate_UndefinedClassId",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SmartStorageUnitERC721AlreadyInitialized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SmartTurret_NotConfigured",
    "inputs": [
      {
        "name": "smartObjectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SmartTurret_UndefinedClassId",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Store_IndexOutOfBounds",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "accessedIndex",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidBounds",
    "inputs": [
      {
        "name": "start",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "end",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidFieldNamesLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidKeyNamesLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidResourceType",
    "inputs": [
      {
        "name": "expected",
        "type": "bytes2",
        "internalType": "bytes2"
      },
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidSplice",
    "inputs": [
      {
        "name": "startWithinField",
        "type": "uint40",
        "internalType": "uint40"
      },
      {
        "name": "deleteCount",
        "type": "uint40",
        "internalType": "uint40"
      },
      {
        "name": "fieldLength",
        "type": "uint40",
        "internalType": "uint40"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidStaticDataLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidValueSchemaDynamicLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidValueSchemaLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_InvalidValueSchemaStaticLength",
    "inputs": [
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "received",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_TableAlreadyExists",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "tableIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "Store_TableNotFound",
    "inputs": [
      {
        "name": "tableId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "tableIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_AccessDenied",
    "inputs": [
      {
        "name": "resource",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_AlreadyInitialized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "World_CallbackNotAllowed",
    "inputs": [
      {
        "name": "functionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_DelegationNotFound",
    "inputs": [
      {
        "name": "delegator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "delegatee",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_FunctionSelectorAlreadyExists",
    "inputs": [
      {
        "name": "functionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_FunctionSelectorNotFound",
    "inputs": [
      {
        "name": "functionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_InsufficientBalance",
    "inputs": [
      {
        "name": "balance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_InterfaceNotSupported",
    "inputs": [
      {
        "name": "contractAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_InvalidNamespace",
    "inputs": [
      {
        "name": "namespace",
        "type": "bytes14",
        "internalType": "bytes14"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_InvalidResourceId",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_InvalidResourceType",
    "inputs": [
      {
        "name": "expected",
        "type": "bytes2",
        "internalType": "bytes2"
      },
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_ResourceAlreadyExists",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_ResourceNotFound",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_SystemAlreadyExists",
    "inputs": [
      {
        "name": "system",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_UnlimitedDelegationNotAllowed",
    "inputs": []
  }
]; export default abi;
