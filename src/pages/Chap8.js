import React from 'react';
import proof_of_resource from '../images/proof_of_resource.jpg';
import resources_and_currency from '../images/resources_and_currency.jpg';



const component = () => (

    <div className='chapter'>

    
        <h2 id='ch8'>8. Farming for Safecoin</h2>

        <p>The main incentive for Vault operators to join the Network and cooperate toward the goal of secure data storage is to earn Safecoin. The idea behind Safecoin is similar to that of Bitcoin: to ensure that cooperative participation is a more rational course of action than uncooperative or malicious participation. Safecoin can be spent on the Network or exchanged for other currencies.</p>

        <p>The amount of data that a user can store on the SAFE Network depends on the Safecoin balance of the user's account.</p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>

            <p>Farming is the process by which users who lend out spare storage can earn Safecoin, the currency of the SAFE Network. Safecoin can be spent on the Network, for example by uploading files.</p>
        </div>

        <p>When a user of the Network requests some data, for example by browsing a website, a number of things happen. First, the Client software makes a request for the required data chunks. This message (a GET request) is then propagated across the Vaults, and when the chunk is found there is a competition between the Vaults in that section to deliver it to the Network where it will be routed back to the requester. The first Vault to deliver will have a chance of being rewarded with one Safecoin. This process is described as a Farming Attempt.</p>

        <p>A successful Farming Attempt will be rewarded by payment in Safecoin. However, the probability of this happening will depend on the farming_rate, which is a variable based on the quantity of free resources in the Network as well as the number of Safecoin in circulation. The Network will always try to maintain free space of at least 30 percent of its total capacity (to cover a disconnection or outage in certain parts of the Network). When the free space drops below 30 percent of the total capacity, the farming_rate will go up and more Farming Attempts will succeed. This way Farmers make more money providing chunks to the Network. It works the other way around as well. When there are too many Farmers providing storage space the farming_rate will go down. This happens automatically, and the effect is to create an incentive for farmers to provide storage when the overall spare capacity is low, and a disincentive when the amount of free space is high.&nbsp;</p>
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>

        <p>Farming - a Vault delivers a data chunk that it is storing to the SAFE Network and earns Safecoin in return.</p>

            <p>Farming Attempt - by delivering data chunks when requested, a Vault may gain the opportunity to make a Farming Attempt. </p>
            <p>farming_rate - a variable used to attract or discourage Farmers in order to maintain a certain level of free space (about 30 percent of the total capacity).</p>

        <p>MaidSafeCoin - a cryptocurrency token currently available for purchase that will be exchangeable for Safecoin once the network is live.</p>

            <p>Proof of Resource&nbsp; - 1. a test whether a Vault that wants to join the network has sufficient bandwidth and CPU power. If it fails the test it will not be allowed to join. 2. Random checks are occasionally made by managing nodes to ensure that the Vault is indeed maintaining chunks it is supposed to be storing. If it fails the challenge (by not providing the demanded proof) its Node Age is diminished.</p>
            </div>
        <div className="Full-width-pic" align="center">

            <img className="Img1" src={proof_of_resource} alt="POR" align="center" />
        </div>
  

   

        <p>The Network will balance itself in a way that's completely independent of the price of Safecoin. By adjusting the farming_rate according to the amount of free available space on the Network users storing data are charged at the optimum rate. While the storing rate is high (available free space is lower) users are discouraged from storing thus helping to free up more space. This dynamic pricing should translate into very competitive prices for data storage.</p>
   
        <p>Everyone with a suitable device and sufficient bandwidth is welcome to farm and thereby contribute to the network - including data centre owners. Nodes are continuously rewarded according to the quality of the resource they provide using Node Age, PARSEC and other features collectively known as Proof of Resource. To minimize the risk of centralization, however, the use of huge farming rigs will be economically disadvantageous compared with running multiple smaller nodes.</p>
        <div className="Pullquote">
            "There's more incentive for Farmers to provide storage when the overall spare capacity is low, and less incentive when the amount of free space is high"
                </div>

        <p>While it cannot be guaranteed, the indications are that bandwidth and storage capacity will continue to increase rapidly for the next decade or two. This means that data will never&nbsp;have to be deleted, with all information stored indefinitely for the foreseeable future.&nbsp;&nbsp;</p>

        <div className="Full-width-pic" align="center">

            <img src={resources_and_currency} alt="resources and currency" width="70%" align="center" />
        </div>

    

       
        <p>The supply of Safecoin will be limited to 4.3 billion coins, each with its own unique identity. Safecoins will be recycled when users exchange them for Network services, which means that there is always a supply for Farmers to earn.</p>

        <p>Note: At the time of writing the SAFE Network is still pre-release (Alpha) and Safecoin is not yet implemented. However, a token called MaidSafeCoin (MAID) can be purchased on cryptocurrency exchanges. When the Network goes live MAID will be exchanged for Safecoin on a 1:1 basis.</p>

        <h3>Tell me more...</h3>

        <p><a title="Safecoin " href="https://safenetwork.tech/safecoin/" target="_blank" rel="noopener noreferrer" >This is Safecoin (SAFE Network website)</a> &nbsp;&nbsp;</p>

        <p><a title="Safecoin Implementation" href=" https://github.com/maidsafe/rfcs/blob/master/text/0012-safecoin-implementation/0012-safecoin-implementation.md" target="_blank" rel="noopener noreferrer" >Safecoin Implementation (MaidSafe RFC)</a> &nbsp;</p>

        <p><a title="Farm Attempt " href="https://github.com/maidsafe/rfcs/blob/master/text/ " target="_blank" rel="noopener noreferrer" >Farm Attempt (MaidSafe RFC)</a></p>

    </div>

);

export default component;