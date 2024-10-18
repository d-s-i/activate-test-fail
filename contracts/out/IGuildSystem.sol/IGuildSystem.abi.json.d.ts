declare const abi: [
  {
    "type": "function",
    "name": "dreamin__activate",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "dreamin__getMembers",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "dreamin__getRank",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "dreamin__isMember",
    "inputs": [
      {
        "name": "characterId",
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
    "type": "error",
    "name": "GuildSystem__CannotDemoteBelowZero",
    "inputs": [
      {
        "name": "characterId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "GuildSystem__OnlyGuildMaster",
    "inputs": []
  }
]; export default abi;
