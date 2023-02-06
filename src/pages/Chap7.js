import React from 'react';



const Chap7 = () => (

    <div className='chapter'>
        <h2 id='ch7'>7. Network-wide consensus not required</h2>
  
        <h3>A hard problem</h3>
  
        <p>Truly decentralized networks can have no master node or oracle to judge what is true or valid and what is not. Instead, the nodes that make up the Network must come to an agreement among themselves about which of many possible versions of &ldquo;the truth&rdquo; they will accept.</p>
  
        <p>Discrepancies can arise for many reasons, but a frequent cause is the physical distance between nodes. As an example, let&rsquo;s say node Alice in Sydney relays a message to node Bob in Edinburgh. Before the signal can travel halfway around the world, node Carol in London transmits a different message to Bob. Because London is much closer to Edinburgh, Carol's message arrives before Alice's, even though it was sent later. Without a central time-clock, how can we decide which is the correct order of events? </p>
  
        <p>In our example, the nodes that make up the network must vote on which message - Alice's or Carol's - they will accept as being sent first, based on information about the two events that each has received. What&rsquo;s more, the Network must account for the fact that a certain proportion of the nodes may be unreliable or even actively malicious and yet still converge on one rules-based version of the truth. This is called Byzantine Fault Tolerance (BFT). The way the maths works out, up to one-third of the nodes could be corrupt or unreliable (Byzantine) and a BFT network will still function reliably. (If more than a third are corrupt, BFT becomes mathematically impossible according to current theory.)</p>

        <h3>Decentralized conflict resolution</h3>
  
        <p>The Bitcoin blockchain uses Proof of Work (PoW) to solve these problems of achieving decentralized consensus over the ordering of events to prevent the problem of double-spend &ndash; being able to spend the same coin twice &ndash; and Byzantine behaviour. Miners battle to verify a block of transactions. If there are two simultaneous winners the chain will split and for a time there are two versions of the truth, i.e. two chains emanating from the disputed block. Ultimately, though, after a few blocks have been added one chain will be longer than the other, and it is this chain that will be accepted as the true state. </p>
        <p>PoW has proved largely effective against the Sybil attack, also known as the 51 percent attack, where one entity owns more than half of the mining power, but it is slow, massively energy-intensive and it doesn&rsquo;t scale. Also, the consensus is probabilistic rather than deterministic: after some time, you might be 99.9 percent sure that all nodes agree on network state, but never 100 percent.</p>
        <p>Other blockchains such as ethereum use Proof of Stake (PoS). While much more environmentally friendly, there is a tradeoff in terms of equitability in that larger holders of the currency have more power.</p>
        <p>The Safe Network does not use PoW or PoS for consensus. Instead it uses Proof of Resource (Chapter 5) plus a combination of lightweight mechanisms that together achieve the same goal, including Boneh-Lynn-Shacham Distributed Key Generation (BLS-DKG), Byzantine Reliable Broadcast (BRB), Conflict-free Data Types (CRDTs) and constant tests that nodes are reliable.</p>
		
        <h3>Boneh-Lynn-Shacham Distributed Key Generation</h3>

        <p>BLS-DKG is a cryptographic signature scheme that allows the recipient of a signed message to verify with certainty that the sender is authentic since there can only ever be one valid signature for any public-key&ndash;message combination. This is obviously extremely useful in a decentralized network where there is no central source of authority and only a limited amount is known about other players. The 'distributed key generation' (DKG) part of the name refers to the fact that a certain number of parties (a threshold) must participate in generating a public&#8211;private key pair, with the private key split up and distributed between them. Since they each hold a part of the private key, all parties must also participate in order to decrypt a message encoded with the public key, making BLS a great fit for Elders voting on decisions in a Section, or indeed for multisig transactions where more than one signature is required before payment.</p>

        <p>BLS-DKG has other desirable properties too, including small-sized keys and signatures which make for efficient and fast operations and it can operate asynchronously. In short, it is a quick, secure and reliable way to obtain agreement in certain circumstances without having to rely on a full Asynchronous Byzantine Fault Tolerant (ABFT) consensus algorithm. </p> 

        
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Byzantine Fault Tolerance &ndash;  the ability of a decentralized network to function properly even if up to a third of the nodes (plus 1) is corrupt or faulty.</p>
        <p>Byzantine Reliable Broadcast &ndash;  A pattern used by the Safe Network that forces the requester to do the work of obtaining authority from the network before it can make a change. </p>
        <p>Asynchronous &ndash; Not time-dependent. A system that supports asynchronicity should come to consensus no matter what order the various messages arrive in.</p>
        <p>Proof of Work &ndash; the consensus algorithm used by the Bitcoin blockchain and others to confirm that transactions are valid and to deter attacks.</p>
        <p>Proof of Stake &ndash; the consensus algorithm used by the Etherum blockchain and others in which voting power is proportional to wealth</p>        
        <p>Proof of Resource &ndash; ongoing tests that a Node can provide the required resources to the Network.</p>
        <p>Consensus &ndash; on Safe Network this means agreement on the order of events plus agreement on the validity of events.</p>                
        <p>BLS-DKG &ndash; a cryptographic system that authenticates the sender of a message, allows for multiple parties to quickly come to agreement, and can enable multi-signature transactions.</p> 
        <p>CRDTs &ndash; Data structures that obey certain mathematical rules which ensure that when multiple versions of data exist across a distributed network, eventually these will always converge onto one 'true' version.</p>
        <p>Anti-Entropy &ndash; A way of preventing a Section from making changes while its membership is in a state of flux.</p>
        <p>Malice Detection &ndash;  detecting and ejecting nodes that are acting suspiciously.</p>
        <p>Membership &ndash; process by which Elders keep track of the Adults and other Elders in their Section so they can handle new joins, splits, churn and promotions.</p>
        <p>Handover &ndash; process by which Elders pass their information to a newly joined Elder.</p>
        <p>MVBA &ndash; the Multi Values Byzantine Agreement protocol (MVBA) is a way of coming to agreement whrn there is more than one proposal for reaching consensus.</p>
        <p>VCBC &ndash; Verifiable Consistent Broadcast is a broadcast protocol that allows all Elders to agree on the validity of a message sent between a Node and the Network.</p>
        <p>ABBA &ndash; process by which Elders keep track of the Adults and other Elders in their Section so they can handle new joins, splits, churn and promotions.</p>
     </div>


		<h3>Byzantine Reliable Broadcast </h3>
	<p>Byzantine Reliable Broadcast guarantees that all processes in a distributed system deliver the same set of messages, even if up to a third are Byzantine (unreliable or malicious). In the Safe Network its use allows us to force the requester to do the work of obtaining Section Authority. The requester (say, a Client wanting to store a data chunk) is responsible for aggregating the individual signature shares from the Elders in a Section to create a SectionSignature, after which the requested operation becomes valid and can be resubmitted to the Section.</p>
       
        <p>The BRB setup adopted by Safe Network derives from the AT2 distributed networking ABFT algorithm, which supports simple cryptocurrency transactions without needing network-wide consensus. However, the Safe Network does not use AT2 for such transactions, it uses DBCs instead (see Chapter 8).</p> 

        <p>The Safe Network uses BRB to quickly enforce consensus at a Section-wide rather than a Network-wide level, and to push a lot of the work involved onto the Client. So if a Client wants to store or alter data held by a Section, it asks the Elders to sign an agreement. The Elders check the logic and then each sends back a signed agreement (a BLS key share). The Client collects these key shares and once a supermajority has arrived (say 5 out of 7 Elders agree) it is a valid key and sends its request plus the key back to the Elders. The Elders now see a valid message "Please deduct from my account the sum of X" and carry out the command. The Client can perform this task of aggregating votes much more efficiently than the Elders, who would otherwise have to come to agreement between themselves via a resource-intensive consensus mechanism.</p>
        
        <p>If the Client tries to talk to only a few Elders or to the same Elder twice it will fail to gather sufficient votes.</p>

     
		
		
		
		
		
		<h3>Anti-Entropy</h3>
		<p>A major hurdle that any decentralized network which will experience churn must overcome is keeping the nodes up to date with the network’s current state. Who has joined and who has left? Who are the current Elders in any given section? Elders are by definition relatively dependable and churn amongst them is minimal, but Safe Network is asynchronous and communications between section Elders and external actors may be few and far between. The Elders in a section may have churned many times between contacts and the external actor's information may be out of date.</p>

<p>It’s vital actors wishing to make changes on the Network have an up-to-date ‘understanding’ of the Section before they are allowed to do so, otherwise data could be written to Elders that no longer exist.</p>

<p>Entropy, or disorder, is a characteristic of a constantly changing network. We cannot reduce it but we can wait for periods of stability among Elders before allowing a change in their Section. Anti-Entropy (AE) is the mechanism for doing this. AE forces all Nodes that want to perform data operations on the Network to prove the information they hold on the Network structure is up to date (see Chapter 9).</p>


    
        <h3>Conflict-free Replicated Data Types (CRDTs)</h3>
        
           
        <p>There's another way to ensure consistency asynchronously across a decentralized network without consensus: CRDTs. With CRDTs consistency is inherent in the data structure itself. If different versions of the same data exist across a set of connected nodes (or replicas as they are known in CRDT-speak), they will all eventually converge on the same state. If some data is changed on an offline replica, as soon as connection is re-established this change will propagate to all other replicas, even if the same data was changed on another replica in its absence. At the end of the process, everyone will have the exact same version.</p>
        <p>At the start of this chapter we mentioned the problem of users sending messages from different places and the difficulty of agreeing their order. With CRDTs it is not necessary to try to enforce an order or agree on it before changes can be applied. If Bob sees Alice's message before Carol's then that's the order that will be replicated around the network. No questions asked. If Bob receives Alice's and Carol's messages at exactly the same time he just picks an order randomly (A-C or C-A) and all replicas will accept that as the correct state.</p>
        <p>CRDTs can range from simple counters to more complex structures, such as documents on which many people collaborate. Because CRDTs follow a strict set of rules based on metadata contained within their structure, conflicts (i.e. the persistence of multiple states of the same data) are automatically avoided without any special code or user intervention required.</p>
        <p>Not every data structure can be a CRDT, but where it's possible it makes the job of ensuring consistency significantly easier. Changes can be made locally to CRDTs in complete confidence that they will be valid whatever may be happening elsewhere. This combines well with the AT2-type process described above: the Client can only request changes to CRDT data that are valid and once these have been approved by a quorum of Elders they cannot fail. Once again, this takes strain off the network.</p> 
        <p>On the Safe Network all mutable data types are CRDTs (see Chapter 10).</p>    

        
        <div className="Keep-it-simple">
            <h3>Keep it simple</h3>
            <p>Voting nodes (Elders) need to be able to agree on the current state of the Network, even if there are many different possible versions so that operations are carried out consistently. However, many typical operations - paying for data to be stored, transfering funds, editing data - can be performed locally requiring only that the operation is consistent with the data type and Network logic, that it has been approved by a certain number of Elders, and that if other Sections need to be involved, those Elders can prove they are who they claim to be. By using a combination of BLS-DKG, BRB, Anti-Entropy and CRDTs, the Safe Network keeps operations local which is simpler, more efficient and in keeping with the core principles of decentralization.</p>
        </div>

        <h3>Work in progress</h3>

        <p>The following optimisations were being trialled but had not been implemented at the time of writing.</p>

        <h3>Consensus may be needed in some specific circumstances</h3>

        <p>For reasons discussed above, the Safe Network has opted for alternatives to the consensus algorithms used by other decentralized networks. However, there are some specific cases where ordering of valid events may be necessary. One of those is membership, the process by which Elders keep track of the Adults and other Elders in their section so they can handle new joins, splits, churn and promotions. Related to that is handover, whereby Elders pass their information to a newly joined Elder. </p>

        <p>While many processes on Safe Network can be handled by loose ordering (AE) and eventual consistency (CRDTs) when handing over information to a new Elder or when multiple Elders leave or become eligible for promotion at once, some local ordering is likely required as forks could make doublespend possible while we wait for them to resolve.</p>
        
        <p>For the Safe Network consensus is an agreement that (i) events are valid and (ii) they are in a single defined order. At time of writing an implementaion of a multipart consensus algorithm Multi Values Byzantine Agreement (MVBA). This starts with a validation check. Verifiable Consistent Broadcast (VCBC) is a broadcast protocol that allows all Elders to agree on the validity of a message sent between a Node and the Network. After that a protocol called Asynchronous Binary Byzantine Agreement (ABBA) forces the Elders to come to agreement. ABBA will always terminate so there is no risk of there being multiple versions of a Section, even for a short time.

        <h3>Crash fault tolerance</h3>

        <p>The current design has seven Elders per Section, allowing for two Elders to be Byzantine without being able to affect decisions made. But not all such nodes are actively malicious. More common will be simple failures and crashes. At the time of writing, work was underway to see if the Network could accommodate more malfuntioning nodes by increasing the number of Elders per Section to nine. The Network does not need to know whether a node is faulty or malevolent, but by requiring a simple majority of honest Elders (5 out of 9) rather than a supermajority (5 out of 7) the Network could possibly be made more robust, tolerating a higher proportion of failing nodes without losing functionality. This design would also have larger numbers of nodes per section (60+) for increased Sybil resistance (Chapter 11).</p>

 </p> 
   
        <h3>Tell me more &hellip;</h3>
        
        <p><a title="Signature-Free Asynchronous Byzantine" href="https://hal.inria.fr/hal-00944019/document" target="_blank" rel="noopener noreferrer" >Signature-Free Asynchronous Byzantine Consensus with t &lt; n/3 and O(n2) Messages (Mostefaoui et al) </a></p>
        <p><a title="eth classic" href="https://medium.com/datadriveninvestor/ethereum-classic-hacked-by-51-attack-f62c70cadd5c" target="_blank" rel="noopener noreferrer" >Ethereum Classic &ldquo;HACKED&rdquo; by 51% attack! (Medium)</a></p>
      

        <p><a title="bft" href="https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Distributed%20Computation/BYZANTYNE%20AGREEMENT%20MADE%20TRIVIAL.pdf" target="_blank" rel="noopener noreferrer" >Byzantine Agreement, Made Trivial (Micali) (MIT)</a></p>
        
        <p><a title="BLS" href="https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham" target="_blank" rel="noopener noreferrer" >Boneh-Lynn-Shacham (Wikipedia)</a></p>
        <p><a title="BLSa" href="https://www.youtube.com/watch?v=vBU70EjwGfw" target="_blank" rel="noopener noreferrer" >BLS Threshold Crypto - Interface for Rust library threshold_crypto (Ian Coleman)</a></p>
        <p><a title="CRDTa" href="https://bartoszsypytkowski.com/the-state-of-a-state-based-crdts/" target="_blank" rel="noopener noreferrer" >An introduction to state-based CRDTs</a></p>
        <p><a title="CRDTb" href="https://www.youtube.com/watch?v=B5NULPSiOGw" target="_blank" rel="noopener noreferrer" >CRDTs and the Quest for Distributed Consistency (YouTube)</a></p>
        <p><a title="CRDTc" href="https://www.youtube.com/watch?v=vBU70EjwGfw" target="_blank" rel="noopener noreferrer" >CRDTs for Non Academics (YouTube)</a></p>
        <p><a title="ABBA" href="https://github.com/maidsafe/sn_consensus/pull/78" target="_blank" rel="noopener noreferrer" >Implementing ABBA (with weaker validity assumption) (GitHub)</a></p>
        <p><a title="ABBA2" href="https://link.springer.com/article/10.1007/s00145-005-0318-0" target="_blank" rel="noopener noreferrer" > Random Oracles in Constantinople: Practical Asynchronous Byzantine Agreement Using Cryptography (introduces ABBA)</a></p>
        <p><a title="VCBC" href="https://arxiv.org/pdf/2202.02071.pdf" target="_blank" rel="noopener noreferrer" > Practical Asynchronous Byzantine Fault Tolerance (introduces VCBC)</a></p>
        <p><a title="VCBC2" href="https://safenetforum.org/t/update-17-november-2022/37691" target="_blank" rel="noopener noreferrer" > Forum post explaining VCBC</a></p>
        <p><a title="CFT" href="https://safehttps://safenetforum.org/t/consensus-async-ae-what-does-it-all-mean-and-where-does-it-matter/37678" target="_blank" rel="noopener noreferrer" > Forum discussion of Byzantine fault tolerance, crash fault tolerance and consensus</a></p>
 
        <p><a title="Gossip" href="https://safenetforum.org/t/update-29-september-2022/37512" target="_blank" rel="noopener noreferrer" > Forum discussion of gossip and eventual termination.</a></p>
 
        
        
        
    </div>

);

export default Chap7;
