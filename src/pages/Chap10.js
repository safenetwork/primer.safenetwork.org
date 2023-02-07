import React from 'react';




const component = () => (

    <div className='chapter'>
        <h2 id='ch10'>10. Data types</h2>
		
	<p>A data type is a classification which describes how data can be created, transformed and used. All programming languages use them, and common examples include integer, string and boolean.</p> 
		
		<p>The Safe Network provides two native data types for storing and retrieving data: Blob and Register, plus a third type, Multimap, which is a refinement of Register. Registers and Multimaps are mutable data types, whereas Blobs are immutable.</p> 
		
		<p>Data itself comes in different forms too. Content or binary data is always encrypted and is spread out over the Safe Network as immutable chunks (Blobs). It can be read by anyone with a data map, which shows how to decrypt and reconstruct the content from its constituent chunks. That data map part of a file which also contains other metadata such as filename and type (video, image, etc). So a 'file' on the Safe Network is really a set of instructions for finding the content's immutable constituent parts and assembling them to recreate the original content, together with information about what will be returned when you do.</p>
		
		<p>The FilesContainer is the equivalent of the familiar folder. We'll use the term folder from here on in as it's less confusing and the FilesContainer nomenclature may change. A folder contains files. Files and folders are mutable - they are metadata rather than data, and you can change the contents of a file and add or remove files from a folder. You can also nest folders within folders just as you can in most operating systems. </p>

		<p>Content can be public or private. Data stored in a folder can be seen by anyone with the folder's FileMap. For private data, as with a file, the Client holds the FileMap. Sub folders have their own FileMaps and may be public or private too, independent of their parent folder.</p>		 

		
		<h3>Blob</h3>
        <p>A Blob is an immutable data type. Its Network address is derived from the hash of its content. This means the file cannot be edited in any way after it has been uploaded - any change would alter the hash and therefore its address meaning it could not be found. The data chunks created by Self-Encryption (see Chapter 6) are Blobs. </p>
        <p>Data deduplication is a unique feature of the Safe Network and a side benefit of the process of Self-Encryption. Two identical Blobs will have the same hash value, and therefore only one (plus a few copies for redundancy) need be stored on the Network.</p>
    
	
        <p>Blobs can be cached by Clients, and fetching the same chunk next time can be quicker. Safe also has a planned feature called Opportunistic Caching in which more copies of popular data are created closer to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slowing down as they do on today's Web.</p>
        
        <h3>Register</h3>
			 
		<p>A Register is a general CRDT mutable data type that holds a value. Registers are used to store appendable data - data can be added to a Register with previous values still being accessible. The Safe Network deploys a special type of Register called a Merkle Register which supports concurrent writes. If two actors write to a register at the same time a fork will be created with both versions kept available. It's then up to client software to decide which fork to choose, according to the app's own rules.</p> 
		
	

		 <h3>Multimap</h3>
		  
		 <p>A Multimap is a CRDT (Chapter 7) version of a Map data type.</p>
		 
		 <p>A basic Map is composed of key-value pairs (e.g. <em>key</em> 123: <em>value</em> apple, <em>key</em> 124: <em>value</em> banana).</p>
		 
		 <p>A Multimap is a more flexible type of Map built on the Register type which allows multiple values to be associated with each key (e.g. <em>key</em> 123: <em>value</em> apple, banana, cherry...). This means that multiple clients (e.g. apps) can edit a Multimap entry at the same time, the result being forks. </p>
		 
				 
	    <p>Every time an operation is performed on a Multimap, a new hash is created as an identifier for the latest version. In the case of a fork with two branches, two hashes are created. Both branches will remain available to an application querying the Multimap, but it's highly likely that one chain will grow longer and most apps will choose to show this one by default. This is different from the previous Map used by Safe Network, in which versions changed in a linear fashion (v1, v2, v3...), and is akin to the way git branching works. </p>

        <p>Files and folders are based on Registers and Multimaps, and Multimaps are used extensively in the NRS, which maps human-readable names to Network addresses, to maintain name mappings and to track versions of files. They store the current version of the data plus previous ones going back in time, including branches.</p>  	 

        <p>Entries in a Multimap can be inserted, updated and deleted (or at least hidden).</p>  
       
       

        <div className="What-does-that-mean">
            <h3>What does that mean?</h3>
            <p>Data type - a classification which describes how data can be created, transformed and used. </p>
            <p>Blob - an immutable data type. </p>
            <p>Register - a mutable CRDT data type. </p>
            <p>Multimap - a mutable CRDT data type for mapping keys to values. </p>   
            <p>Merkle DAG - a graph structure where each node is cryptographically linked to the previous node. </p>         
			<p>File - contains a Data Map showing how to fetch chunks to recreate content, and meta data such as name, etc.   </p>
            <p>Data Map  - a record of file chunks and their corresponding locations on the Network. Only those in possession of the Data Map can recreate the file.  </p>
			<p>File Map - maps filenames/paths to metadata,</p>
            <p>Concurrency control - managing the situation where multiple users may make changes to the same data at the same time. </p>
            <p>CRDTs – Data structures that obey certain mathematical rules which ensure that when multiple versions of data exist across a distributed network, eventually these will always converge onto one 'true' version.</p>
            <p>XOR address - a unique 256-bit number. Every entity on the Network has an XOR address. </p>
            <p>XOR URL - a base-32 encoded translation of the XOR address together with other information such as data type as required by applications. </p>
			<p>PublicName -  the equivalent of a domain/site address.</p>
            <p>SafeID - the equivalent of a 'username' or identity. The PublicName can also do double duty here as it’s a public name with a @ in front. So a public name can be used as a SafeID, but a SafeID need not have a site</p>
            <p>Network File Storage (NFS) - an API that allows a Client to access files stored on the Safe Network.</p>
            <p>Name Resolution System (NRS) - analogous to the Domain Name System (DNS) on the Internet, this is a system that translates an XOR address to a human-readable web address.</p>
             <p>Type tag - allows apps to identify the type of data, e.g. 15001 Public ID; 15002 Service Name; 15003 Email ID; 15004 Email Archive.</p>
            <p>Opportunistic Caching - automatic creation of more copies of popular data close to where it is being requested, so popular websites and other data feeds will actually speed up as they get more visitors, rather than slow down as they do on today's web.</p>
        </div>
    

        <h3>Network File Storage</h3>

        <p>Data is saved using a combination of Multimap, Register and Blob to create an emulated file system on top of the Network called NFS (Network File Storage). NFS saves the content as a Blob. It then creates an entry in a folder (a FilesContainer) a Multimap entity, with the file name as the entry's key and the Blob's address as the entry's value. The file can be updated by uploading a new Blob and then altering the file's address in the folder structure to point to the new instance. </p>
        
        <h3>Name Resolution System</h3>
      
        <p>Unlike the web, domains on Safe are permanent. On the web you need to keep paying for your domain or it will expire and can be given to someone else, or you can sell it to someone else of course. But on Safe, which has no centralised system like ICANN to administer them. Thus NRS is an entirely different system, which comes with tradeoffs. Pay-once-use-forever is appealing of course, but it could lead to domain name squatting, where domains like 'google' are immediately registered with lucrative resale in mind. On the web this became less of a problem once more top level domains (TLDs, e.g. .tech, .lawyer, .biz) became available, copyright law caught up with the technology, and search engines made having a memorable .com domain less essential. But NRS effectively has one domain (like .com) which would likely lead to squatting, and there is currently no search engine for Safe. There are ways around this issue, such as reserving names, creating new TLDs, using petnames, or encouraging a market for alternatives to NRS, but at the time of writing this was still under discussion.</p>	  
	  
      
        <p>As well as the human-readable Safe URL provided by NRS, files stored on the Network can also be accessed via their XOR-URL (e.g. safe://a078516207e36aa2371e17750c93276446bdb4867c027035531b89430aa8d3ae2fa4dbb59). This URL is a base-32 encoding of the file&rsquo;s XOR address and (optionally) its MIME type allowing data to be stored and retrieved by applications without reference to the storer&rsquo;s account (see Chapter 11).</p>
       
       <h3>Tell me more...</h3>
        <p>&nbsp;</p>
        <p><a title="data types" href="https://safenetforum.org/t/update-30-september-2021/35595" target="_blank" rel="noopener noreferrer" >A deep dive into the Merkle Register </a></p>

        <p><a title="data types" href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" target="_blank" rel="noopener noreferrer" >Git Branching - Basic Branching and Merging </a></p>
		
    
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
