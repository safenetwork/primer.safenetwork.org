import React from 'react';




const component = () => (

    <div className='chapter'>
        <h2 id='ch9'>9. Node personas</h2>
        <p>The Nodes that form the Safe Network have different functions to fulfil. They route and store chunks of data. They cryptographically check messages and split into new Sections if theirs becomes too large. They also take on more defined roles which are called personas.</p>

        <h3>The Client Manager</h3>
        <p>The Client Manager persona holds an account for each Client which is close to it in the Network address space - i.e. in its Section. Each Client account is managed by around eight Nodes (this number may change as the Network is developed).</p>

        <p>A Client account contains details of the number of chunks of data that have been stored on the Network by that Client and how many new chunks can still be uploaded. If a Client account indicates that no more chunks can be put to the Network (because of insufficient Safe Network Token), the Client Managers for that Client disallow any further PUT requests, responding with a LowBalance error.</p>
        <p>Clients can retrieve their account balances by sending a specific request to their Client Managers (a GetAccountInfo request).</p>
        <p>A Safe Network Client account is completely different from a Gmail or Facebook account as it is not linked to any identity. The Client Managers know the account balance of a Client but to them it's just an address in the Network. They don't know the IP address of the Client nor do they have any knowledge of a username, public identity or anything else that could link the Client to an individual.</p>

        <h3>Data Manager</h3>
        <p>The Data Manager persona manages a chunk store where data chunks are held and is responsible for those chunks in its Section. Not every Data Manager in a given Group will necessarily hold that chunk, but each will be aware of which peers do hold it.</p>

        <h3>Tell me more...</h3>
        <p><a title="Data Manager" href="https://blog.maidsafe.net/tag/datamanager/" target="_blank" rel="noopener noreferrer" >Data Manager - consensus without a blockchain (MaidSafe blog)</a> </p>
        <p><a title="Safe Consensus" href="https://blog.maidsafe.net/2016/06/23/introduction-technical-overview-of-safe-consensus/" target="_blank" rel="noopener noreferrer" >Introduction &amp;amp; Technical Overview of Safe Consensus (MaidSafe blog)</a></p>
        <p><a title="Safe_vault " href="https://github.com/maidsafe/safe_vault" target="_blank" rel="noopener noreferrer" >Safe_vault (Github repository)</a></p>    </div>

);

export default component;
