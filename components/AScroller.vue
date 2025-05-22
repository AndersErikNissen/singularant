<template>
  <component class="c-a-scroller" ref="scroller" :is="tag">
    <slot />
  </component>
</template>

<script setup>
const { count, tag, currentIndex } = defineProps({
  tag: {
    type: String,
    default: "div",
  },
  count: {
    type: Number,
  },
  currentIndex: {
    type: Number,
  },
});

const emit = defineEmits(["change"]);

const scroller = ref();
const scroll = ref(0);
const index = ref(currentIndex);
const totalScroll = ref(0);
const cutOffs = ref([]);

function scrollToIndex(v) {
  let scrollTo = index.value;

  if (v === ">") {
    scrollTo++;
  } else if (v === "<") {
    scrollTo--;
  } else {
    scrollTo = v;
  }

  scroller.value.scrollTo({
    left: cutOffs.value[scrollTo],
    behavior: "smooth",
  });
}

onMounted(() => {
  totalScroll.value = scroller.value.scrollWidth;
  const scrollPerItem = totalScroll.value / count;

  for (let i = 0; i < count; i++) {
    cutOffs.value.push(scrollPerItem * i);
  }

  scroller.value.addEventListener("scroll", (e) => {
    scroll.value = e.target.scrollLeft;

    const cutOff = cutOffs.value.reduce((prev, current) => {
      return Math.abs(current - scroll.value) < Math.abs(prev - scroll.value)
        ? current
        : prev;
    });

    const newIndex = cutOffs.value.indexOf(cutOff);

    if (index.value !== newIndex) {
      index.value = newIndex;
      emit("change", index.value);
    }
  });
});

defineExpose({
  scrollToIndex,
  index,
});
</script>

<style lang="postcss">
:where(.c-a-scroller) {
  @apply relative;
}
</style>
