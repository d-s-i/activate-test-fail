declare const abi: [
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
  }
]; export default abi;
