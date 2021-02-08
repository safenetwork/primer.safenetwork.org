import React from 'react';
import xor_addresses from '../images/xor_addresses.jpg';



const Chap4 = () => (

    <div className='chapter'>
        <h2 id='ch4'>4. The architecture of the Safe Network</h2>
        <p>Browsing sites and storing data on the Safe Network is as simple as on the current Web but with greatly enhanced privacy, security and control. The Safe Network is designed with ease of use in mind for app developers, too. Developing simple apps for Safe is just a short step from what developers are familiar with in terms of APIs and methodologies. However, those wishing to perform more complex system-level tasks will need to go deeper into its architecture - there are some big differences between traditional client-server systems and decentralized architectures. This chapter provides a brief introduction to the topic.</p>
        <h3>Sections</h3>
        <p>The first step in understanding the architecture of the Safe Network is to take a look at distributed hash tables (DHTs).</p>
        <p>Petar Maymounkov and David Mazi&egrave;res released the Kademlia distributed hash table in 2002. The idea is that nodes form a network overlay, and are identified with a different node identification system. So a Node could have an IP address of 96.251.182.97 while it uses 17846cb8a4b53c9e44c616d2415a15984283eee975a1dac8f488dd91d0aed1cd as a unique 256-bit address in XOR space.</p>
        <p>Bitwise Exclusive OR (XOR) has the feature that each address is a unique distance from any other address in the entire address range. XOR distance bears no relation to physical distance. Indeed, two pieces of data on the network may be very close XOR-wise but be sitting on machines located on opposite sides of the world.</p>
        <p>MaidSafe developed an enhancement to Kademlia by splitting the 256-bit address range into so-called 'Disjoint Sections', or Sections for short. A 256-bit address space has 2<sup>256</sup> -1 possible addresses which is an extremely large number to manage, but it can be split up into smaller Sections based on address, with each Section being managed by a group of nodes.</p>
        <p>The nodes managing a Section will always try to reach consensus (agreement) amongst themselves on any Network event happening within that Section. They also &lsquo;group sign&rsquo; messages that travel over the wider Network so that other nodes and/or Sections can cryptographically verify the validity of each message and action (such as groups forming and splitting). These group signatures are stored in &lsquo;SectionProofChains&rsquo; which are secured and held by members of that Section, and by neighbouring Sections, for the life of each session. This is known as Group Consensus.</p>
        <div className="What-does-that-mean">
            <h3>What does that mean?</h3>
            <p>Distributed hash table &ndash; a map of where data is stored on a distributed network.</p>
            <p>XOR networking &ndash; a way of randomizing the physical location of data on a distributed network and ensuring each location is unique.</p>
            <p>Section &ndash; a subset of the addresses on the network. </p>
            <p>Group - Data is stored by a fixed-size Group of nodes that is closest (in XOR terms) to the address of the data</p>
            <p>Group Consensus - when the minimum number of nodes in a Group agree on the validity of events occurring on the Network.</p>
            <p>group_size &ndash; a parameter stipulating the minimum number of nodes that can look after a Section.</p>
            <p>Bootstrapping &ndash; starting up the Safe Network by connecting together a minimum number of nodes. Bootstrapping is also used to describe a new Node joining the Network.</p>
            <p>Bootstrap node &ndash; a node to which a new Node initially connects. Any Node can potentially be a bootstrap node, so long as its IP address is written in the Node&rsquo;s configuration file, or, for subsequent connections, its cache. </p>
            <p>Hash function &ndash; a function used to map data of arbitrary size to data of fixed size (e.g. a 256-bit string of characters) called a hash. Any change to the original data will result in a completely different hash. Safe uses the SHA-3 hash function.</p>
            <p>SectionProofChain &ndash; a sequence of public keys, each signed by the previous one, that's updated every time an Elder is changed and acts as proof that the Section is valid.</p>
            <p>Sharding &ndash; on Safe Network this refers to the splitting of the Network into individual sections, each managed by a unique Group of Nodes.</p>
            <p>Elders &ndash; nodes with decision-making powers, typically the oldest nodes in a Section (see Chapter 5).</p>
        </div>
        <p>Importantly, on joining or rejoining the Safe Network a node cannot simply pick its own XOR address - in other words, it can&rsquo;t choose the Section it will be part of. Instead, it has to wait to be allocated to a Section that is chosen by the Network. When this occurs, the node receives the Section's Routing Table and learns the exact unique address range (and therefore the data) that it will be responsible for.</p>
        <p>Data stored on the Safe Network is first broken into chunks, hashed and then encrypted (see Chapter 6). Those chunks are run through a hashing algorithm to create a unique 256-bit hash for each chunk. Only chunks that are exactly identical will have the same hash value. This hash serves as the XOR address on the Network where that chunk will be stored, which in turn determines the Group that will manage it.</p>
        <p>Chunks with hashes that lie within a certain address range (say 000010... to 000011...) will be secured, stored and managed by a Group of Nodes that is closest (in XOR terms) to that location. The membership of this Group will change over time as new Nodes join and others leave.</p>
        <p>When the Network starts up, the initial nodes will be responsible for the whole 256-bit address range. But as more nodes join the Network will split and form new Sections. As still more nodes join, the Sections will continue to split, creating standalone Disjoint Sections running individual consensus algorithms, with votes taken only by the Elders (nodes with decision-making powers, see Chapter 5) within them. This is known as &lsquo;Sharding&rsquo; and is a crucial part of the way in which the Network solves the challenges of scalability.</p>
        <p className="Pullquote">"The hash of a chunk of data serves as the XOR address on the Network where it will be stored, which in turn determines the Group of nodes that will manage it"</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={xor_addresses} alt="Networking layers" width="70%" align="center" />
        </div>
        <p> Experiments are ongoing to find the optimum group size, but it will probably be around 100.</p>
        <p>If the group of nodes that manage a particular Section grows significantly in the eyes of the Network, it will split into two with each new group managing a smaller Section (range of addresses). In previous iterations small groups would merge into larger ones, but this mechanism was found to be complex and unnecessary.</p>
        <p>
            If a Section finds its membership decreasing below a certain limit then it requests that nodes be relocated to it earlier or that it gets priority for Infant nodes joining the network. Given these balancing mechanisms is extremely unlikely that a Section will become too small (~7 nodes) to be viable.</p>


   

        <h3>Consensus and quorum</h3>
        <p>The nodes (Nodes) managing a Section must reach a consensus among themselves on Network events under their control before they can happen. They also &lsquo;group sign&rsquo; messages that travel over the wider Network. Elders in Sections recieving these messages need to be sure they are from from valid Sections. Because Section membership is fluid, every time it changes (Elder churn) a new public key is created and signed by the current Elders using the previous key. This series of public keys, each signed by the previous one is called a SectionProofChain and serves to prove the validity of the Section (See BLS-DKG, Lazy Section Updates, Chapter 7). </p>

        <p>Previous iterations of the Network used a more complex arrangement called Data Chains which recorded both the storage of the data and the chain of authorization. SectionProofChains allow Section authority to be baked into the data management process, providing a simple decentralized record of which Section signed which data.</p>

        <div className="Keep-it-simple">
            <h3>Keep it simple!</h3>
            <p>In order for something to happen on the Network, for example, the storing of a data chunk at a certain address, the Group of Nodes with responsibility for that address must decide that the action is valid. If the required quorum size (for example, 50 Nodes out of 80) agree that the event is valid, it will go ahead; if not, it won't. </p>
        </div>
       


        <p className="Pullquote">"No node in the Safe Network has a complete overview of the network"</p>
        <p>The closer a node is to a certain address space on the Safe Network, the more information it has about data that is stored at that address. And logically, the further away a Node is, the less information it has. The bigger the Network becomes, the more secure it will get because an individual Node will have influence over a decreasing range of addresses.
                </p>
        <p>An action or event happening in a Section is only valid once a quorum has approved it. A change of state needs to be signed by a certain proportion of Elders known as the quorum size. Nodes follow rules that stipulate the quorum size. If in a group of 7 nodes 5 are required to approve an action, the quorum size would be 5/7 or 71.4 percent.</p>
        <p>Notice that there are no external trackers or managers involved in any of these decisions. A Group of Nodes operates in a fully autonomous way within the Network.&nbsp; &nbsp;</p>
        <h3>Tell me more...</h3>
        <p><a href="http://www.globule.org/publi/SDST_acmcs2009.html">A Survey of DHT Security Techniques (Globule)</a></p>
        <p><a href="https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf ">Kademlia: A Peer-to-peer information system based on the XOR Metric (Whitepaper)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/MaidSafeDistributedHashTable.pdf ">Distributed Hash Table (MaidSafe Whitepaper)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/DHTbasedNATTraversal.pdf ">DHT-based NAT Traversal (MaidSafe Whitepaper)</a></p>
        <p><a href="https://en.wikipedia.org/wiki/Disjoint-set_data_structure ">Disjoint-set data structure (Wikipedia)</a></p>
        <p><a href="https://github.com/maidsafe/rfcs/blob/master/text/0037-disjoint-groups/0037-disjoint-groups.md ">Disjoint Sections (MaidSafe RFC)</a></p>
        <p><a href="https://github.com/maidsafe/routing">Routing - special storage DHT (MaidSafe repository)</a></p>
        <p><a href="https://safenetforum.org/t/fast-ephemeral-routing/32173">Fast Ephemeral Routing (RFC and discussion, introduces concept of SectionProofChains)</a></p>

       




        </div>


);

export default Chap4;
