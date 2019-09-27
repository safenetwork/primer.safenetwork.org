import React from 'react';
import xor_addresses from '../images/xor_addresses.jpg';



const Chap4 = () => (

    <div className='chapter'>
        <h2 id='ch4'>4. The architecture of the SAFE Network</h2>

        <p>Browsing sites and storing data on the SAFE Network is just as simple as on the current Web but with greatly enhanced privacy, security and control. The SAFE Network is designed with ease of use in mind for app developers, too. Developing simple apps for SAFE is just a short step from what developers are familiar with in terms of APIs and methodologies. However, those wishing to perform more complex systems-level tasks will need to go deeper into its architecture - there are some big differences between traditional client-server systems and decentralized architectures. This chapter provides a brief introduction to the topic.</p>
        <h3>Sections</h3>
        <p>The first step in understanding the architecture of the SAFE Network is to take a brief look at distributed hash tables (DHTs).</p>
        <p>Petar Maymounkov and David Mazi&egrave;res released the Kademlia distributed hash table in 2002. The idea is that nodes form a network overlay, and are identified with a different node identification system. So a node (in this case a Vault) could have an IP address of 96.251.182.97 while it uses 17846cb8a4b53c9e44c616d2415a15984283eee975a1dac8f488dd91d0aed1cd as a unique 256-bit address in XOR space.</p>
        <p>Bitwise Exclusive OR (XOR) has the feature that each address is a unique distance from any other address in the entire address range. XOR distance bears no relation to physical distance. Indeed, two pieces of data on the network may be very close XOR-wise but be sitting on machines located on opposite sides of the world.</p>
        <p>MaidSafe developed an enhancement to Kademlia by splitting the 256-bit address range into so-called 'Disjoint Sections', or Sections for short. A 256-bit address space has 2<sup>256</sup> -1 possible addresses which is an extremely large number to manage, but it can be split up into smaller Sections based on address, with each Section being managed by a group of nodes.</p>
        <p>The nodes managing a Section will always try to reach consensus (agreement) amongst themselves on any Network event happening within that Disjoint Section. They also &lsquo;group sign&rsquo; messages that travel over the wider Network so that other nodes and/or Sections can cryptographically verify the validity of each message and action (such as groups forming, splitting and merging). These group signatures are stored in &lsquo;Data Chains&rsquo; which are secured and held by members of that Section, and by neighbouring Sections, for the life of each session.</p>
        <p>This is known as Group Consensus.</p>
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Distributed hash table &ndash; a map of where data is stored on a distributed network.</p>
        <p>XOR networking &ndash; a way of randomizing the physical location of data on a distributed network and ensuring each location is unique.</p>
        <p>Section &ndash; a subset of the addresses on the network. </p>
        <p>Group - Data is stored by a fixed-size Group of nodes that is closest (in XOR terms) to the address of the data</p>
        <p>Group Consensus - when the minimum number of nodes in a Group agree on an order of events occurring on the network. Group Consensus is achieved using the PARSEC algorithm (Chapter 7).</p>
        <p>group_size &ndash; a parameter stipulating the minimum number of nodes that can look after a Section.</p>
        <p>Bootstrapping &ndash; starting up the SAFE Network by connecting together a minimum number of nodes. Bootstrapping is also used to describe a new node (Vault) joining the Network.</p>
        <p>Bootstrap node &ndash; a node to which a new node (Vault) initially connects (via a proxy). Any node can potentially be a bootstrap node, so long as its IP address is written in the Vault&rsquo;s configuration file. </p>
        <p>Hash function &ndash; a function used to map data of arbitrary size to data of fixed size (e.g. a 256-bit string of characters) called a hash. Any change to the original data will result in a completely different hash. SAFE uses the SHA-3 hash function.</p>
        <p>Data Chain &ndash; A record of action, decisions and activity within a Section and its neighbours. It stores Section Info, Proofs and Neighbour Info for the purposes of relaying it to other Sections.</p>
        <p>Sharding &ndash; on SAFE Network this refers to the splitting of the Network into individual sections, each managed by a unique Group of nodes (Vaults).</p>
        </div>
         <p>Importantly, on joining or rejoining the SAFE Network a node cannot simply pick its own XOR address - in other words, it can&rsquo;t pick the Section it will be part of. Instead, it has to wait to be allocated to a Section that is chosen by the Network. When this occurs, the node receives the Section's Routing Table and learns the exact unique address range (and therefore the data) that it will be responsible for.</p>
        <p>Data stored on the SAFE Network is first broken into chunks, hashed and then encrypted (see Chapter 6). Those chunks are run through a hashing algorithm to create a unique 256-bit hash for each chunk. Only chunks that are exactly identical will have the same hash value. This hash serves as the XOR address on the Network where that chunk will be stored, which in turn determines the Group that will manage it.</p>
        <p>Chunks with hashes that lie within a certain address range (say 000010... to 000011...) will be secured, stored and managed by a Group of Vaults that is closest (in XOR terms) to that location. The membership of this Group will change over time as new Vaults join and others leave.</p>
        <p>When the Network starts up, the initial nodes will be responsible for the whole 256-bit address range. But as more nodes join the Network will split and form new Sections. As stillmore nodes join, the Sections will continue to split, creating standalone Disjoint Sections running individual consensus algorithms, with votes taken only by the Elders within them. This is known as &lsquo;Sharding&rsquo; and is a crucial part of the way in which the Network solves the challenges of scalability.</p>
  
        <p className="Pullquote">"The hash of a chunk of data serves as the XOR address on the Network where it will be stored, which in turn determines the Group of nodes that will manage it"</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={xor_addresses} alt="Networking layers" width="70%" align="center" />
        </div>
     
  
        <p>If the Group of nodes that manage a particular Section grows significantly in the eyes of the Network, it will split into two with each new Group managing a smaller Section (range of addresses). Likewise, when nodes leave the Network, if the number of nodes drops below a certain threshold level (specified by a parameter called group_size), the reduced size will act as a trigger for that Section to attempt to merge with a Sibling Section. At present, group_size is 8, but this is very likely to change.</p>
  
        <h3>Consensus and quorum</h3>
        <p>The nodes (Vaults) managing a Section will always try to reach consensus among themselves on network events. They also &lsquo;group sign&rsquo; messages that travel over the wider network so other nodes in other Sections can cryptographically verify the validity of each message and action. These group signatures are stored in containers called Data Chains which are secured and held by all Vaults in the group. All events such as forming, splitting and merging Sections are recorded and stored in this way.</p>
  
        <p>Any new node joining the Section can read the Data Chain. Sections also share some information about events and current state with other Sections that are close to them.</p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
        <p>In order for something to happen on the Network, for example, the storing of a data chunk at a certain address, the Group of Vaults with responsibility for that address must decide that the action is valid. If the required quorum size (for example, 5 Vaults out of 8) agree that the event is valid, it will go ahead; if not, it won't. </p>
        </div>
        <p>A record of all such events is kept in a container called a Data Chain. Any new node joining the Section can read the Data Chain. Sections also share some information about events and current state with other Sections that are close to them.</p>
           
        <p>Because of this, all events which take place within a Section are cryptographically verifiable by any node that joins the Section. These events are also stored by neighbouring Sections (those closest to the Section measured in XOR distance). An example of neighbouring Sections would be S(0000111) and S(0000110) - as the two addresses differ by a single digit. So the nodes managing a Section S(0000110) know about all the nodes managing S(0000111) as well. They also have access to the part of the Data Chain containing all the information about this Section.</p>
  
        <p className="Pullquote">"No node in the SAFE Network has a complete overview of the network"</p>
        <p>The closer a node is to a certain address space on the SAFE Network, the more information it has about data that is stored at that address. And logically the further away a Vault is, the less information it has. The bigger the Network becomes, the more secure it will get because an individual Vault will have influence over a decreasing range of addresses.</p>
        <p>An action or event happening in a Section is only valid once a quorum has approved it. A change of state needs to be signed by a certain proportion of that Group known as the quorum size. Nodes follow rules that stipulate the quorum size. In a group of eight nodes, five are needed to approve an action (such as a request by a Client to store a chunk of data); in this case, the quorum size is 62.5 percent.</p>
        <p>Notice that there are no external trackers or managers involved in any of these decisions. A Group of Vaults operates in a fully autonomous way within the Network.&nbsp; &nbsp;</p>
        <h3>Tell me more...</h3>
        <p><a href="http://www.globule.org/publi/SDST_acmcs2009.html">A Survey of DHT Security Techniques (Globule)</a></p>
        <p><a href="https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf ">Kademlia: A Peer-to-peer information system based on the XOR Metric (Whitepaper)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/MaidSafeDistributedHashTable.pdf ">Distributed Hash Table (MaidSafe Whitepaper)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/DHTbasedNATTraversal.pdf ">DHT-based NAT Traversal (MaidSafe Whitepaper)</a></p>
        <p><a href="https://en.wikipedia.org/wiki/Disjoint-set_data_structure ">Disjoint-set data structure (Wikipedia)</a></p>
        <p><a href="https://github.com/maidsafe/rfcs/blob/master/text/0037-disjoint-groups/0037-disjoint-groups.md ">Disjoint Sections (MaidSafe RFC)</a></p>
        <p><a href="https://github.com/maidsafe/routing">Routing - special storage DHT (MaidSafe repository)</a></p>
        <p><a href="https://metaquestions.me/2016/07/20/data-chains-what-why-how/">Datachains: What? Why? How? (David Irvine, Metaquestions blog)</a></p>
  

       
    </div>

);

export default Chap4;