<template>
  <q-page class="relative-position">
    <div class="q-mb-xl q-mt-lg">
      <q-btn
        no-caps
        label="Back"
        @click="$router.push('/')"
        icon="arrow_back"
        :class="{shadow: $q.dark.isActive}"
      ></q-btn>
    </div>
    <div class="row" v-if="country">
      <div class="col-12 col-sm-6 q-py-sm-lg q-px-sm-none q-pa-md-xl">
        <q-img :src="country.flags.png" height="350px" fit="fill"></q-img>
      </div>
      <div class="col-12 col-sm-6 q-px-md-xl q-px-sm-lg" >
        <div class="row">
          <h5 class="text-bolder">{{ country.name.common }}</h5>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6">
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
          <div class="col-12 col-sm-6 q-my-lg q-my-sm-none">
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
        <div class="row q-mt-xl">
          <p class="flex q-mb-sm items-baseline">
            <span class="text-bold">Borders Countries:</span>
            <q-card
              v-for="(b, index) in borders"
              :key="index"
              class="q-pa-xs q-mx-sm"
              unelevated
            >{{b}}</q-card>
          </p>
        </div>
      </div>
    </div>
    <q-inner-loading :showing="loading" class="bg-transparent">
      <q-spinner-puff size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import { api } from '../boot/axios';
import { defineComponent, ref, onMounted } from 'vue';
import { Country, cc } from '../types/Countries';
// import { AxiosResponse } from 'axios';
import { useRoute } from 'vue-router';
import { AxiosResponse } from 'axios';
import codes from '../boot/countriesCode'

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
    const borders = ref<string[]>([])
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
        capital.value = country.capital.join(', ');
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

    const getBorder = (country: Country) => {
      country.borders.forEach((el) => {
        borders.value.push(codes[el as cc])
      })
    }

    const getData = (country: Country) => {
      getCapital(country);
      getNativeName(country);
      getCurrencies(country);
      getLanguages(country);
      getBorder(country)
    };
    return {
      country,
      nativeName,
      languages,
      currencies,
      capital,
      loading,
      borders
    };
  },
});
</script>
<style scoped>
.shadow {
  box-shadow: 0 0 1em #000;
}
</style>
