declare const abi: [
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
    "type": "error",
    "name": "SmartStorageUnitERC721AlreadyInitialized",
    "inputs": []
  }
]; export default abi;
