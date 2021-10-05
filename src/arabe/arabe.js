import React, { Component } from 'react';
import ArVisit from './arVisit';
import ArFooter from './headerFooter/arFooter';
import ArHeader from './headerFooter/arHeader';
class Arabe extends React.Component {
    render() { 
        return (
            <React.StrictMode>
                <html lang="Ar">
                    <div class='arabic'>
                        <ArHeader/>
                        <ArVisit/>
                        <ArFooter/>
                    </div>
                </html>
            </React.StrictMode>
        );
    }
}
 
export default Arabe;