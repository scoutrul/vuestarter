const $viewport = {
	methods: {
		is768Above() {
			return this.$vuetify.breakpoint.width > 768;
		},
		isLgAndDown() {
			return this.$vuetify.breakpoint.lgAndDown;
		},
		isSmAndDown() {
			return this.$vuetify.breakpoint.smAndDown;
		},
		isXs() {
			return this.$vuetify.breakpoint.xsOnly;
		},
	},
};

export default $viewport;
