import React from 'react';



const Chap6 = () => (

    <div className='chapter'>
        <h2 id='ch6'>6. Encryption</h2>
        <p>Data on the Safe Network is protected by several layers of encryption. Even public data (like a blog safe://website/blog) is fully encrypted, but in this case the keys needed to decrypt the data are shared with visitors to make it available to them. This makes it different from other peer-to-peer networks like BitTorrent and IPFS where data is not natively encrypted. Safe puts security first every time. </p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
            <p>All data on the Safe Network is encrypted. When a file is stored on the Network it is first broken into chunks, hashed and then encrypted and these chunks are themselves encrypted using the hash of another chunk from the same file. This is Self-Encryption - a method patented by MaidSafe but now open-sourced. </p>
            </div>
        <p>At the network level, the Safe Network uses the TCP, UTP and &micro;TP protocols and all the data moved by these protocols is encrypted from 'bit 1'. This means that the first connection to the Safe Network that a Node or Client makes is to a bootstrap server, one of a number of temporary servers run by MaidSafe to allow new machines to join. The randomly generated public keys for these bootstrap servers are retrieved from the network by the Client, so communications between the Network and the user are always encrypted, never in plain text. Note that any Node on the Network can be used as a bootstrap server so long as its IP address is added to the configuration file of the joining Node. It <em>does not</em> have to be one provided by MaidSafe. </p>
        <p>Clients and Nodes in the Network get a list of IPs and public keys of other users to connect to. These connections are also encrypted from bit 1. </p>
        <h3>Clients connect anonymously</h3>
        <p>To ensure anonymity, the identity of a Client connecting to the Network must be hidden from the Nodes that comprise it. For this reason, the initial connection between a Client and a Node is a two-step process. First it connects via IP to a Node whose IP address is in its config file or cache. This Node knows the Client's IP address and will allow it to connect to a Section via a Section Elder's XOR address. Thereafter, that initial Node has no connection with the Client and cannot track its activities. The Nodes in the Section it joins cannot see the Client's IP address but they know its public key and XOR address. All connections between the Client and the Group(s) are fully encrypted.</p>
       
        <h3>Self-encryption of data</h3>
        <p>As described above, all data on the Safe Network is encrypted - the exception being small files less than 1KB in size. When a Client uploads a piece of data to the Network (for example an mp4 video) it is first broken into chunks and those chunks are then 'self-encrypted', a process patented by MaidSafe by which each chunk is encrypted using its own hash and the hashes of the two previous chunks in the same file. These encrypted chunks are then hashed again to arrive at the XOR address where the chunk will be stored. At the same time a Data Map is created on the Client device, which maps the chunk number to the XOR address of the chunk and the hash to decrypt it and its two successors, allowing the file to be recreated. A number of copies of each chunk are stored by Nodes in the Section to ensure redundancy.</p>
        <p>The Client retains the keys to decrypt the data locally. That way no keys or passwords need ever leave a person's device. Chunks are stored on the Safe Network in a fully encrypted way. Users can choose to share these files with others by sharing their keys with them. They can also choose to make the files fully public, in which case the keys required to decrypt the files are made publicly available, as with the example of a blog.</p>
        <div className="Pullquote"><p>"The Safe Network provides a platform for applications that is both highly secure and anonymized by design"</p></div>
        <h3>Multilayered encryption</h3>
        <p>The Safe Network uses several layers of encryption to protect a user's anonymity and privacy. Several extra layers are active when people use direct messaging or create a public profile. The Network is designed to be as 'zero-knowledge' as possible, to the extent that Farmers cannot possibly figure out what chunks from which private file they are storing - even if it's their own. By utilizing multiple levels of encryption as well as obfuscating the identity of its users after the first hop, the Safe Network provides a platform for applications that is both highly secure and anonymized by design.</p>
        <h3>BLS-DKG</h3>
        <p>Safe uses BLS-DKG to secure the Elder voting process and to authenticate messages passed betwen Sections (see Chapter 7)</p> 
        


        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Self-Encryption - Files uploaded to the Safe Network are broken up into chunks. These chunks are then hashed, encrypted locally using the AES-256 encryption algorithm and the hashes of neighbouring chunks. Because data is encrypted and decrypted locally, there is no need for keys to leave the user's machine.</p>
            <p>Data Map - a record of file chunks and their corresponding locations on the Network. Only those in possession of the Data Map can recreate the file. </p>
            <p>BLS-DKG - a cryptographic system that authenticates the sender of a message, allows for multiple parties to quickly come to a consensus, and can enable multi-signature transactions. </p>
            </div>
        <h3>Tell me more...</h3>
        <p><a title="sodium" href="https://github.com/maidsafe/rust_sodium" target="_blank" rel="noopener noreferrer" >Connecting to the Sodium crypto library</a></p>
        <p title="Crypto 101 "><a title="Crypto 101 " href="https://www.crypto101.io/ " target="_blank" rel="noopener noreferrer" >Crypto 101&nbsp;</a></p>
        <p title="Crypto 101 "><a title="consensus" href="https://medium.com/safenetwork/introduction-technical-overview-of-safe-consensus-c8ea257e3ff8" target="_blank" rel="noopener noreferrer" >Introduction &amp; Technical Overview of Safe Consensus (Blog)</a></p>
        <p><a title="Self-encryption" href="https://maidsafe.net/features.html#self-encryption" target="_blank" rel="noopener noreferrer" >Self-encryption - data that encrypts itself, with itself (MaidSafe) </a></p>
        <p><a title="Self Encryption" href="https://www.youtube.com/watch?v=Jnvwv4z17b4" target="_blank" rel="noopener noreferrer" >Self Encryption on the Safe Network (YouTube)</a></p>
        <p><a title="Self-encrypting Data" href="http://docs.maidsafe.net/Whitepapers/pdf/SelfEncryptingData.pdf" target="_blank" rel="noopener noreferrer" >Self-encrypting Data (MaidSafe Whitepaper)</a></p>
        <p><a title="UDP Hole Punching " href="https://github.com/maidsafe/rfcs/blob/04f276056bf909f415b47ae341b16ce78af0c7a4/text/0008-udp-hole-punching/0008-udp-hole-punching.md" target="_blank" rel="noopener noreferrer" >UDP Hole Punching (MaidSafe RFC) </a></p>
       
    </div>

);

export default Chap6;
