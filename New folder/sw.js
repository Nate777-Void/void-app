<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('VOID Security Protocol: Active'))
      .catch((err) => console.log('Engine Offline:', err));
  }
</script>