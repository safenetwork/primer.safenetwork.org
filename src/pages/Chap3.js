import React from 'react';
import app_auth_flow from '../images/app_auth_flow.jpg';



const component = () => (

    <div className='chapter'>

    
        <h2 id='ch3'>3. Nodes and Clients</h2>



        <p>The existing Internet is formed of servers and clients. Clients request data and servers provide it. When you browse the Web, you enter the address of the page into the browser (client software) and the browser requests data from the website in question which is stored on a specific server (server software).</p>

        <p>The Safe Network does not use a client-server model. Instead the data resides across a network that's made up of the spare computing resources of its users. When a request for data is made, a message goes out across the Network and machines that hold the chunks that make up the required data return them to the requester.</p>

        <p>Safe has two basic components: Nodes and Clients.</p>

        <div className="Keep-it-simple">

        <h3>Keep it simple!</h3>

            <p>The Safe Network is comprised of its users' machines (nodes) linked together by Node (formerly called Vault) software which routes data and messages securely between them. These machines provide the Network's storage by allocating a portion of their hard drives for this purpose &ndash; and earning the Safe Network Token currency in return.</p>
            <p>However, you don't have to run a Node to use the Network any more than you have to run a web server to use the Web. Client software allows users to login, store data and browse the Safe web securely and anonymously without being part of the Network. A computer can run both Node and Client software at the same time.&nbsp;&nbsp; </p>
        </div>



        <h3>The Node</h3>

        <p>The Safe Network is formed of interconnected machines (nodes) running Node software. Node software connects the devices to each other using existing protocols like TCP and UDP, manages data and routes it around the Network. It allows users to store data on their devices, potentially earning Safe Network Token currency in return. This process of providing a service in return for a reward is analogous to Bitcoin mining. On the Safe Network it's called Farming and the people who provide the resources are called Farmers (see Chapter 8).</p>

        <p>Node software is a small executable file that connects the user&rsquo;s machine to the Safe Network, turning it into a routing node and also allocating some disk space for storage. It manages the storage of data chunks on the user&rsquo;s computer and in that way provides storage capacity to the Network. It also routes and caches data chunks (these are encrypted) over the Network making use of fully encrypted connections to other Nodes. Nodes are clustered logically into small groups, each of which is responsible for looking after the data stored within a certain range of network addresses, called a Section (see Chapter 4).</p>

        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>

        <p>quic-p2p &ndash; a software library that allows machines to connect to each other in a secure and reliable peer-to-peer fashion and to reconnect after leaving without requiring a hard-coded list of other devices.</p>

        <p>Node &ndash; the machines (nodes) that make up the Safe Network run Node software. Nodes provide routing and communications capabilities to the Network and also store data in the form of chunks, for which they can earn Safe Network Token (Farming) when that data is retrieved.</p>

        <p>Client &ndash; a program that allows users to connect to the network and make use of its services. At the present time this is incorporated into the Safe Browser and it is also available as a command line interface (CLI) app.</p>

        <p>Safe Browser &ndash; a browser for surfing the Safe web.</p>

            <p>Authenticator - enables users to create a Network account and login without going via a server (Self-Authentication) and also to approve or deny access to their data by apps.</p>
            <p>CLI - command line interface for typing commands into a terminal rather than using a GUI.</p>
            <p>Safe Network App - A desktop app for managing Safe Network applications.</p>

        <p>Self-Authentication - a feature that enables a user to create an account and log into the decentralized Network securely and anonymously without any central server to mediate the login process.</p>

        <p>Farming &ndash; earning Safe Network Token by providing resources (Storage, Bandwidth, CPU, online time) to the Network</p>

        <p>Safe Network Token &ndash; the currency of the Safe Network, earned by storing data, spent by uploading data.</p>

        </div>

        <p>The forming and splitting of Sections happens in a fully autonomous way as computers join and leave the Network. The same goes for the routing of chunks across the Network. There are no central servers or agents needed to form this Network (unlike, say, like BitTorrent which uses trackers). Instead, the Nodes follow a set of strict rules to create and maintain the Network, requiring no central authority to do so.</p>

        <p>Nodes fulfil several different functions. They route and store chunks of data; they cryptographically check messages; they cluster into collections of nodes that will manage certain Sections of the Network; they make decisions about what should and should not happen, such as whether a new Node should be allowed to join the Network. These responsibilities are divided between two separate &lsquo;personas&rsquo; the Client Manager and the Data Manager (See Chapter 9).</p>

        <p>Running a Node in the Safe Network is called Farming because users look after the data until it is needed, at which point they may earn payment for their efforts (see Chapter 8).</p>

        <h3>The Client</h3>

        <p>Just as you don&rsquo;t need to run a web server to use the Web, so you don&rsquo;t have to run a Node to access the Safe Network. Ordinary users interact with the network via the Client. Currently the Client is comprised of the Safe Browser, the Authenticator, and, optionally, a command line interface (CLI) tool. The Authenticator is bundled with the Browser and is also available as a standalone application. The entire system is included in the Safe Network App, which bundles everthing needed to create an account and use the network with a user-friendly UI. The Browser and Authenticator and App support Windows, OSX, Linux, Android and iOS, whereas the Safe CLI supports Windows, OSX and Linux.</p>

        <p>Self-Authentication is a key innovation of the Network. At no point does the Network ever store a user&rsquo;s password. Therefore, there is no chance of that password being attacked on the Network. Instead, the Authenticator allows a user to create an account and log into the decentralized network securely and anonymously without requiring any central server to mediate the login process, or any trusted third party to store and manage users&rsquo; credentials. With Self-Authentication, the user generates his or her own credentials which are stored on the Safe Network in such a way that they are cryptographically obscured from all other parts of the Network.</p>

        <p>Because users control their own data, Decentralized Applications (DApps) such as the Safe Browser, require the user to authorize them to manipulate their data. For the user, the authorization process is simply a matter of clicking a button.</p>

        <div className="Full-width-pic" align="center">

            <img className="Img" src={app_auth_flow} alt="App auth flow" width="70%" align="center" />
        </div>


        
        <p>Any user (even if they&rsquo;re not logged in) can request (GET) data from the network for free. For example, they can browse a safe:// site or download a publicly-posted song or movie for zero cost. It&rsquo;s only when the user wants to store (PUT) data onto the network that an account with Safe Network Token is needed.</p>
        <h3>Tell me more...</h3>
        <p><a href="http://www.enterprisenetworkingplanet.com/datacenter/datacenter-blog/on-the-verge-of-autonomous-networking.html">On the Verge of Autonomous Networking (Enterprise Networking Planet)</a></p>
        <p><a href="http://docs.maidsafe.net/Whitepapers/pdf/AutonomousNetwork.pdf">Autonomous Network (MaidSafe whitepaper)</a></p>
        <p><a href="https://github.com/maidsafe/safe_vault">An Implementation of a Safe Network Vault (Github)</a></p>
        <p><a href="https://github.com/maidsafe/safe_client_libs">Safe Client libraries (Github)</a></p>
        <p><a href="https://github.com/maidsafe/safe-network-app">Safe Network App (Github)</a></p>
        <p><a href="https://github.com/maidsafe/safe_browser">Safe Browser (Github)</a></p>
		<p><a href="https://github.com/maidsafe/safe_browser">Safe Mobile Browser (Github)</a></p>
        <p><a href="https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md">Safe CLI User Guide -  a CLI (Command Line Interface) for the Safe Network (Github)</a></p>
		<p><a href="https://github.com/maidsafe/safe_client_libs/tree/master/safe_authenticator">Safe Authenticator library for interfacing with Authenticator frontend (Github)</a></p>
		<p><a href="https://github.com/maidsafe/safe-authenticator-cli">Safe Authenticator CLI(Github)</a></p>
		
       
    </div>

);

export default component;
