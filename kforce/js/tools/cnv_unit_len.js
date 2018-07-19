// ========================================================================
// 単位→グループベース
var UNIT_2_BASE = {
	// メートル法
	m: {
		mm: function(v) {
			return v.dividedBy(1000);
		},
		cm: function(v) {
			return v.dividedBy(100);
		},
		m: function(v) {
			return v;
		},
		km: function(v) {
			return v.times(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		inch: function(v) {
			return v;
		},
		feet: function(v) {
			return UNIT_2_BASE.y.inch(v).times(12);
		},
		yard: function(v) {
			return UNIT_2_BASE.y.feet(v).times(3);
		},
		furlong: function(v) {
			return UNIT_2_BASE.y.yard(v).times(220);
		},
		mile: function(v) {
			return UNIT_2_BASE.y.yard(v).times(1760);
		},
	},
	
	// 尺貫法
	s: {
		sun: function(v) {
			return v;
		},
		shaku: function(v) {
			return UNIT_2_BASE.s.sun(v).times(10);
		},
		kshaku: function(v) {
			return UNIT_2_BASE.s.shaku(v).times(1.25);
		},
		jou: function(v) {
			return UNIT_2_BASE.s.shaku(v).times(10);
		},
		ken: function(v) {
			return UNIT_2_BASE.s.shaku(v).times(6);
		},
		chou: function(v) {
			return UNIT_2_BASE.s.shaku(v).times(360);
		},
		ri: function(v) {
			return UNIT_2_BASE.s.chou(v).times(36);
		},
	},
};

// ========================================================================
// グループベース→単位
var BASE_2_UNIT = {
	// メートル法
	m: {
		mm: function(v) {
			return v.times(1000);
		},
		cm: function(v) {
			return v.times(100);
		},
		m: function(v) {
			return v;
		},
		km: function(v) {
			return v.dividedBy(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		inch: function(v) {
			return v;
		},
		feet: function(v) {
			return BASE_2_UNIT.y.inch(v).dividedBy(12);
		},
		yard: function(v) {
			return BASE_2_UNIT.y.feet(v).dividedBy(3);
		},
		furlong: function(v) {
			return BASE_2_UNIT.y.yard(v).dividedBy(220);
		},
		mile: function(v) {
			return BASE_2_UNIT.y.yard(v).dividedBy(1760);
		},
	},
	
	// 尺貫法
	s: {
		sun: function(v) {
			return v;
		},
		shaku: function(v) {
			return BASE_2_UNIT.s.sun(v).dividedBy(10);
		},
		kshaku: function(v) {
			return BASE_2_UNIT.s.shaku(v).dividedBy(1.25);
		},
		jou: function(v) {
			return BASE_2_UNIT.s.shaku(v).dividedBy(10);
		},
		ken: function(v) {
			return BASE_2_UNIT.s.shaku(v).dividedBy(6);
		},
		chou: function(v) {
			return BASE_2_UNIT.s.shaku(v).dividedBy(360);
		},
		ri: function(v) {
			return BASE_2_UNIT.s.chou(v).dividedBy(36);
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
	// ヤード・ポンド法（インチ）
	y: function(v) {
		return v.times(0.0254);
	},
	// 尺貫法（寸）
	s: function(v) {
		return v.dividedBy(33);
	},
};

// ========================================================================
// ルート（メートル）→グループベース
var ROOT_2_BASE = {
	// メートル法（メートル）
	m: function(v) {
		return v;
	},
	// ヤード・ポンド法（インチ）
	y: function(v) {
		return v.dividedBy(0.0254);
	},
	// 尺貫法（寸）
	s: function(v) {
		return v.times(33);
	},
};
