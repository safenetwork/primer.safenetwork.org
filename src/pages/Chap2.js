import React from 'react';
import networking_layers from '../images/networking_layers.jpg';
import stack from '../images/stack.jpg';


const component = () => (

    <div className='chapter'>


    
<h2 id='ch2'>2. A fully autonomous data network</h2>

     

        <p>To enable Secure Access For Everyone, SAFE is an &lsquo;autonomous data network&rsquo;. This means it is capable of performing networking and storage tasks such as managing and optimizing workloads, routing, failover, authentication and access control without any human intervention. Opportunities for powerful groups to aggregate control or forbid access are minimized.</p>

       

        <p>Unlike the current Internet, SAFE infrastructure is not defined by a set of federated servers, VMs, owned storage locations or identifiable nodes. Unlike blockchains, it is designed to store and manage live data rather than pointers to data and to transact in real-time. And unlike BitTorrent, it does not rely on centralized components of the Web to locate and track files.</p>

   

        <div className="Full-width-pic" align="center">

            <img className="Img" src={networking_layers} alt="Networking layers" align="center" />
        </div>

        

   

        <p>Many features in the SAFE Network are innovations, but there is no intention to reinvent the wheel. It builds on existing decentralized technologies such as BitTorrent and Kademlia and is based on the physical and data infrastructure of the Internet. Early development of SAFE happened in parallel with blockchain, so it has taken an alternative route to solve the decentralization puzzle.</p>

        <p>The SAFE Network can be seen as a secure, encrypted, intelligent layer that sits on top of the current Internet, complementing the top three layers in the OSI model and adding resources in the application layer. This enables secure, anonymous, decentralized data storage and networking.</p>

        <p>Going a little deeper, SAFE introduces some changes to the networking and application layers as shown below.</p>

    

        <p>The SAFE Network core libraries are written in the Rust programming language. The diagram below shows the basic hierarchy.</p>

        <div className="Full-width-pic" align="center">

            <img className="Img" src={stack} alt="Stack"  align="center" />
        </div>

         
 

        <h3>quic-p2p</h3>

        <p>quic-p2p is based on the QUIC protocol created at Google. It is a networking library that enables peers on a P2P network to communicate securely, and to re-join the network without requiring a hard-coded list of known peers; such a list would be an obvious security hole. It supports multiple protocols allowing ordinary PCs and smartphones to connect to each other and is cryptographically secure. quic-p2p supercedes the Crust library.</p>

        <h3>Routing</h3>

        <p>On top of quic-p2p sits Routing. This is the overlay networking and routing layer which forms the &lsquo;brain&rsquo; of the SAFE Network. Its purpose is to form a decentralized Internet and route information within it.</p>

        <p>Routing is based on an algorithm that extends Kademlia DHT routing (see Chapter 4). It uses 32-byte (256 bit) XOR addresses to locate data on the network. It is mathematically guaranteed that messages can be routed from any part of the network to any other destination.</p>

        <p>Routing works on the principle of Group Consensus (see Chapter 4). We don&rsquo;t trust a single entity, only a group decision with strong eventual consistency. In order to guarantee strong consistency, the routing layer uses conflict-free replicated data types (CRDTs) and the asynchronous trusted transfers (AT2) algorithm recently developed at Swiss University Ecole Polytechnique F&eacute;d&eacute;rale de Lausanne (See Chapter 7).</p>

        <p>Vaults and Clients provide the main means for users to interact with the Network, either by providing resources in return for payment by running a Vault or by storing data and browsing the SAFE web using the Client. They are discussed further in the next chapter.</p>

        <p>All SAFE Network code is open source.</p>

       <h3>Tell me more&hellip;</h3>

        <p><a href="https://hub.safedev.org/core_technology/"> Core Technology (SAFE Network DevHub)</a></p>

        <p><a href="https://github.com/maidsafe/rfcs/blob/master/text/0043-async-safe-core/0043-async-safe-core.md"> SAFE core API (Github)</a></p>
		
		  <p><a href="https://github.com/maidsafe/quic-p2p"> quic-p2p - a peer-to-peer communications library for Rust based on QUIC protocol (Github)</a></p>


    <p><a href="https://docs.rs/quinn/0.2.0/quinn/"> Quinn - QUIC protocol in Rust</a></p>

        <p>&nbsp;</p>

     
      
        
                
    </div>

);

export default component;
