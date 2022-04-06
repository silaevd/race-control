<template>
  <div class="container">
    <nav class="nav">
      <div class="logo">
        <router-link :to="{ name: 'News'}" class="">
          <img src="https://www.chiptuningede.nl/wp-content/uploads/2019/11/Edit.png" alt="">
        </router-link>
      </div>
      <div class="menu">
        <router-link :to="{ name: 'News'}" class="menu__link">Новости</router-link>
        <router-link :to="{ name: 'EventsList'}" class="menu__link">Эвенты</router-link>
        <router-link :to="{ name: 'UserProfile'}" class="menu__link_profile">
          <img
              src="https://f0.pngfuel.com/png/719/561/motorcycle-helmets-racing-helmet-motorcycle-helmets-png-clip-art.png"
              alt=""
              class="profile-link-img"
          >
        </router-link>

        <div class="settings">
          <div class="settings-item">
            <i class="fa fa-sun-o"></i>
            <el-switch
                style="display: block"
                v-model="darkMode"
                active-color="#495057"
                inactive-color="#ffa500"
            ></el-switch>
            <i class="fa fa-moon-o"></i>
          </div>
          <div class="settings-item">
            <el-switch
                style="display: block"
                active-color="#333333"
                inactive-color="#333333"
                active-text="EN"
                inactive-text="RU"
                disabled
            ></el-switch>
            <!--                  <span class="material-icons">highlight</span>-->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      darkMode: false,
    };
  },
  props: {},
  mounted() {
    const bodyElement = document.body;
    bodyElement.classList.add('app-background');
    const htmlElement = document.documentElement;
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark');
      this.darkMode = true;
    } else {
      htmlElement.setAttribute('theme', 'light');
      this.darkMode = false;
    }
  },
  watch: {
    darkMode: function () {
      const htmlElement = document.documentElement;
      if (this.darkMode) {
        localStorage.setItem('theme', 'dark');
        htmlElement.setAttribute('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
        htmlElement.setAttribute('theme', 'light');
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .logo {
      font-size: 20px;

      img {
        max-width: 100px;
        height: auto;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;

    &__link {
      color: var(--text-color);
      font-weight: 500;
      font-size: 18px;
      margin-left: 15px;
    }
  }

  .profile-link {
    &-img {
      width: 50px;
      height: 50px;
      border: 2px solid var(--border-color);
      border-radius: 50%;
      background: white;
      margin-left: 30px;
      padding: 3px;
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 45px;
    margin-left: 30px;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>