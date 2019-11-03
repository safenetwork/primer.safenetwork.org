import React from 'react';



const Chap7 = () => (

    <div className='chapter'>
        <h2 id='ch7'>7. PARSEC consensus algorithm</h2>
  
        <h3>Decentralized consensus</h3>
  
        <p>Truly decentralized networks can have no master node to judge what is true or valid and what is not. Instead, the nodes that make up the Network must come to an agreement among themselves about which of many possible versions of &ldquo;the truth&rdquo; they will accept.</p>
  
        <p>Discrepancies can arise for many reasons, but a frequent cause is the physical distance between nodes. As an example, let&rsquo;s say node Alice in Sydney relays a message to node Bob in Edinburgh. Before the signal can travel halfway around the world, node Carol in London transmits a different message to Bob. Because London is much closer to Edinburgh, Carol's message arrives before Alice's, even though it was sent later. Without a central time-clock, how can we decide which is the correct order of events? It's important that the Network picks wisely one version of events and sticks with it, since all future events on the Network will be affected by its decision. It does this by asking nodes to report on what they saw, deriving the most likely course of events and then finally propagating that version around the Network.</p>
  
        <p>In our example, the nodes that make up the Network must vote on which message - Alice's or Carol's - they will accept as being sent first, based on information about the two events that each has received. What&rsquo;s more, the Network must account for the fact that a certain proportion of the nodes may be unreliable or even actively malicious and yet still converge on one rules-based version of the truth. This is called Byzantine Fault Tolerance (BFT). The way the maths works out, up to one-third of the nodes could be corrupt (Byzantine) and a Network with a good BFT consensus algorithm will still function reliably. (If more than a third are corrupt, BFT becomes mathematically impossible according to current theory.)</p>
  
        <h3>Proof of Work</h3>
  
        <p>The Bitcoin blockchain uses Proof of Work to achieve consensus and to prevent the problem of double-spend &ndash; being able to spend the same coin twice. Miners battle to verify a block of transactions. If there are two simultaneous winners the chain will split and for a time there are two versions of the truth, i.e. two chains emanating from the disputed block. Ultimately, though, after a few blocks have been added one chain will be longer than the other, and it is this chain that will be accepted as the true state. The failed blocks go back into the pot to be verified again. This is how the Bitcoin blockchain (and most other blockchains) achieves consensus. This mechanism also offers a defence against the 51 percent attack (see Chapter 12).</p>
  
        <p>Since miners are (ideally) independent operators distributed all over the world, and because it takes a lot of energy to verify a block, it is extremely difficult and expensive to deliberately influence the growth of one sub-chain over another. Difficult but not impossible: if one miner or mining group manages to consolidate more than half of the mining power, that miner can then spend some Bitcoin, split the chain and then grow the sub-chain that does not contain the transaction. Effectively this rogue miner is rewriting history. Once that sub-chain is accepted as &lsquo;the truth&rsquo; the original transaction officially never happened according to the ledger, and the miner is free to spend the coins again.</p>
        <p>This is the Sybil attack, also known as the 51 percent attack because it becomes possible when one entity owns more than half of the mining power.</p>
        <p>While such attacks have been successfully launched against some cryptocurrencies, Ethereum Classic being one example, Proof of Work has generally been rather effective in protecting against 51 percent attacks and at achieving BFT consensus across the network. But it is slow, massively energy intensive and it doesn&rsquo;t scale. Also, the consensus is probabilistic: after some time, you might be 99.9 percent sure that all nodes agree on network state, but never 100 percent.</p>
        <h3>Enter PARSEC</h3>
  
        <p>By contrast, the consensus algorithm used by the SAFE Network, PARSEC (Protocol for Asynchronous, Reliable, Secure and Efficient Consensus) is massively scalable, able to handle the millions of parallel transactions per second demanded by IoT-type applications, Byzantine fault tolerant, and provides 100 percent consensus that's mathematically provable. In time, all Elders (see Chapter 5) will agree on the same order of events, no matter what the physical distance between them and despite disparities between their resources, without requiring their &lsquo;votes&rsquo; to be fielded in any particular order (that&rsquo;s what the word &lsquo;asynchronous&rsquo; means). Because it is not blockchain-based, the SAFE Network can take advantage of some features developed for directed acyclic graphs (DAGs) such as gossip and concrete and common coins.</p>
  
        <p>Gossip is a protocol used to establish asynchronous communication between nodes. Briefly, every time a node observes an event on the Network (e.g. the storage of a chunk of data, a Safecoin transaction, a GET request) it transmits this information to another randomly selected node, which in turn passes it on to another node, and so on. As each node learns of a new event, it adds it to its gossip graph, which is a record of changes on the Network. Eventually, by this process of tittle-tattle everyone gets to hear about what everyone else has seen and done &ndash; and very quickly: Gossip requires significantly fewer connections between nodes than all-to-all communication schemes.</p>
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Byzantine fault tolerance - the ability of a decentralized network to function properly even if up to a third of the nodes (plus 1) is corrupt or faulty.</p>
        <p>Asynchronous &ndash; Not time-dependent. PARSEC does not need to rely on strict order or timing of arrival of signals.</p>
        <p>Gossip - a method of rapidly transmitting information around a decentralized network.</p>
        <p>Gossip graph - a record of events on the network and the order in which they happened. Each Elder holds its own gossip graph, and consensus is reached when Elders' gossip graphs match.</p>
        <p>Valid block - an event that has been recorded by at least two thirds of the Elders.</p>
        <p>Concrete Coin - A protocol for forcing consensus in a random way in the event of a tie.</p>
        <p>Common Coin - A more sophisticated way of forcing consensus than Concrete Coin.</p>
        <p>Malice Detection - detecting and ejecting nodes that are acting suspiciously.</p>
     </div>
   
        <p>Gossip may spread like wildfire, but who do we believe? Bob, our Edinburgh node, is adamant that he saw Carol&rsquo;s message before Alice's, but then a fourth node Dave in Jakarta says that he passed the message to Alice ages before he heard from Carol and so Alice's message was the first and true version - and so on. Each node sees a different version of events. This thorny problem is solved by a system of voting.</p>
  
        <p>In parallel, each Elder casts a single vote for its own version of an event. Via gossip, the Elders first decide which of these votes is credible (called a valid block) based on whether they are known about through gossip by two-thirds of the total number of Elders (a supermajority).</p>
  
        <p>PARSEC then begins a stepwise process called Binary Value Gossip (BV Gossip) whereby each Elder decides whether that particular valid block is worthy of consideration (true or false). As this process continues, any Elders that are seen to be acting maliciously are flagged up and will be ejected from the Network if consensus for that action is reached.</p>
  
        <p>Eventually, after a number of steps, a common story will be arrived at concerning the order in which events occurred on the Network and the Elders' gossip graphs will all be identical. This version of events will be accepted as the true state. To prevent the outcome of the voting process being predictable, PARSEC uses a mechanism called a Concrete Coin which is &lsquo;flipped&rsquo; to decide a vote one way or another by giving temporary leadership to one of the responsive voting nodes, that node being selected at random. The Concrete Coin protocol favours &lsquo;honest&rsquo; reliable nodes &ndash; those that respond to gossip when requested - over unreliable and possible malicious ones. Even if the temporary leader goes offline consensus will still be reached.</p>
        <div className="Keep-it-simple">
            <h3>Keep it simple</h3>
            <p>PARSEC is a way for voting nodes (Elders) to decide what has happened on the Network, even if there are many different possible versions. It does this through gossip, in which an Elder passes an observation to another randomly selected Elder which in turn tells that first Elder its own version of events. The Elders then vote on their versions of events, eliminating less popular versions as they go. Eventually, they will arrive at one version of events which will be accepted as the true one. This will work even if up to one-third of the Elders in a Section are malicious. PARSEC also includes Malice Detection capabilities to spot and eject Elders that are acting suspiciously.</p>
        </div>
        <p>It can be proven that ultimately all trustworthy nodes will have identical gossip graphs &ndash; i.e. they will agree on an order of events &ndash; even if up to one-third of the total number are malicious.</p>
        <p>PARSEC is used by Elders as they vote on events within their Section. Once consensus has been reached within a Section, the decision is then propagated across the entire network. PARSEC includes Malice Detection capabilities in which Elders randomly query Vaults and check their responses. If the response is not as expected the Elders may vote to eject that Vault from the network.</p>
        <p>Unlike PoW, however, PARSEC does not offer strong protection from Sybil attacks. That is dealt with by a combination of Node Ageing and random allocation of Network address to a joining Vault (See Chapter 6).</p>
        <p>Asynchronous Byzantine Fault Tolerance (ABFT) represents the highest level of security that a decentralized network can achieve. If a network achieves ABFT, it means its nodes are guaranteed (mathematically) to reach consensus. Importantly it does not rely on any notion of time. Instead it is based on records of events stored in the gossip graphs of each node. Introducing a time property in a decentralized network inevitably requires some centralization, such as deploying a time server, and adds significantly to complexity.</p>
        <p>At the time of writing, PARSEC represents the cutting edge of fully ABFT algorithms, with work ongoing to finalise its fully asynchronous nature by replacing the Concrete Coin workaround with a more sophisticated 'Common Coin' mechanism. This will involve incorporating the Boneh-Lynn-Shacham (BLS) signature scheme into the routing process to allow multisig transactions between nodes to securely verify quorum. A new white paper will be published in due course.</p>
  
        <h3>Tell me more &hellip;</h3>
        <p><a title="parsec" href="https://docs.maidsafe.net/Whitepapers/pdf/PARSEC.pdf" target="_blank" rel="noopener noreferrer" >Protocol for Asynchronous, Reliable, Secure and Efficient Consensus (PARSEC) (MaidSafe Whitepaper)</a></p>
        <p><a title="Signature-Free Asynchronous Byzantine" href="https://hal.inria.fr/hal-00944019/document" target="_blank" rel="noopener noreferrer" >Signature-Free Asynchronous Byzantine Consensus with t &lt; n/3 and O(n2) Messages (Mostefaoui et al) </a></p>
        <p><a title="eth classic" href="https://medium.com/datadriveninvestor/ethereum-classic-hacked-by-51-attack-f62c70cadd5c" target="_blank" rel="noopener noreferrer" >Ethereum Classic &ldquo;HACKED&rdquo; by 51% attack! (Medium)</a></p>
        <p><a title="parsec" href="https://www.youtube.com/watch?v=VmFUUsGaWQU" target="_blank" rel="noopener noreferrer" >A Deep Dive into PARSEC | Concrete Coin (YouTube)</a></p>
        <p><a title="bft" href="https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Distributed%20Computation/BYZANTYNE%20AGREEMENT%20MADE%20TRIVIAL.pdf" target="_blank" rel="noopener noreferrer" >Byzantine Agreement, Made Trivial (Micali) (MIT)</a></p>
        <p><a title="honeybadger" href="https://medium.com/poa-network/poa-network-how-honey-badger-bft-consensus-works-4b16c0f1ff94" target="_blank" rel="noopener noreferrer" >POA Network: How Honey Badger BFT Consensus Works (Medium)</a></p>
        <p><a title="parsec" href="https://medium.com/safenetwork/parsec-the-release-of-the-code-91d514faaa71" target="_blank" rel="noopener noreferrer" >PARSEC: The Release of the Code (Medium)</a></p>
        <p><a title="BLS" href="https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham" target="_blank" rel="noopener noreferrer" >Boneh-Lynn-Shacham (Wikipedia)</a></p>
        
    </div>

);

export default Chap7;
