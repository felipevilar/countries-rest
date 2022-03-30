<template>
  <q-layout view="hHh lpR fFf" class="my-font q-pa-md q-pa-sm-xl">
    <q-header bordered >
      <q-toolbar
        glossy
        :class="{
          'text-black': !$q.dark.isActive,
          'bg-dark': $q.dark.isActive,
        }"
        class="q-px-md q-px-sm-xl"
      >
        <q-toolbar-title class="text-bolder" style="font-size: 16px">
          Where in the world?
        </q-toolbar-title>
        <q-btn
          flat
          dense
          size="sm"
          unelevated
          :label="!$q.dark.isActive ? 'Dark Mode' : 'Light Mode'"
          no-caps
          :icon="
            $q.dark.isActive
              ? 'light_mode'
              : 'dark_mode'
          "
          @click="$q.dark.toggle()"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="relative-position">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const $q = useQuasar();
    const isDark = computed(() => $q.dark.isActive);
    return {
      isDark,
    };
  },
});
</script>
