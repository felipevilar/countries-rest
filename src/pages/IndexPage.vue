<template>
  <q-page class="relative-position">
    <div 
      class="flex wrap justify-sm-between justify-xs-center q-gutter-y-md fixed-top bg-white q-px-xl"
      style="top: 65px;z-index: 1000;padding-bottom: 20px;">
      <q-input
        outlined
        dense
        square
        placeholder="Search for a country"
        v-model="search"
        style="width: 300px"
        :class="{ 'full-width': $q.screen.xs }"
      >
        <template v-slot:prepend>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
      <q-select
        style="width: 200px"
        :class="{ customWidth: $q.screen.xs }"
        square
        dense
        label="Filter by Region"
        outlined
        v-model="selected"
        :options="options"
      />
    </div>
    <div v-if="countries" class="column row-sm content-center fit wrap justify-between">
      <Country-Card
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
      >
      </Country-Card>
    </div>
    <q-inner-loading :showing="loading" class="bg-transparent">
      <q-spinner-puff size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import { api } from '../boot/axios';
import { defineComponent, ref, onMounted, provide } from 'vue';
import { Country } from '../types/Countries';
import { AxiosResponse } from 'axios';
import CountryCard from '../components/CountryCard.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CountryCard },
  setup() {
    const countries = ref<Country[]>();
    const search = ref('');
    const selected = ref(null);
    const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    const loading = ref(false);

    provide('region', selected);
    provide('search', search);

    onMounted(async () => {
      try {
        loading.value = true;
        const response: AxiosResponse<Country[]> = await api.get('all');
        countries.value = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    });

    return {
      countries,
      search,
      selected,
      options,
      loading,
    };
  },
});
</script>
<style>
.customWidth {
  width: 75% !important;
}
</style>
