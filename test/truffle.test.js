const MyContract = artifacts.require('./MyContract.sol');

// require('chai')
//     .use(require('chai-as-promised'))
//     .should();

contract('MyContract', () => {
    let mycontract;

    before(async () =>{
        mycontract = await MyContract.deployed();
    })

    describe('deployment',async()=>{
        it('deploys successfully', async()=>{
            const address = await mycontract.address;
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)

        })
    })

    before(async() =>{
        result = await mycontract.setValue(2)
        myVal = await mycontract.getValue();
    })

    it('should return set value',async()=>{
        assert.equal(2,myVal);
    })
})