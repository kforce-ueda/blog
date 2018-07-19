(function($) {
$(function() {
	var UNITS = [];

	$(document).ready(function(event) {
		$('#in_unit option').each(function(){
			var inUnitTmp = $(this).val().split('_');
			UNITS.push({
				group:	inUnitTmp[0],
				unit:	inUnitTmp[1],
			});
		});
		onChangeInput();
	});

	$('#in_value').on('change', function(event) {
		onChangeInput();
	});
	$('#in_unit').on('change', function(event) {
		onChangeInput();
	});

	function onChangeInput(event) {
		var inVal = new BigNumber($('#in_value').val());
		
		var inUnitTmp = $('#in_unit').val().split('_');
		var inGroup = inUnitTmp[0];
		var inUnit = inUnitTmp[1];
		
		var base = {};
		base[inGroup] = UNIT_2_BASE[inGroup][inUnit](inVal);
		
		var root = BASE_2_ROOT[inGroup](base[inGroup]);
		for(var i = 0; i < UNITS.length; i++) {
			var unit = UNITS[i];
			if(!base[unit.group]) {
				base[unit.group] = ROOT_2_BASE[unit.group](root);
			}
		}
		
		for(var i = 0; i < UNITS.length; i++) {
			var unit = UNITS[i];
			$('#res_'+unit.unit).text(BASE_2_UNIT[unit.group][unit.unit](base[unit.group]));
		}
	}
});
})(jQuery);
