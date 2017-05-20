var instagramAccessToken = '1396407576.1677ed0.736e55e3e58f456299d965abab746397';
var instagramUserId = 1396407576;
// generate access token through http://instagram.pixelunion.net
// userid is the first number before '.' in the access token

var flickrId = '54985545@N04';
// flickrId can be retrieved on http://www.webpagefx.com/tools/idgettr/

var feed = new Instafeed({
	get: 'user',
	userId: instagramUserId,
	accessToken: instagramAccessToken,
	target: 'instagram',
	resolution: 'standard_resolution',
	after: function() {
		var el = document.getElementById('instagram');
		if (el.classList) {
			el.classList.add('show');
		}
		else {
			el.className += ' ' + 'show';
		}

		$('#instagram a').each(function() {
		   var a = new RegExp('/' + window.location.host + '/');
		   if(!a.test(this.href)) {
		       $(this).click(function(event) {
		           event.preventDefault();
		           event.stopPropagation();
		           window.open(this.href, '_blank');
		       });
		   }
		});
	}
});

window.onload = function() {
	feed.run();
}


$(document).ready(function () {
	$("#nanoGallery1").nanoGallery({
		kind: 'flickr',
 		userID: flickrId,
		thumbnailWidth: 300,
		thumbnailHeight: 300,
 		colorScheme: 'light',
		thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
		thumbnailGutterWidth : 0,
		thumbnailGutterHeight : 0,
		thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
	});
});
