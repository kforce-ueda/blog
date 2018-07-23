// ========================================================================
// 単位→グループベース
var UNIT_2_BASE = {
	// メートル法
	m: {
		mg: function(v) {
			return UNIT_2_BASE.m.g(v).div(1000);
		},
		g: function(v) {
			return v;
		},
		kg: function(v) {
			return UNIT_2_BASE.m.g(v).times(1000);
		},
		t: function(v) {
			return UNIT_2_BASE.m.kg(v).times(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		grain: function(v) {
			return UNIT_2_BASE.y.pound(v).div(7000);
		},
		ounce: function(v) {
			return UNIT_2_BASE.y.pound(v).div(16);
		},
		pound: function(v) {
			return v;
		},
		stone: function(v) {
			return UNIT_2_BASE.y.pound(v).times(14);
		},
		shortton: function(v) {
			return UNIT_2_BASE.y.pound(v).times(2000);
		},
		longton: function(v) {
			return UNIT_2_BASE.y.pound(v).times(2240);
		},
	},
	
	// 尺貫法
	s: {
		monme: function(v) {
			return UNIT_2_BASE.s.kan(v).div(1000);
		},
		ryou: function(v) {
			return UNIT_2_BASE.s.kan(v).div(100);
		},
		kin: function(v) {
			return UNIT_2_BASE.s.kan(v).div(6.25);
		},
		kan: function(v) {
			return v;
		},
	},
};

// ========================================================================
// グループベース→単位
var BASE_2_UNIT = {
	// メートル法
	m: {
		mg: function(v) {
			return BASE_2_UNIT.m.g(v).times(1000);
		},
		g: function(v) {
			return v;
		},
		kg: function(v) {
			return BASE_2_UNIT.m.g(v).div(1000);
		},
		t: function(v) {
			return BASE_2_UNIT.m.kg(v).div(1000);
		},
	},
	
	// ヤード・ポンド法
	y: {
		grain: function(v) {
			return BASE_2_UNIT.y.pound(v).times(7000);
		},
		ounce: function(v) {
			return BASE_2_UNIT.y.pound(v).times(16);
		},
		pound: function(v) {
			return v;
		},
		stone: function(v) {
			return BASE_2_UNIT.y.pound(v).div(14);
		},
		shortton: function(v) {
			return BASE_2_UNIT.y.pound(v).div(2000);
		},
		longton: function(v) {
			return BASE_2_UNIT.y.pound(v).div(2240);
		},
	},
	
	// 尺貫法
	s: {
		monme: function(v) {
			return BASE_2_UNIT.s.kan(v).times(1000);
		},
		ryou: function(v) {
			return BASE_2_UNIT.s.kan(v).times(100);
		},
		kin: function(v) {
			return BASE_2_UNIT.s.kan(v).times(6.25);
		},
		kan: function(v) {
			return v;
		},
	},
};

// ========================================================================
// グループベース→ルート（グラム）
var BASE_2_ROOT = {
	// メートル法（グラム）
	m: function(v) {
		return v;
	},
	// ヤード・ポンド法（ポンド）
	y: function(v) {
		return v.times(453.59237);
	},
	// 尺貫法（貫）
	s: function(v) {
		return v.times(3750);
	},
};

// ========================================================================
// ルート（メートル）→グループベース
var ROOT_2_BASE = {
	// メートル法（グラム）
	m: function(v) {
		return v;
	},
	// ヤード・ポンド法（ポンド）
	y: function(v) {
		return v.div(453.59237);
	},
	// 尺貫法（貫）
	s: function(v) {
		return v.div(3750);
	},
};
