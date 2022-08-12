require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name release sad modify hockey inhale forget genuine'; 
let testAccounts = [
"0x7503a8e7707ae51f9a5f1cf5599a124c0281495707d6ed0899cfa59f0559e4de",
"0x897f7a068e09a48a9b386ced95cfbd7c13d9fcb094b5f73e00f5945d599150c4",
"0x572aebe376ca67c150c82262a633988aeea9d0024e05cac865294f83d2daf98f",
"0x96a986657b73eed743c86db8730aa5edaf31c85edbc65002690effd356293ab0",
"0x4f68f0ba62e2ceccff1bd7b145143417588249c587ca59f4ee458c34ba0d83b6",
"0x7c1230f9140d6bdebe7d43c59a17a1bfc9befff6521693846fcf920f8d38fca0",
"0x2798c034dd120e2ad844c73658ec928ab774d37fe1f046fe0b5f00cd3e41e14b",
"0x3eecb1d5626b8c68757e186d526991549994d7152c0fc51d7106bb326fe58efb",
"0x56811226cb7cad9abf2c473c24d004d0ca67c429bd6640c49965d1f50b4c25d3",
"0xd209cdaf587c20e01c1d5c91ac777797c4dab7d34f94b9a003436518468c53c3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


