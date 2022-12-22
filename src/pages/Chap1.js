import React from 'react'; 


const component = () => (

    <div className='chapter'> 



    
        <h2 id='ch1'>1.&nbsp;&nbsp; Background and fundamentals</h2>

        <h3><br /> Background</h3>
      
        <p><br /> Decentralized or peer-to-peer (P2P) networks are not new. Since the release of Napster on June 1, 1999, they have taken the world by storm, particularly for file sharing. These networks allow users from all over the world to connect to each other and share data such as movies, books and music. In 2010 more than half of all Internet traffic was attributed to P2P.<br /> <br /> But the use of these technologies is not limited to simple file sharing. Freenet was launched in March, 2000 allowing people to publish decentralized websites (Freesites). Freesites are not stored on central servers but instead are distributed across the machines of the encrypted network's users.<br /> <br /> A little after that, the BitTorrent protocol was created by Bram Cohen. BitTorrent was and still is particularly well suited to transferring large files in a P2P fashion, allowing simultaneous downloads from multiple peers.<br /> <br /> The next notable development arrived after the financial crash which very nearly brought the global economy to its knees. In 2009 Satoshi Nakamoto released Bitcoin and gave the world a 'trustless' decentralized digital currency that is not controlled by bank, government or institution. The blockchain - the immutable ledger that records all Bitcoin transactions - was something very new, solving at a stroke the difficult and long-standing problem of creating a trustless source of the truth for transactions.&nbsp; The ownership of 'addresses' in the network can be proven by the usage of private keys in a Public Key Infrastructure (PKI) - hence the term cryptocurrency; however, connections between Bitcoin nodes are not fully encrypted.<br /> <br /> The Safe Network is the next big step in the evolution of P2P networks, combining the vision of decentralized file sharing and decentralized web sites together with an internal cryptocurrency - Safe Network Token (SNT) (formerly known as Safecoin) - and several additional innovations to enhance security, privacy, performance and stability. MaidSafe, a Scottish company with developers around the world, has been researching and developing this project since 2006.&nbsp; Since that time, many more people have come to recognize the vital importance of a global, secure and private decentralized platform for storage and communication.<br /> </p>

        <h3>20 Fundamental Principles of the Safe Network</h3>

        <p> There are a number of core ideas that have driven each stage of the design of the Safe Network. These can be distilled into the following 20 fundamental principles.</p>

            <p>The Safe Network will:</p>
                <ol> <li>Allow a person to create an account and login anonymously and without intervention. <br /> Creating a new account and logging into the Network will never require a third party.</li>
                  <li>Enable users to securely and with no controlling intermediaries share information and messages.<br />The Safe Network will never allow third parties to either read or store the information sent by a user without that user&rsquo;s consent.</li>
                 <li>Allow the transfer of the Network currency Safe Network Token to any user free of transaction costs.</li>
                 <li>Enable Users to anonymously create and share data worldwide. <br />The Network will always ensure that the user has the ability to send transaction messages and posts with a temporary single-use ID that is not linked to any known identity on the Network.</li> 
                <li>Let anyone browse content anonymously and free of charge and without the need to create an account.</li>
                <li>Allow users to associate multiple identities with their account.</li>
                <li>Let users utilize any of their identities to send/receive Safe Network Token.</li>
                <li>Store data in perpetuity. All public/published data on the Network will be immutable and available on the Network indefinitely.</li>
                <li>Never require passwords to be stored on the Network or on machines used to access the Network.</li>
                <li>Allow any user, on any machine, to access the Network leaving no trace of their presence or activity on the machine.</li>
                <li>Scrub Client IP addresses from the first hop. <br />As soon as you have connected to the network, your IP address is wiped.</li>
                <li>Only accept more Vaults (networked storage provided by users' machines) when it needs them. <br /> This is to prevent a bad actor from flooding the network with poorly performing or malicious Vaults and also to enable the Network to balance its resources automatically according to demand.</li>
                <li>Increase farming rewards when it needs more resources (e.g. more Vaults to increase storage capacity) and decrease rewards when resources are plentiful. <br />This is the primary mechanism for balancing supply and demand.</li>
                <li>Rank nodes over time and increase trust in higher ranked nodes.<br />The aim is to maximize performance and defend against certain attacks.</li>
                <li>Not have servers! <br />The Safe Network will never rely on servers (as the term is traditionally understood) as to do so introduces a third-party weakness that undermines the entire Network.</li>
                <li>Digitally sign all transactions. <br />To ensure that the transactions have been authorized in accordance with the rules of the Network.</li>
                <li>Ensure that Client-to-Client direct messages (i.e. those not transmitted via other nodes in the Network) are free.</li>
                <li>Never use time as a network tool. <br /> There can be no concept of time in a truly decentralized network without reaching out to centralized servers and services.</li>
                <li>Only use encrypted services and encrypted traffic.</li>
                <li>Allow real-time upgrades in a secure manner. <br />The Network will refuse upgrades that could break it.</li> </ol>

            <p>We expand on these fundamental principles in the chapters that follow. Combined they aim to give all users the freedom to safely store data on the Network, to share information with others securely, to publish websites cheaply and easily and to communicate using secure channels and apps.</p>


     <p>For a fuller version of this list see the Safe Network website. <a href="https://safenetwork.tech/fundamentals/">https://safenetwork.tech/fundamentals/</a></p>



<h3>Key Features</h3>
<p>The Safe Protocol creates a decentralized and autonomous data storage layer on the internet through a network of distributed nodes. This is achieved through the employment of a novel consensus mechanism based on a system of Proof-of-Resource, and without a public ledger such as a blockchain.</p>
<p>The Protocol introduces an innovative monetary system&mdash;incentivise and reward resource contribution, while protecting against malice&mdash;based on Digital Bearer Certificates (DBCs), which provide fast, secure, and private transactions, yet without the need for central mint.</p>
<p>The resulting Network which the protocol underpins therefore enables the following key features:</p>
<h4>Data Security</h4>
<ul>
<li>
<p>Any file stored on the Network is split into chunks, and encrypted using hashes of itself; a novel process known as Self-Encryption. Multiple copies of each chunk are created, and these are randomly and evenly globally distributed, for redundancy and speed of access.</p>
</li>
<li>
<p>Connections between Nodes transmitting these chunks are also end-to-end encrypted.</p>
</li>
<li>
<p>Data is stored on the Network in perpetuity.</p>
</li>
<li>
<p>Passwords and credentials never leave the client computer when accessing and decrypting data. And users need only a single set of credentials while interacting with an unlimited number of services, businesses, identities, or contexts of use.</p>
</li>
</ul>
<h4>Privacy</h4>
<ul>
<li>
<p>Zero-Knowledge: The protocol employs multilayered encryption protecting the privacy of users data both during storage and during transit. Nodes cannot determine the content, nor origin of data they hold or transmit, even if it is their own,</p>
</li>
<li>
<p>No tracking: thanks to its various encryption schemes, tracking and surveillance of browsing and data usage patterns&mdash;commonplace business practice on the incumbent web&mdash;is no longer possible. Privacy is by default.</p>
</li>
<li>
<p>Users of the Network have sovereignty over their personal data, and can maintain and control access to it, while still making use of rich and accessible services and software.</p>
</li>
<li>
<p>Passwords and credentials never leave the client computer when accessing and decrypting data. And users need only a single set of credentials while interacting with an unlimited number of services, businesses, identities, or contexts of use.</p>
</li>
</ul>
<h4>Economy</h4>
<ul>
<li>
<p>The native crypto currencyspan Safe Network Tokens (SNT) allows node operators to be automatically rewarded by the Network after reliably storing and serving data when requested.</p>
</li>
<li>
<p>A user wishing to store data pays for storage in SNT at the point of upload at a price automatically determined by the Network based on the available capacity. There are no ongoing costs after this initial payment.</p>
</li>
<li>
<p>Digital Bearer Certificates, on which SNTs are based, allow tokens to be transferred between users at Network speed, with no fees, and also allow for offline transactions.</p>
</li>
<li>
<p>The supply of SNT remains verifiable and auditable.</p>
</li>
<li>
<p>Inbuilt royalty mechanism means that development of the Network and its application ecosystem can be sustainably funded.</p>
</li>
</ul>
<h4>Efficiency</h4>
<ul>
<li>
<p>The Protocol, and the Network as a whole, is designed to make use of under-utilized and otherwise squandered resources of everyday connected devices; creating a common data storage resource that can put to work serving individuals and communities regardless of location.</p>
</li>
<li>
<p>Thanks to the Protocol&rsquo;s design, all files uploaded to the Network are automatically de-duplicated, yet still benefit from the security and performance benefits of replication since a number of copies of each data chunk are always maintained.</p>
</li>
<li>
<p>The consensus mechanism which allows the nodes to come to agreement on network operations&mdash;allowing for malice detection and Byzantine Fault Tolerance&mdash;is based on Proof of Resource: nodes must gain and maintain reputation through directly providing utility to end users. This is designed to prioritise efficiency and eliminate waste when compared to incumbent alternatives such as Proof-of-Work.</p>
</li>
<li>
<p>Unlike blockchain-based solutions, the Network is designed from the ground up for data. Fully and massively scalable.</p>
</li>
</ul>
<h4>Equality</h4>
<ul>
<li>
<p>No human intervention, intermediary, nor third party, is required to access, store, or retrieve data from the Network.</p>
</li>
<li>
<p>Retrieving data from the Network is always free of charge.</p>
</li>
<li>
<p>Net neutrality: Because, thanks to encryption, all data transmitted via the Protocol looks the same, there can be no discrimination between services, types of files, or those making use of them. So no throttling, and no fast-lanes. Net neutrality is inherent to the design.</p>
</li>
<li>
<p>Global accessibility: The Protocol is designed to be accessible and provide the same performance and experience regardless of a user&rsquo;s location.</p>
</li>
<li>
<p>Near-zero infrastructure costs, and on-demand scaling met automatically by the Network means a low barrier to entry for business, with no restrictions on competition.</p>
</li>
</ul>



        
    </div>

);

export default component;
