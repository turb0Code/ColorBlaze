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
    /* background-color: #0e0e0f; */
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
