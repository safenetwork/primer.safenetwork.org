import React from 'react';
import supermajority from '../images/supermajority.png';
import sectiontree from '../images/sectiontree.jpg';
import ae1 from '../images/ae1.png';
import ae2 from '../images/ae2.png';
import ae3 from '../images/ae3.png';
import ae4 from '../images/ae4.png';
import ae5 from '../images/ae5.png';
import ae6 from '../images/ae6.png';
import ae7 from '../images/ae7.png';
import ae8 from '../images/ae8.png';
import ae9 from '../images/ae9.png';
import ae10 from '../images/ae10.png';
import ae11 from '../images/ae11.png';



const component = () => (

    <div className='chapter'>

    
        <h2 id='ch9'>9. Safe Network Anti-Entropy</h2>
		
		
		

<p>A major hurdle that any decentralized network that will experience churn, such as Safe, must overcome is keeping the participants up to date with the network&rsquo;s current state. Who has joined and who has left? Who are the current Elders in any given Section?</p>
<p>Elders are by definition relatively dependable and churn amongst them is minimal, but Safe is asynchronous and communications between Section Elders and external actors may be few and far between. The Elders in a Section may have churned many times between contacts.</p>
<p>It&rsquo;s vital that actors wishing to make a change on the Network have an up-to-date &lsquo;understanding&rsquo; of the affected Section before they are allowed to do so, otherwise data could be written to Elders that no longer exist and be lost.</p>
<p>Entropy, or  disorder, is a characteristic of a constantly changing network. We cannot reduce it but we can wait for periods of stability among Elders before allowing a change in their Section. Anti-Entropy is the mechanism for doing this.</p>
<p>Even during periods of massive change such as a large global event, AE enables the network to inform actors attempting to mutate data that they must wait until the change is over before they can try again.</p>
<p>On Safe, the AE mechanism is applied to all messages that can mutate the Network, such as a PUT request. It requires the requesting actor - be that a Client, an Adult or another Section - to prove that the information they hold on the affected Section is current before they proceed. Until then they cannot make a change.&nbsp;</p>
<p>AE reduces the synchronisation issue to a series of questions to which the answer is yes or no. If the answer is no (your information is not current), you need to update your records and try again. There is no halfway house.</p>
<p>In this way AE forces all Nodes that want to perform data operations on the Network to prove they are up to date.&nbsp;</p>

<h3 >Core concepts and mechanisms</h3>
<ul>
<li><strong>Supermajority</strong> &ndash; Any action affecting a Section must be agreed by more than 2/3 of the Elders. For a Section containing seven Elders, two can disagree and the agreement will still go ahead. This allows BFT-type guarantees that provided 2/3 of Nodes can be trusted, agreement will be reached in the event of conflict.</li>
<li><strong>Distributed Key Generation (DKG)</strong> &ndash; To generate a new BLS SectionKey, the participation of a supermajority of Elders is required.</li>
<li><strong>New key per churn event</strong> &ndash; every time an Elder is promoted or demoted, a new round of DKG takes place.&nbsp;</li>
<li><strong>Atomic functionality</strong> - it works or it doesn&apos;t - in case of any conflict or disagreement the actor is requested to try again.</li>
<li><strong>Gossip</strong> - a quick way of propogating messages through a network. Gossip is used to ensure the Network is always reachable from all Sections. </li>
</ul>


<h3>SectionTree and ProofChain</h3>
<p>A SectionTree is a cryptographically secure tree-like record of BLS SectionKeys, each signed by the previous key in the list going back all the way to Genesis - the root of the tree. That way, if you trust Genesis (as you must) then you can trust the validity of the latest key. The leaves of the trees are the current SectionAuthorityProviders (SAPs).</p>
<p>If an actor contacting the Section holds an old key, the Section Elders send the actor a ProofChain (plus the SAP, see below) to bring it up to date. A ProofChain is simply the branch of the SectionTree that the actor hasn't yet seen.&nbsp;</p>
<p>In the image below, an actor connecting to Section 14 for the first time would be passed its SAP and a ProofChain shown in red, which in this case goes all the way back to Genesis, via ancestor Sections 7 and 3. If it already held a record of some of that history, the Proof chain would be truncated to only show the information it is missing.</p>
<div className="Full-width-pic" align="center">
<img className="Img" src={sectiontree} alt="sectiontree" width="70%" align="center" />
</div>


<h3>SectionAuthorityProvider and SectionActor</h3>

<p>As well as updating the requesting actor with the ProofChain, the Elders also send it the SectionAuthorityProvider (SAP), which gives up-to-date information about the Section and its Elders.</p>

<p>The SAP shows us exactly which Elders are in the Section at the present time as well as the current SectionKey. A new SAP is created every time there is a change of Elders in a Section. Its details are spread by gossip to the other Elders to ensure rapid propogation of this information.</p>

<p>The SAP together with the requirement for a supermajority for agreement allows Section Elders to be treated as a single entity - a SectionActor - rather than as autonomous individuals: they act together or not at all.&nbsp;</p>


<h3>The three update scenarios</h3>
<p>On messaging a Section an actor includes what it understands to be that Section&rsquo;s latest SectionKey.</p>
<ol type="1">
    <li>If the SectionKey is correct and current the message is processed.</li>
    <li>If the key is out of date the Section returns the message with a ProofChain and the SAP to authenticate the Elders. The actor updates its records and tries again.</li>
    <li>If the SectionKey is not recognised the message is&nbsp;ignored.</li>
</ol>


<h3 >Voting and conflict resolution</h3>
<p>If an Elder sees a change in Section membership it broadcasts this to the other Elders in the Section and they vote on whether and how the Section state has changed by creating a message containing the proposal and signing it with their BLS shared secret key. Every time the state changes a new round of BLS-DKG is required and a new SectionKey is created.&nbsp;</p>
<p>However, due to differences in connection speed and other factors, not all Elders see the same state at the same time (see Chapter 7).</p>
<p>In the event of a conflict, agreement must be reached before the Section&rsquo;s state is communicated to the outside world, because we can only ever have one version of the truth.&nbsp;</p>


          <img className="Img" src={supermajority} alt="supermajority" width="70%" align="center" />

<p>This is where the supermajority comes into play. A supermajority (e.g. 5 out of 7 Nodes) is required to generate a new Section key, and it is also (non-coincidentally) how Elders arrive at an agreement.&nbsp;</p>
<p>If five Elders see a Node leave (and generate a new key A) and five see another Node join (and generate a new key B) there must be a minimum of three Elders that see both versions. Under BFT at least one of these Elders must be honest. Therefore, both keys A and B are rejected and a new round of DKG takes place.</p>
<p>While this process is happening, any requests for data mutation from outside actors will be rejected. This prevents a client manipulating different Elders within a Section by forking the decision-making process.</p>

<p>Gossip is a type of p2p protocol where a node periodically broadcasts knowledge to another node, often selected at random, and that node passes the message to another node, and so on until it becomes ‘common knowledge’. Gossip is used at various places where the processes can sometimes get stuck, such as DKG rounds, membership and Network splits. In the case of the latter, gossip also allows reconstruction the network after a catastrophic failure.</p>
<p>In addition, a simple localized consensus protocol MVBA is being introduced to resolve stuck voting processes to ensure they resolve (Chapter7).</p>

<h3 >How AE works &ndash; an example</h3>
<p>Let&rsquo;s consider the example of a Client requesting a Section to PUT a chunk of data, and assume that the Client has not contacted our Section before. Incidentally, AE works in the same way for communications between Adults and Elders and between Sections too.</p>

<p>1. The starting situation</p>
          <img className="Img" src={ae1} alt="ae1" width="70%" align="center" />
<p><strong>&nbsp;</strong></p>
<ul>
    <li>Each Elder is in constant contact with all other Elders in the Section (connections not shown) and with all Adults.</li>
    <li>Elders churn rarely, Adults churn frequently.</li>
    <li>Every time the Elders churn a new BLS SectionKey is generated.</li>
    <li>The SAP is what&nbsp;defines the current Section.</li>
    <li>A Section is also defined by its unique XOR address prefix, eg 0011.</li>
    <li>Each Elder&nbsp; has an ID, a BLS key, SectionTrees from its own and other Sections and an address.</li>
    <li>Each Adult has an ID, a SectionTree and an address.</li>
</ul>
<p>2. Client broadcasts a request to all Elders in relevant sections simultaneously</p>


          <img className="Img" src={ae2} alt="ae2" width="70%" align="center" />
		  
		<p>3. SectionActor sends SectionTree and SAP</p>
          <img className="Img" src={ae3} alt="ae3" width="70%" align="center" />

<p>4. But before the Client can resend the message a churn event has occurred with Elder G leaving</p>
          <img className="Img" src={ae4} alt="ae4" width="70%" align="center" />

<p>5. The Elders vote on the change</p>

          <img className="Img" src={ae5} alt="ae5" width="70%" align="center" />
		  
<p>If an Elder sees a change it messages the other Elders via gossip. The Elders vote on whether a churn event has occurred. In this example, most see that G has gone, one (perhaps geographically further away) can still see G. A supermajority votes that G has gone and a new SectionKey, K6, is generated. If the vote had been split without a supermajority it would simply have been rerun.&nbsp;</p>
<p>While the churn is occurring the Client&rsquo;s message is rejected, but as part of AE it will retry continually.&nbsp;</p>

<p>6. Unaware of the churn, the Client tries again attaching its latest key, K5, to the message</p>
          <img className="Img" src={ae6} alt="ae6" width="70%" align="center" />
		  
		  <p>7. Key out of date, try again</p>
          <img className="Img" src={ae7} alt="ae7" width="70%" align="center" />	

<p>8. But before it can try again there’s more churn: Elder H arrives</p>
          <img className="Img" src={ae8} alt="ae8" width="70%" align="center" />	
<p>9. The client tries once more but again it is out of date</p>
          <img className="Img" src={ae9} alt="ae9" width="70%" align="center" />	
<p>10. Once again it is sent the updated ProofChain and SAP and told to try again</p>
          <img className="Img" src={ae10} alt="ae10" width="70%" align="center" />	
<p>11. Success – the churn is over and authority is given</p>
          <img className="Img" src={ae11} alt="ae11" width="70%" align="center" />	

		  
<p>The Client tries again and this time the keys match so everyone is in sync and the operation to store chunk <em>A</em> can proceed. As part of AE a requesting actor will retry continually.</p>


<p>The assumption is that Elders churn rarely (that&rsquo;s why they are Elders) so the above scenario should be rare. Nevertheless, it will happen and AE needs to be able to handle the various combinations of Elders leaving and joining, even if this takes multiple rounds of DKG.&nbsp;</p>
<p>Some potentially difficult scenarios are taken care of by other mechanisms. For example, if an Elder leaves and tries to rejoin again it will find itself relocated to another Section with its Node Age halved (Chapter 5).</p>


<div className="Keep-it-simple">
        <h3>Keep it simple!</h3>
<p>Anti-Entropy is a way to ensure that before data is changed on the network the Section in question is not in a state of churn and the actor requesting the change knows the current identities of the Elders in the Section.</p>
<p>It is an efficient way to keep the network updated on a need-to-know basis with a minimum of messaging.</p>
<p>Importantly, a Section cannot mutate data when it is between states. Only once churn has completed with the agreement of a supermajority of the Elders in the Section will requests for data mutation be accepted. Until then the actor must keep trying.</p></div>

   <h3>&nbsp;Tell me more...</h3>
   <p><a title="anti-entropy" href="https://github.com/maidsafe/sn_entropy_check" target="_blank" rel="noopener noreferrer" >Anti-Entropy (GitHub)</a></p>


    </div>

);

export default component;
