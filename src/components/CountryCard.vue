<template>
<div class="q-py-lg q-pr-lg" v-bind:class="{ cardWraper: $q.screen.xs }" v-if="filter">
  <q-card
    style="height: 300px; width: 275px;"
    v-bind:class="{ active: $q.screen.xs }"
    @click="$router.push(`/${name}`)"
    class="cursor-pointer"
  >
    <q-card-section class="no-padding">
      <q-img :src="country.flags.png" height="145px" fit="fill"></q-img>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-item-label class="text-bolder text-body1">
        {{ name }}
      </q-item-label>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <p class="q-mb-none">
        <span class="text-bold">Population: </span
        ><span>{{ country.population.toLocaleString() }}</span>
      </p>
      <p class="q-mb-none">
        <span class="text-bold">Region: </span>
        <span>{{ country.region }}</span>
      </p>
      <p class="q-mb-none">
        <span class="text-bold">Capital: </span>
        <span>{{ capital }}</span>
      </p>
    </q-card-section>
  </q-card>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, inject, computed } from 'vue';
import { Country } from '../types/Countries';

export default defineComponent({
  name: 'CountryCard',
  props: {
    country: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
  components: {},
  setup(props) {
    const country = ref(props.country);
    const capital = ref('');
    const search = inject('search', ref(''));
    const region = inject('region', ref(null));
    const name = ref(country.value.name.common);

    const filter = computed(() => {            
      if (region.value === 'All' || !region.value) {
        return name.value
                .toLocaleLowerCase()
                .includes(search.value.toLocaleLowerCase());
      }
      return (
        name.value
          .toLocaleLowerCase()
          .includes(search.value.toLocaleLowerCase()) &&
        country.value.region === region.value
      );
    });

    if (country.value.capital) {
      capital.value = country.value.capital.join(', ');
    } else {
      capital.value = 'None';
    }

    return {
      capital,
      search,
      region,
      filter,
      name,
    };
  },
});
</script>
<style scoped>
.active {
  width: 320px !important;
}
.cardWraper {
  padding-right: initial !important;
}
</style>
