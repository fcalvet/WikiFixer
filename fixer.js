/*
parking lot:
.skin-vector-max-width .mw-body {border: 1px solid #a7d7f9; border-right-width: 0; padding: 1.25em 1.5em 1.5em 1.5em; }
*/
var editCSS = document.createElement('style')
editCSS.innerHTML = `.mw-page-container { max-width: unset; margin-left: unset; margin-right: unset; }
.mw-content-container { max-width: unset; margin-left: 150px;}
.mw-workspace-container { max-width: unset; }
.mw-article-toolbar-container { max-width: unset; margin-left: 145px; }`;
document.body.appendChild(editCSS);
