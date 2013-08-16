// add style
(function() {
var nopeClass = 'nope-nope-nope';
var wrapID = nopeClass + '-wrap';
var nopeHelpClass = nopeClass + '-help';
var nopeWrap = document.getElementById(wrapID);

var nopeClickHandler = function (e) {
	var nope2 = document.createElement('div');
	nope2.className = nopeClass;
	nope2.innerText = 'NOPE';
	nope2.setAttribute('style', '\
	top: ' + e.pageY + 'px;\
	left: ' + e.pageX + 'px;\
-webkit-transform: translate3d(-50%, -50%, 0) rotate(' + Math.floor((Math.random() * 60) - 30) + 'deg);\
	');

	var b = document.getElementById(wrapID);
	b.appendChild(nope2);

	// console.log(e.pageX, e.pageY);

	return false;
};

if (!nopeWrap) {
	nopeWrap = document.createElement('div');
	nopeWrap.id = wrapID;
	nopeWrap.innerHTML = '<div class="' + nopeHelpClass + '">[ESC] to Stop</div>';

	var b = document.getElementsByTagName('body')[0];
	b.appendChild(nopeWrap);

	var bodyStyle = window.getComputedStyle(b, null);
	var bodyPosition = bodyStyle.getPropertyValue('position');
	if (['fixed', 'absolute', 'relative'].indexOf(bodyPosition) < 0) {
		b.style.setProperty('position', 'relative');
	}

	var style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.innerText = [
			,'#' + wrapID + '{'
			,'	cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAhCAYAAADH97ugAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQTAzRTNGOUZDRTMxMUUyQjlCMDg3NTFENDMyMzlCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQTAzRTNGQUZDRTMxMUUyQjlCMDg3NTFENDMyMzlCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRBMDNFM0Y3RkNFMzExRTJCOUIwODc1MUQ0MzIzOUI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRBMDNFM0Y4RkNFMzExRTJCOUIwODc1MUQ0MzIzOUI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R9bTUwAAAqlJREFUeNq0VsFu2kAQxeCQxEkJbWmtJFCKoooDKSfaSkX9BH6iOYZU4ks45AP4hN7oBQmOEc0JJacGpQqEilaqKkWFAsHOTPRsuQ5eG4es9LTW7njezu6b2ZV0XQ94aCHCKrCEsQlhCEzdHMgeSNjmCWGL8IygYHxA+EXoEX4Tru9DFCRsEHYILwkRW0QxEH8D2VTkSNTChOeEeLvd3s5kMvuSJB0y+JvHaO4FQYWtc+MzEiBKeE/4WCgUvrC5Fblc7ojm9ggfCI9FvkQRSYQVbFe42Wy+tht0Op04Ill3iyjoojTe//VGo6H2+/1tuwGP0fY9gp2Cf+Ym4kNfIyzXarW4k1GlUnmFyNcsQpmLSIYDudVqORJhTrbl2Nyqk4CAhzQIimxFRBqSUItEIkMXIg3Q/RBx8o2YjGTcdTLKZrNd2I5F1UFEdA2iqaqqjhHFYrEhbP+JKoMkKKq83yzpN9xzNXBI+E/UXRKOCV1s4VwR6YjoL684lUqd2Q0o0ktEM0BEml/VTUA0TiaTd84pkUh0YTNAH/BLNAbRhIpozz6ZTqd7sLk3kbnafD5/JyKo0YxamJAuN6xQEF6F4CUiHSu9va6tgoAQphDBSERi1DNe9bJRQGeQb2D8v6YoyhALCeOKX5pRLQzVjmQ42cRNGZ1R6o37JmRVHr5DuM5XZpwRR/uHcEH4wWf0lD528S5QnLazWCy+q1arb61jTFav1z8L6h8LqU04YaItHHbCKfv9NvJ9wBcx4atR3kMehOGnmb4fwrkveS+USINCtAfwb/qWofUrlme5XD5cMNEYvm/ziCX4E6/NQKlUOlgEAxZ9Bd8DlncQz94M3terCzg7DWXrO+GUyWQMcgaf4xKLih6CHptRFTroNaN6u9U7PxGZdY5z90aAAQC2iSnW9m4k2AAAAABJRU5ErkJggg==), crosshair;'
			,'	z-index:9999;'
			,'	position:absolute;'
			,'	top:0;'
			,'	left:0;'
			,'	right:0;'
			,'	bottom:0;'
			,'} #' + wrapID + '.nope-disabled {'
			,'	cursor:initial;'
			,'	pointer-events: none;'
			,'} .' + nopeClass + '{'
			,'	position: absolute;'
			,'	color: #e00;'
			,'	font: bold 64px/1 Helvetica, Arial, sans-serif;'
			,'	border: 9px solid;'
			,'	padding: 3px 11px;'
			,'}'
			,'.' + nopeHelpClass + ' {'
			,'	position: fixed;'
			,'	top: 0;'
			,'	right: 0;'
			,'	background: rgba(0, 0, 0, 0.55);'
			,'	color: #fff;'
			,'	font: normal 20px/1 \'Courier New\', Courier, monospace;'
			,'	padding: 5px 8px;'
			,'}'
			,'#' + wrapID + '.nope-disabled .' + nopeHelpClass + '{'
			, '	display: none;'
			, '}'
		].join('\n');

	document.getElementsByTagName('head')[0].appendChild(style);
}

nopeWrap.onclick = nopeClickHandler;
nopeWrap.className = '';

window.onkeyup = function (e) {
	if (e.which === 27) { // esc
		var nw = document.getElementById(wrapID);
		if (nw) {
			nw.onclick = null;
			window.onkeyup = null;
			nw.className = 'nope-disabled';

		}
	}
};
})();