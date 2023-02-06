import React from 'react';
import earn_snt from '../images/earn_snt.jpg';
import resources_and_currency from '../images/resources_and_currency.jpg';
import dbc from '../images/dbc.jpg'



const component = () => (

    <div className='chapter'>

    
        <h2 id='ch8'>8. Safe Network Token and Digital Bearer Certificates</h2>

        <p>When a user of the Network requests some content, for example by browsing a website, a number of things happen. First, the Client software makes a request for the required data chunks. This message is sent to the Sections where the chunks are stored. The Client knows which Sections to contact because they are closest to the addresses of the chunks. The Section Elders then tell the Adults storing the chunks to deliver them to the Client.</p>

        <p>Likewise when a Client wants to store data it contacts the relevant Sections. In return it receives a quote which it pays. That payment is split between the Elders and the Adults that store the chunks.</p>

        <p>The Network has a utility token which allows for the exchange of storage, bandwidth and compute resource between node operators and users wishing to store data on the Network: Safe Network Token (SNT). SNT is the financial incentive for Node operators to join the Network and cooperate toward the goal of providing secure data storage. Conceptually this is similar to that of Bitcoin: to ensure that cooperative participation is a more rational course of action than uncooperative or malicious activity.</p>

        <p>It also acts as a means to fund and reward other contributions that provide utility and value to people who use the Network, and wider society, such as open source software development, sites, services and publicly accessible data.</p>

        <p>In addition to functioning as the medium of exchange for Data Payments, Resource Supply Rewards and Network Royalties, SNT can also be transferred directly between users and used as a means to pay third parties for goods and services.</p>

        <p>SNT can be spent on the Network in exchange for data storage. The amount of data that a user can store on the Safe Network depends on the SNT balance they hold.
        <p>Users wishing to store data on the Network, or edit existing data, pay the Network in SNT. A Data Payment is made upfront and there are no ongoing costs to maintain data on the Network after this payment—content is made perpetually available after this one-time fee.</p>
        <p>These Data Payment fees are immediately redistributed by the Network as follows:</p>
        <ul>
            <li>85% is paid to qualifying node operators as a Resource Supply Reward</li>
            <li>14.5% is remitted as Network Royalties</li>
        </ul>
        </p>

        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>

            <p>The Network's currency SNT is earned by Node operators and paid for by users uploading or editing data. The cost of uploading or editing data changes dynamically according to the needs of the Network for storage space. A small percentage of these payments will be used to support development of the Network and apps, as well as those making data available for the common good. </p>
        </div>

        <h3>Resource Supply Rewards</h3>

        <p>SNT are automatically distributed by the Network to the operators of Nodes as payment for the supply of data storage, bandwidth and compute resources: these are Resource Supply Rewards.</p>
        <p>The size of Reward a Node can earn depends on how long it has been reliably and verifiably storing and serving the data it has been entrusted with, and the rate it which it can earn depends on the quantity of storage it had made available.</p>
        <p>The rate of payment will also depend on the Storage Reward Rate, which is a variable based on the quantity of free resources in the Network as well as the number of SNT in circulation. This happens automatically, and the effect is to create an incentive for those supplying resources to provide storage when the overall spare capacity is low, and a disincentive when the amount of free space is high.</p>
        <p>By adjusting the Storage Reward Rate according to the amount of free available space on the Network, users storing data are charged at the optimum rate. This supply and demand relationship results in dynamic pricing, translating into competitive prices for data storage</p>
        <div className="Pullquote">
            "By adjusting the Storage Reward Rate according to the amount of free available space on the Network, users storing data are charged at the optimum rate"
                </div>
         <p>When a user of the Network requests some content, for example by browsing a website, a number of things happen. First, the Client software makes a request for the required data chunks. This message is sent to the Sections where the chunks are stored. The Client knows which Sections to contact because they are closest to the addresses of the chunks. The Section Elders then tell the Adults storing the chunks to deliver them to the Client.</p>

        <p>Likewise when a Client wants to store data it contacts the relevant Sections. In return it receives a quote which it pays. That payment is split between the Elders and the Adults that store the chunks.</p>

       <h3> Proof of Resource</h3>
<p>Proof of Resource is a mechanism through which the Network can not only protect itself from attack or subversion &ndash; through making good behaviour of Nodes vastly more profitable than malice &ndash;  but also the underlying scheme that directly rewards the contribution of computing resources that allow it to function, and provide utility to people using it.</p>
<p>Anyone with a suitable device and sufficient bandwidth is able to supply storage resource to the Network. Nodes are continuously rewarded according to the quantity, quality and reliability of resource they provide.</p>
<p>Proof of Resource comprises firstly of a test of whether a Node that wants to join the network has sufficient bandwidth and CPU power. If it fails the test it will not be allowed to join.</p>
<p>Having passed this test, a Node begins storing and serving Network data. As it does this reliably over time, in cooperation with others in its Section, its Node Age is increased, and so its earning potential: the higher the Age the larger the reward paid.</p>
<p>Resource Supply Rewards are automatically distributed by the Network to the operators of Nodes when a Data Payment is received by the Section in which they reside. The payment is paid prorated to its Node Age.</p>
<p>Additional ongoing and randomized checks are then made by Elders to ensure that the Node is indeed maintaining chunks it is supposed to be storing. If it fails the challenge, by not providing the requested proof, its Node Age is diminished.</p>

<p>Everyone with a suitable device and sufficient bandwidth is welcome to operate a Node and thereby contribute to the Network - including data centre owners. Nodes are continuously rewarded according to the quality of the resource they provide using Node Age and other features collectively known as Proof of Resource. To minimize the risk of centralization, however, the use of huge rigs will be economically disadvantageous compared with running multiple smaller Nodes.</p>

<p>While it cannot be guaranteed, the signs are that bandwidth and storage capacity will continue to increase rapidly for the next decade or two. This means that data will never&nbsp;have to be deleted, with all public information stored for the foreseeable future.</p>

<div className="Full-width-pic" align="center">

<img className="Img1" src={earn_snt} alt="POR" align="center" />
</div>

<h3>Genesis supply</h3>
<p>At the inception of the Network a Genesis Supply of 1,288,490,189 SNT will be issued. This represents 30% of the Maximum Supply.</p>

<h3>Network Royalties</h3>
<p>Network Royalties are a mechanism through which software development, services, and data which provide value to people that use the
Network, benefit wider society, and meet the objectives of the project, can be meaningfully rewarded and sustainably funded. They are managed by the Safe Network Foundation, a Swiss non-profit which facilitates, supports, funds and promotes the research and development of the Safe Protocol, as well as enables the ongoing delivery, maintenance and adoption of the Network and its technologies. Network Royalties are paid in support of the following areas:</p>
<p><strong>Core protocol development</strong></p>
<p>Individuals, teams, and businesses that support, research, design, develop and maintain the open source software protocol of the Network and enable its ongoing operation, enhancement and security can become eligible for Network Royalties.</p>
<p><strong>Client application and service development</strong></p>
<p>Operators and developers of software applications, platforms, sites and services that run on, provide utility to, and are freely available to users of the Network can become eligible for Network Royalties via the Foundation’s Developer Programme.</p>
<p><strong>Public data accessibility</strong></p>
<p>Creators, publishers and curators of data that is made publicly and freely available for the common good, can become eligible for Network Royalties.</p>



       
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>

        <p>MaidSafeCoin &ndash; a cryptocurrency token currently available for purchase that will be exchangeable for Safe Network Token once the network is live.</p>

        <p>SNT &ndash; Safe Network Token is the Network's currency.</p>
         
        <p>Maximum Supply &ndash;  4,294,967,296 (2^32)  whole SNT, the maximum number that can be created over the Network’s lifetime.</p>
    

        <p>Storage Reward Rate - a variable used to attract or discourage Node operators in order to maintain a certain level of free space (about 30 percent of the total capacity).</p>

        <p>Proof of Resource &ndash; 1. a test of whether a Node that wants to join the network has sufficient bandwidth and CPU power. If it fails the test it will not be allowed to join. 2. Random checks are occasionally made by Elders to ensure that the Node is indeed maintaining chunks it is supposed to be storing. If it fails the challenge (by not providing the demanded proof) its Node Age is diminished.</p>

        <p>Data Payment &ndash; a payment to the network in SNT for storing or editing data. </p>
         
        <p>Resource Supply Rewards &ndash; SNT automatically distributed by the Network to the operators of Nodes as payment for the supply of data storage, bandwidth, and compute resources.</p>

        <p>Network Royalties &ndash; a mechanism through which software development, services, and data which provide value to people that use the Network, benefit wider society, and meet the objectives of the project, can be meaningfully rewarded and sustainably funded.</p>

        <p>Safe Network Foundation &ndash; a Swiss non-profit which facilitates, supports, funds and promotes the research and development of the Safe Protocol, as well as enables the ongoing delivery, maintenance and adoption of the Network and its technologies</p>
            </div>


   
      
 
   


        <div className="Full-width-pic" align="center">

            <img src={resources_and_currency} alt="resources and currency" width="70%" align="center" />
        </div>

    

       
        <p>There will be a maximum supply of  4,294,967,296 whole SNT created over the Network’s lifetime. Each whole SNT can be subdivided 10<sup>9</sup> times, thus creating a total of 4,294,967,296,000,000,000 available subunits. Safe Network Tokens will be recycled when users exchange them for Network services, which means that there is always a supply for Node operators to earn.</p>

        <p>Tokens will be emitted during an upload event and become available to either the Client or Node operator. The number of tokens emitted as the result of each event will be in proportion to the amount of data stored. Emission will continue until the Maximum Supply is reached.</p>


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
<p>Unlike cash, DBCs have owners. Also they need to be ‘reissued’ to a payee by a mint before they can be spent. This is to prevent double-spend. Reissuing is the process of checking that the DBC is valid and has not already been spent, and using a hash of the DBC (its output) to create a new DBC, or DBCs: in the reissuing process multiple DBCs can be combined into a new DBC – or several new DBCs – or a single DBC can be reissued as several new DBCs with their values adding up to the total of the original, as in the example below.
</p>

<h4>The Spentbook</h4>

<p>Before spending a DBC the Client must create a Spentbook entry. This is an immutable data item stored on Adult Nodes on the Network. It contains details of the desired transaction. When reissuing a DBC, the Mint checks to see if a Spentbook entry exists for that DBC and if so it will not perform the reissue. This ensures that once the transaction (DBC reissue) has occurred, the same DBC cannot be spent again.</p>

<p>As well as enabling private, simple and rapid transactions between individuals, DBCs are also the medium by which people can pay for uploads and for that payment to be shared between the Elders and Adults involved.</p>




        <h3>Tell me more...</h3>

        <p><a title="RFC 0061 — Safe Network Token Distribution" href="https://safenetforum.org/t/updated-rfc-0061-safe-network-token-distribution/37883" target="_blank" rel="noopener noreferrer" >RFC 0061 — Safe Network Token Distribution (2023)</a></p>

        <p><a title="blind signatures" href="https://sceweb.sce.uhcl.edu/yang/teaching/csci5234WebSecurityFall2011/Chaum-blind-signatures.PDF" target="_blank" rel="noopener noreferrer" >Blind Signatures for Untraceable Payments (White paper, David Chaum, 1998)</a></p>

        <p><a title="Digital Money and DBCs" href="https://opaque.link/post/digitalmoneydbc/" target="_blank" rel="noopener noreferrer" >Digital Money and DBCs (Jonathan 'Smuggler' Logan, 2018)</a></p>

        <p><a title="scrit" href="https://github.com/scritcash/scrit-whitepaper/blob/master/scrit-whitepaper.pdf" target="_blank" rel="noopener noreferrer" >Scrit: An Untraceable Distributed Electronic Cash System (Jonathan 'Smuggler' Logan, 2019)</a></p>

        <p><a title="pedersen" href="https://safenetforum.org/t/update-july-29th-2021/35288#pedersen-commitments-and-range-proofs-2" target="_blank" rel="noopener noreferrer" >Pedersen Commitments and Range Proofs (Safe Network Forum)</a></p>


     
        
    </div>

);

export default component;
