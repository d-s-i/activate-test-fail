declare const abi: [
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
  }
]; export default abi;
