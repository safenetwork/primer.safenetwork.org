import React from 'react';
import xor_url from '../images/xor_url.PNG';
import api_flow_revised from '../images/api_flow_revised.PNG';




const component = () => (

    <div className='chapter'>
        <h2 id='ch11'>11. The Safe API</h2>
        <p>The Safe API is used by developers to interact directly with the Safe Network. It is available to use in JavaScript, Node.js, Java and C#. Apps connecting to the Safe Network are granted different levels of access to data through the API depending on whether they are authorized or not. Apps that are not authorized can only access public data, such as websites. Authorized Apps can access the full range of network functionality.</p>

        <div className="Full-width-pic" align="center">

            <img className="Img1" src={api_flow_revised} alt="API-Flow" align="center" />
        </div>

        <p>Currently the Safe Network has default containers in which certain types of files are stored. For example, _documents is used to store document-related data; _downloads is the container for downloaded content; _music is the place to store music files, and so on.</p>
        <p>There are plans to move away from this system to one of Data Labels, a flatter more  flexible structure which should help reduce the issue of data getting siloed in certain applications. Under this scheme a single piece of data can have multiple labels, some applied by default (e.g. Photo) others user-created (Spain, 2019...) or selected from existing ontologies used in the Semantic Web. Each label has its own index so data can easily be processed by apps, and permissions to access and process data can be managed on a per-label basis. The thinking behind this concept is to improve the user experience (UX) around granting permissions, and to make the architecture more exensible.</p>

        <p>Application development for the Safe Network is not that different from any other platform. There are safe_app libraries based on the platform the application is being built on. Node.js, Javascript, Java and C# are best supported at present. Web applications can be built using the DOM API of the Safe Browser and there are libraries for Android and iOS.</p>

        <h3>Authorization</h3>
        <p>Applications need to be authorized before they can access data on the Network. In a similar way to the familiar OAuth process, the application sends a request using the library for authorization. When the authorization is approved by the user, the application receives a token which is used to connect to the Safe Network. Authorization is achieved via an application call to the Authenticator.</p>

        <p>Authorization is fine grained. An application can create its own container and request access to default containers or other applications&rsquo; containers through the authorization request. READ, WRITE, UPDATE, DELETE, MANAGE permissions can be requested for every container. The API features many methods for allowing apps to interact with and deploy Map, Sequence and Blob data types (see Chapter 10) and to write and retrieve data from the network.</p>
        <h3>CipherOpt and Crypto APIs</h3>
        <p>The safe_app library also provides crypto API functions. The safeCipherOpt API provides functions to create different encryption options to be applied while storing the data in the network. Sign key handling APIs were a work in progress at the time of writing.</p>
        <p>There are three types of CipherOpts:</p>
        <ul>
            <li>Plain - Data will not be encrypted.</li>
            <li>Symmetric - Data is encrypted with a symmetric key.</li>
            <li>Asymmetric - Data is encrypted using a key pair.</li>
        </ul>

        <p>The safeCrypto API provides handy cryptographic functions, including hashing and generating key pairs.</p>
        <h3>DOM API</h3>
        <p>A web application can communicate with the Safe Network and Authenticator by interacting
        directly with the Safe Browser&rsquo;s DOM API, i.e. window.safe* functions.</p>

        <p>This API is very similar to the Node.js API, the main difference being that the web application receives handles for each of the objects that are instantiated when interacting with the API, e.g. SAFEApp and MutableData instances. The web app is required to release the handles provided by calling a specific &lsquo;free&rsquo; function on each of the tokens received.</p>
        <h3>Support for XOR-URLs</h3>
        <p>The DOM API also allows applications to link or reference any MutableData/ImmutableData on the Network using its XOR-URL. This is a URL based on the file&rsquo;s XOR location on the Network which also contains information about the file&rsquo;s MIME-type so the Safe Browser can fetch a file (say an image) and render it as usual.</p>
        <p>As shown in the screenshot below, the Safe Browser can decode the XOR-URL to extract the location of the content, content type (if the MIME type is also encoded in the XOR-URL), fetch it, and render it accordingly as it does it with any publicName-URL (i.e. the URLs which make use of the Safe DNS system):</p>
        <div className="Full-width-pic" align="center">

            <img src={xor_url} alt="XOR-URL" width="100%" align="center" />
        </div>

        <p><em>Fetching a page using its XOR-URL</em></p>
        <h3>WebIDs, RDF and SOLID</h3>
        <p>The Safe DOM API safe_app_nodejs supports WebIDs. These allow users to identify themselves to applications and pass information (for example the location of an inbox) using just a URL. A user may create multiple IDs for different purposes.</p>
        <p>There is also support for the semantic web&rsquo;s data exchange model Resource Description Framework (RDF) and WebIDs are stored as RDF documents. Supporting RDF makes Safe compatible with Tim Berners-Lee&rsquo;s SOLID project which allows users to store their own personal data in &lsquo;pods&rsquo; independently of the applications that use it. Many apps developed for SOLID should be easily ported to SAFE, and vice versa, and there is potential for the Safe Network to operate as a highly secure platform for pods.</p>
        <h3>Tell me more...</h3>
        <p><a title="labels " href="https://safenetforum.org/t/rfc-labelled-data-indexing-and-token-authorisation/30597 " target="_blank" rel="noopener noreferrer" >Labelled Data, Indexing and Token Authorisation (MaidSafe RFC)</a></p>
        <p><a title="tokens" href="https://safenetforum.org/t/rfc-tokens-updated-and-extracted-from-labels/31096" target="_blank" rel="noopener noreferrer" >Tokens (updated and extracted from labels) (MaidSafe RFC)</a></p>
        <p><a title="safe_app_nodejs " href="http://docs.maidsafe.net/safe_app_nodejs " target="_blank" rel="noopener noreferrer" >Safe Network Node.js API</a></p>
        <p><a title="cryptointerface" href="https://docs.maidsafe.net/safe_app_nodejs/cryptointerface" target="_blank" rel="noopener noreferrer" >Crypto API</a></p>
        <p><a title="cipheroptinterface" href="https://docs.maidsafe.net/safe_app_nodejs/cipheroptinterface" target="_blank" rel="noopener noreferrer" >CipherOpt API</a></p>
        <p><a title="Auth flow" href="https://github.com/maidsafe/rfcs/blob/master/text/0046-new-auth-flow/0046-new-auth-flow.md" target="_blank" rel="noopener noreferrer" >New Auth Flow (MaidSafe RFC)</a></p>
        <p><a title="async-safe-core" href="https://github.com/maidsafe/rfcs/blob/master/text/0043-async-safe-core/0043-async-safe-core.md" target="_blank" rel="noopener noreferrer" >Async safe_core (MaidSafe RFC)</a></p>
        <p><a title="Safe Authenticator Mobile" href="https://github.com/maidsafe/safe-authenticator-mobile" target="_blank" rel="noopener noreferrer" >Safe Authenticator Mobile (Github)</a></p>
        <p><a title="webids" href="https://medium.com/safenetwork/an-overview-of-webids-and-rdf-data-use-on-safe-a1fa4a319bd5" target="_blank" rel="noopener noreferrer" >An overview of WebIds and RDF data use on Safe (Josh Wilson).</a></p>
        <p><a title="rdf" href="https://www.w3.org/RDF/" target="_blank" rel="noopener noreferrer" >Resource Description Framework (RDF) &ndash; (W3 documentation)</a></p>
        <p><a title="Playing it Safe with RDF" href="https://forum.safedev.org/t/playing-it-safe-with-rdf/1889" target="_blank" rel="noopener noreferrer" >Playing it Safe with RDF</a></p>
        </div>
);

export default component;
