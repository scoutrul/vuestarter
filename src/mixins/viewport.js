const $viewport = {
	methods: {
		isAbove680() {
			return this.$vuetify.breakpoint.width > 680;
		},
		isUnder680() {
			return this.$vuetify.breakpoint.width < 680;
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
