import React from 'react';
import nodes_journey from '../images/nodes_journey.png';



const Chap5 = () => (

    <div className='chapter'>
        <h2 id='ch5'>5. Proof of Resource and Node Age</h2>

        <h3>Proof of Resource</h3>
<p>Proof of Resource is a mechanism through which the Network can not only protect itself from attack or subversion through making good behaviour of Nodes vastly more profitable than malice, but also the underlying scheme that directly rewards the contribution of computing resources that allow it to function, and provide utility to people using it.</p>
<p>Anyone with a suitable device and sufficient bandwidth is able to supply storage resource to the Network. Nodes are continuously rewarded according to the quantity, quality and reliability of resource they provide.</p>
<p>Proof of Resource consists firstly of a test of whether a Node that wants to join the network has sufficient bandwidth and CPU power. If it fails the test it will not be allowed to join.</p>
<p>Having passed this test, a Node begins storing and serving Network data. As it does this reliably over time, in cooperation with others in its Section, its Node Age is increased, and so its earning potential: the higher the Age the larger the reward paid.</p>
<p>Resource Supply Rewards are automatically distributed by the Network to the operators of Nodes when a Data Payment is received by the Section in which they reside. The payment is paid prorated to its Node Age.</p>
<p>Additional ongoing and randomized checks are then made by Elders (Nodes that have attained the highest level of Node Age, Chapter 7) to ensure that the Node is indeed maintaining chunks it is supposed to be storing. If it fails the challenge, by not providing the requested proof, its Node Age is diminished.</p>

<h3>Node Age</h3>
		
		<p>Node Age is a measure of how long a Node has been a reliable participant in the Network. It dictates the activities the Node can carry out and ultimately how much it will be paid (Chapter 9) </p>
		
		<p>There are three categories of Node. Infants are Nodes waiting to join a Section, Adults are responsible for storing data and giving it up speedily on request, and Elders are the decision makers. In the current design there are seven Elders per Section and around 100 Adults.</p>
        
        <p>When a Node first joins the Network as an Infant, it first needs to discover the IP addresses of some existing Network participants. At launch, MaidSafe will temporarily provide a small number of bootstrap nodes (Internet-connected machines running the Node software). The IP addresses of these bootstrap nodes are included in the new Node’s configuration file. Alternatively, if the Node owner already knows the IP addresses of some Nodes on the Network, for example machines run by a friend, these may be used instead. Through those bootstrap Nodes it can connect to other known Nodes in the Network. The connection itself is fully encrypted (with the randomly-generated public keys of all valid Nodes being stored on the Network) and IP addresses are not forwarded with any Client requests.</p>
		
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
        <p>Just as children are not allowed to vote in elections, so a Node may not vote on Network events - such as whether a new member is allowed to join or whether a Section should split - until it has proven itself to be reliable. A Node gains trust each time it moves to a new Section whereupon its Node Age increases by 1. Once it is among the oldest in its Section (in terms of Node Age), it may be given voting rights as an Elder. Forcing Nodes to prove themselves in this way is an important security measure.</p>
        </div>
        <p>A new Node connects to other Nodes over the qp2p layer, sending out a message to a network Elder whose IP address it knows or is in its config file saying it wants to join. At this stage the Infant Node has a Node Age of zero. It is not permitted to join the network until it is needed by the section of which the Elder is a part (say Section X).</p>

		<p>A supermajority of Elders in Section X must agree that a new Node is needed before it is allowed to join. When they do, the Elders send out a Resource Proof request which forces the Infant Node to prove that it can perform a simple task (a proof of work).</p>
		
		<p>After being accepted by Section X, the Node becomes an Adult with a Node Age of 5, and resides there for a number of churn events, roughly proportional to 2^age (i.e. 2^5). The starting value of 5 is thought to offer a reasonable balance between limiting strain on the network caused by rapid relocations and safety - the Node will have very little opportunity to act maliciously in the Section before it is relocated. This value may change with more testing. Section X will not accept any new joining Nodes until the relocation has taken place.</p>
		
   <p>After a certain amount of time our Adult Node is relocated to another section, Section Y, selected as being closest to the hash of the Node's ID (public key). Section Y must accept the new Node because relocation requests have Network Authority, meaning it is to be trusted (see Chapter 9) Before being relocated to Section Y the Node’s age is increased from 5 to 6, meaning it will remain in Section Y for a longer time  - proportional to  2^6. So long as it proves itself reliable in Section Y, the Node's age will be upped to 7, it will be given a new ID and it will be relocated to Section Z, where it will remain for a time proportional to 2^7 … and so on. </p>

   
      <p>The process of increasing Node Age is exponential. The older the Node is the longer it must prove itself before it can increase its age. Newer Nodes are more likely to be moved to a new Section -  and thus increment their Node Age - than older, more trusted ones are. </p>
<p>Nodes can be demoted too. If trust is lost it must be re-earned. If the Adult Node restarts or misbehaves, it will be relocated to a new Section with its age halved. If it is found to be less than half as responsive as its neighbour(s) in dealing with requests to store or release data, it will be ejected from the Network and will need to start again as an Infant. </p>

<p>Because only Nodes that have proved their value to the Network can vote, it is close to impossible for  an attacker to target a particular Section on the Safe Network. Node Ageing and churn (nodes swapping Sections) are thus vital security features.</p>

<p>Only the most trusted Nodes in a Section, those Nodes with the greatest Node Age, become Elders. Other Nodes (Infants, Adults) simply receive notification of their decisions.</p>

      <h3>Work in progress</h3>
<p>At time of writing experiments were underway to introduce more stability during splits and concurrent leaves and joins by creating two classes of nodes: young Nodes and a Stable Set.</p> 
<p>Under this scheme, which is still at the early experimental stage, the most mature nodes would step out of the Node Age system and be treated as primary data storage nodes, the most mature among them being Elders. These mature Nodes form a Stable Set. The Stable Set contains both Elders (voting + storage Nodes) and long-lived Adults (non-voting storage Nodes). Being intrinsically more trusted to hold data, They are less likely to suddenly fail and require their data to be replicated to a replacement. New Nodes, on the other hand, are highly likely to go offline, and so must be repeatedly moved to other Sections to build up their Node Age. This is a vital defence against Sybil attacks.</p>

      <p>So, we would have two distinct sets of storage Nodes. The Stable Set would be responsible for primary data storage and young Nodes would hold extra copies of data as secondary storage. </p>
 
      <h3>Voting</h3>
   
        <p>Because only Nodes that have proved their value to the Network can vote, it is close to impossible for&nbsp; an attacker to target a particular Section on the Safe Network. Node Ageing and churn (nodes swapping Sections) are thus vital security features.</p>
        <p>Only the most trusted Nodes in a Section, those Nodes with the greatest Node Age, become Elders. Other Nodes (Infants, Adults) simply receive notification of their decisions.</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={nodes_journey} alt="Node age"  align="center" />
        </div>
        
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
            <p>qp2p &ndash; a networking library that enables peers on a P2P network to communicate securely, and to re-join the network without requiring a hard-coded list of known peers.</p>
        <p>Proof of Resource &ndash; ongoing tests that a Node can provide the required resources to the Network.</p>
        <p>Node Age &ndash; a measure of the trustworthiness of a Node. After the initial connection, a Node gets moved at random from Section to Section, building its reputation or Node Age. Once its Node Age reaches a certain value it can be an active participant in the decisions of the Section as an Elder.</p>
            <p>Churn &ndash; the act of Nodes leaving a group or new Nodes joining. Churn means that Sections are not static for long.</p>
        <p>Elder &ndash; a node with voting rights in its Group. Elders are the oldest Nodes in teh Section.</p>
        <p>Adult &ndash; a node that has no voting rights but can store data. The most experienced Adults are in the Stable Set.</p>
        <p>Infant &ndash; a node that is waiting to join the Network. It has no voting rights and cannot store data.</p>
        </div>
        <h3>&nbsp;Tell me more...</h3>
       
        <p><a title="Introduction &amp; Technical Overview of Safe Consensus" href="https://blog.maidsafe.net/2016/06/23/introduction-technical-overview-of-safe-consensus/">Introduction &amp; Technical Overview of Safe Consensus (MaidSafe blog, 2016)</a></p>
     
        <p><a href="http://conferences.sigcomm.org/imc/2006/papers/p19-stutzbach2.pdf">Understanding Churn in Peer-to-Peer Networks (Sigcomm, Research paper, 2006)</a></p>
        <p><a href="https://safenetforum.org/t/node-ageing-rfc/11377/1">Node Ageing RFC (and forum discussion)</a></p>

       
    </div>

);

export default Chap5;
