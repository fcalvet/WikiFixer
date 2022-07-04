/*
parking lot:
.skin-vector-max-width .mw-body {border: 1px solid #a7d7f9; border-right-width: 0; padding: 1.25em 1.5em 1.5em 1.5em; }

*/
var editCSS = document.createElement('style')
editCSS.innerHTML = `.mw-page-container { max-width: unset; margin-left: unset; margin-right: unset; padding-left: unset; padding-right: unset; }
.vector-layout-legacy .mw-workspace-container { max-width: unset; margin-left: unset; margin-right: unset; }
.mw-workspace-container { max-width: unset; }
.vector-layout-legacy .mw-content-container { max-width: unset; margin-right: 2em; }
body:not(.skin-vector-toc-experiment-control):not(.skin-vector-toc-experiment-unsampled) .vector-layout-legacy .vector-toc-visible .mw-workspace-container .mw-content-container { margin-left: 16em; }
.mw-content-container { max-width: unset;  margin-left: 150px; }
.vector-layout-legacy .mw-article-toolbar-container { max-width: unset; margin-right: 2em; }
.mw-article-toolbar-container { max-width: unset; margin-left: 145px; }
.vector-toc-enabled .vector-layout-legacy .mw-checkbox-hack-checkbox:checked ~ .mw-workspace-container #mw-navigation .mw-article-toolbar-container, body:not(.skin-vector-toc-experiment-control):not(.skin-vector-toc-experiment-unsampled) .vector-layout-legacy .vector-toc-visible #mw-navigation .mw-article-toolbar-container { margin-left: 16.5em; }
`;
document.body.appendChild(editCSS);

