import React from 'react';

const component = (prop) => (
    <div>
    <div className='header' align={ 'center' }>
        <h1>The Safe Network Primer</h1>
<p><strong>An introductory guide to the world's first fully autonomous data and communications network</strong></p>
        <p>Last update: November 2021</p>
    </div>
        <hr />
        <div align={' left '}>
            <p>Major changes since last update:
            <ul>
  
                    <li>Implementation of Digital Bearer Certificates </li>
                    <li>Implementation of Anti-Entropy </li>
                    <li>Implementation of conflict-free replicated data types (CRDTs)</li>
                    <li>Move from pay on GET to pay on PUT when remunerating Nodes</li>
                    <li>New data CRDT types Register, Multimap</li>
                    <li>Design for n-of-k user authorization</li>

            </ul>
            </p>
            </div>
        <hr />
     </div>
);

export default component;

