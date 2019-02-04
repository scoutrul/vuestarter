const $viewport = {
	methods: {
		isAbove680() {
			return this.$vuetify.breakpoint.width > 680;
		},
		isUnder600() {
			return this.$vuetify.breakpoint.width < 600;
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
