import React from 'react';
import app_auth_flow from '../images/app_auth_flow.jpg';



const component = () => (

    <div className='chapter'>

    
<h2 id='ch3'>3. Nodes and Clients</h2>



<p>The existing Internet is formed of servers and clients. Clients request data and servers provide it. When you browse the Web, you enter the address of the page into the browser (client software) and the browser requests data from the website in question which is stored on a specific server (server software).</p>

<p>The Safe Network does not use a client-server model. Instead stored data is spread across a network made up of the spare computing resources of its users. When a request for some content is made, a message goes out across the Network and machines that hold the constituent parts of that content return them to the requester.</p>

<p>Safe has two basic components: Nodes and Clients.</p>

        <div className="Keep-it-simple">

 

<h3>Keep it simple!</h3>

    <p>The Safe Network is comprised of its users' machines (Nodes) linked together by Node software which routes data and messages securely between them. These machines provide the Network's storage by allocating a portion of their hard drives for this purpose &ndash; and earning the Safe Network Token currency in return.</p>
    <p>You don't have to run a Node to use the Network any more than you have to run a web server to use the Web. Client software allows users to create a Safe (a secure, private data store), store data and browse the Safe web securely and anonymously without being part of the Network. A single computer can run both Node and Client software at the same time.&nbsp;&nbsp; </p>
</div>



<h3>The Node</h3>

<p>The Safe Network is formed of interconnected machines running Node software. Node software connects the devices to each other using existing protocols like TCP and UDP, manages data and routes it around the Network. It allows users to store data on their devices, potentially earning SNT currency in return. This process of providing a service in return for a reward is analogous to Bitcoin mining. On the Safe Network it's called Farming and the people who provide the resources are called Farmers (see Chapter 8).</p>

<p>Node software is a small executable file that connects the user&rsquo;s machine to the Safe Network, turning it into a routing node and also allocating some disk space for storage. It manages the storage of data chunks on the user&rsquo;s computer and in that way provides storage capacity to the Network. It also routes and caches data chunks (these are encrypted) over the Network via fully encrypted connections to other Nodes. Nodes are clustered logically into small groups, each of which is responsible for looking after the data stored within a certain range of Network addresses, called a Section (see Chapter 4).</p>
<div className="What-does-that-mean">
        <h3>What does that mean?</h3>

        <p>quic-p2p/qp2p &ndash; a software library that allows machines to connect to each other in a secure and reliable peer-to-peer fashion and to reconnect after leaving without requiring a hard-coded list of other devices.</p>

        <p>Node &ndash; the machines that make up the Safe Network run Node software. Nodes provide routing and communications capabilities to the Network and also store data in the form of chunks, for which they can earn Safe Network Token (Farming) when that data is retrieved.</p>

        <p>Client &ndash; a program that allows users to connect to the network and make use of its services.</p>

        <p>Safe &ndash; a secure store on the Network.</p>

        <p>Safe Browser &ndash; a browser for surfing the Safe web.</p>

            <p>CLI - command line interface for typing commands into a terminal rather than using a GUI.</p>
        
        <p>Self-Authentication - enables secure and anonymous connection to the Network without a central server to mediate the login process.</p>

        <p>Farming &ndash; earning Safe Network Token by providing resources (Storage, Bandwidth, CPU, online time) to the Network</p>

        <p>Safe Network Token &ndash; the currency of the Safe Network, earned by storing data, spent by uploading data.</p>

        </div>

        <p>The forming and splitting of Sections happens in a fully autonomous way as Nodes join and leave the Network. The same goes for the routing of chunks across the Network. There are no central servers, authorities or agents needed to maintain this Network (unlike, say, like BitTorrent which uses trackers).</p>

<p>Nodes fulfil several different functions. They route and store chunks of data; they cryptographically check messages; they cluster into  Sections each of which manage a certain portion of the Network; and they take decisions about what should and should not happen, such as whether a new Node should be allowed to join the Network.</p>

<p>Running a Node in the Safe Network is called Farming because users look after the data until it is needed, at which point they may earn payment for their efforts (see Chapter 8).</p>

<h3>The Client</h3>

<p>Just as you don&rsquo;t need to run a web server to use the Web, so you don&rsquo;t have to run a Node to access the Safe Network. Ordinary users interact with the network via the Client. Currently the Client software provided is the command line interface (CLI) tool. </p>

<p>Self-Authentication is a key innovation of the Network. At no point does the Network ever store a user&rsquo;s credentials. Therefore, there is no chance of passwords being attacked on the Network. Instead, the user can create a Safe, a private data store, and login securely and anonymously with no central server required to mediate the login process or trusted third parties to store and manage the users’ credentials. With Self-Authentication, the user generates his or her own credentials which are stored on the Safe Network in such a way that they are cryptographically obscured from all other parts of the Network.</p>


<p>Any user (even if they have not created a Safe) can request (GET) data from the network for free. For example, they can browse a safe:// site or download a publicly-posted song or movie for zero cost. It&rsquo;s only when the user wants to store (PUT) data onto the network that an account with Safe Network Token is needed.</p>
<h3>Tell me more...</h3>
<p><a href="http://www.enterprisenetworkingplanet.com/datacenter/datacenter-blog/on-the-verge-of-autonomous-networking.html">On the Verge of Autonomous Networking (Enterprise Networking Planet)</a></p>
<p><a href="http://docs.maidsafe.net/Whitepapers/pdf/AutonomousNetwork.pdf">Autonomous Network (MaidSafe whitepaper, 2010)</a></p>
<p><a href="https://github.com/maidsafe/safe_client_libs">Safe Client libraries (Github)</a></p>
<p><a href="https://github.com/maidsafe/safe-network-app">Safe Network App (Github)</a></p>
<p><a href="https://github.com/maidsafe/safe_browser">Safe Browser (Github)</a></p>
<p><a href="https://github.com/maidsafe/safe_browser">Safe Mobile Browser (Github)</a></p>
<p><a href="https://github.com/maidsafe/sn_cli#safe-network-cli">Safe CLI User Guide -  a CLI (Command Line Interface) for the Safe Network (Github)</a></p>

       
    </div>

);

export default component;
