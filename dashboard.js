
const contractAddress = "0x2553674aE4ff730056DaA445Bf4e7d26cA31335A";
const contractABI = [
    {"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
    {"inputs":[],"name":"getRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"}
];

window.addEventListener("load", async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        try {
            const rewardPool = await contract.methods.getRewardPool().call();
            const totalStaked = await contract.methods.getTotalStaked().call();

            document.getElementById("totalStaked").innerText = web3.utils.fromWei(totalStaked, "ether");
            document.getElementById("rewardPool").innerText = web3.utils.fromWei(rewardPool, "ether");
        } catch (err) {
            console.error("Error loading stats:", err);
        }
    } else {
        alert("Please install MetaMask to see real data.");
    }
});
