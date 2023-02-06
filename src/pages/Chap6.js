import React from 'react';
import password_passphrase from '../images/password-passphrase.jpeg';



const Chap6 = () => (

    <div className='chapter'>
        <h2 id='ch6'>6. Encryption and authentication</h2>
        <p>Content on the Safe Network is stored as encrypted chunks. The original content can be recreated from these chunks provided we have a map of where the chunks are plus the keys to decrypt them. A 'file' on the Safe network is really a structure containing some metadata, such as the file name plus a Data Map which points to the location of the chunks. Files are kept in folders which are created as part of the Self-Encryption process (see below) and are encrypted, meaning their contents are only accessible to their owner by default. However, in the case of public content they are not encrypted meaning the files are accessible.</p>
        <p>The API makes it impossible to upload unencrypted (plain text) content to the network.</p>
        <div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
            <p>All content on the Safe Network is encrypted by default. When a content is stored on the Network it is first broken into chunks, hashed and then encrypted and these chunks are themselves encrypted using the hash of another chunk from the same file. This is Self-Encryption - a method patented by MaidSafe but now open-sourced. When content is made public it's containing folder is decrypted, meaning anyone can reassemble the chunks.</p>
            </div>
        <p>At the network level, the Safe Network uses the TCP, UTP and &micro;TP protocols and all the data moved by these protocols is encrypted from 'bit 1'. This means that the first connection to the Safe Network that a Node or Client makes is to a bootstrap server, one of a number of temporary servers run by MaidSafe to allow new machines to join. The randomly generated public keys for these bootstrap servers are retrieved from the network by the Client, so communications between the Network and the user are always encrypted, never in plain text. Note that any Node on the Network can be used as a bootstrap server so long as its IP address is added to the configuration file of the joining Node. It <em>does not</em> have to be one provided by MaidSafe. </p>
        <p>Clients and Nodes in the Network get a list of IPs and public keys of other users to connect to. These connections are also encrypted from bit 1. </p>
        <h3>Clients connect anonymously</h3>
        <p>To ensure anonymity, the identity of a Client connecting to the Network must be hidden from the Nodes that comprise it. For this reason, the initial connection between a Client and a Node is a two-step process. First it connects via IP to a Node whose IP address is in its config file or cache. This Node knows the Client's IP address and will allow it to connect to a Section via a Section Elder's XOR address. After relocation to a new Section (Chapter 5), that initial Node has no connection with the Client and cannot track its activities. The Nodes in the new Section cannot see the Client's IP address but they know its public key and XOR address. All connections between the Client and the Section(s) are fully encrypted.</p>
       
        <h3>Self-encryption of content</h3>
        <p>All content (documents, images, videos, etc) on the Safe Network is encrypted. When a Client uploads a piece of content to the Network (for example a video) it is first broken into chunks. Those chunks are then Self-Encrypted, a process patented by MaidSafe by which each chunk is encrypted using its own hash and the hashes of the two previous chunks in the same file. These encrypted chunks are then hashed again to arrive at the XOR address where the chunk will be stored. At the same time a Data Map is created on the Client device, which maps the chunk number to the XOR address of the chunk and the hash to decrypt it and its two successors, allowing the content to be recreated. A number of copies of each chunk are stored by Nodes in the Section to ensure redundancy.</p>
        <p>Data Maps and other metadata are not encrypted, but on the network they are kept inside encrypted folders if the data is private.</p>
        <p>The Client retains the Data Map for the content it has uploaded and keys to decrypt it locally. That way no keys or passwords need ever leave a person's device. Users can choose to share content with others by sharing their keys / Data Map with them. They can also choose to make the content fully public, in which case the folders containing the relevant files are unencrypted.</p>
        <div className="Pullquote"><p>"The Safe Network provides a platform for applications that is both highly secure and anonymized by design"</p></div>
        <h3>Multilayered encryption</h3>
        <p>The Safe Network uses several layers of encryption to protect a user's anonymity and privacy. Several extra layers are active when people use direct messaging or create a public profile. The Network is designed to be as 'zero-knowledge' as possible, to the extent that Node operators cannot possibly figure out what chunks from which private file they are storing - even if it's their own. By utilizing multiple levels of encryption as well as obfuscating the identity of its users after the first hop, the Safe Network provides a platform for applications that is both highly secure and anonymized by design.</p>
        <h3>BLS-DKG</h3>
        <p>Safe uses Boneh-Lynn-Shacham Distributed Key Generation (BLS-DKG) to secure the Elder voting process and to authenticate messages passed between Sections. BLS-DKG is a threshold cryptographic system, meaning that authorization is only given once a predefined number of key shares have been received and combined to create a valid key. If 5 out of 7 Elders (a supermajority) each return a key share indicating that they have voted for an event then it is valid without requiring the other 2 to do so, i.e. it is Byzantine Fault Tolerant. BLS-DKG is covered in more detail in Chapter 7.</p> 
      
        <h4>Safe credentials</h4>
        <p>BLS-DKG is useful in other areas too, including helping users handle their authentication credentials. </p> 
        <p>A Safe is the term used to describe a place on the Network for the user's private data, and the act of creating a Safe is really the act of creating some credentials, with which to 'unlock' the Safe. </p>
        <p>Credentials are thus extremely important, but credential loss can be a serious problem on decentralized networks where there is no central authority to help recover or reset forgotten passwords. The temptation may be to choose simple credentials that are easy to remember, but these will likely be insecure (easily guessed or cracked) and prone to collisions - other people may choose the same ones and inadvertently stumble upon the user's private information.</p>
        <p>The Safe Network requires at least two separate credentials, generally referred to as 'access keys', with the option to add more. In combination, these access keys must have sufficient entropy (randomness) to make collisions vanishingly unlikely.</p>
        <p>Creating a Safe for the first time requires the user to choose a password (the first access key) from which a second access key is generated in the form of a passphrase (12 random words with a checksum in the style of BIP39), which the user writes down, perhaps keeping copies in a few safe places. With these two access keys, we have <strong>something you know</strong> (the password), and <strong>something you have</strong> (the passphrase), and in combination, we can generate a suitable amount of entropy to avoid collisions. This is the minimum requirement for creating a Safe.</p>
            <div className="Full-width-pic" align="center">

<img src={password_passphrase} alt="password-passphrase" width="70%" align="center" />
</div>

        
<p>The user may also choose to create a third access key, a device key, on a trusted smartphone or computer, which is where BLS-DKG comes in, enabling a 2-of-3 key scheme. </p>
<p>Now instead of requiring the passphrase, on this trusted device the user can just use the password and the device key, maybe utilising some inbuilt biometrics too, for an element of <strong>something you are</strong>.</p>
        <p>Additional access keys can be created to provide more flexibility and resilience. A backup passphrase is one example, and additional devices can be set up too. Then if the user forgets the password or loses a device, a combination of another device and or passphrase will allow the password to be reset. </p>
        <p>In this way Safe Network caters for people with security needs ranging from the everyday to the extreme.</p>
       

        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Self-Encryption - Content uploaded to the Safe Network is broken up into chunks. These chunks are then hashed, encrypted locally using the AES-256 encryption algorithm and the hashes of neighbouring chunks. Because content is encrypted and decrypted locally, there is no need for keys to leave the user's machine.</p>
        <p>File &ndash; contains instructions for recreating content from encrypted chunks.</p>

        <p>Folder &ndash; container for files and other folders. Unencrypted for public data.</p>
            <p>Data Map &ndash; a record of content chunks and their corresponding locations on the Network. Only those in possession of the Data Map can recreate the file. </p>
            <p>BLS-DKG &ndash; a cryptographic system that authenticates the sender of a message, allows for multiple parties to quickly come to a consensus, and can enable multi-signature transactions and n-of-k credentials </p>
            <p>Byzantine Fault Tolerance &ndash; the ability of a decentralized network to function properly even if up to a third of the nodes (plus 1) is corrupt or faulty. </p>               
            <p>n-of-k &ndash; if you have k different credentials you need at least n of them to proceed, e.g. 2 out of 3 keys required to unlock a Safe. </p>            
            <p>Safe &ndash; a private data store on the Network. </p>
            <p>BIP39 &ndash; Bitcoin Improvement Proposal 39, creates a random-looking set of words which are processed to generate cryptographic keys.</p>
            </div>
        <h3>Tell me more...</h3>
        <p><a title="sodium" href="https://github.com/maidsafe/rust_sodium" target="_blank" rel="noopener noreferrer" >Connecting to the Sodium crypto library</a></p>
        <p title="Crypto 101 "><a title="Crypto 101 " href="https://www.crypto101.io/ " target="_blank" rel="noopener noreferrer" >Crypto 101&nbsp;</a></p>
       
      <p><a title="Self encrypting files" href="https://github.com/maidsafe/self_encryption">Self encrypting files (convergent encryption plus obfuscation) (GitHub)</a> </p>
        <p><a title="Self Encryption" href="https://www.youtube.com/watch?v=Jnvwv4z17b4" target="_blank" rel="noopener noreferrer" >Self Encryption on the Safe Network (YouTube)</a></p>
        <p><a title="Self-encrypting Data" href="http://docs.maidsafe.net/Whitepapers/pdf/SelfEncryptingData.pdf" target="_blank" rel="noopener noreferrer" >Self-encrypting Data (MaidSafe Whitepaper)</a></p>
        <p><a title="UDP Hole Punching " href="https://github.com/maidsafe/rfcs/blob/04f276056bf909f415b47ae341b16ce78af0c7a4/text/0008-udp-hole-punching/0008-udp-hole-punching.md" target="_blank" rel="noopener noreferrer" >UDP Hole Punching (MaidSafe RFC) </a></p>
        <p><a title="bip39 " href="https://iancoleman.io/bip39/" target="_blank" rel="noopener noreferrer" >BIP39 Mnemonic Code Converter  </a></p>
       
    </div>

);

export default Chap6;
