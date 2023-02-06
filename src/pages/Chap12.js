
import React from 'react';




const component = () => (
    <div>
        <h2 id='ch12'>12. The promise of the Safe Network</h2>



        <p>The Safe Network is still in development. While many features and functionalities have already proven themselves under test conditions others, including Safe Network Token, are still to come.&nbsp; As with any cutting-edge experimental technology, the proof of the pudding is in the eating. But let&rsquo;s assume for a moment that the Network is successful and is widely adopted for various use cases including Internet browsing, IoT connectivity, data security, personal information management, medical records and more.</p>

        <p>What would that world look like? First, most cyber attack strategies deployed today would be dead in the water. DDoS would not work as the Network would simply route around the affected nodes. Viruses and malware would be extremely limited in their depth of penetration. Ransomware would not raise a single dollar. Cyber attacks aimed at disabling national infrastructure or taking control of a driverless car would be extremely hard to pull off. Medical records and other personal data would be ours and ours alone, to share as we see fit. For users there can be a single sign-on to multiple services. XOR networking with opportunistic caching promises faster speeds, data storage should be extremely cheap and the Network will offer high levels of availability. For developers having a single storage architecture to address has the potential to simplify the systems programmer&rsquo;s job. And data deduplication would allow for both simplicity and resource savings.</p>



        <div className="Pullquote">"There would be a rebalancing of power from the data-haves to the data have-nots"</div>



        <p>The Internet giants of today would no longer be able to harvest our data without our say so, nor could government spooks eavesdrop over their shoulders. There would be a rebalancing of power from the data-haves to the data have-nots. Censorship would be impossible and data could not be erased. Because the cost of entry will be low and access unrestricted, the ongoing net neutrality debate will end, and neutrality will have won the day.</p>

        <p>People in places with poor or restricted access to information will have those blockers lifted. Some may even make a decent living earning Safe Network Token. New business models based on consent would spring up in a world where data storage and networking and eventually computing power is a commodity, and the world of information will be a much more level playing field.</p>

        <p>Isn&rsquo;t this all a bit idealistic? Well yes of course, but that&rsquo;s the nature of visions. Not everything will work as planned and we need to be hard-headed about that. Techno-utopianism is a dangerous thing. There are both predictable and unpredictable consequences of taking on the status quo, and indeed of deploying any new technology, and not all of them will be positive. Nevertheless, given where we are today, and where we are headed with the IoT, something like the Safe Network is most definitely needed to redress the power imbalance and to secure the data-driven future.</p>

        <h3>Roadmap</h3>

        <p>As with all experimental research-driven projects the rate of progress is unpredictable, and MaidSafe avoid giving hard deadlines. However, there is a roadmap at <a href="https://safenetwork.tech/timeline/">https://safenetwork.tech/timeline/</a> in which the next developments are laid out. The next MVP, Safe Fleming, will allow anyone with a computer and an internet connection to join the Network.</p>

        <h3>Glossary</h3>

        <p>Adult - A Node that has no voting rights but can store data</p>
        <p>Anti-Entropy - A way of preventing a Section from making changes while its membership is in a state of flux.</p>
        <p>Boneh-Lynn-Shacham Distributed Key Generation (BLS-DKG) - A cryptographic system that authenticates the sender of a message, allows for multiple parties to quickly come to a consensus, and can enable multi-signature transactions and n-of-k credentials</p>
        <p>Byzantine Fault Tolerance - The ability of a decentralised network to function properly even if up to a third of the nodes (plus 1) is corrupt or faulty</p>
        <p>Byzantine Reliable Broadcast - A pattern used by the Safe Protocol that forces the requester to do the work of obtaining authority from the Network before it can make a change</p>
        <p>Churn - Nodes joining and leaving a Section</p>
        <p>Client - Software that allows users to connect to the Network and make use of its services</p>
        <p>Conflict-free Data Types (CRDTs) - Data structures that obey certain mathematical rules which ensure that when multiple versions of data exist across a distributed network, eventually these will always converge onto one ‘true’ version</p>
        <p>Data Map - A record of content chunks and their corresponding locations on the Network. Only users in possession of the Data Map can recreate the file</p>
        <p>Data Payment - A one-time payment made upfront for data storage</p>
        <p>Digital Bearer Certificate (DBC) - A a unique ‘digital voucher’ which has value by virtue of the fact it has been provably issued by a trusted authority as part of an economic system</p>
        <p>Distributed hash table – a map of where data is stored on a distributed network</p>
        <p>Elder - A Node with voting rights in its Section. Elders are simply those nodes with the greatest Node Age in the Section – a subset of addresses on the network. The word Section is also applied to a group of Nodes that manage a subset of addresses</p>
        <p>Genesis Supply - At the inception of the Network 1,288,490,189 will be created. This represents 30% of the Maximum Supply</p>
        <p>Infant - A Node waiting to be allowed to join the Network</p>
        <p>MaidSafeCoin - A cryptocurrency token currently available for purchase that will be exchangeable for Safe Network Token once the Network is live</p>
        <p>Maximum Supply - Total number of whole SNT created over the Network’s lifetime: 4,294,967,296</p>
        <p>Network Royalties - A mechanism through which software development, services, and data which provide value to people that use Network, benefit wider society, and meet the objectives of the project, can be can be meaningfully rewarded and sustainably funded</p>
        <p>Network Royalties Pool - 14.5% of the Maximum Supply will be allocated to a Network Royalties Pool and distributed as Network Royalties.</p>
        <p>Node - A machine that connects with others using the Safe Protocol to form the Network. Nodes can be Infants (waiting to join), Adults (storage providers) or Elders (decision makers) depending on their Node Age</p>
        <p>Node Age - A measure of the trustworthiness of a Node. After the initial connection, a Node gets moved at random from Section to Section, building its reputation or Node Age. Once its Node Age reaches a certain value it can be an active participant in the decisions of the Section as an Elder.</p>
        <p>Proof-of-Resource – A system that rewards Nodes based on the quality of the service they provide, making it economically disadvantageous for them to misbehave</p>
        <p>qp2p - A networking library that enables peers on a P2P network to communicate securely</p>
        <p>Resource Supply Rewards – Payment is distributed by the Network to the operators resource-providing Nodes when a Data Payment is received by the Section in which they reside</p>
        <p>Safe Network - An autonomous data network built on the Safe Protocol that supports a rich application ecosystem to be built on top and utilised by consumers</p>
        <p>Safe Network Token - The currency of the Safe Network, earned by storing data, spent by uploading data.</p>
        <p>Safe Protocol - A collection of opensource algorithms, libraries and components that allows computers to form an autonomous data network</p>
        <p>Section - A subset of addresses on the network; The word Section is also describes group of Nodes that manage such a subset of addresses</p>
        <p>SectionAuthorityProvider (SAP) - A file providing up-to-date information about a Section and its Elders</p>
        <p>SectionKey - A BLS key used to authorise decisions that mutate the Network and to sign inter-Section messages; A new SectionKey is generated every time there is a change of Elders</p>
        <p>SectionTree - A tree of all the SectionKeys linking back to the first Section.</p>
        <p>Self-Encryption - Content uploaded to the Safe Network is broken up into chunks. These chunks are then hashed, encrypted locally using the AES-256 encryption algorithm and the hashes of neighbouring chunks. Because content is encrypted and decrypted locally, there is no need for keys to leave the user’s machine.</p>
        <p>Storage Reward Rate - An adjustable factor that determines the rate of pay of participating Nodes; it is increased when more storage is needed, decreased when there is an excess of storage space</p>
        <p>Supermajority - Larger than a simple majority; 5 out of 7 rather than 4 out of 7</p>
        <p>Token Emission - 3,167,866,884 SNT, representing 70% of the Maximum Supply, will be emitted over time, at a rate matching growth of data stored on the Network</p>
        <p>XOR address - A unique 256-bit number; every entity on the Network has an XOR address</p>
        <p>A note on capitalisations</p>
<p>For clarity, this primer capitalises words when used specifically in the Safe Network context. For example, ‘Node’ refers specifically to a connected device on the Safe Network, whereas ‘node’ is the general case.</p>



        
        <h2>About MaidSafe</h2>



        <p>MaidSafe is a company founded by David Irvine in 2006 with a mission to provide security and privacy for everyone by building a better digital world. This new platform is the Safe Network, which is the world&rsquo;s first autonomous and decentralized data network. The Network is made up of the unused hard drive space, processing power and bandwidth of its users. The Safe Network will include storage, peer-to-peer communications, transactions, Internet functionality and a wide variety of apps to name a few of its features. This paper was written and produced by members of the Safe Network Forum independently of MaidSafe.&nbsp;</p>

        <p>Join the debate at <a href="https://safenetforum.org/">https://safenetforum.org</a>&nbsp;</p>

        <p>Website: <a href="http://www.safenetwork.tech/">www.safenetwork.tech</a></p>

        <p>Github: <a href="https://github.com/maidsafe">https://github.com/maidsafe</a></p>

        <p>Twitter: <a href="https://twitter.com/maidsafe">https://twitter.com/maidsafe</a></p>

        <p>Twitter: <a href="https://twitter.com/maidsafe">https://twitter.com/safenetworktech</a></p>
        
        <p>Mastodon: <a href="https://mastodon.social/safenetwork">https://mastodon.social/safenetwork</a></p>

        <p>Reddit: <a href="https://reddit.com/r/safenetwork">https://reddit.com/r/safenetwork</a></p>

        <p>Telegram: <a href="https://t.me/safenetwork">https://t.me/safenetwork</a></p> 
</div>
);

export default component;
