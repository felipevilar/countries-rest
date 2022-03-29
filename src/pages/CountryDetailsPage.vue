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
    <div class="row" style="margin-top: 50px; margin-bottom: 50px">
      <div class="col">
        <q-btn
          no-caps
          label="Back"
          @click="$router.push('/')"
          icon="arrow_back"
        ></q-btn>
      </div>
    </div>
    <div class="row" v-if="country">
      <div class="col-12 col-xs-6" style="padding: 15px">
        <q-img :src="country.flags.png" height="350px" fit="fill"></q-img>
      </div>
      <div
        class="col-12 col-xs-6"
        style="padding: 40px; padding-left: 75px; padding-right: 75px"
      >
        <h5 class="no-margin text-bolder">{{ country.name.common }}</h5>
        <div class="row q-mt-lg">
          <div class="col">
            <p class="q-mb-sm">
              <span class="text-bold">Native Name: </span
              ><span>{{ nativeName }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Population: </span
              ><span>{{ country.population.toLocaleString() }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Region: </span
              ><span>{{ country.region }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Sub Region: </span
              ><span>{{ country.subregion }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Capital: </span><span>{{ capital }}</span>
            </p>
          </div>
          <div class="col">
            <p class="q-mb-sm">
              <span class="text-bold">Top Level Domain: </span
              ><span>{{ country.tld[0] }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Currencies: </span
              ><span>{{ currencies }}</span>
            </p>
            <p class="q-mb-sm">
              <span class="text-bold">Languages: </span
              ><span>{{ languages }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <q-inner-loading :showing="loading">
      <q-spinner-puff size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import { api } from '../boot/axios';
import { defineComponent, ref, onMounted } from 'vue';
import { Country } from '../types/Countries';
// import { AxiosResponse } from 'axios';
import { useRoute } from 'vue-router';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'CountryDetailsPage',
  components: {},
  setup() {
    const $route = useRoute();
    const country = ref<Country>();
    const name = ref($route.params.name);
    const nativeName = ref('');
    const currencies = ref('');
    const languages = ref('');
    const capital = ref('');
    const loading = ref(false);

    onMounted(async () => {
      try {
        loading.value = true;
        const response: AxiosResponse<Country[]> = await api.get(
          `/name/${name.value}`
        );
        if (response.data.length) {
          country.value = response.data[0];
          getData(country.value);
        }
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    });

    const getCapital = (country: Country) => {
      if (country.capital) {
        capital.value = country.capital[0];
      } else {
        capital.value = 'None';
      }
    };

    const getNativeName = (country: Country) => {
      if (Object.keys(country.name.nativeName).length) {
        const el = Object.keys(country.name.nativeName)[0];
        nativeName.value = country.name.nativeName[el].common;
      }
    };
    const getCurrencies = (country: Country) => {
      if (Object.keys(country.currencies).length) {
        const el = Object.keys(country.currencies)[0];
        currencies.value = country.currencies[el].name;
      }
    };

    const getLanguages = (country: Country) => {
      const lang = Object.keys(country.languages);
      const size = lang.length;
      if (size) {
        languages.value = lang.join(', ');
      }
    };

    const getData = (country: Country) => {
      getCapital(country);
      getNativeName(country);
      getCurrencies(country);
      getLanguages(country);
    };
    return {
      country,
      nativeName,
      languages,
      currencies,
      capital,
      loading,
    };
  },
});
</script>
