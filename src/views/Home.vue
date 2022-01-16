`
<template>
  <el-container class="home-container">
    <!--头部区-->
    <el-header height="60px">
      <div>
        <img src="../assets/doctor.png" alt="" style="width: 40px;height: 40px"/>
        <!--<el-avatar shape="square" style="width: 40px;height: 40px"></el-avatar>-->
      </div>
      <div class="system-title">
        <span style="margin-left: 15px;font-size: 18px;">麻辣博士</span>
      </div>
      <el-button type="text" icon="el-icon-s-home" style="margin-left: 30px;font-size: 14px;">主页</el-button>
      <el-button type="text" icon="el-icon-platform-eleme" style="margin-left: 30px;font-size: 14px;">资源</el-button>
      <el-button type="text" icon="el-icon-s-help" style="margin-left: 30px;font-size: 14px;">世界</el-button>
      <div style="display: flex;justify-content: space-around;margin-left: 1700px;">
        <div>
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div>
          <el-avatar icon="el-icon-user-solid" style="margin-left: 50px;"></el-avatar>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <el-row :gutter="24" v-for="indexRow in 10" :key="indexRow">
          <el-col :span="6" v-for="index in 4" :key="index">
            <InfoBox></InfoBox>
          </el-col>
        </el-row>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="360px">Footer</el-footer>
  </el-container>
</template>

<script>
import InfoBox from '../components/InfoBox'

export default {
  components: { InfoBox },
  data () {
    return {
      url: '../assets/logo.png',
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
  // justify-content: space-between; // 属性定义了项目在主轴上的对齐方式
  justify-content: flex-start;
  flex-direction: row; // 默认x轴为主轴
  flex-wrap: nowrap; // 默认不换行
  align-items: center;
  padding-left: 10px;
  color: #ffff;
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
`
