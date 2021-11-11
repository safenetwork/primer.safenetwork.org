import React from 'react';
import proof_of_resource from '../images/proof_of_resource.jpg';
import resources_and_currency from '../images/resources_and_currency.jpg';
import dbc from '../images/dbc.jpg'



const component = () => (

    <div className='chapter'>

    
        <h2 id='ch8'>8. Safe Network Token and Digital Bearer Certificates</h2>

        <p>The financial incentive for Node operators to join the Network and cooperate toward the goal of secure data storage is to earn Safe Network Token (SNT). The idea behind Safe Network Token is similar to that of Bitcoin: to ensure that cooperative participation is a more rational course of action than uncooperative or malicious participation. SNT can be spent on the Network or exchanged for other currencies.</p>

        <p>The amount of data that a user can store on the Safe Network depends on the SNT balance of the user's account.</p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>

            <p>Farming is the process by which users who lend out spare storage can earn Safe Network Token, the currency of the Safe Network. Safe Network Token can be spent on the Network, for example by uploading files.</p>
        </div>

        <p>When a user of the Network requests some content, for example by browsing a website, a number of things happen. First, the Client software makes a request for the required data chunks. This message is sent to the Sections where the chunks are stored. The Client knows which Sections to contact because they are closest to the addresses of the chunks. The Section Elders then tell the Adults storing the chunks to deliver them to the Client.</p>

        <p>Likewise when a Client wants to store data it contacts the relevant Sections. In return it receives a quote which it pays. That payment is split between the Elders and the Adults that store the chunks.</p>

	<p>This is a change from the previous model in which Nodes were paid for delivering chunks - 'pay on GET'. The reason for moving to 'pay on PUT' is that pay on GET would require complex Section wallets and maintaining state, which is what the move to Anti-Entropy and BRB is designed to avoid. In addition, DBCs should make the management of pay on PUT much easier, although the implementation details were still under discussion at the time of writing.</p>

        <p>The rate of payment will depend on the farming_rate, which is a variable based on the quantity of free resources in the Network as well as the number of Safe Network Token in circulation. The Network will always try to maintain free space of at least 30 percent of its total capacity (to cover a disconnection or outage in certain parts of the Network). When the free space drops below 30 percent of the total capacity, the farming_rate will go up. Also, when there are too many Farmers providing storage space the farming_rate will go down. This happens automatically, and the effect is to create an incentive for farmers to provide storage when the overall spare capacity is low, and a disincentive when the amount of free space is high.&nbsp;</p>
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>

        <p>Farming - a Node is paid for looking after a data chunk.</p>

            <p>farming_rate - a variable used to attract or discourage Farmers in order to maintain a certain level of free space (about 30 percent of the total capacity).</p>

        <p>MaidSafeCoin - a cryptocurrency token currently available for purchase that will be exchangeable for Safe Network Token once the network is live.</p>

            <p>Proof of Resource&nbsp; - 1. a test of whether a Node that wants to join the network has sufficient bandwidth and CPU power. If it fails the test it will not be allowed to join. 2. Random checks are occasionally made by Elders to ensure that the Node is indeed maintaining chunks it is supposed to be storing. If it fails the challenge (by not providing the demanded proof) its Node Age is diminished.</p>
            </div>
        <div className="Full-width-pic" align="center">

            <img className="Img1" src={proof_of_resource} alt="POR" align="center" />
        </div>
  

   
      
        <p>The Network will balance itself in a way that's completely independent of the price of SNT. By adjusting the farming_rate according to the amount of free available space on the Network users storing data are charged at the optimum rate. While the storing rate is high (available free space is lower) users are discouraged from storing thus helping to free up more space. This dynamic pricing should translate into very competitive prices for data storage.</p>
   
        <p>Everyone with a suitable device and sufficient bandwidth is welcome to farm and thereby contribute to the network - including data centre owners. Nodes are continuously rewarded according to the quality of the resource they provide using Node Age and other features collectively known as Proof of Resource. To minimize the risk of centralization, however, the use of huge farming rigs will be economically disadvantageous compared with running multiple smaller nodes.</p>
        <div className="Pullquote">
            "There's more incentive for Farmers to provide storage when the overall spare capacity is low, and less incentive when the amount of free space is high"
                </div>

        <p>While it cannot be guaranteed, the signs are that bandwidth and storage capacity will continue to increase rapidly for the next decade or two. This means that data will never&nbsp;have to be deleted, with all public information stored for the foreseeable future.&nbsp;&nbsp;</p>

        <div className="Full-width-pic" align="center">

            <img src={resources_and_currency} alt="resources and currency" width="70%" align="center" />
        </div>

    

       
        <p>The supply of SNT will be limited to 4.3 billion coins, each with its own unique identity. Safe Network Tokens will be recycled when users exchange them for Network services, which means that there is always a supply for Farmers to earn.</p>

        <p>Note: At the time of writing the Safe Network is still pre-release (Alpha) and SNT is not yet implemented. However, a token called MaidSafeCoin (MAID) can be purchased on cryptocurrency exchanges. When the Network goes live MAID will be exchanged for SNT on a 1:1 basis.</p>

       <h3>Digital Bearer Certificates</h3>

       <p>A Digital Bearer Certificate (DBC) is a unique ‘digital voucher’ which has value by virtue of the fact it has been provably issued by a trusted mint as part of an economic system, like a banknote. Unlike a banknote, however, to spend a DBC you need to get it reissued by a mint. The mint can take your DBC and reissue it as two or more new DBCs if you wish (e.g. payment to a shop, the remainder as change to you), and multiple DBCs can be reissued as a single DBC.</p>
       <p>DBCs provide a quick, safe, flexible way to make payments that is compatible with multisig/threshold signature cryptography and can be used online and offline. They simplify many aspects of the Safe Network economy and remove the need for section wallets or similar mechanisms to manage SNT transfers.</p>

       <h4>Advantages of DBCs on Safe</h4>

<p>A mint is responsible for issuing and reissuing DBCs, and checking they are valid and have not already been spent. Mints can be trusted because they are hosted by section Elders, nodes that have already gained the trust of the Network. Any mint action must be authorized by a supermajority (5 out of 7) of Elders. This is vital in protecting against Sybil attacks.
The DBC system takes advantage of the sharded nature of the Network to remove the single point of failure of a typical centralised mint. Each Section has a mint, and is responsible for reissuing only those DBCs with an ID within its address range. In addition, the natural random distribution imposed by XOR means that DBCs will be scattered across Sections. Furthermore, a DBC issued by one Section will likely need to be spent in another Section, which limits the control any Section may exert over money supply.
</p>
<div className="Full-width-pic" align="center">
<img className="Img" src={dbc} alt="dbc" width="70%" align="center" />
</div>

<ul><em>
<li>id = hash of current DBC</li>
<li>output_number  = index of split</li>
<li>owner = owner of public key</li>
<li>inputs = hash of input DBC (0 if genesis)</li>
<li>outputs = hash of current DBC (same as id)</li>
<li>data = encapsulation of the above, plus the keys used to create it and those required to spend it</li>
</em></ul>

<h4>Reissuing DBCs</h4>
<p>Unlike cash, DBCs have owners. Also they need to be ‘reissued’ to a payee by a mint before they can be spent. This is to prevent double-spend. Reissuing is the process of checking that the DBC is valid and has not already been spent, and using a hash of the DBC (its output) to create a new DBC, or DBCs: in the reissuing process multiple DBCs can be combined into a new DBC – or several new DBCs – or a single DBC can be reissued as several new DBCs with their values adding up to the total of the original.
</p>

<h4>The Spentbook</h4>

<p>Before spending a DBC the Client must create a Spentbook entry. This is an immutable data item stored on Adult Nodes on the Network. It contains details of the desired transaction. When reissuing a DBC, the Mint checks to see if a Spentbook entry exists for that DBC and if so it will not perform the reissue. This ensures that once the transaction (DBC reissue) has occurred, the same DBC cannot be spent again.</p>

<h4>Unlinkability</h4>

<p>It is important for privacy and fungibility (the ability to convert a currency into any other) that transactions are not easily traceable back to individuals. To achieve this DBC transactions will be limited to fixed denominations. The following transactions: 2 x 1000 + 1 x 100 + 1 x 50 + 2 x 10 + 1 x 5 + 3 x 1 are far less linkable to individual parties than a single transaction of 2,178 SNT would be.  </p>

<p>Other techniques under investigation for delinking transactions include hiding the amounts transacted from a mint, and using blind signatures. At the time of writing the exact combination of these methods that will be used to make transactions unlinkable was still under discussion.</p>

<p>As well as enabling private, simple and rapid transactions between individuals, DBCs are also the medium by which people can pay for uploads and for that payment to be shared between the Elders and Adults involved.</p>




        <h3>Tell me more...</h3>

        <p><a title="denominations" href="https://safenetforum.org/t/update-21-october-2021/35708" target="_blank" rel="noopener noreferrer" >Discussion of denominations (Safe Network Forum)</a></p>

        <p><a title="linkability" href="https://safenetforum.org/t/update-09-september-2021/35514#more-on-dbcs-2" target="_blank" rel="noopener noreferrer" >Discussion of unlinkability (Safe Network Forum)</a></p>

        <p><a title="blind signatures" href="https://safenetforum.org/t/update-21-october-2021/35708" target="_blank" rel="noopener noreferrer" >Blind Signatures for Untraceable Payments (White paper, David Chaum, 1998)</a></p>

        <p><a title="Digital Money and DBCs" href="https://opaque.link/post/digitalmoneydbc/" target="_blank" rel="noopener noreferrer" >Digital Money and DBCs (Jonathan 'Smuggler' Logan, 2018)</a></p>

        <p><a title="scrit" href="https://github.com/scritcash/scrit-whitepaper/blob/master/scrit-whitepaper.pdf" target="_blank" rel="noopener noreferrer" >Scrit: An Untraceable Distributed Electronic Cash System (Jonathan 'Smuggler' Logan, 2019)</a></p>

        <p><a title="pedersen" href="https://safenetforum.org/t/update-july-29th-2021/35288#pedersen-commitments-and-range-proofs-2" target="_blank" rel="noopener noreferrer" >Pedersen Commitments and Range Proofs (Safe Network Forum)</a></p>

        
        <p><a title="Safecoin " href="https://safenetwork.tech/safecoin/" target="_blank" rel="noopener noreferrer" >This is Safecoin (Safe Network website)</a> &nbsp;&nbsp;</p>

        <p><a title="Safecoin Implementation" href=" https://github.com/maidsafe/rfcs/blob/master/text/0012-safecoin-implementation/0012-safecoin-implementation.md" target="_blank" rel="noopener noreferrer" >Safecoin Implementation (MaidSafe RFC)</a> &nbsp;</p>

        <p><a title="Farm Attempt " href="https://github.com/maidsafe/rfcs/blob/master/text/ " target="_blank" rel="noopener noreferrer" >Farm Attempt (MaidSafe RFC)</a></p>

        
    </div>

);

export default component;
