import React from 'react';



const Chap7 = () => (

    <div className='chapter'>
        <h2 id='ch7'>7. Network-wide consensus not required</h2>
  
        <h3>A hard problem</h3>
  
        <p>Truly decentralized networks can have no master node or oracle to judge what is true or valid and what is not. Instead, the nodes that make up the Network must come to an agreement among themselves about which of many possible versions of &ldquo;the truth&rdquo; they will accept.</p>
  
        <p>Discrepancies can arise for many reasons, but a frequent cause is the physical distance between nodes. As an example, let&rsquo;s say node Alice in Sydney relays a message to node Bob in Edinburgh. Before the signal can travel halfway around the world, node Carol in London transmits a different message to Bob. Because London is much closer to Edinburgh, Carol's message arrives before Alice's, even though it was sent later. Without a central time-clock, how can we decide which is the correct order of events? It's important that the Network picks wisely one version of events and sticks with it, since all future events on the Network will be affected by its decision. It does this by asking nodes to report on what they saw, deriving the most likely course of events and then finally propagating that version around the network.</p>
  
        <p>In our example, the nodes that make up the network must vote on which message - Alice's or Carol's - they will accept as being sent first, based on information about the two events that each has received. What&rsquo;s more, the Network must account for the fact that a certain proportion of the nodes may be unreliable or even actively malicious and yet still converge on one rules-based version of the truth. This is called Byzantine Fault Tolerance (BFT). The way the maths works out, up to one-third of the nodes could be corrupt (Byzantine) and a Network with a good BFT consensus algorithm will still function reliably. (If more than a third are corrupt, BFT becomes mathematically impossible according to current theory.)</p>
  
        <h3>Proof of Work</h3>
  
        <p>The Bitcoin blockchain uses Proof of Work to solve these problems of achieving decentralised consensus over the ordering of events to prevent the problem of double-spend &ndash; being able to spend the same coin twice &ndash; and Byzantine behaviour. Miners battle to verify a block of transactions. If there are two simultaneous winners the chain will split and for a time there are two versions of the truth, i.e. two chains emanating from the disputed block. Ultimately, though, after a few blocks have been added one chain will be longer than the other, and it is this chain that will be accepted as the true state. The failed blocks go back into the pot to be verified again. This is how the Bitcoin blockchain (and most other blockchains) achieves consensus. This mechanism also offers a defence against the 51 percent attack (see Chapter 12).</p>
  
        <p>Since miners are (ideally) independent operators distributed all over the world, and because it takes a lot of energy to verify a block, it is extremely difficult and expensive to deliberately influence the growth of one sub-chain over another. Difficult but not impossible: if one miner or mining group manages to consolidate more than half of the mining power, that miner can then spend some Bitcoin, split the chain and then grow the sub-chain that does not contain the transaction. Effectively this rogue miner is rewriting history. Once that sub-chain is accepted as &lsquo;the truth&rsquo; the original transaction officially never happened according to the ledger, and the miner is free to spend the coins again.</p>
        <p>This is the Sybil attack, also known as the 51 percent attack because it becomes possible when one entity owns more than half of the mining power.</p>
        <p>While such attacks have been successfully launched against some cryptocurrencies, Ethereum Classic being one example, Proof of Work has generally been rather effective in protecting against 51 percent attacks and at achieving BFT consensus across the network. But it is slow, massively energy-intensive and it doesn&rsquo;t scale. Also, the consensus is probabilistic rather than deterministic: after some time, you might be 99.9 percent sure that all nodes agree on network state, but never 100 percent.</p>
        <p>The SAFE Network does not use a blockchain and developed its own consensus algorithm called PARSEC. PARSEC did the job of ensuring consistency but in practice was found to be rather heavy on resources. At the time of writing PARSEC is being replaced by a combination of lightweight mechanisms that together achieve the same goal including Boneh-Lynn-Shacham Distributed Key Generation (BLS-DKG), Asynchronous Trustworthy Transfers (AT2) and Conflict-free Data Types (CRDTs)</p>
        <h3>Boneh-Lynn-Shacham Distributed Key Generation</h3>

        <p>BLS-DKG is a cryptographic signature scheme that allows the recipient of a signed message to verify with certainty that the sender is authentic since there can only ever be one valid signature for any public-key&ndash;message combination. This is obviously extremely useful in a decentralized network where there is no central source of authority and only a limited amount is known about other players. The 'distributed key generation' (DKG) part of the name refers to the fact that a certain number of parties (a threshold) must participate in generating a public&#8211;private key pair, with the private key split up and distributed between them. Since they each hold a part of the private key, all parties must also participate in order to decrypt a message encoded with the public key, making BLS a great fit for Elders voting on decisions in a Section, or indeed for multisig transactions where more than one signature is required before payment.</p>

        <p>BLS-DKG has other desirable properties too, including small-sized keys and signatures which make for efficient and fast operations and it can operate asynchronously. In short, it is a quick, secure and reliable way to obtain consensus in certain circumstances without having to rely on a full ABFT consensus algorithm. </p> 

        
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Byzantine Fault Tolerance &ndash;  the ability of a decentralized network to function properly even if up to a third of the nodes (plus 1) is corrupt or faulty.</p>
        <p>Asynchronous &ndash; Not time-dependent. An asynchronous process should come to a consenus no matter what order the various messages arrive in.</p>
        <p>Proof-of-Work &ndash; the consensus algorithm used by the Bitcoin blockchain to confirm that transactions are valid and to deter attacks.</p>
        <p>BLS-DKG &ndash; a cryptographic system that authenticates the sender of a message, allows for multiple parties to quickly come to a consensus, and can enable multi-signature transactions.</p>
        <p>AT2 &ndash; an algorithm that allows simple transactions to take place quickly and reliably without requiring the approval of the network as a whole.</p>
        <p>CRDTs &ndash; Data structures that obey certain mathematical rules which ensure that when multiple versions of data exist across a distributed network, eventually these will always converge onto one 'true' version.</p>
        <p>Lazy Section Updates &ndash; Sections inform each other when their public keys are out of date and demand to see the latest version along with the SectionProofChain to prove validity before they will act on a request.</p>
        <p>Malice Detection &ndash;  detecting and ejecting nodes that are acting suspiciously.</p>
     </div>

        <h3>Asynchronous Trustworthy Transfers (AT2)</h3>
        <p>AT2 is a distributed networking ABFT algorithm that guarantees transactions will be completed in a way that's reliably deterministic and strongly consistent. What does that mean in practice? It means cryptocurrency transactions and other simple tokenized exchanges will 'just work' with no risk of doublespend or lost data and no waiting around for nodes to agree.</p>
        <p>Unlike with PoW, simple transactions do not require the entire network to come to a consensus on the ordering of events relative to all others. To authorize a payment, for example, AT2 only requires the payer to prove he or she has the required funds as verified by a sufficient number of third parties (a quorum or a random sample large of nodes enough to overcome possible Byzantine behaviour). These third parties check the chain of transactions in the payer's account and provided the balance is sufficient will approve the transfer. Security protections, such as Sybil resistance, are built into the algorithm which is able to recognize deviations from normal behaviour.   </p>

        <p>The SAFE Network uses elements of AT2 to quickly enforce consensus at a Section-wide rather than a Network-wide level, and to push a lot of the work involved onto the Client. So if a Client wants to make a payment of X amount it asks the Elders to sign an agreement. The Elders check the logic, that sufficient funds exist and that the Client's signature is valid, and then each sends back a signed agreement. The Client collects these signed agreements and once a quorum has arrived (say 5 out of 7 Elders agree) sends them back to the Elders. The Elders now see a valid message "Please deduct from my account the sum of X" and carry out the command. The Client can perform this task of aggregating votes much more efficiently than the Elders, who would have to come to agreement between themselves via a resource intensive consensus mechanism.</p>
        
        <p>If the Client tries to talk to only a few Elders or to the same Elder twice it will fail to gather sufficent votes.</p>

        <p>As well as facilitating payments, this mechanism can also be used to authorize other actions, including storing and changing data held in other Sections. In this case, the Elders authorize the payment for the required action and then pass an instruction to the relevant Section to carry it out. Because the instruction carries a BLS group signature, the receiving nodes can be assured it comes from a valid Section. </p>

        <h3>Conflict-free Replicated Data Types (CRDTs)</h3>
        
           
        <p>There's another way to ensure consistency asynchronously across a decentralized network without consensus: CRDTs. With CRDTs consistency is inherent in the data structure itself. If different versions of the same data exist across a set of connected nodes (or replicas as they are known in CRDT-speak), they will all eventually converge on the same state. If some data is changed on an offline replica, as soon as connection is re-established this change will propagate to all other replicas, even if the same data was changed on another replica in its absense. At the end of the process, everyone will have the exact same version.</p>
        <p>At the start of this chapter we mentioned the problem of users sending messages from different places and the difficulty of agreeing their order. With CRDTs it is not necessary to try enforce an order or agree on it before changes can be applied. If Bob sees Alice's message before Carol's then that's the order that will be replicated around the network. No questions asked. If Bob receives Alice's and Carol's messages at exactly the same time he just picks an order randomly (A-C or C-A) and all replicas will accept that as the correct state.</p>
        <p>CRDTs can range from simple counters to more complex structures, such as documents on which many people collaborate. Because CRDTs follow a strict set of rules based on metadata contained within their structure, conflicts (i.e. the persistence of multiple states of the same data) are automatically avoided without any special code or user intervention required.</p>
        <p>Not every data structure can be a CRDT, but where it's possible it makes the job of ensuring consistency significantly easier. Changes can be made locally to CRDTs in complete confidence that they will be valid whatever may be happening elsewhere. This combines well with the AT2-type process described above: the Client can only request changes to CRDT data that are valid and once these have been approved by a quorum of Elders they cannot fail. Once again, this takes strain off the network.</p> 
        <p>On the SAFE Network mutable data types are being formatted as CRDTs (see Chapter 10).</p>    

        
        <div className="Keep-it-simple">
            <h3>Keep it simple</h3>
            <p>Voting nodes (Elders) need to be able to agree on the current state of the network, even if there are many different possible versions so that operations are carried out consistently. However, many typical operations - paying for data to be stored, transfering funds, editing data - can be performed locally requiring only that the operation is consistent with the data type and Network logic, that it has been approved by a certain number of Elders, and that if other Sections need to be involved, those Elders can prove they are who they claim to be. By using a combination of BLS-DKG, AT2, CRDTs and secure messaging, the SAFE Network keeps operations local which is simpler, more efficient and in keeping with the core principles of decentralization.</p>
        </div>
        <h3>Lazy Section Updates</h3>
        <p>Network-wide consensus (in a blockchain sense) is not required for the SAFE Network to operate. However, individual Sections need to make sure that other Sections they are communicating with are up to date, and vice versa. They keep each other updated on a 'need to know' basis using a process called Lazy Section Updates. Here's how it works. </p>

        <p>Messages sent between Sections are signed with the public keys of both sending and receiving Sections. Let's say Section A sends a message to Section B saying 'Please send me chunk X'. It will look something like this: <em>(section_key_B, 'Please send me chunk X', section_key_A)</em>. But Section A, the sender, does not know about a recent churn event in Section B, therefore the section_key_B it has used is out of date (remember, every time an Elder joins or leaves a new section key is created). So, Elders in Section B send Section A the latest section_key_B and the SectionProofChain as evidence of its legitimacy. Alternatively, section_key_A may not be recognised by Section B, the recipient, in which case it will ask Section A for its updated SectionProofChain before it processes the message.</p>
        <p>Lazy Section Updates reduce the amount of inter-Section messaging required to a bare minimum.</p>
        <h3>Tell me more &hellip;</h3>
        <p><a title="parsec1" href="https://docs.maidsafe.net/Whitepapers/pdf/PARSEC.pdf" target="_blank" rel="noopener noreferrer" >Protocol for Asynchronous, Reliable, Secure and Efficient Consensus (PARSEC) (MaidSafe Whitepaper)</a></p>
        <p><a title="Signature-Free Asynchronous Byzantine" href="https://hal.inria.fr/hal-00944019/document" target="_blank" rel="noopener noreferrer" >Signature-Free Asynchronous Byzantine Consensus with t &lt; n/3 and O(n2) Messages (Mostefaoui et al) </a></p>
        <p><a title="eth classic" href="https://medium.com/datadriveninvestor/ethereum-classic-hacked-by-51-attack-f62c70cadd5c" target="_blank" rel="noopener noreferrer" >Ethereum Classic &ldquo;HACKED&rdquo; by 51% attack! (Medium)</a></p>
        <p><a title="AT2a" href="https://arxiv.org/abs/1906.05574" target="_blank" rel="noopener noreferrer" >The Consensus Number of a Cryptocurrency (AT2 white paper)</a></p>
        <p><a title="AT2b" href="https://www.computing.co.uk/feature/4017118/at2-answer-cryptocurrency-energy-performance" target="_blank" rel="noopener noreferrer" >
            Could AT2 be the answer to cryptocurrency's energy and performance problems? (Computing)</a></p>
        <p><a title="bft" href="https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Distributed%20Computation/BYZANTYNE%20AGREEMENT%20MADE%20TRIVIAL.pdf" target="_blank" rel="noopener noreferrer" >Byzantine Agreement, Made Trivial (Micali) (MIT)</a></p>
        
        <p><a title="BLS" href="https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham" target="_blank" rel="noopener noreferrer" >Boneh-Lynn-Shacham (Wikipedia)</a></p>
        <p><a title="BLSa" href="https://www.youtube.com/watch?v=vBU70EjwGfw" target="_blank" rel="noopener noreferrer" >BLS Threshold Crypto - Interface for Rust library threshold_crypto (Ian Coleman)</a></p>
        <p><a title="CRDTa" href="https://bartoszsypytkowski.com/the-state-of-a-state-based-crdts/" target="_blank" rel="noopener noreferrer" >An introduction to state-based CRDTs</a></p>
        <p><a title="CRDTa" href="https://www.youtube.com/watch?v=B5NULPSiOGw" target="_blank" rel="noopener noreferrer" >CRDTs and the Quest for Distributed Consistency (YouTube)</a></p>
        <p><a title="CRDTa" href="https://www.youtube.com/watch?v=vBU70EjwGfw" target="_blank" rel="noopener noreferrer" >CRDTs for Non Academics (YouTube)</a></p>


        
        
        
    </div>

);

export default Chap7;
