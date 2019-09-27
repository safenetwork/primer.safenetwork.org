import React from 'react';




const component = () => (

    <div className='chapter'>
        <h2 id='ch10'>10. Data types</h2>
        <p>The SAFE Network provides two data types for storing and retrieving data: MutableData (MD) and ImmutableData. As the names suggest, MutableData can be changed whereas ImmutableData cannot. </p>
        <h3>MutableData</h3>
        <p>A MutableData structure is composed of entries. An entry is a key-value pair (e.g. a MD with key 1: value bananas, key 2: value apples has two entries). Entries can be inserted, updated or removed.</p>
        <p>A MutableData entity can hold up to 1,000 entries and contain a maximum of 1 MB of data.</p>
        <p>MutableData can be used in different ways: Public (e.g. websites), Private (private files) and Shared (private messaging groups) depending on whether or how it has been encrypted.</p>
        <p>At the time of writing it is proposed that the MutableData type be replaced by an alternative, AppendableData (AD), which will work in a similar way but with the benefit of simplifying operations.</p>
        <h3>ImmutableData</h3>
        <p>An ImmutableData structure can only store a single value. The ImmutableData's Network address is derived from the hash of its content. This means the file cannot be edited in any way after it has been uploaded - any change would alter the hash. A single ImmutableData entity is also limited to 1 MB, but by using a Data Map to keep track of their locations files larger than 3 Kb can be split into chunks with those chunks stored as separate ImmutableData entities (see Chapter 6).</p>
        <p>Data deduplication is a unique feature of the SAFE Network and a side-benefit of the process of Self-Encryption (see Chapter 6). Two identical chunks will have the same hash value, and therefore only one need be stored on the Network.</p>
        <p>ImmutableData types can be cached by Clients and fetching the same can be quicker. SAFE also has a feature called Opportunistic Caching in which more copies of popular data are created closer to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slowing down as they do on today's Web.</p>
        <p>Data is saved using a combination of MutableData and ImmutableData to create an emulated file system on top of the Network called NFS (Network File Storage). NFS saves a file's content as ImmutableData. It then creates an entry in a MutableData entity, with the file name as the entry's key and the ImmutableData's address as the entry's value. The file can be updated by uploading a new ImmutableData file and then altering the file's address in the MutableData structure to point to the new file. </p>
        <div className="What-does-that-mean">
        <h3>What does that mean?</h3>
        <p>Network File Storage (NFS) - an API that allows a Client to access a collection of files stored over the SAFE Network.</p>
        <p>Decentralized Naming System (DNS) - analogous to the Domain Name System on the Internet (also DNS), this is a system that translates a human-readable web address into a network XOR address.</p>
        <p>Public ID - chosen name for an account (e.g. alice or maidsafe). An account may register any number of Public IDs so long as they have not been registered previously.</p>
        <p>Service name - the name of a service such as a website, email or chat app. So if Alice's website was called mysite the URL would be mysite.alice.</p>
        <p>Type tag - allows apps to identify the type of data: 15001 Public ID; 15002 Service Name; 15003 Email ID; 15004 Email Archive.</p>
            <p>Opportunistic Caching - automatic creation of more copies of popular data close to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slow down as they do on today's web.</p>
            </div>
        <p>Websites on the SAFE Network can be identified using URLs thus: safe://service_name.public_id (e.g. safe://mysite.alice). Working in a similar way to the familiar Internet Domain Name System (DNS), these human-readable addresses are translated into Network addresses on SAFE using the Decentralized Naming System - also abbreviated DNS.</p>
        <p>On the SAFE Network the DNS takes a hash of the Public_ID, so 'alice' in our example becomes a string of 256 characters. The browser takes this hash and uses it as the address to find the corresponding MutableData entity.</p>
        <p>Now the browser finds the Service Name 'mysite' in Alice's MutableData entity. The corresponding value will be a MutableData Name. Using that MutableData Name and the type tag of 15002 the browser can now obtain the address of another MutableData entity which is part of the NFS and contains the names and addresses of the ImmutableData files that make up the website. With this information it can start retrieving the website's files.</p>
        <p>As well as the human readable SAFE URL provided by DNS, files stored on the Network can also be accessed via their XOR-URL. This URL is a base-32 encoding of the file&rsquo;s XOR address and (optionally) its MIME type allowing data to be stored and retrieved by applications without reference to the storer&rsquo;s account (see Chapter 11).</p>
        <p>&nbsp;</p>
        <h3>Tell me more...</h3>
        <p>&nbsp;</p>
        <p><a title="md" href="https://github.com/maidsafe/rfcs/blob/master/text/0047-mutable-data/0047-mutable-data.md" target="_blank" rel="noopener noreferrer" >MutableData (MaidSafe RFC)</a></p>
        <p><a title="cache" href="https://maidsafe.net/features.htm" target="_blank" rel="noopener noreferrer" >Distributed network with opportunistic data caching (MaidSafe)</a></p>
        <p><a title="safe_app" href="https://docs.maidsafe.net/safe_app_nodejs/#nfs" target="_blank" rel="noopener noreferrer" >Maidsafe NFS API documentation</a></p>
        <p><a title="zimmermann" href="https://github.com/maidsafe/rfcs/blob/357384147ae005e4061079b27a30f43cf379fda5/text/0000-xor-urls/0000-xor-urls.md" target="_blank" rel="noopener noreferrer" >XOR-URLs (MaidSafe RFC)</a></p>
        <p><a title="base 32" href="https://philzimmermann.com/docs/human-oriented-base-32-encoding.txt" target="_blank" rel="noopener noreferrer" >Human-oriented base-32 encoding (O'Whielacronx)</a></p>
        </div>
);

export default component;