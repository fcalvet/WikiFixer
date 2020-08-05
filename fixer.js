/*
Just draw a border round the document.body.
*/
var editCSS = document.createElement('style')
editCSS.innerHTML = `.skin-vector-max-width .mw-page-container { max-width: unset; margin-left: unset; margin-right: unset; }
.skin-vector-max-width .mw-content-container { max-width: unset; margin-left: 150px;}
.skin-vector-max-width .mw-workspace-container { max-width: unset; }`;
document.body.appendChild(editCSS);