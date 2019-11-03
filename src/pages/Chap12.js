import React from 'react';




const component = () => (

    <div className='chapter'>
        <h2 id='ch12'>12. How SAFE Network defends against common types of cyberattack</h2>
        <p>SAFE Network has an interlocking set of features, each covering the others&rsquo; vulnerabilities. This means that data security on SAFE is maximized. While 100 percent security is impossible, this strength-in-depth means that the sort of attacks common on the current web will be much harder to carry out on SAFE.</p>
        <h3><strong>Features</strong></h3>
        <p><em>Random address allocation</em><strong> &ndash; </strong>a new node (Vault) joining the Network cannot set its own address and thus cannot decide which Section it joins or which data it will be looking after. This prevents an attacker from being able to target a particular Section to add bad nodes. On a random distribution, the attacker would need to control approximately a third of all nodes to launch such an attack (see Chapter 4).</p>
        <p><em>Nodes are added only as needed -</em> Each Group only accepts a Vault if needed, meaning an attacker might have to wait a very long time to get his or her Vault accepted. Even after that, a new Vault will be moved between Sections before it can become an Elder (see Chapter 5).</p>
        <p><em>Node ageing</em> - only nodes that have proved their worth over time (Elders) are allowed to vote on the validity of events in a Section. Vaults that do not pull their weight or act as they should will be expelled and/or their Node Age reset to a lower value (see Chapter 5).</p>
        <p><em>Churn</em> - Nodes are constantly joining or leaving Sections. Membership is fluid.</p>
        <p><em>Encryption</em> - All data on the SAFE Network is protected by several layers of encryption. Even public data is encrypted (in this case the keys are shared to allow others to decrypt it &ndash; see Chapter 6).</p>
        <p><em>Self-Encryption</em> - files stored on the Network are broken into chunks with each chunk encrypted using its own hash and the hashes of the two previous chunks. These chunks are stored at geographically random locations (the XOR location being the hash of the encrypted chunk) with a number of copies retained for redundancy. Without a Data Map, the chunks cannot be retrieved and decrypted. (Chapter 6).</p>
        <p><em>XOR Networking</em> - Randomizes the geographical distribution of the chunks. Only someone in possession of the Data Map (i.e. the data owner) can find the chunks and piece them together again to recreate the file. An attacker trying to fake a chunk could not do so as its hash - and therefore its address on the Network - would be different. It could not be used to create a corrupted version of the file (see Chapter 5).</p>
        <p><em>Self-Authentication</em> - A user can create an account and log into the decentralized SAFE Network securely and anonymously without requiring any central server to mediate the login process or any trusted third party to store and manage users&rsquo; credentials (see Chapter 3).</p>
        <p><em>Proxy Node</em> - To retain anonymity, the identity of a client connecting to the Network must be obfuscated from the nodes that comprise it. For this reason connections between clients and vaults in the SAFE Network always occur via a Proxy Node (see Chapter 4).</p>
        <p><em>Disjoint Sections</em> - Addresses on the SAFE Network are grouped into Sections with each Section looked after by a Group of nodes. Those nodes know everything about the Section for which they are responsible but very little about the rest of the Network. Moreover, the membership of a Section is constantly changing and they will frequently split or merge. So even if an attacker could control a Section his potential for damage would be limited (see Chapter 5).</p>
        <p><em>Data Chain</em> - All events occurring in a Section are stored in a ledger - a Data Chain. All Section members hold a copy. Elements of it are also shared with nearby Groups (in XOR terms). Because Sections can audit their neighbours, it becomes harder for an attacker to benefit (see Chapter 4).</p>
        <p><em>PARSEC</em> - The PARSEC consensus algorithm provides a quick and efficient way to be sure of the true order of events happening within a section, and by extension in the whole Network, even when the section is changing rapidly with nodes leaving and joining. Malice detection features are built in to identify nodes that are acting abnormally and eject them (see Chapter 7).</p>
        <h3><strong>Defence against common attacks</strong></h3>
        <p><em>Sybil attack</em> - In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence.</p>
        <p>An attacker owning a large number of nodes (Vaults) could potentially control individual Sections and block actions happening to data in those Sections (GET, PUT, transfer Safecoin). However, they would need to control more than a third of the Elders, and remember they cannot choose the Sections they join. Even then, the attacker would only have influence over the fraction of data controlled by the Group it is in (not the whole Network). Also, disrupting an individual&rsquo;s data would be impossible &ndash; the attacker cannot know where it is stored.</p>
        <p>Someone with enough Vaults could of course bring the Network down (for example by suddenly turning off all their Vaults). But this gets harder very quickly as the Network grows larger. A combination of Node Ageing, Data Chains, churn, rules on joining Sections and the splitting and merging of Sections would make this massively more difficult (and very expensive) on a large network.</p>
        <p>In addition, PARSEC will still be able to ensure proper consensus unless more than a third of the Vaults are malicious, and it has Malice Detection tests to identify misbehaving nodes.</p>
        <p><em>Phishing, keylogging etc</em> - these attacks are feasible as the Network cannot protect endpoints. But such an attack would only compromise the user&rsquo;s own data (and that others have allowed the user to see). Using such a compromise as a springboard for a wider attack on a database or whatever would not be possible. This would be of dubious value to an attacker.</p>
        <p><em>Man in </em><em>the Middle attacks</em> - MitM attacks rely on data being unencrypted or the victim&rsquo;s browser accepting the attacker's certificate instead of the website&rsquo;s certificate. They will not work on SAFE.</p>
        <p><em>DDoS</em> - exceptionally difficult as there is no single point to attack. The Network will simply reroute around any nodes that are taken down.</p>
        <p><em>Quantum computing</em> - The encryption used on SAFE is &lsquo;quantum resistant&rsquo; (but not &lsquo;quantum proof&rsquo; of course). But the volume of encrypted packets means that there could only be targeted attempt at decryption, and decentralization makes such targeting difficult.</p>
        <p><em>Ransomware</em> &ndash;Files are stored in immutable data and cannot be changed, so ransomware could not encrypt it, but it could potentially delete Data Maps or hide them, making data inaccessible.</p>
        <h3>Tell me more&hellip;</h3>
        <p><a href="https://github.com/maidsafe/rfcs/blob/f88b55806fcc56876bc34649101c2869b780a247/text/0000-transparent-malice_handling_in_parsec/0000-transparent-malice_handling_in_parsec.md">Malice handling in PARSEC.</a></p> 
        </div>
);

export default component;
