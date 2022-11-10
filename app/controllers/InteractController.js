import Controller from "../../libraries/controller/index";
import ethers from "ethers";
// import qredosJSON from "../qredos.json";


// export default class InteractController extends Controller {
//
//     async purchasenft(req, res) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//
//
//         let contract = new ethers.contract(qredosJSON.address, qredosJSON.abi, signer);
//         let transaction = await contract.purchaseNFT(tokenaddress, tokenId, downPaymentAmount, principal, poolId);
//
//         await transaction.wait();
//
//         alert('purchase successful');
//     }
//
//     async claimNFT (req, res){
//
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//
//
//         let contract = new ethers.contract(qredosJSON.address, qredosJSON.abi, signer);
//         let transaction = await contract.claimNFT(purchaseId, poolId);
//
//         await transaction.wait();
//
//         alert('claimNFT successful');
//     }
//
//     async repayLoan (req, res) {
//
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//
//
//         let contract = new ethers.contract(qredosJSON.address, qredosJSON.abi, signer);
//         let transaction = await contract.repayLoan(purchaseId, poolId, LoanrepaymentType);
//
//         await transaction.wait();
//
//         alert('repayloan successful');
//     }
// }

