declare const abi: [
  {
    "type": "function",
    "name": "_msgSender",
    "inputs": [],
    "outputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "_msgValue",
    "inputs": [],
    "outputs": [
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "_world",
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
    "name": "aggression",
    "inputs": [
      {
        "name": "smartTurretId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "characterId",
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
    "name": "inProximity",
    "inputs": [
      {
        "name": "smartTurretId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "characterId",
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
    "name": "supportsInterface",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  }
]; export default abi;
