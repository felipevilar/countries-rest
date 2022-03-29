<template>
  <q-card
    style="width: 200px; height: fit-content; max-width: 50%;"
    v-if="filter"
    @click="$router.push(`/${name}`)"
    class="cursor-pointer"
  >
    <q-card-section class="no-padding" style="height: 125px">
      <q-img :src="country.flags.png" height="125px" fit="fill"></q-img>
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
      if (region.value) {
        if (region.value === 'All') {
          return name.value.includes(search.value);
        }
        return (
          name.value
            .toLocaleLowerCase()
            .includes(search.value.toLocaleLowerCase()) &&
          country.value.region === region.value
        );
      }
      return name.value.includes(search.value);
    });

    if (country.value.capital) {
      capital.value = country.value.capital[0];
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