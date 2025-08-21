'use strict';

import "core-js";
import * as hljs from  "highlight.js/lib/core";
import * as xml from "highlight.js/lib/languages/xml";
import * as php from "highlight.js/lib/languages/php";
import * as json from "highlight.js/lib/languages/json";

ready(function () {
    // Syntax highlight
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('json', json);

    var codeBoxes = document.querySelectorAll('.code-box-content.xml, .code-box-content.php, .code-box-content.json');
    for (var i = 0; i < codeBoxes.length; i++) {
        hljs.highlightElement(codeBoxes[i]);
    };
});
