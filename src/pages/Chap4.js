import React from 'react';
import xor_addresses from '../images/xor_addresses.jpg';



const Chap4 = () => (

    <div className='chapter'>
        <h2 id='ch4'>4. The architecture of the Safe Network</h2>
        <p>Browsing sites and storing data on the Safe Network is as simple as on the current Web but with greatly enhanced privacy, security and control. The Safe Network is designed with ease of use in mind for app developers, too. Developing simple apps for Safe is just a short step from what developers are familiar with in terms of APIs and methodologies. However, those wishing to perform more complex system-level tasks will need to go deeper into its architecture - there are some big differences between traditional client-server systems and decentralized architectures. This chapter provides a brief introduction to the topic.</p>
        <h3>Sections</h3>
        <p>The first step in understanding the architecture of the Safe Network is to take a look at distributed hash tables (DHTs).</p>
        <p>Petar Maymounkov and David Mazi&egrave;res released the Kademlia distributed hash table in 2002. The idea is that nodes form a network overlay, and are identified with a different node identification system. So a node with an IP address of 96.251.182.97 might have a 256 bit XOR address that looks like this: 17846cb8a4b53c9e44c616d2415a15984283eee975a1dac8f488dd91d0aed1cd.</p>
        <p>Bitwise Exclusive OR (XOR) has the feature that each address is a unique distance from any other address in the entire address range. XOR distance bears no relation to physical distance. Indeed, two pieces of data on the network may be very close XOR-wise but be sitting on machines located on opposite sides of the world.</p>
        <p>MaidSafe developed an enhancement to Kademlia by splitting the 256-bit address range into so-called 'Disjoint Sections', or Sections for short. A 256-bit address space has 2<sup>256</sup> -1 possible addresses which is an extremely large number to manage, but it can be split up into smaller Sections based on address, with each Section being managed by a group of Nodes (also generally known as a Section).</p>
        <p>The Nodes managing a Section must reach agreement (consensus) before authorising any mutation (Network-changing event) happening within that Section. As a collective, they can also provide ‘section authority’ to messages that travel over the wider Network so that other Nodes and/or Sections can cryptographically verify the validity of the message and the action it contains. These Section signatures are stored in ‘SectionChains’ which are secured and held by members of that Section, and by neighbouring Sections. This is known as group agreement (or local consensus).
</p>
        <div className="What-does-that-mean">
            <h3>What does that mean?</h3>
            <p>Distributed hash table &ndash; a map of where data is stored on a distributed network.</p>
            <p>XOR networking &ndash; a way of randomizing the physical location of data on a distributed network and ensuring each location is unique.</p>
            <p>Section &ndash; a subset of addresses on the network. The word Section is also applied to a group of Nodes that manage a subset of addresses.</p>
            <p>Supermajority &ndash; larger than a simple majority, so e.g 5 out of 7 rather than 4 out of 7.</p>
            <p>Elders &ndash; Nodes with decision-making powers, the oldest 7 Nodes in a Section (see Chapter 5).</p>
			<p>Adults &ndash; Nodes that perform storage duties but do not take decisions (see Chapter 5).</p>    
            <p>Infants &ndash; Nodes waiting to join the Network but not yet accepted.</p>       
            <p>Agreement &ndash;  when the required proportion of decision-making Nodes (Elders - see Chapter 5) in a Section vote an event to be valid.</p>
            <p>group_size &ndash; a parameter stipulating the minimum number of Elders in a Section (currently set at 7).</p>
            <p>Bootstrapping &ndash; starting up the Safe Network by connecting together a minimum number of Nodes. Bootstrapping is also used to describe a new Node joining the Network.</p>
            <p>Bootstrap node &ndash; a node to which a new Node initially connects. Any Node can potentially be a bootstrap node, so long as its IP address is written in the Node&rsquo;s configuration file, or, for subsequent connections, its cache. </p>
            <p>Hash function &ndash; a function used to map data of arbitrary size to data of fixed size (e.g. a 256-bit string of characters) called a hash. Any change to the original data will result in a completely different hash. Safe uses the SHA-3 hash function.</p>
            <p>SectionChain &ndash; a sequence of public keys, each signed by the previous one, that's updated every time an Elder is changed and acts as proof that the Section is valid.</p>
            <p>Sharding &ndash; on Safe Network this refers to the splitting of the Network into individual sections, each managed by a unique Group of Nodes.</p>		
        </div>
       <p>Importantly, on joining or rejoining the Safe Network a Node cannot simply pick its own XOR address - in other words, it can&rsquo;t choose the Section it will be part of. Instead, it has to wait to be allocated to a Section that is chosen by the Network. When this occurs, the Node receives the Section's Routing Table and learns the exact unique address range (and therefore the data) that it will be responsible for.</p>
        <p>Content stored on the Safe Network is first broken into chunks, hashed and then encrypted (see Chapter 6). Those chunks are run through a hashing algorithm to create a unique 256-bit hash for each chunk. Only chunks that are exactly identical will have the same hash value. This hash serves as the XOR address on the Network where that chunk will be stored, which in turn determines the Section that will manage it.</p>
        <p>Chunks with hashes that lie within a certain address range (say 000010... to 000011...) will be secured, stored and managed by the Section that is closest (in XOR terms) to that address. The membership of this Section will change over time as new Nodes join and others leave.</p>
        <p>When the Network starts up, the initial Nodes are responsible for the whole 256-bit address range. But as more Nodes join the Network will split into two Sections. As still more Nodes join, the Sections will continue to split, each managed autonomously by its Elders (Nodes with decision-making powers, see Chapter 5). This is known as &lsquo;Sharding&rsquo; and is a crucial part of the way in which the Network solves the challenges of scalability.</p>
        <p className="Pullquote">"The hash of a chunk of data serves as the XOR address on the Network where it will be stored, which in turn determines the Section that will manage it"</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={xor_addresses} alt="Networking layers" width="70%" align="center" />
        </div>
        <p><em>Each Section (range of XOR addresses) is managed by a group of Nodes. The most trusted Nodes in a Section are called Elders. Elders have voting rights and can also communicate with Elders in other Sections.</em></p>
        <p> Experiments are ongoing to find the optimum number of Nodes per Section, but it will probably be around 100.</p>
        <p>If a particular Section grows significantly in the eyes of the Network, it will split into two smaller Sections. </p>
        <p>
            If a Section finds its membership dropping below a certain limit (group_size) then it requests that Nodes be relocated to it earlier or that it has priority for Infant nodes joining the network. Given these balancing mechanisms is extremely unlikely that a Section will become too small (~7 nodes) to be viable.</p>


   

        <h3>Agreement</h3>
        <p>The Elder Nodes managing a Section must reach consensus among themselves on Network events under their control before they can happen. They also ‘Section-sign’ messages that travel over the wider Network. Elders in Sections receiving these messages need to be sure they are from valid Sections. Because Section membership is fluid, every time it changes (Elder churn) a new public key is created and signed by the current Elders using the previous key. This series of public keys, each signed by the previous one is called a SectionChain and serves to prove the validity of the Section (See BLS-DKG, Anti-Entropy, Chapter 7). </p>

        <p>SectionChains allow Section authority to be baked into the data management process, providing a simple decentralized record of which Section signed which data.</p>

        <div className="Keep-it-simple">
            <h3>Keep it simple!</h3>
            <p>In order for something to occur in their Section that might alter it, the Elder Nodes must first agree that the action is valid. A supermajority (at least 5 out of 7 votes) is required. If agreement is not reached, the actor requesting the change - say, trying to write data to the Network - must try again.  </p>
        </div>
       


        <p className="Pullquote">"No node in the Safe Network has a complete overview of the network"</p>
        <p>The closer a Node is to a certain address space on the Safe Network, the more information it has about data that is stored at that address. And logically, the further away a Node is, the less information it has. The bigger the Network becomes, the more secure it will get because an individual Node will have influence over a decreasing range of addresses.
                </p>
        <p>An action or event happening in a Section is only valid once a supermajority of Elders (5 out of 7) has approved it. </p>
       
        <h3>Tell me more...</h3>
        <p><a href="http://www.globule.org/publi/SDST_acmcs2009.html">A Survey of DHT Security Techniques (Globule)</a></p>
        <p><a href="https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf ">Kademlia: A Peer-to-peer information system based on the XOR Metric (Whitepaper, 2010)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/MaidSafeDistributedHashTable.pdf ">Distributed Hash Table (MaidSafe Whitepaper, 2010)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/DHTbasedNATTraversal.pdf ">DHT-based NAT Traversal (MaidSafe Whitepaper)</a></p>
        <p><a href="https://en.wikipedia.org/wiki/Disjoint-set_data_structure ">Disjoint-set data structure (Wikipedia)</a></p>
        <p><a href="https://github.com/maidsafe/rfcs/blob/master/text/0037-disjoint-groups/0037-disjoint-groups.md ">Disjoint Sections (MaidSafe RFC)</a></p>
<p><a href="https://safenetforum.org/t/fast-ephemeral-routing/32173">Fast Ephemeral Routing (RFC and discussion, introduces concept of SectionChains)</a></p> 

       




        </div>


);

export default Chap4;
