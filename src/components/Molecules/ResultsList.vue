<template>
	<v-list dense>
		<ListItem v-for="(item, index) in items" :key="index" :item="item" @remove="removeItem(index)" />
	</v-list>
</template>

<script>
import ListItem from '../Atoms/ListItem.vue';

export default {
	components: { ListItem },
	props: {
		items: Array,
	},
	emits: ['remove-item'],
	methods: {
		removeItem(index) {
			this.$emit('remove-item', index);
		},
	},
};
</script>
