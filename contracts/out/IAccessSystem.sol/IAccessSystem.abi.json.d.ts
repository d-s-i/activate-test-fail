declare const abi: [
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
  }
]; export default abi;
