(function($) {
$(function() {
	var DEV_PC=0, DEV_IOS=1, DEV_ANDROID=2;
	var gDev = DEV_PC;
	if ( navigator.userAgent.indexOf('iPhone') > 0 || 
	     navigator.userAgent.indexOf('iPad') > 0 || 
	     navigator.userAgent.indexOf('iPod') > 0)
	{
		gDev = DEV_IOS;
	}
	else if(navigator.userAgent.indexOf('Android') > 0) {
		gDev = DEV_ANDROID;
	}

	var WORK_SUMMARY = [
		// work_0
		{
			titlle: 		'忌日・年忌法要',
			description: 	'法要の一覧を表示するアプリ。',
			icon:			'https://www.dropbox.com/s/3j8gkmoyp4enhxx/houji_luncher_57.png?dl=1',
			support:		'http://kfapp.hatenablog.jp/entry/houyou',
			banner: {
				ios:		'<a href="https://itunes.apple.com/jp/app/ji-ri-nian-ji-fa-yao/id686027053?mt=8&uo=4" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.png) no-repeat;width:135px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.svg);}"></a>',
				android:	'<a href="https://play.google.com/store/apps/details?id=jp.kforce.houji"><img alt="Get it on Google Play" src="http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912163040.png" /></a>',
			},
			qr:		{
				ios:		'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164510.gif',
				android:	'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164701.gif',
			},
		},
		// work_1
		{
			titlle: 		'わが生涯に一片の悔いなし!!',
			description: 	'学歴・職歴を管理するアプリ。',
			icon:			'https://www.dropbox.com/s/7wbkn8zcij6j275/wagasho_luncher_57.png?dl=1',
			banner: {
				ios:		'<a href="https://itunes.apple.com/jp/app/waga-sheng-yani-yi-pianno/id673020715?mt=8&uo=4" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.png) no-repeat;width:135px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.svg);}"></a>',
				android:	'<a href="https://play.google.com/store/apps/details?id=jp.kforce.wagasho"><img alt="Get it on Google Play" src="http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912163040.png" /></a>',
			},
			qr:		{
				ios:		'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164849.gif',
				android:	'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164914.gif',
			},
		},
		// work_2
		{
			titlle: 		'どう？熱中症',
			description: 	'熱中症の危険度を表示するアプリ。',
			icon:			'https://www.dropbox.com/s/29fp1ufa9le9721/hhs_luncher_57.png?dl=1',
			support:		'http://kfapp.hatenablog.jp/entry/hhs',
			banner: {
				ios:		'<a href="https://itunes.apple.com/jp/app/dou-re-zhong-zheng/id660783108?mt=8&uo=4" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.png) no-repeat;width:135px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.svg);}"></a>',
				android:	'<a href="https://play.google.com/store/apps/details?id=jp.kforce.hhs"><img alt="Get it on Google Play" src="http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912163040.png" /></a>',
			},
			qr:		{
				ios:		'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164750.gif',
				android:	'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164802.gif',
			},
		},
		// work_3
		{
			titlle: 		'こよみチェンジャー',
			description: 	'西暦⇔和暦を変換するアプリ。',
			icon:			'https://www.dropbox.com/s/78ybt51tcskjjmy/koyochan_luncher_57.png?dl=1',
			banner: {
				ios:		'<a href="https://itunes.apple.com/jp/app/koyomichenja/id685956519?mt=8&uo=4" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.png) no-repeat;width:135px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.svg);}"></a>',
				android:	'<a href="https://play.google.com/store/apps/details?id=jp.kforce.koyochan"><img alt="Get it on Google Play" src="http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912163040.png" /></a>',
			},
			qr:		{
				ios:		'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912165118.gif',
				android:	'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912165201.gif',
			},
		},
		// work_4
		{
			titlle: 		'あちゃおとポン',
			description: 	'「あちゃお」と戯れるもぐらたたき風ゲーム。',
			icon:			'https://www.dropbox.com/s/betzll7onoea3ik/achao_luncher_57.png?dl=1',
			banner: {
				ios:		'<a href="https://itunes.apple.com/jp/app/achaotopon/id693662106?mt=8&uo=4" target="itunes_store" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.png) no-repeat;width:135px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/ja_jp//images/web/linkmaker/badge_appstore-lrg.svg);}"></a>',
				android:	'<a href="https://play.google.com/store/apps/details?id=jp.kforce.achao"><img alt="Get it on Google Play" src="http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912163040.png" /></a>',
			},
			qr:		{
				ios:		'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912164936.gif',
				android:	'http://cdn-ak.f.st-hatena.com/images/fotolife/k/kforce_ueda/20140912/20140912165043.gif',
			},
		},
	];

	$(document).ready(function(event) {
		console.log('ready');
		
		for(var i = 0; i < WORK_SUMMARY.length; i++) {
			$container = $('div#work_'+i);
			if(container.length <= 0)	continue;
		
			var ws = WORK_SUMMARY[i];
			
			var $table = $('<table style="width:100%"/>');
			var $tr1 = $('<tr><td colspan="3">' + ws.description + '</td></tr>');
			
			var $tr2 = $('<tr/>');
			
			var $td1 = $('<td style="width:80px;"></td>');
			var $icon = $('<img/>').attr('src', ws.icon);
			$td1.append($icon);

			var $td2 = $('<td/>');
			var $item2;
			if(gDev == DEV_PC)				$item2 = $('<img/>').attr('src', ws.qr.ios);
			else if(gDev == DEV_IOS)		$item2 = $(ws.banner.ios);
			else if(gDev == DEV_ANDROID)	$item2 = $(ws.banner.android);
			else							$item2 = $('<span>　</span>');
			$td2.append($item2);
			
			
			var $td3 = $('<td>　</td>');
			var $item3;
			if(gDev == DEV_PC)				$item3 = $('<img/>').attr('src', ws.qr.android);
			else							$item3 = $('<span>　</span>');
			$td3.append($item3);
			
			$tr2.append($td1).append($td2).append($td3);
			$table.append($tr1).append($tr2);

			if(ws.support) {
				$table.append('<tr><td colspan="3"><a href="' + ws.support + '">＞＞ 詳細はこちら ＜＜</a></td></tr>');
			}

			$container
				.empty()
				.append($table);
		}
	});

});
})(jQuery);