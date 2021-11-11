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


        
    </div>

);

export default component;
