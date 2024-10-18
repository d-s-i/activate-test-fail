declare const abi: [
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
  }
]; export default abi;
