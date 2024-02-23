<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { darkMode } from "$lib/scripts/theme-preferences.js";
</script>

<div class={`app ${$darkMode ? "dark" : "light"}`}>
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
</style>
