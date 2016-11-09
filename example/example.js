import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import {
    ContextInfoMessage,
    ContextTipMessage,
} from '../lib';

const example = (
    <div>
        <div className="component-intro">
            <h2 className="component-intro__header">System Message</h2>
            <div className="lozenge lozenge-success">I PRODUKSJON</div>
            <p className="ffe-micro-text ffe-external-docs-text">
                HENTET FRA <a href="***REMOVED***">STASH</a>
            </p>
            <p>Meldinger</p>
        </div>

        <h3 className="ffe-h4">Eksempler</h3>

        <div className="example-container">
            <h4 className="example-container__header">Info</h4>
            <ContextInfoMessage>
                Informasjon
            </ContextInfoMessage>
        </div>

        <div className="example-container">
            <h4 className="example-container__header">News</h4>
            <ContextTipMessage>
                Nyheter
            </ContextTipMessage>
        </div>



        <div className="expanding-field">
            <button className="expanding-field__toggle">Vis kode</button>
            <span className="expanding-field__icon"></span>
            <div className="expanding-field__content">
                <pre>
                    <code className="html hljs xml">
                        {
                            renderToStaticMarkup(
                                <ContextInfoMessage>
                                    Send innholdet her. Alt pakkes i et &lt;p&gt; element så unngå bruk av
                                    feks &lt;div&gt;, &lt;p&gt; og &lt;ul&gt;.
                                </ContextInfoMessage>
                            ).replace(/</, '\n<')
                        }
                    </code>
                </pre>
            </div>
        </div>

    </div>
);

export default renderToStaticMarkup(example);
