<template>
  <el-container class="home-container">
    <!--头部区-->
    <el-header height="60px">
      <div class="system-title">
        <span>麻辣博士</span>
      </div>
    </el-header>
    <!--页面主题区-->
    <!--    <el-container>-->
    <!--      &lt;!&ndash;侧边栏&ndash;&gt;-->
    <!--      <el-aside :width="isCollapse ? '64px' : '200px'">-->
    <!--        <div class="toggle-button"-->
    <!--             @click="toggleCollapse">|||</div>-->
    <!--        &lt;!&ndash;侧边栏菜单区&ndash;&gt;-->
    <!--        <el-menu background-color="#17171A"-->
    <!--                 text-color="#fff"-->
    <!--                 active-text-color="#409eff"-->
    <!--                 unique-opened-->
    <!--                 :collapse="isCollapse"-->
    <!--                 :collapse-transition="false"-->
    <!--                 :router="true"-->
    <!--                 :default-active="activePath">-->
    <!--          &lt;!&ndash;一级菜单&ndash;&gt;-->
    <!--          <el-submenu :index="item.id + ''"-->
    <!--                      v-for="item in menuList"-->
    <!--                      :key="item.id">-->
    <!--            &lt;!&ndash;一级菜单模板区&ndash;&gt;-->
    <!--            <template slot="title">-->
    <!--              &lt;!&ndash;图标&ndash;&gt;-->
    <!--              <i :class="iconsObj[item.id]"></i>-->
    <!--              &lt;!&ndash;一级菜单文本&ndash;&gt;-->
    <!--              <span>{{item.auth_name}}</span>-->
    <!--            </template>-->
    <!--            &lt;!&ndash;二级菜单文本&ndash;&gt;-->
    <!--            <el-menu-item :index="'/' + subItem.path"-->
    <!--                          v-for="subItem in item.sub_menu"-->
    <!--                          :key="subItem.id"-->
    <!--                          @click="saveNavStat('/' + subItem.path)">-->
    <!--              <template slot="title">-->
    <!--                <i class="el-icon-menu"></i>-->
    <!--                &lt;!&ndash;一级菜单文本&ndash;&gt;-->
    <!--                <span>{{subItem.auth_name}}</span>-->
    <!--              </template>-->
    <!--            </el-menu-item>-->
    <!--          </el-submenu>-->
    <!--        </el-menu>-->

    <!--      </el-aside>-->
    <!--右侧主体区-->
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        id: 300,
        auth_name: '测试',
        sub_menu: [{
          id: 200,
          auth_name: '测试aa',
          path: '/test'
        }]
      }],
      iconsObj: {
        100: 'iconfont icon-guanliyuan',
        200: 'iconfont icon-xiafa2',
        300: 'iconfont icon-gongju',
        400: 'iconfont icon-icon_shezhi',
        500: 'iconfont icon-yingyongguanli'
      },
      isCollapse: false,
      // 被激活的链接地址
      activePath: '',
      gameList: {}
    }
  },
  created () {
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存侧边栏链接激活的状态
    saveNavStat (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #17171a;
  display: flex;
  justify-content: space-between; // 属性定义了项目在主轴上的对齐方式
  padding-left: 10px;
  color: #ffff;
  font-size: 22px;
  flex-direction: row; // 默认x轴为主轴
  flex-wrap: nowrap; // 默认不换行
  align-items: center;
}

.el-aside {
  background: #17171a;

  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 16px;
  line-height: 34px;
  color: #ffff;
  text-align: center; //文本居中
  letter-spacing: 0.2em; // 间隙
  cursor: pointer; // 鼠标移动上去是小手
}

.evn-select {
  font-size: 16px;
  color: #ffff;
}

.game-select {
  font-size: 16px;
  color: #ffff;
}

.userNameIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
}
</style>
