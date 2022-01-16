// import { Random } from 'mockjs' // 导出随机函数

const Mock = require('mockjs')

function login (req) {
  // req是一个请求对象，包含: url，type和body属性
  return {
    code: 200,
    data: {
      username: Mock.Random.cname(),
      token: Mock.Random.guid(),
      message: 'Login successfully.'
    }
  }
}

function profile (req) {
  return {
    code: 200,
    data: {
      username: Mock.Random.cname(),
      age: Mock.Random.integer(10, 30),
      date: Mock.Random.date(),
      message: ''
    }
  }
}

function logout (req) {
  return {
    code: 200,
    data: {
      message: 'Logout successfully.'
    }
  }
}

const User = {
  login,
  profile,
  logout
}

exports.User = User
