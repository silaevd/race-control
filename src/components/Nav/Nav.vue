<template>
  <div class="container">
    <nav class="nav">
      <div class="logo">
        <router-link :to="{ name: 'News'}" class="">
<!--          <img src="https://www.chiptuningede.nl/wp-content/uploads/2019/11/Edit.png" alt="">-->
          <span>RaceControl</span>
        </router-link>
      </div>
      <div class="menu">
        <router-link :to="{ name: 'News'}" class="menu__link">Новости</router-link>
        <router-link :to="{ name: 'EventsList'}" class="menu__link">Эвенты</router-link>
        <router-link :to="{ name: 'UserProfile'}" class="menu__link_profile">
          <img
              src="https://citysakh.ru/files/news/middle/76766.jpg"
              alt=""
              class="profile-link-img"
          >
        </router-link>

        <div class="settings">
          <div class="settings-item">
            <span class="material-icons">
              wb_sunny
            </span>
            <el-switch
                v-model="darkMode"
                active-color="#495057"
                inactive-color="#ffa500"
            ></el-switch>
            <span class="material-icons">
              nightlight_round
            </span>
          </div>
          <div class="settings-item">
            <span class="material-icons">
              currency_ruble
            </span>
            <el-switch
                active-color="#333333"
                inactive-color="#333333"
                disabled
            ></el-switch>
            <span class="material-icons">
              euro
            </span>
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
    padding: 10px 0;

    .logo {
      a {
        text-decoration: none;
      }
      span {
        font-family: 'Play', sans-serif;
        font-size: 35px;
        font-weight: bold;
        color: var(--text-light-color);

      }

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
      color: var(--text-light-color);
      font-weight: 500;
      font-size: 20px;
      margin-left: 15px;
      text-decoration: none;
    }
  }

  .profile-link {
    &-img {
      width: 50px;
      height: 50px;
      //border: 2px solid var(--border-color);
      border-radius: 50%;
      background: white;
      margin-left: 30px;
      padding: 0;
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
      span {
        color: var(--text-light-color);
        font-size: 21px;
        //width: 25px;
        text-align: center;
      }
    }
  }

  .el-switch{
    height: 29px;
    margin: 0 5px;
  }

</style>