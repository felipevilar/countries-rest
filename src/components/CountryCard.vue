<template>
  <q-card
    style="height: 300px; width: 275px; padding: 1px"
    v-bind:class="{ active: $q.screen.xs }"
    @click="$router.push(`/${name}`)"
    class="cursor-pointer"
  >
    <q-card-section class="no-padding" style="border: 1px solid lightgrey">
      <q-img :src="country.flags.svg" height="145px" fit="cover"></q-img>
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
import { defineComponent, PropType, ref } from 'vue';
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
    const name = ref(country.value.name.common);

    if (country.value.capital) {
      capital.value = country.value.capital.join(', ');
    } else {
      capital.value = 'None';
    }

    return {
      capital,
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
