/* Windows Phone 8.x [ Mobile IE 10.0 ] view-port recognition script. [BEGIN] */

if (navigator.userAgent.match(/IEMobile\/10\.0/))
	{
		var ms_vprt_styl = document.createElement('style');
		ms_vprt_styl.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
		document.getElementsByTagName('head')[0].appendChild(ms_vprt_styl);
	};

/* Windows Phone 8.x [ Mobile IE 10.0 ] view-port recognition script. [END] */