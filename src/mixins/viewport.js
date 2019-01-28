const $viewport = {
	methods: {
		is768Above() {
			return this.$vuetify.breakpoint.width > 768;
		},
		isTabletWidth() {
			return this.$vuetify.breakpoint.lgAndDown;
		},
		isMobileWidth() {
			return this.$vuetify.breakpoint.xs;
		},
	},
};

export default $viewport;
