// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MyContract{

    uint256 public value;
    uint256 public extValue;

    function setValue(uint256 _value) public {
        value = _value;
    }

    function setExtVal(uint256 _extValue) external {
        extValue = _extValue;
    }
    function getValue() public view returns (uint256 _value){
        return value;
    }
}