declare const abi: [
  {
    "type": "function",
    "name": "anchor",
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
    "name": "bringOffline",
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
    "name": "bringOnline",
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
    "name": "currentFuelAmount",
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
    "name": "currentFuelAmountInWei",
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
    "name": "depositFuel",
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
    "name": "destroyDeployable",
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
    "name": "globalPause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "globalResume",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerDeployable",
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
    "name": "registerDeployableToken",
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
    "name": "setFuelConsumptionPerMinute",
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
    "name": "setFuelMaxCapacity",
    "inputs": [
      {
        "name": "entityId",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "setSmartAssemblyType",
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
    "name": "unanchor",
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
    "name": "updateFuel",
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
    "name": "withdrawFuel",
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
  }
]; export default abi;
