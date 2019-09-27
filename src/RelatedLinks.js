import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Copytext from './Copytext';
import { Intro, Chap1, Chap2, Chap3 } from './pages';
import Chap4 from './pages/Chap4';

class RelatedLinks extends React.Component {
 

    render() {

        return (
            this.props.relatedlinks.map((relatedlink) => (
                <Copytext relatedlink={relatedlink} />
            )))
        
    }
}
export default RelatedLinks;