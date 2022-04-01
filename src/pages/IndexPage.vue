<template>
  <q-page class="relative-position">
    <div
      v-if="filteredCountries"
      class="row q-pt-sm-xs q-mt-sm-xs q-pt-xs-xl q-mt-xs-xl"
      :key="cKey"
    >
      <div
        class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"
        v-for="(country, c) in filteredCountries"
        :key="c"
      >
        <Country-Card style="margin: 20px auto" :country="country">
        </Country-Card>
      </div>
    </div>
    <q-inner-loading :showing="loading" class="bg-transparent">
      <q-spinner-puff size="50px" color="primary" />
    </q-inner-loading>
    <q-page-sticky expand position="top">
      <q-card
        square
        flat
        style="padding: 10px 50px"
        class="
          full-width
          row
          wrap
          q-gutter-xs-md
          justify-sm-between justify-xs-center
        "
      >
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
      </q-card>
    </q-page-sticky>
    <q-separator></q-separator>
  </q-page>
</template>

<script lang="ts">
import { api } from '../boot/axios';
import { defineComponent, ref, onMounted, provide, watch } from 'vue';
import { Country } from '../types/Countries';
import { AxiosResponse } from 'axios';
import CountryCard from '../components/CountryCard.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CountryCard },
  setup() {
    const cKey = ref(0);
    const countries = ref<Country[]>();
    const filteredCountries = ref<Country[]>();
    const search = ref('');
    const selected = ref('All');
    const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    const loading = ref(false);

    provide('region', selected);
    provide('search', search);

    watch(search, () => filter());
    watch(selected, () => filter());

    const filter = () => {
      if (countries.value && filteredCountries.value) {
        if (search.value.length > 2) {
          if (selected.value === 'All') {
            filteredCountries.value = countries.value.filter((country) =>
              country.name.common
                .toLocaleLowerCase()
                .includes(search.value.toLocaleLowerCase())
            );
          } else {
            filteredCountries.value = countries.value.filter(
              (country) =>
                country.region === selected.value &&
                country.name.common
                  .toLocaleLowerCase()
                  .includes(search.value.toLocaleLowerCase())
            );
          }
          cKey.value++;
          return;
        }

        if (selected.value === 'All') {
          filteredCountries.value = countries.value;
        } else {
          filteredCountries.value = countries.value.filter(
            (country) => country.region === selected.value
          );
        }

        cKey.value++;
      }
    };

    onMounted(async () => {
      try {
        loading.value = true;
        const response: AxiosResponse<Country[]> = await api.get('all');
        countries.value = response.data;
        filteredCountries.value = countries.value;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    });

    return {
      filteredCountries,
      search,
      selected,
      options,
      loading,
      cKey,
    };
  },
});
</script>
<style>
.customWidth {
  width: 75% !important;
}
</style>
