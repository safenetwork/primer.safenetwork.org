import React from 'react';
import data_types from '../images/data_types.png';




const component = () => (

    <div className='chapter'>
        <h2 id='ch10'>10. Data types</h2>
        <p>The Safe Network provides three main data types for storing and retrieving data: Map, Sequence and Blob. Map and Sequence are both mutable data types, meaning their content can be changed, whereas Blobs are immutable. Map and Sequence types are being constituted as CRDTs, meaning that operations on mutable data will be guaranteed to be replicated to all copies of that data, wherever they are held (see Chapter 7).</p>
        <p>There are some sub-categories too. On the Safe Network data can be either 'Public' or 'Private'. Private data can only be accessed by its owner, or others that he or she chooses to share it with, and it can also be deleted. Public data is available to anyone, just as a normal website is today, but it cannot be deleted. This is because the Perpetual Web is a fundamental concept of the Safe Network and public data cannot be erased. </p>
        <p></p>
        <h3>Map</h3>
        <p>A Map is composed of entries. An entry is a key-value pair (e.g. key 123: value apple) and a Map is effectively a kind of key-value store. The value attached to a particular key can be changed, for example, you might decide you prefer bananas to apples, but apple and any other values previously associated with that key will be kept as a historical record. Only in the case of a PrivateMap can that information, or indeed the whole file, be permanently deleted. </p>

        <p>Entries in a Map can be inserted, updated and deleted. In a PrivateMap they can be hard-updated (replacing the current entry rather than appending a new current entry on top of it) or hard-deleted (erasing the entry completely) too, and the entire Map can also be deleted from the Network. Entries in a PublicMap cannot be hard-deleted or hard-updated as that would involve removing data.</p> 
        <p>Every time an operation is performed on a Map, its version number increases by 1.</p>
        <p>A Map would be an ideal choice for storing and rapid access of data related to a unique ID, such as account information.</p>

        <h3>Sequence</h3>
        <p>A Sequence is an append-only data type in which the data is not associated with keys. Changes to the data will result in a new version - but you can’t edit or delete the existing versions. (In the case of a PrivateSequence, the whole Sequence can be deleted, but not individual versions contained within it).</p>

        <p>A Sequence-based document can be updated or corrected an unlimited number of times, but the original version(s) will always be accessible. This is similar to the Internet Archive's Wayback Machine which records websites at regular intervals so you can dial back to see content from the past, even though the site owners may have deleted it long ago. All public Safe sites will have this capability automatically.</p>


      <h3>Blob</h3>
        <p>A Blob is an immutable data structure. Its Network address is derived from the hash of its content. This means the file cannot be edited in any way after it has been uploaded - any change would alter the hash and therefore its address meaning it could not be found. A single Blob is limited to 1 MB, but by using a Data Map to keep track of their locations files larger than 3 Kb can be split into chunks with those chunks stored as separate Blobs (see Chapter 6).</p>
        <p>Data deduplication is a unique feature of the Safe Network and a side benefit of the process of Self-Encryption (see Chapter 6). Two identical Blobs will have the same hash value, and therefore only one (plus a few copies for redundancy) need be stored on the Network.</p>
        <p>Blobs can be Public or Private. A PrivateBlob can only be shared with other parties if they are factored in at the time it is created. This is because the Blob's Network address is a hash of its content plus the IDs of accounts that can access it. Adding a new account would thus change its address and is therefore not possible.</p> 
        <p>Blobs can be cached by Clients, and fetching the same chunk next time can be quicker. Safe also has a planned feature called Opportunistic Caching in which more copies of popular data are created closer to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slowing down as they do on today's Web.</p>
        <p>Use cases for Blobs include images, videos and documents that must not be altered.</p>
       
        <div className="Full-width-pic" align="center">

            <img src={data_types} alt="Data types" width="90%" align="center" />
        </div>
        <p><em>Source: MaidSafe</em></p>
        <h3>Public or Private?</h3>
        <p>All data types can be either Public (available to everyone) or Private (available only to the owner and approved third parties), analogous to the distinction between the public feed and private messaging on social media sites. Private data is encrypted by default, including in transit. </p>

        <div className="What-does-that-mean">
            <h3>What does that mean?</h3>
            <p>Data type - a classification which describes how data can be created, transformed and used. </p>
            <p>Data Map  - a record of file chunks and their corresponding locations on the Network. Only those in possession of the Data Map can recreate the file.  </p>
            <p>Concurrency control - managing the situation where multiple users may make changes to the same data at the same time. </p>
            <p>CRDTs – Data structures that obey certain mathematical rules which ensure that when multiple versions of data exist across a distributed network, eventually these will always converge onto one 'true' version.</p>
            <p>XOR address - a unique 256-bit number. Every entity on the Network has an XOR address. </p>
            <p>XOR URL - a base-32 encoded translation of the XOR address together with other information such as data type as required by applications. </p>
            <p>Network File Storage (NFS) - an API that allows a Client to access files stored on the Safe Network.</p>
            <p>Name Resolution System (NRS) - analogous to the Domain Name System (DNS) on the Internet, this is a system that translates an XOR address to a human-readable web address.</p>
            <p>Public ID - chosen name for an account (e.g. alice or maidsafe). An account may register any number of Public IDs so long as they have not been registered previously.</p>
            <p>Service name - the name of a service such as a website, email or chat app. So if Alice's website was called mysite the URL would be mysite.alice.</p>
            <p>Type tag - allows apps to identify the type of data, e.g. 15001 Public ID; 15002 Service Name; 15003 Email ID; 15004 Email Archive.</p>
            <p>Opportunistic Caching - automatic creation of more copies of popular data close to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slow down as they do on today's web.</p>
        </div>
        <h3>Concurrency control</h3>
        <p>Map and Sequence types offer the ability to control how changes are made to a file when multiple people or processes might be writing to it at the same time (concurrency). Since each change results in a new version, concurrency can lead to unpredictable results. For these use cases an optional concurrency check may be selected to ensure that only the expected version can be updated.</p>

        <h3>Network File Storage</h3>

        <p>Data is saved using a combination of Map and Blob to create an emulated file system on top of the Network called NFS (Network File Storage). NFS saves a file's content as a Blob. It then creates an entry in a FilesContainer, a Map entity, with the file name as the entry's key and the Blob's address as the entry's value. The file can be updated by uploading a new Blob and then altering the file's address in the FilesContainer structure to point to the new instance. </p>
        <p>At time of writing, investigations into the use of a CDRT-tree data type as the basis for a locally mountable filesystem were ongoing, and there are community efforts under way to create a locally mountable filesystem based on FUSE (filesystem in userspace).</p>
        <p>Websites on the Safe Network can be identified using URLs thus: safe://service_name.public_id (e.g. safe://mysite.alice). Working similarly to the familiar Internet Domain Name System (DNS), these human-readable addresses are translated into Network addresses on Safe using the Name Resolution System (NRS).</p>
        <p>As well as the human-readable Safe URL provided by NRS, files stored on the Network can also be accessed via their XOR-URL (e.g. safe://a078516207e36aa2371e17750c93276446bdb4867c027035531b89430aa8d3ae2fa4dbb59). This URL is a base-32 encoding of the file&rsquo;s XOR address and (optionally) its MIME type allowing data to be stored and retrieved by applications without reference to the storer&rsquo;s account (see Chapter 11).</p>
        <p>&nbsp;</p>
        <h3>Tell me more...</h3>
        <p>&nbsp;</p>
        <p><a title="data types" href="https://safenetforum.org/t/an-overview-of-data-types-on-the-safe-network/29845" target="_blank" rel="noopener noreferrer" >Data Types Refinement (MaidSafe RFC and forum discussion)</a></p>
        <p><a title="data types a" href="https://github.com/maidsafe/rfcs/blob/d42c24db6ddfe58f14b347a5664710e493262ce9/text/0052-RDF-for-public-name-resolution/0052-RDF-for-public-name-resolution.md" target="_blank" rel="noopener noreferrer" >Data Hierarchy Refinement (MaidSafe RFC and forum discussion)</a></p>       
        <p><a title="md" href="https://github.com/maidsafe/rfcs/blob/d42c24db6ddfe58f14b347a5664710e493262ce9/text/0052-RDF-for-public-name-resolution/0052-RDF-for-public-name-resolution.md" target="_blank" rel="noopener noreferrer" >RDF for the Public Name Resolution System (MaidSafe RFC)</a></p>        
        <p><a title="aod" href="https://github.com/maidsafe/safe-nd" target="_blank" rel="noopener noreferrer" >Safe Network Data Types (Github)</a></p>
        <p><a title="polyfuse" href="https://github.com/ubnt-intrepid/polyfuse" target="_blank" rel="noopener noreferrer" >Polyfuse - A FUSE (Filesystem in Userspace) library for Rust.  (Github)</a></p>
        <p><a title="tree" href="https://forum.safedev.org/t/filetree-crdt-for-safe-network/2833" target="_blank" rel="noopener noreferrer" >FileTree CRDT for Safe Network  (MaidSafe forum discussion)</a></p>
        <p><a title="cache" href="https://maidsafe.net/features.htm" target="_blank" rel="noopener noreferrer" >Distributed network with opportunistic data caching (MaidSafe)</a></p>
        <p><a title="wayback" href="https://web.archive.org/" target="_blank" rel="noopener noreferrer" >Internet Archive Wayback Machine</a></p>
        <p><a title="safe_app" href="https://docs.maidsafe.net/safe_app_nodejs/#nfs" target="_blank" rel="noopener noreferrer" >Maidsafe NFS API documentation</a></p>
        <p><a title="xorurls" href="https://github.com/maidsafe/rfcs/blob/357384147ae005e4061079b27a30f43cf379fda5/text/0000-xor-urls/0000-xor-urls.md" target="_blank" rel="noopener noreferrer" >XOR-URLs (MaidSafe RFC)</a></p>
        <p><a title="base 32" href="https://philzimmermann.com/docs/human-oriented-base-32-encoding.txt" target="_blank" rel="noopener noreferrer" >Human-oriented base-32 encoding (O'Whielacronx)</a></p>

     </div>   
);

export default component;
