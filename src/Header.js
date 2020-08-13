import React from 'react';

const component = (prop) => (
    <div>
    <div className='header' align={ 'center' }>
        <h1>The SAFE Network Primer</h1>
<p><strong>An introductory guide to the world's first fully autonomous data and communications network</strong></p>
        <p>Last update: August 2020</p>
    </div>
        <hr />
        <div align={' left '}>
            <p>Major changes since last update:</p>
            <ul>
                <li>Sections split when they grow large but no longer merge</li>
                    <li>Arrival of BLS-DKG encryption for authentication and multisig transactions</li>
                    <li>Data Chain replaced with SectionProofChain</li>
                <li>Implementation of conflict-free data types (CRDTs)</li>
                <li>Implementation of asynchronous trustworthy transfers (AT2) allowing deprecation of PARSEC consensus algorithm </li>
                    <li>New data types Map, Sequence and Blob replace MutableData, AppendOnlyData and ImmutableData</li>

            </ul>
            </div>
        <hr />
     </div>
);

export default component;
