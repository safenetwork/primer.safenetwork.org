import React from 'react';
import data_types from '../images/data_types.png';




const component = () => (

    <div className='chapter'>
        <h2 id='ch10'>10. Data types</h2>
        <p>The SAFE Network provides three main data types for storing and retrieving data: MutableData (MD), ImmutableData (ImD) and AppendOnlyData (AD). As their names suggest, MutableData can be changed whereas ImmutableData cannot. Meanwhile, with AppendOnlyData information can be added by authorized individuals or apps to create a new version but previous versions are never deleted, instead they remain as a permanent record. </p>
        <p>There are some sub-categories too. On the SAFE Network data can be either 'public' or 'private'. Private data can only be accessed by its owner, or others that he or she chooses to share it with, and it can also be deleted. Public data is available to anyone, as a normal website is today, but it cannot be deleted. MutableData can only ever be private.</p>
        <p>'Sequenced' and 'unsequenced' are two additional subcategories that apply to MutableData and AppendOnlyData only. Sequenced data can be edited, whereas unsequenced data is read-only.</p>
        <p></p>
        <h3>MutableData</h3>
        <p>A MutableData structure is composed of entries. An entry is a key-value pair (e.g. key 1: value banana). Entries can be inserted, updated or deleted.</p>
        <p>A MutableData entity can hold up to 1,000 entries and contain a maximum of 1 MB of data.</p>
        <p>MD can only be private. This is because the Perpetual Web is a fundamental concept of the SAFE Network and public data cannot be deleted. One use case for MD would be drafting a document in private.</p>
        <h3>ImmutableData</h3>
        <p>An ImmutableData structure can only store a single value. Its Network address is derived from the hash of its content. This means the file cannot be edited in any way after it has been uploaded - any change would alter the hash and therefore its address meaning it could not be found. A single ImD entity is also limited to 1 MB, but by using a Data Map to keep track of their locations files larger than 3 Kb can be split into chunks with those chunks stored as separate ImD entities (see Chapter 6).</p>
        <p>Data deduplication is a unique feature of the SAFE Network and a side benefit of the process of Self-Encryption (see Chapter 6). Two identical ImD chunks will have the same hash value, and therefore only one (plus a few copies for redundancy) need be stored on the Network.</p>
        <p>ImD can be cached by Clients and fetching the same chunk next time can be quicker. SAFE also has a feature called Opportunistic Caching in which more copies of popular data are created closer to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slowing down as they do on today's Web.</p>
        <p>Use cases for ImD include images, videos and documents that must not be altered.</p>
        <h3>AppendOnlyData</h3>
        <p>AoD can be either public or private. If you make changes to the data it will result in a new version - but you can’t  edit or delete the existing ones, hence the name AppendOnly.</p>

        <p>A published document can be updated or corrected an unlimited number of times, but the original version(s) will always be accessible. This is similar to the Internet Archive's Wayback Machine works, which records websites at regular intervals so you can dial back to see content from the past, even though the site owners may have deleted it long ago. All public SAFE sites will have this capability automatically.</p>
        <div className="Full-width-pic" align="center">

            <img src={data_types} alt="Data types" width="70%" align="center" />
        </div>
        <p><em>Source: MaidSafe</em></p>
        <p>Data is saved using a combination of AppendOnlyData and ImmutableData to create an emulated file system on top of the Network called NFS (Network File Storage). NFS saves a file's content as ImmutableData. It then creates an entry in a FilesContainer, an AppendOnlyData entity, with the file name as the entry's key and the ImmutableData's address as the entry's value. The file can be updated by uploading a new ImmutableData file and then altering the file's address in the FileContainer structure to point to the new file. </p>
        <div className="What-does-that-mean">
            <h3>What does that mean?</h3>
            <p>XOR address - a unique 256-bit number. Every entity on the Network has an XOR address. </p>
            <p>XOR URL - a base-32 encoded translation of the XOR address together with other information such as data type as required by applications. </p>
            <p>Network File Storage (NFS) - an API that allows a Client to access files stored on the SAFE Network.</p>
            <p>Name Resolution System (NRS) - analogous to the Domain Name System on the Internet, this is a system that translates a human-readable web address into a XOR address.</p>
            <p>Public ID - chosen name for an account (e.g. alice or maidsafe). An account may register any number of Public IDs so long as they have not been registered previously.</p>
            <p>Service name - the name of a service such as a website, email or chat app. So if Alice's website was called mysite the URL would be mysite.alice.</p>
            <p>Type tag - allows apps to identify the type of data: 15001 Public ID; 15002 Service Name; 15003 Email ID; 15004 Email Archive.</p>
            <p>Opportunistic Caching - automatic creation of more copies of popular data close to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slow down as they do on today's web.</p>
        </div>
        <p>Websites on the SAFE Network can be identified using URLs thus: safe://service_name.public_id (e.g. safe://mysite.alice). Working in a similar way to the familiar Internet Domain Name System (DNS), these human-readable addresses are translated into Network addresses on SAFE using the Name Resolution System (NRS).</p>
        <p>As well as the human readable SAFE URL provided by NRS, files stored on the Network can also be accessed via their XOR-URL (e.g. safe://a078516207e36aa2371e17750c93276446bdb4867c027035531b89430aa8d3ae2fa4dbb59). This URL is a base-32 encoding of the file&rsquo;s XOR address and (optionally) its MIME type allowing data to be stored and retrieved by applications without reference to the storer&rsquo;s account (see Chapter 11).</p>
        <p>&nbsp;</p>
        <h3>Tell me more...</h3>
        <p>&nbsp;</p>
        <p><a title="base 32" href="https://safenetforum.org/t/an-overview-of-data-types-on-the-safe-network/29845" target="_blank" rel="noopener noreferrer" >An Overview of Data Types on the SAFE Network (MaidSafe blog post)</a></p>

        <p><a title="md" href="https://github.com/maidsafe/rfcs/blob/master/text/0047-mutable-data/0047-mutable-data.md" target="_blank" rel="noopener noreferrer" >MutableData (MaidSafe RFC)</a></p>
        <p><a title="md" href="https://github.com/maidsafe/rfcs/blob/d42c24db6ddfe58f14b347a5664710e493262ce9/text/0052-RDF-for-public-name-resolution/0052-RDF-for-public-name-resolution.md" target="_blank" rel="noopener noreferrer" >RDF for the Public Name Resolution System (MaidSafe RFC)</a></p>
        <p><a title="aod" href="https://github.com/maidsafe/safe-nd/blob/master/src/append_only_data.rs" target="_blank" rel="noopener noreferrer" >AppendOnlyData (Github)</a></p>
        <p><a title="cache" href="https://maidsafe.net/features.htm" target="_blank" rel="noopener noreferrer" >Distributed network with opportunistic data caching (MaidSafe)</a></p>
        <p><a title="wayback" href="https://web.archive.org/" target="_blank" rel="noopener noreferrer" >Internet Archive Wayback Machine</a></p>
        <p><a title="safe_app" href="https://docs.maidsafe.net/safe_app_nodejs/#nfs" target="_blank" rel="noopener noreferrer" >Maidsafe NFS API documentation</a></p>
        <p><a title="zimmermann" href="https://github.com/maidsafe/rfcs/blob/357384147ae005e4061079b27a30f43cf379fda5/text/0000-xor-urls/0000-xor-urls.md" target="_blank" rel="noopener noreferrer" >XOR-URLs (MaidSafe RFC)</a></p>
        <p><a title="base 32" href="https://philzimmermann.com/docs/human-oriented-base-32-encoding.txt" target="_blank" rel="noopener noreferrer" >Human-oriented base-32 encoding (O'Whielacronx)</a></p>

     </div>   
);

export default component;