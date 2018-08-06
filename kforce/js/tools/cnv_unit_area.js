// ========================================================================
// 単位→グループベース
var UNIT_2_BASE = {
	// メートル法
	m: {
		mm: function(v) {
			return v.div(1000).div(1000);
		},
		cm: function(v) {
			return v.div(100).div(100);
		},
		m: function(v) {
			return v;
		},
		a: function(v) {
			return v.times(10).times(10);
		},
		ha: function(v) {
			return v.times(10).times(10);
		},
		km: function(v) {
			return v.times(1000).times(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		inch: function(v) {
			return UNIT_2_BASE.y.feet(v).div(12).div(12);
		},
		feet: function(v) {
			return v;
		},
		yard: function(v) {
			return UNIT_2_BASE.y.feet(v).times(3).times(3);
		},
		rood: function(v) {
			return UNIT_2_BASE.y.yard(v).times(1210);
		},
		acre: function(v) {
			return UNIT_2_BASE.y.yard(v).times(4840);
		},
		mile: function(v) {
			return UNIT_2_BASE.y.acre(v).times(640);
		},
	},
	
	// 尺貫法
	s: {
		shaku: function(v) {
			return UNIT_2_BASE.s.gou(v).div(10);
		},
		gou: function(v) {
			return UNIT_2_BASE.s.tsubo(v).div(10);
		},
		tsubo: function(v) {
			return v;
		},
		se: function(v) {
			return UNIT_2_BASE.s.tsubo(v).times(30);
		},
		tan: function(v) {
			return UNIT_2_BASE.s.se(v).times(10);
		},
		chou: function(v) {
			return UNIT_2_BASE.s.tan(v).times(10);
		},
	},
};

// ========================================================================
// グループベース→単位
var BASE_2_UNIT = {
	// メートル法
	m: {
		mm: function(v) {
			return v.times(1000).times(1000);
		},
		cm: function(v) {
			return v.times(100).times(100);
		},
		m: function(v) {
			return v;
		},
		a: function(v) {
			return v.div(10).div(10);
		},
		ha: function(v) {
			return v.div(100).div(100);
		},
		km: function(v) {
			return v.div(1000).div(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		inch: function(v) {
			return BASE_2_UNIT.y.feet(v).times(12).times(12);
		},
		feet: function(v) {
			return v;
		},
		yard: function(v) {
			return BASE_2_UNIT.y.feet(v).div(3).div(3);
		},
		rood: function(v) {
			return BASE_2_UNIT.y.yard(v).div(1210);
		},
		acre: function(v) {
			return BASE_2_UNIT.y.yard(v).div(4840);
		},
		mile: function(v) {
			return BASE_2_UNIT.y.acre(v).div(640);
		},
	},
	
	// 尺貫法
	s: {
		shaku: function(v) {
			return BASE_2_UNIT.s.gou(v).times(10);
		},
		gou: function(v) {
			return BASE_2_UNIT.s.tsubo(v).times(10);
		},
		tsubo: function(v) {
			return v;
		},
		se: function(v) {
			return BASE_2_UNIT.s.tsubo(v).div(30);
		},
		tan: function(v) {
			return BASE_2_UNIT.s.se(v).div(10);
		},
		chou: function(v) {
			return BASE_2_UNIT.s.tan(v).div(10);
		},
	},
};

// ========================================================================
// グループベース→ルート（メートル）
var BASE_2_ROOT = {
	// メートル法（メートル）
	m: function(v) {
		return v;
	},
	// ヤード・ポンド法（フィート）
	y: function(v) {
		return v.times(0.09290);
	},
	// 尺貫法（坪）
	s: function(v) {
		return v.div(0.3025);
	},
};

// ========================================================================
// ルート（メートル）→グループベース
var ROOT_2_BASE = {
	// メートル法（メートル）
	m: function(v) {
		return v;
	},
	// ヤード・ポンド法（フィート）
	y: function(v) {
		return v.div(0.09290);
	},
	// 尺貫法（坪）
	s: function(v) {
		return v.times(0.3025);
	},
};
