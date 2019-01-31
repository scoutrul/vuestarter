const $viewport = {
	methods: {
		isAbove680() {
			return this.$vuetify.breakpoint.width > 680;
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
