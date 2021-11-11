import React from 'react';
import networking_layers from '../images/networking_layers.jpg';
import stack from '../images/stack.png';


const component = () => (

    <div className='chapter'>


    
<h2 id='ch2'>2. A fully autonomous data network</h2>

     

<p>To enable Secure Access For Everyone, Safe is an &lsquo;autonomous data network&rsquo;. This means it is capable of performing networking and storage tasks such as managing and optimizing workloads, routing, failover, authentication and access control without any human intervention. Opportunities for powerful groups to aggregate control or prevent access are minimized.</p>

       

<p>Unlike the current Internet, Safe infrastructure is not defined by a set of federated servers, VMs, owned storage locations or identifiable nodes. Unlike blockchains, it is designed to store and manage live data rather than pointers to data and to transact in real-time. And unlike BitTorrent, it does not rely on centralized components of the Web to locate and track files.</p>



<div className="Full-width-pic" align="center">
    
<img className="Img" src={networking_layers} alt="Networking layers" align="center" />
        </div>

        

   
        <p>Many features in the Safe Network are innovations, but there is no intention to reinvent the wheel. It builds on existing decentralized technologies such as BitTorrent and Kademlia and is based on the physical and data infrastructure of the Internet. Early development of Safe happened in parallel with blockchain, and it has taken an alternative route to solve the decentralization puzzle.</p>

<p>The Safe Network can be seen as a secure, encrypted, intelligent layer that sits on top of the current Internet, complementing the top three layers in the OSI model and adding resources in the application layer. This enables secure, anonymous, decentralized data storage and networking.</p>

<p>Going a little deeper, Safe introduces some changes to the networking and application layers as shown below.</p>


    
<p>The Safe Network core libraries are written in the Rust programming language. The diagram below shows the basic hierarchy.</p>

<div className="Full-width-pic" align="center">

    <img className="Img" src={stack} alt="Stack"  align="center" />
</div>

 


<h3>quic-p2p</h3>

<p>QUIC peer-to-peer (quic-p2p or qp2p) is based on the QUIC protocol created at Google. It is a networking library that enables peers on a P2P network to communicate securely, and to re-join the network without requiring a hard-coded list of known peers; such a list would be an obvious security hole. It supports multiple protocols allowing ordinary PCs and smartphones to connect to each other and is cryptographically secure.</p>

<h3>Network</h3>

<p>On top of qp2p sits the network overlay which forms the &lsquo;brain&rsquo; of the Safe Network. Its purpose is to create a decentralized Internet and route information between the Nodes.</p>

<p>Network routing is based on an algorithm that extends Kademlia DHT routing (see Chapter 4). It uses 32-byte (256 bit) XOR addresses to locate data on the network. It is mathematically guaranteed that messages can be routed from any part of the network to any other destination.</p>

<p>On the Safe Network, routing works on the principle of group consensus. For actions that mutate data or change the network a supermajority of the group of Nodes responsible for undertaking that action must first agree that it is valid.</p>
<p> In order to guarantee strong consistency, the Network uses conflict-free replicated data types (CRDTs) for storing data, Byzantine Reliable Broadcast (BRB) for messaging, and Boneh-Lynn-Shacham (BLS) threshold cryptography to reach local consensus (See Chapter 7).</p>
		
		<p>Client connections managed by qp2p are mediated via the Client API. Sitting above that, the Safe Network API allows clients such as end user devices and apps to make use of the network, including storing, sharing and reading data. There is a command line interface (CLI) for this purpose, and apps written in Rust can access network functions directly via the API. Apps written in other languages, including the Safe Browser - a JavaScript app, do the same via the language bindings layer. </p> 

        <p>Nodes and Clients provide the main means for users to interact with the Network, either by providing resources in return for payment by running a Node or by storing data and browsing the Safe web as a Client. They are discussed further in the next chapter.</p>

        <p>All Safe Network code is open source and licensed under GPLv3.</p>
        <h3>Tell me more&hellip;</h3>

   
<p><a href="https://github.com/maidsafe/safe_network"> The Safe Network Core. API message definitions, routing and nodes, client core API. (Github)</a></p>

<p><a href="https://github.com/maidsafe/qp2p "> qp2p - a peer-to-peer communications library for Rust based on QUIC protocol (Github)</a></p>


 <p><a href="https://docs.rs/quinn/0.7.2/quinn/index.html"> Quinn - QUIC protocol in Rust</a></p> 

        <p>&nbsp;</p>

     
      
        
                
    </div>

);

export default component;
