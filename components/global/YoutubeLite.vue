<template>
  <lite-youtube
    :videoid="video"
    :playlabel="title"
    params="controls=1&modestbranding=2&rel=0&enablejsapi=1"
  />
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: 'NmytpuD33lY',
    },
    title: {
      type: String,
      default: 'Starport Demo',
    },
  },
}
</script>
