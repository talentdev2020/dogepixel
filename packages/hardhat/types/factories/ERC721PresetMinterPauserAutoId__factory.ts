/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721PresetMinterPauserAutoId,
  ERC721PresetMinterPauserAutoIdInterface,
} from "../ERC721PresetMinterPauserAutoId";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b0838038062002b088339810160408190526200003491620003b3565b8251839083906200004d9060029060208501906200025a565b508051620000639060039060208401906200025a565b5050600c805460ff191690555080516200008590600e9060208401906200025a565b50620000946000335b620000f5565b620000c07f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200008e565b620000ec7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200008e565b50505062000493565b62000101828262000105565b5050565b6200011c82826200014860201b62000e461760201c565b60008281526001602090815260409091206200014391839062000eca620001e8821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000101576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001ff836001600160a01b03841662000208565b90505b92915050565b6000818152600183016020526040812054620002515750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000202565b50600062000202565b828054620002689062000440565b90600052602060002090601f0160209004810192826200028c5760008555620002d7565b82601f10620002a757805160ff1916838001178555620002d7565b82800160010185558215620002d7579182015b82811115620002d7578251825591602001919060010190620002ba565b50620002e5929150620002e9565b5090565b5b80821115620002e55760008155600101620002ea565b600082601f83011262000311578081fd5b81516001600160401b03808211156200032e576200032e6200047d565b604051601f8301601f19908116603f011681019082821181831017156200035957620003596200047d565b8160405283815260209250868385880101111562000375578485fd5b8491505b8382101562000398578582018301518183018401529082019062000379565b83821115620003a957848385830101525b9695505050505050565b600080600060608486031215620003c8578283fd5b83516001600160401b0380821115620003df578485fd5b620003ed8783880162000300565b9450602086015191508082111562000403578384fd5b620004118783880162000300565b9350604086015191508082111562000427578283fd5b50620004368682870162000300565b9150509250925092565b600181811c908216806200045557607f821691505b602082108114156200047757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61266580620004a36000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80636352211e1161010f578063a22cb465116100a2578063d539139311610071578063d5391393146103f7578063d547741f1461041e578063e63ab1e914610431578063e985e9c514610458576101e5565b8063a22cb465146103ab578063b88d4fde146103be578063c87b56dd146103d1578063ca15c873146103e4576101e5565b80639010d07c116100de5780639010d07c1461037557806391d148541461038857806395d89b411461039b578063a217fddf146103a3576101e5565b80636352211e146103345780636a6278421461034757806370a082311461035a5780638456cb591461036d576101e5565b80632f2ff15d1161018757806342842e0e1161015657806342842e0e146102f057806342966c68146103035780634f6ccce7146103165780635c975abb14610329576101e5565b80632f2ff15d146102af5780632f745c59146102c257806336568abe146102d55780633f4ba83a146102e8576101e5565b8063095ea7b3116101c3578063095ea7b31461025257806318160ddd1461026757806323b872dd14610279578063248a9ca31461028c576101e5565b806301ffc9a7146101ea57806306fdde0314610212578063081812fc14610227575b600080fd5b6101fd6101f83660046122cd565b610494565b60405190151581526020015b60405180910390f35b61021a6104a7565b6040516102099190612412565b61023a610235366004612272565b610539565b6040516001600160a01b039091168152602001610209565b610265610260366004612249565b6105d3565b005b600a545b604051908152602001610209565b6102656102873660046120ff565b6106e9565b61026b61029a366004612272565b60009081526020819052604090206001015490565b6102656102bd36600461228a565b61071b565b61026b6102d0366004612249565b610742565b6102656102e336600461228a565b6107db565b610265610859565b6102656102fe3660046120ff565b610901565b610265610311366004612272565b61091c565b61026b610324366004612272565b610996565b600c5460ff166101fd565b61023a610342366004612272565b610a37565b6102656103553660046120b3565b610aae565b61026b6103683660046120b3565b610b6a565b610265610bf1565b61023a6103833660046122ac565b610c95565b6101fd61039636600461228a565b610cb4565b61021a610cdd565b61026b600081565b6102656103b936600461220f565b610cec565b6102656103cc36600461213a565b610cf7565b61021a6103df366004612272565b610d2f565b61026b6103f2366004612272565b610e09565b61026b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61026561042c36600461228a565b610e20565b61026b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101fd6104663660046120cd565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b600061049f82610edf565b90505b919050565b6060600280546104b69061256d565b80601f01602080910402602001604051908101604052809291908181526020018280546104e29061256d565b801561052f5780601f106105045761010080835404028352916020019161052f565b820191906000526020600020905b81548152906001019060200180831161051257829003601f168201915b5050505050905090565b6000818152600460205260408120546001600160a01b03166105b75760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006105de82610a37565b9050806001600160a01b0316836001600160a01b0316141561064c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105ae565b336001600160a01b038216148061066857506106688133610466565b6106da5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105ae565b6106e48383610f04565b505050565b6106f4335b82610f72565b6107105760405162461bcd60e51b81526004016105ae90612477565b6106e4838383611069565b60008281526020819052604090206001015461073881335b611214565b6106e48383611278565b600061074d83610b6a565b82106107af5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105ae565b506001600160a01b03821660009081526008602090815260408083208484529091529020545b92915050565b6001600160a01b038116331461084b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105ae565b610855828261129a565b5050565b6108837f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610396565b6108f7576040805162461bcd60e51b81526020600482015260248101919091527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f20756e706175736560648201526084016105ae565b6108ff6112bc565b565b6106e483838360405180602001604052806000815250610cf7565b610925336106ee565b61098a5760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b60648201526084016105ae565b6109938161134f565b50565b60006109a1600a5490565b8210610a045760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105ae565b600a8281548110610a2557634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6000818152600460205260408120546001600160a01b03168061049f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105ae565b610ad87f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610396565b610b4a5760405162461bcd60e51b815260206004820152603d60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e7400000060648201526084016105ae565b610b5c81610b57600d5490565b6113f6565b610993600d80546001019055565b60006001600160a01b038216610bd55760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105ae565b506001600160a01b031660009081526005602052604090205490565b610c1b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610396565b610c8d5760405162461bcd60e51b815260206004820152603e60248201527f4552433732315072657365744d696e7465725061757365724175746f49643a2060448201527f6d75737420686176652070617573657220726f6c6520746f207061757365000060648201526084016105ae565b6108ff611544565b6000828152600160205260408120610cad90836115bf565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600380546104b69061256d565b6108553383836115cb565b610d013383610f72565b610d1d5760405162461bcd60e51b81526004016105ae90612477565b610d298484848461169a565b50505050565b6000818152600460205260409020546060906001600160a01b0316610dae5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016105ae565b6000610db86116cd565b90506000815111610dd85760405180602001604052806000815250610cad565b80610de2846116dc565b604051602001610df3929190612331565b6040516020818303038152906040529392505050565b600081815260016020526040812061049f906117f7565b600082815260208190526040902060010154610e3c8133610733565b6106e4838361129a565b610e508282610cb4565b610855576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610e863390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610cad836001600160a01b038416611801565b60006001600160e01b0319821663780e9d6360e01b148061049f575061049f82611850565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f3982610a37565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600460205260408120546001600160a01b0316610feb5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105ae565b6000610ff683610a37565b9050806001600160a01b0316846001600160a01b031614806110315750836001600160a01b031661102684610539565b6001600160a01b0316145b8061106157506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661107c82610a37565b6001600160a01b0316146110e45760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105ae565b6001600160a01b0382166111465760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105ae565b611151838383611890565b61115c600082610f04565b6001600160a01b0383166000908152600560205260408120805460019290611185908490612513565b90915550506001600160a01b03821660009081526005602052604081208054600192906111b39084906124c8565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61121e8282610cb4565b61085557611236816001600160a01b0316601461189b565b61124183602061189b565b604051602001611252929190612360565b60408051601f198184030181529082905262461bcd60e51b82526105ae91600401612412565b6112828282610e46565b60008281526001602052604090206106e49082610eca565b6112a48282611a7d565b60008281526001602052604090206106e49082611ae2565b600c5460ff166113055760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016105ae565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600061135a82610a37565b905061136881600084611890565b611373600083610f04565b6001600160a01b038116600090815260056020526040812080546001929061139c908490612513565b909155505060008281526004602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b03821661144c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105ae565b6000818152600460205260409020546001600160a01b0316156114b15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105ae565b6114bd60008383611890565b6001600160a01b03821660009081526005602052604081208054600192906114e69084906124c8565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600c5460ff161561158a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016105ae565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113323390565b6000610cad8383611af7565b816001600160a01b0316836001600160a01b0316141561162d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105ae565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6116a5848484611069565b6116b184848484611b2f565b610d295760405162461bcd60e51b81526004016105ae90612425565b6060600e80546104b69061256d565b60608161170157506040805180820190915260018152600360fc1b60208201526104a2565b8160005b811561172b5780611715816125a8565b91506117249050600a836124e0565b9150611705565b60008167ffffffffffffffff81111561175457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561177e576020820181803683370190505b5090505b841561106157611793600183612513565b91506117a0600a866125c3565b6117ab9060306124c8565b60f81b8183815181106117ce57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506117f0600a866124e0565b9450611782565b600061049f825490565b6000818152600183016020526040812054611848575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556107d5565b5060006107d5565b60006001600160e01b031982166380ac58cd60e01b148061188157506001600160e01b03198216635b5e139f60e01b145b8061049f575061049f82611c3c565b6106e4838383611c61565b606060006118aa8360026124f4565b6118b59060026124c8565b67ffffffffffffffff8111156118db57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611905576020820181803683370190505b509050600360fc1b8160008151811061192e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061196b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600061198f8460026124f4565b61199a9060016124c8565b90505b6001811115611a2e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106119dc57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110611a0057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93611a2781612556565b905061199d565b508315610cad5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105ae565b611a878282610cb4565b15610855576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610cad836001600160a01b038416611cd3565b6000826000018281548110611b1c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60006001600160a01b0384163b15611c3157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611b739033908990889088906004016123d5565b602060405180830381600087803b158015611b8d57600080fd5b505af1925050508015611bbd575060408051601f3d908101601f19168201909252611bba918101906122e9565b60015b611c17573d808015611beb576040519150601f19603f3d011682016040523d82523d6000602084013e611bf0565b606091505b508051611c0f5760405162461bcd60e51b81526004016105ae90612425565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611061565b506001949350505050565b60006001600160e01b03198216635a05180f60e01b148061049f575061049f82611df0565b611c6c838383611e25565b600c5460ff16156106e45760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b60648201526084016105ae565b60008181526001830160205260408120548015611de6576000611cf7600183612513565b8554909150600090611d0b90600190612513565b9050818114611d8c576000866000018281548110611d3957634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080876000018481548110611d6a57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611dab57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506107d5565b60009150506107d5565b60006001600160e01b03198216637965db0b60e01b148061049f57506301ffc9a760e01b6001600160e01b031983161461049f565b6001600160a01b038316611e8057611e7b81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611ea3565b816001600160a01b0316836001600160a01b031614611ea357611ea38382611ee2565b6001600160a01b038216611ebf57611eba81611f7f565b6106e4565b826001600160a01b0316826001600160a01b0316146106e4576106e48282612058565b60006001611eef84610b6a565b611ef99190612513565b600083815260096020526040902054909150808214611f4c576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611f9190600190612513565b6000838152600b6020526040812054600a8054939450909284908110611fc757634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600a8381548110611ff657634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a80548061203c57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061206383610b6a565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b80356001600160a01b03811681146104a257600080fd5b6000602082840312156120c4578081fd5b610cad8261209c565b600080604083850312156120df578081fd5b6120e88361209c565b91506120f66020840161209c565b90509250929050565b600080600060608486031215612113578081fd5b61211c8461209c565b925061212a6020850161209c565b9150604084013590509250925092565b6000806000806080858703121561214f578081fd5b6121588561209c565b93506121666020860161209c565b925060408501359150606085013567ffffffffffffffff80821115612189578283fd5b818701915087601f83011261219c578283fd5b8135818111156121ae576121ae612603565b604051601f8201601f19908116603f011681019083821181831017156121d6576121d6612603565b816040528281528a60208487010111156121ee578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215612221578182fd5b61222a8361209c565b91506020830135801515811461223e578182fd5b809150509250929050565b6000806040838503121561225b578182fd5b6122648361209c565b946020939093013593505050565b600060208284031215612283578081fd5b5035919050565b6000806040838503121561229c578182fd5b823591506120f66020840161209c565b600080604083850312156122be578182fd5b50508035926020909101359150565b6000602082840312156122de578081fd5b8135610cad81612619565b6000602082840312156122fa578081fd5b8151610cad81612619565b6000815180845261231d81602086016020860161252a565b601f01601f19169290920160200192915050565b6000835161234381846020880161252a565b83519083019061235781836020880161252a565b01949350505050565b60007f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008252835161239881601785016020880161252a565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516123c981602884016020880161252a565b01602801949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061240890830184612305565b9695505050505050565b600060208252610cad6020830184612305565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156124db576124db6125d7565b500190565b6000826124ef576124ef6125ed565b500490565b600081600019048311821515161561250e5761250e6125d7565b500290565b600082821015612525576125256125d7565b500390565b60005b8381101561254557818101518382015260200161252d565b83811115610d295750506000910152565b600081612565576125656125d7565b506000190190565b600181811c9082168061258157607f821691505b602082108114156125a257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156125bc576125bc6125d7565b5060010190565b6000826125d2576125d26125ed565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461099357600080fdfea2646970667358221220d948c11ee62c49354b8a617d81f3710a5bb01e21eb31697c7d58aa38832e994b64736f6c63430008030033";

type ERC721PresetMinterPauserAutoIdConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721PresetMinterPauserAutoIdConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721PresetMinterPauserAutoId__factory extends ContractFactory {
  constructor(...args: ERC721PresetMinterPauserAutoIdConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721PresetMinterPauserAutoId> {
    return super.deploy(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    ) as Promise<ERC721PresetMinterPauserAutoId>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    );
  }
  attach(address: string): ERC721PresetMinterPauserAutoId {
    return super.attach(address) as ERC721PresetMinterPauserAutoId;
  }
  connect(signer: Signer): ERC721PresetMinterPauserAutoId__factory {
    return super.connect(signer) as ERC721PresetMinterPauserAutoId__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721PresetMinterPauserAutoIdInterface {
    return new utils.Interface(_abi) as ERC721PresetMinterPauserAutoIdInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PresetMinterPauserAutoId {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721PresetMinterPauserAutoId;
  }
}