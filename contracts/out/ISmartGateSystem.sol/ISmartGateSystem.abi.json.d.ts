declare const abi: [
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
  }
]; export default abi;
