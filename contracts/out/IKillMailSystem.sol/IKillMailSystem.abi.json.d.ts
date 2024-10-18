declare const abi: [
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
  }
]; export default abi;
