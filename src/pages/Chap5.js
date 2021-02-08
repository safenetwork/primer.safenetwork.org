import React from 'react';
import vaults_journey from '../images/vaults_journey.jpg';



const Chap5 = () => (

    <div className='chapter'>
        <h2 id='ch5'>5. Node Age</h2>
        
        <p>When a Node first joins the Network, it first needs to discover the IP addresses of some existing Network participants. At launch, MaidSafe will temporarily provide a small number of bootstrap nodes (Internet-connected machines running the Node software). The IP addresses of these bootstrap nodes are included in the new Node's configuration file. Alternatively, if the Node owner already knows the IP addresses of some vaults on the Network, for example machines run by a friend, these may be used instead. Through those bootstrap nodes it can connect to other known Nodes in the Network. The connection itself is fully encrypted (with the randomly-generated public keys of all valid Nodes being stored on the Network) and that initial connection is dropped immediately after the first hop once the new Node has connected to others in the Network.</p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
        <p>Just as children are not allowed to vote in elections, so a Node may not vote on network events - such as whether a new member is allowed to join or whether a Section should split - until it has proven itself to be reliable. A Node gains trust each time it moves to a new Section whereupon its Node Age increases by 1. Once it is among the oldest in its Section (in terms of Node Age), it may be given voting rights as an Elder. Forcing nodes to prove themselves in this way is an important security measure.</p>
        </div>
        <p>A Node connects to other Nodes over the quic-p2p layer, sending out a message that it wants to join the Network.</p>
   
        <p>A Section has to reach consensus before allowing a new node to join. In this case the Nodes will send out a Resource Proof request which forces the new Node to prove that it can provide a certain amount of bandwidth, storage and CPU capacity.</p>
        <p>If the new Node successfully completes the Resource Proof test it is then assigned to an address on the Network. It starts as an Infant, a member of a Section with a low &lsquo;Node Age&rsquo; - in other words, it doesn&rsquo;t yet have voting rights, cannot store data, and is liable to be moved off to another Section at any moment.</p>
        <p>When a Node leaves the Section, it is sent at random to another Section by the Network</p>
        <p>The process of incrementing its Node Age is exponential - it's increasingly difficult the older the node is. Newer Nodes are more likely to be moved to a new Section (and thus increment their Node Age) than older, more trusted ones. If Nodes lose the trust they&rsquo;ve earned, it must be re-earned. Only once a Node reaches a certain Node Age can it vote on Network events. Because only Nodes that have proved their value to the Network can vote, it is close to impossible for&nbsp; an attacker to target a particular Section on the Safe Network. Node Ageing and churn (nodes swapping Sections) are thus vital security features.</p>
        <p>Only the most trusted Nodes in a Section, those Nodes with the greatest Node Age, have voting rights. These Nodes are called Elders. Other Nodes (Infants, Adults) simply receive notification of their decisions.</p>
        <div className="Full-width-pic" align="center">

            <img className="Img" src={vaults_journey} alt="Node's journey"  align="center" />
        </div>
        
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
            <p>quic-p2p - a networking library that enables peers on a P2P network to communicate securely, and to re-join the network without requiring a hard-coded list of known peers.</p>
        <p>Resource Proof - a test of bandwidth, storage space and CPU power. If a Node trying to join the Network fails the test, it will not be allowed to join.</p>
        <p>Node Age - a measure of the trustworthiness of a Node. After the initial connection, a Node gets moved at random from Section to Section, building its reputation or Node Age. Once its Node Age reaches a certain value it can be an active participant in the decisions of the Sections.</p>
        <p>Churn - the act of Nodes leaving a group or new Nodes joining. Churn means that Groups are not static for long.</p>
        <p>Elder - a node with voting rights in its Group. Elders are simply those nodes with the greatest Node Age in the Group.</p>
        <p>Adult - a node that has no voting rights but can store data.</p>
        <p>Infant - a node that has recently joined the Network. It has no voting rights and cannot store data.</p>
        </div>
        <h3>&nbsp;Tell me more...</h3>
        <p><a title="safe explained" href="https://safe-network-explained.github.io/architecture">Safe Network Explained</a></p>
        <p><a title="Introduction &amp; Technical Overview of Safe Consensus" href="https://blog.maidsafe.net/2016/06/23/introduction-technical-overview-of-safe-consensus/">Introduction &amp; Technical Overview of Safe Consensus</a></p>
     
        <p><a href="http://conferences.sigcomm.org/imc/2006/papers/p19-stutzbach2.pdf">Understanding Churn in Peer-to-Peer Networks (Sigcomm, Research paper)</a></p>
        <p><a href="https://safenetforum.org/t/node-ageing-rfc/11377/1">Node Ageing RFC (and forum discussion)</a></p>

       
    </div>

);

export default Chap5;
