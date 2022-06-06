require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million quality harvest merry flock swift'; 
let testAccounts = [
"0xbc9ea57dcf7fc03555e60a4d94f296f41aaf1ed73725af71b3156e567a67f866",
"0x0f0aa70b38e8e6983d0ecb4176bad09994f3e8e3447f01bb4be12efdd4a1ba9a",
"0x3ec2acb26df708b0d7a27b43d8f52d9f091857152027dfbed01c27eb8ffbcd95",
"0xf56c394281d4aa611254d72ceac66e2437a7031f514df71094f622938218b460",
"0x24cc2eb63ce70c774a4b64d509ca839828979232670ef07aea25910cfadc735a",
"0xee773e94c08e1fd73cbd480f928f3a1eada27272a47236d4b2236bd3bd6719da",
"0xa76047d42abc189407523b6f9228e6fa3b8065d21f947752e626f3aa6988b45d",
"0xd79d26a98b05d99a083e98ec7ddaaf4b0aaaa0e62ba32b8858e4e919e36e5da4",
"0xc54f640536e1d013e6ccd3dd68ab3261e5e5bc78c8241e794aacfa1c4ba27bc3",
"0xd848258edfb6dc4aa259fd9af97a837945147e6aaa52bf92976d42aa9e17fcb1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

