(function($) {
$(function() {
	var alpha = 100;
	var hex = '#ecd9f2';
	var rgb = hex2rgb(hex);
	var hsl = rgb2hsl(rgb);
	
	updateView(alpha, hex, rgb, hsl);

	$('#c_picker_hex').on('change', _onChangeHexPicker);
	$('#c_val_hex').on('change', _onChangeHex);
	$('#c_slider_r, #c_slider_g, #c_slider_b, #c_slider_rgb_a').on('input', _onChangeRGBSlider);
	$('#c_val_r, #c_val_g, #c_val_b, #c_val_rgb_a').on('input', _onChangeRGB);
	$('#c_slider_h, #c_slider_s, #c_slider_l, #c_slider_hsl_a').on('input', _onChangeHSLSlider);
	$('#c_val_h, #c_val_s, #c_val_l, #c_val_hsl_a').on('input', _onChangeHSL);

});

var _onChangeHexPicker = function() {
	$('#c_val_hex').val($('#c_picker_hex').val());
	_onChangeHex();
};

var _onChangeHex = function() {
	var hex = normalizeHex($('#c_val_hex').val());
	if(hex === false) {
		return;
	}
	
	var alpha = Number($('#c_val_rgb_a').val());
	var rgb = hex2rgb(hex);
	var hsl = rgb2hsl(rgb);

	updateView(alpha, hex, rgb, hsl, true);
};

var _onChangeRGBSlider = function() {
	$('#c_val_r').val($('#c_slider_r').val());
	$('#c_val_g').val($('#c_slider_g').val());
	$('#c_val_b').val($('#c_slider_b').val());
	$('#c_val_rgb_a').val($('#c_slider_rgb_a').val());
	_onChangeRGB();
};

var _onChangeRGB = function() {
	var alpha = Math.floor(Number($('#c_val_rgb_a').val()));
	var rgb = [
		Math.floor(Number($('#c_val_r').val())),
		Math.floor(Number($('#c_val_g').val())),
		Math.floor(Number($('#c_val_b').val())),
	];

	for(var i = 0; i < rgb.length; i++) {
		if(rgb[i] < 0 || 255 < rgb[i]) {
			rgb[i] = 0;
		}
	}
	if(alpha < 0 || 100 < alpha) {
		alpha = 100;
	}
	
	var hex = rgb2hex(rgb);
	var hsl = rgb2hsl(rgb);

	updateView(alpha, hex, rgb, hsl);
};

var _onChangeHSLSlider = function() {
	$('#c_val_h').val($('#c_slider_h').val());
	$('#c_val_s').val($('#c_slider_s').val());
	$('#c_val_l').val($('#c_slider_l').val());
	$('#c_val_hsl_a').val($('#c_slider_hsl_a').val());
	_onChangeHSL();
};

var _onChangeHSL = function() {
	var alpha = Math.floor(Number($('#c_val_hsl_a').val()));
	var hsl = [
		Math.floor(Number($('#c_val_h').val())),
		Math.floor(Number($('#c_val_s').val())),
		Math.floor(Number($('#c_val_l').val())),
	];

	var i = 0;
	if(hsl[i] < 0 || 360 < hsl[i]) {
		hsl[i] = 0;
	}
	for(var i = 1; i < hsl.length; i++) {
		if(hsl[i] < 0 || 100 < hsl[i]) {
			hsl[i] = 0;
		}
	}
	if(alpha < 0 || 100 < alpha) {
		alpha = 100;
	}

	var rgb = hsl2rgb(hsl);
	var hex = rgb2hex(rgb);

	updateView(alpha, hex, rgb, hsl);
};

var updateView = function(alpha, hex, rgb, hsl, isNoUpdateHex) {
	$('.heading div').css('background', toCssRGBA(rgb[0], rgb[1], rgb[2], alpha/100));

	if(!isNoUpdateHex) {
		$('#c_val_hex').val(hex);
	}
	
	$('#c_picker_hex').val(hex);
	
	$('#c_val_r').val(rgb[0]);
	$('#c_val_g').val(rgb[1]);
	$('#c_val_b').val(rgb[2]);
	$('#c_val_rgb_a').val(alpha);
	
	$('#c_slider_r').val(rgb[0]);
	$('#c_slider_g').val(rgb[1]);
	$('#c_slider_b').val(rgb[2]);
	$('#c_slider_rgb_a').val(alpha);

	$('#css_rgb').html(
		toCssRGB(rgb[0], rgb[1], rgb[2]) + '<br>' + 
		toCssRGBA(rgb[0], rgb[1], rgb[2], alpha/100)
	);

	$('#c_val_h').val(hsl[0]);
	$('#c_val_s').val(hsl[1]);
	$('#c_val_l').val(hsl[2]);
	$('#c_val_hsl_a').val(alpha);
	
	$('#c_slider_h').val(hsl[0]);
	$('#c_slider_s').val(hsl[1]);
	$('#c_slider_l').val(hsl[2]);
	$('#c_slider_hsl_a').val(alpha);

	$('#css_hsl').html(
		toCssHSL(hsl[0], hsl[1], hsl[2]) + '<br>' + 
		toCssHSLA(hsl[0], hsl[1], hsl[2], alpha/100)
	);
	
	var cssBarH = [];
	for(var i = 0; i < 12; i++) {
		cssBarH.push(toCssHSL(i*30, hsl[1], hsl[2]));
	}
	$('#c_bar_h').css('background', 'linear-gradient(to right,' + cssBarH.join(',') + ')');

	var cssBarS = [];
	for(var i = 0; i < 10; i++) {
		cssBarS.push(toCssHSL(hsl[0], i*10, hsl[2]));
	}
	$('#c_bar_s').css('background', 'linear-gradient(to right,' + cssBarS.join(',') + ')');

	var cssBarL = [];
	for(var i = 0; i < 10; i++) {
		cssBarL.push(toCssHSL(hsl[0], hsl[1], i*10));
	}
	$('#c_bar_l').css('background', 'linear-gradient(to right,' + cssBarL.join(',') + ')');
};

var toCssRGB = function(r, g, b) {
	return 'rgb(' + [r, g, b].join(', ') + ')';
};
var toCssRGBA = function(r, g, b, a) {
	return 'rgba(' + [r, g, b, a].join(', ') + ')';
};
var toCssHSL = function(h, s, l) {
	return 'hsl(' + [h, s+'%', l+'%'].join(', ') + ')';
};
var toCssHSLA = function(h, s, l, a) {
	return 'hsla(' + [h, s+'%', l+'%', a].join(', ') + ')';
};

var normalizeHex = function(hex) {
	if(hex.slice(0, 1) == "#") {
		hex = hex.slice(1) ;
	}
	
	if(!hex.match(/^[0-9a-fA-F]{1,}$/)) {
		return false;
	}
	
	if(hex.length == 3) {
		hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3);
	}
	
	if(hex.length != 6) {
		return false;
	}
	
	return '#' + hex;
};

var hex2rgb = function(hex) {
	var code = hex;
	var r = parseInt(code.substring(1,3), 16);
	var g = parseInt(code.substring(3,5), 16);
	var b = parseInt(code.substring(5,7), 16);
	return [r, g, b];
};

var rgb2hex = function(rgb) {
	return '#' + rgb.map(function(v) {
		return ('0' + v.toString(16)).slice(-2);
	}).join('');
};

var rgb2hsl = function(rgb) {
	var result = false;
	var red = rgb[0];
	var green = rgb[1];
	var blue = rgb[2];
 
	if (((red || red === 0) && red <= 255) && ((green || green === 0) && green <= 255) && ((blue || blue === 0) && blue <= 255)) {
		var hue		   = 0,
			saturation = 0,
			lightness  = 0,
			max		   = 0,
			min		   = 0,
			diff	   = 0;
 
		red		  = Number(red)	  / 255;
		green	  = Number(green) / 255;
		blue	  = Number(blue)  / 255;
		max		  = Math.max(red, green, blue);
		min		  = Math.min(red, green, blue);
		lightness = (max + min) / 2;
 
		if (max !== min) {
			diff = max - min;
 
			if (lightness > 0.5) {
				saturation = diff / (2 - max - min);
			} else {
				saturation = diff / (max + min);
			}
 
			if (max === red) {
				hue = (green - blue) / diff;
			} else if (max === green) {
				hue = 2 + (blue - red) / diff;
			} else {
				hue = 4 + (red - green) / diff;
			}
			
			if(hue < 0) {
				hue += 6;
			}
			
			hue /= 6;
		}
 
		result = [
			Math.round(hue		   * 360),
			Math.round(saturation * 100),
			Math.round(lightness  * 100)
		];
	}
 
	return result;
};

var hsl2rgb = function(hsl) {
	var result = false;
	var hue = hsl[0];
	var saturation = hsl[1];
	var lightness = hsl[2];


	if (((hue || hue === 0) && hue <= 360) && ((saturation || saturation === 0) && saturation <= 100) && ((lightness || lightness === 0) && lightness <= 100)) {
		var red	  = 0,
			green = 0,
			blue  = 0,
			q	  = 0,
			p	  = 0;
 
		hue		   = Number(hue)		/ 360;
		saturation = Number(saturation) / 100;
		lightness  = Number(lightness)	/ 100;
 
		if (saturation === 0) {
			red	  = lightness;
			green = lightness;
			blue  = lightness;
		} else {
			var hueToRgb = function(p, q, t) {
				if (t < 0) {
					t += 1;
				}
 
				if (t > 1) {
					t -= 1;
				}
 
				if (t < 1 / 6) {
					p = p + (q - p) * 6 * t;
				} else if (t < 1 / 2) {
					p = q;
				} else if (t < 2 / 3) {
					p = p + (q - p) * (2 / 3 - t) * 6;
				}
 
				return p;
			};
 
			if (lightness < 0.5) {
				q = lightness * (1 + saturation);
			} else {
				q = lightness + saturation - lightness * saturation;
			}
			p = 2 * lightness - q;
 
			red	  = hueToRgb(p, q, hue + 1 / 3);
			green = hueToRgb(p, q, hue);
			blue  = hueToRgb(p, q, hue - 1 / 3);
		}
 
		result = [
			Math.round(red	 * 255),
			Math.round(green * 255),
			Math.round(blue	 * 255)
		];
	}
 
	return result;
};

})(jQuery);