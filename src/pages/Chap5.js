import React from 'react';
import nodes_journey from '../images/nodes_journey.png';



const Chap5 = () => (

    <div className='chapter'>
        <h2 id='ch5'>5. Node Age</h2>
		
		<p>Node Age is a measure of how long a Node has been a reliable participant in the Network. It dictates the activities the Node can carry out and ultimately how much it will be paid (Chapter 9) </p>
		
		<p>There are three categories of Node. Infants are Nodes waiting to join a Section, Adults are responsible for storing data and giving it up speedily on request, and Elders are the decision makers. In the current design there are seven Elders per Section and around 100 Adults.</p>
        
        <p>When a Node first joins the Network as an Infant, it first needs to discover the IP addresses of some existing Network participants. At launch, MaidSafe will temporarily provide a small number of bootstrap nodes (Internet-connected machines running the Node software). The IP addresses of these bootstrap nodes are included in the new Node's configuration file. Alternatively, if the Node owner already knows the IP addresses of some Nodes on the Network, for example machines run by a friend, these may be used instead. Through those bootstrap nodes it can connect to other known Nodes in the Network. The connection itself is fully encrypted (with the randomly-generated public keys of all valid Nodes being stored on the Network) and that initial connection is dropped immediately after the first hop once the new Node has connected to others in the Network.</p>
		
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
        <p>Just as children are not allowed to vote in elections, so a Node may not vote on Network events - such as whether a new member is allowed to join or whether a Section should split - until it has proven itself to be reliable. A Node gains trust each time it moves to a new Section whereupon its Node Age increases by 1. Once it is among the oldest in its Section (in terms of Node Age), it may be given voting rights as an Elder. Forcing Nodes to prove themselves in this way is an important security measure.</p>
        </div>
        <p>A new Node connects to other Nodes over the qp2p layer, sending out a message to a network Elder whose IP address it knows or is in its config file saying it wants to join. At this stage the Infant Node has a Node Age of zero. It is not permitted to join the network until it is needed by the section of which the Elder is a part (say Section X).</p>

		<p>A supermajority of Elders in Section X must agree that a new Node is needed before it is allowed to join. When they do, the Elders send out a Resource Proof request which forces the Infant Node to prove that it can perform a simple task (a proof of work).</p>
		
		<p>After being accepted by Section X, the Node becomes an Adult with a Node Age of 5, and resides there for a number of churn events, roughly proportional to 2^age (i.e. 2^5). The starting value of 5 is thought to offer a reasonable balance between limiting strain on the network caused by rapid relocations and safety - the Node will have very little opportunity to act maliciously in the Section before it is relocated. This value may change with more testing. Section X will not accept any new joining Nodes until the relocation has taken place.</p>
		
   <p>After a certain amount of time our Adult Node is relocated to another section, Section Y, selected as being closest to the hash of the Node's ID (public key). Section Y must accept the new Node because relocation requests have Network Authority, meaning it is to be trusted (see Chapter 9) Before being relocated to Section Y the Node’s age is increased from 5 to 6, meaning it will remain in Section Y for a longer time  - proportional to  2^6. So long as it proves itself reliable in Section Y, the Node's age will be upped to 7, it will be given a new ID and it will be relocated to Section Z, where it will remain for a time proportional to 2^7 … and so on. </p>
   
      <p>The process of increasing Node Age is exponential. The older the Node is the longer it must prove itself before it can increase its age. Newer Nodes are more likely to be moved to a new Section -  and thus increment their Node Age - than older, more trusted ones are. When it is the seventh oldest Node in the Section, it may be promoted to an Elder.</p>
   
   <p>Nodes can be demoted too. If trust is lost it must be re-earned. If the Adult Node restarts or misbehaves, it will be relocated to a new Section with its age halved. If it is found to be less than half as responsive as its neighbour(s) in dealing with requests to store or release data, it will be ejected from the Network and will need to start again as an Infant. </p>
   
   
   <p>If an Elder proves unreliable, it will also be demoted to an Adult or ejected by the other Elders, following a similar mechanism, with the oldest Adult in the Section promoted to Elder status in its place.</p>
   

      
   
        <p>Because only Nodes that have proved their value to the Network can vote, it is close to impossible for&nbsp; an attacker to target a particular Section on the Safe Network. Node Ageing and churn (nodes swapping Sections) are thus vital security features.</p>
        <p>Only the most trusted Nodes in a Section, those Nodes with the greatest Node Age, become Elders. Other Nodes (Infants, Adults) simply receive notification of their decisions.</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={nodes_journey} alt="Node's journey"  align="center" />
        </div>
        
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
            <p>qp2p &ndash; a networking library that enables peers on a P2P network to communicate securely, and to re-join the network without requiring a hard-coded list of known peers.</p>
        <p>Resource Proof &ndash; a test of bandwidth and CPU power. If a Node trying to join the Network fails the test or takes too long to return it, it will not be allowed to join.</p>
        <p>Node Age &ndash; a measure of the trustworthiness of a Node. After the initial connection, a Node gets moved at random from Section to Section, building its reputation or Node Age. Once its Node Age reaches a certain value it can be an active participant in the decisions of the Section as an Elder.</p>
        <p>Churn &ndash; the act of Nodes leaving a group or new Nodes joining. Churn means that Sections are not static for long.</p>
        <p>Elder &ndash; a node with voting rights in its Group. Elders are simply those nodes with the greatest Node Age in the Group.</p>
        <p>Adult &ndash; a node that has no voting rights but can store data.</p>
        <p>Infant &ndash; a node that has recently joined the Network. It has no voting rights and cannot store data.</p>
        </div>
        <h3>&nbsp;Tell me more...</h3>
       
        <p><a title="Introduction &amp; Technical Overview of Safe Consensus" href="https://blog.maidsafe.net/2016/06/23/introduction-technical-overview-of-safe-consensus/">Introduction &amp; Technical Overview of Safe Consensus (MaidSafe blog, 2016)</a></p>
     
        <p><a href="http://conferences.sigcomm.org/imc/2006/papers/p19-stutzbach2.pdf">Understanding Churn in Peer-to-Peer Networks (Sigcomm, Research paper, 2006)</a></p>
        <p><a href="https://safenetforum.org/t/node-ageing-rfc/11377/1">Node Ageing RFC (and forum discussion)</a></p>

       
    </div>

);

export default Chap5;
