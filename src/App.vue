<template>
	<ConfigProvider :theme="tokenTheme" :locale="locale">
		<App>
			<Home />
		</App>
	</ConfigProvider>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import antdZhCN from "ant-design-vue/locale/zh_CN";

import type { Locale } from "ant-design-vue/es/locale";

import { App, ConfigProvider, theme } from "ant-design-vue";

defineOptions({
	name: "App"
});

const isDark = ref(false);

const locale = ref<Locale>(antdZhCN);

const tokenTheme = computed(() => {
	const algorithm = isDark.value ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];

	return {
		algorithm
	};
});

import Home from "./components/home/home.vue";
</script>

<style scoped></style>
