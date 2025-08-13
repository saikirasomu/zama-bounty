const { expect } = require("chai");

describe("DcaBatchBot", function () {
  it("should deploy", async function () {
    const Contract = await ethers.getContractFactory("DcaBatchBot");
    const contract = await Contract.deploy();
    await contract.deployed();
    expect(contract.address).to.be.properAddress;
  });
});
