const { getNamedAccounts } = require("hardhat")

async function main() {
    const { developer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", developer)
    console.log("Funding....")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("Got it back!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
