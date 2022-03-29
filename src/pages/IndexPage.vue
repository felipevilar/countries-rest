<template>
  <q-page
    style="
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 50px;
      margin: 0 auto;
    "
    class="relative-position"
  >
    <div style="width: 100%; padding: 25px 0px; display: flex" class="wrap">
      <q-input
        outlined
        dense
        placeholder="Search for a country"
        v-model="search"
        style="width: 300px"
      >
        <template v-slot:prepend>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
      <q-space></q-space>
      <q-select
        style="width: 200px"
        dense
        class="q-pt-xs-lg"
        label="Filter by Region"
        outlined
        v-model="selected"
        :options="options"
      />
    </div>
    <div v-if="countries" class="fit row wrap justify-between q-gutter-y-lg">
      <Country-Card
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
      >
      </Country-Card>
    </div>
    <q-inner-loading :showing="loading">
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