/**
 * @file mofron-comp-breadcrumbs/index.js
 * @brief breadcrumbs component for mofron
 * @license MIT
 */
const Image   = require('mofron-comp-image');
const Text    = require('mofron-comp-text');
const Link    = require('mofron-comp-link');
const Margin  = require('mofron-layout-margin');
const ConfArg = mofron.class.ConfArg;
const comutl  = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('Breadcrumbs');
            
	    /* init config */
            this.confmng().add('delimiter', { type:'string' });
            this.confmng().add('size', { type:'size', init:'0.16rem' });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
	    super.initDomConts();
	    this.style({ 'display':'flex' });
	    this.layout(new Margin('left','0.08rem'));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
            super.beforeRender();
            
            let siz = comutl.getsize(this.size());
            let chd = this.child();
            for (let cidx in chd) {
                if (true === comutl.isinc(chd[cidx], 'Image')) {
                    chd[cidx].src(this.delimiter());
		    chd[cidx].size(siz.toString(),siz.toString());
		    chd[cidx].style({ 'margin-top':siz.value()/4+siz.type() });
                } else {
                    chd[cidx].size(siz.toString());
		}
            }
	    
	    
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    linkItem (txt, url) {
        try {
            if (0 < this.child().length) {
                this.child(
                    new Image({})
                );
            }
	    let set_txt = null;
	    if (undefined === url) {
                set_txt = new Text(txt);
	    } else {
                set_txt = new Link({ text:txt, url:url });
	    }
            this.child(set_txt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    size (prm) {
        try {
            return this.confmng('size', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    delimiter (prm) {
        try {
            return this.confmng('delimiter', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
/* end of file */
