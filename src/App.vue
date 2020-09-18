<template>
  <div id="app">
    <nav class="app-nav">
      <div class="app-nav-inner">
        <router-link
          v-for="(item, index) in nav"
          :key="index"
          :to="{ name: item.linkName }"
          >{{ item.label }}</router-link
        >
      </div>
    </nav>
    <router-view class="app-view" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          linkName: 'PageA',
          label: '页面A'
        },
        {
          linkName: 'PageB',
          label: '页面B'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
body,
html {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  height: 100%;

  .app-nav {
    height: 56px;
    display: table;
    width: 100%;
    background: rgb(62, 209, 214);
    text-align: center;

    .app-nav-inner {
      display: table-cell;
      vertical-align: middle;

      a {
        color: black;
        font-size: 15px;
        text-decoration: unset;
      }
      a:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .app-view {
    height: calc(100% - 56px);
  }
}
</style>
