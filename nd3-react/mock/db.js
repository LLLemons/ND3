let Mock = require('mockjs');
let Random = Mock.Random;

const data = () => {
  let data = {
    home_admin:[],
    home_teach: [],
    teacher: [],
    student: [],
    parent: []
  }

  for (let i = 0; i < 10; i++) {

    const name = Random.ctitle()

    data.home_admin.push({
      id: i,
      grade: Random.cword('初高')+'中-'+Random.date('yyyy')+'级',
      class: Random.cword('一二三')+'年'+Random.cword('一二三四五六七八九')+'班',
      header_teacher: Random.cname(),
      count: Random.integer(10, 300),
      isHot:Random.boolean()
    })

    data.home_teach.push({
      id: i,
      grade: Random.cword('初高')+'中-'+Random.date('yyyy')+'级',
      class: Random.cword('一二三')+'年'+Random.cword('一二三四五六七八九')+'班',
      header_teacher: Random.cname(),
      count: Random.integer(10, 300),
      isHot:Random.boolean()
    })

    data.teacher.push({
      id: i,
      data: {
        className: name,
        teacher_count: 6,
        student_count: 6,
        parent_count: 6,
        list: [{
            id: 0,
            name: ["张三","zhangsan","zs"],
            head_teacher: 0,
            manager: 1,
            function: ["生物老师"]
          },
          {
            id: 1,
            name: ["李四","lisi","ls"],
            head_teacher: 1,
            manager: 0,
            function: ["生物老师"]
          },
          {
            id: 2,
            name: ["王五","wangwu","ww"],
            head_teacher: 0,
            manager: 0,
            function: ["生物老师", "信息技术", "地理"]
          },
          {
            id: 3,
            name: ["赵六","zhaoliu","zl"],
            head_teacher: 0,
            manager: 0,
            function: ["生物老师", "信息技术", "地理"]
          },
          {
            id: 4,
            name: ["韩信","hanxin","hx"],
            head_teacher: 0,
            manager: 0,
            function: ["生物老师", "信息技术", "地理"]
          },
          {
            id: 5,
            name: ["周瑜","zhouyu","zy"],
            head_teacher: 0,
            manager: 0,
            function: ["生物老师", "信息技术", "地理"]
          }
        ]
      }
    }) 

    data.student.push({
      id: i,
      data: {
        className: name,
        teacher_count: 6,
        student_count: 6,
        parent_count: 6,
        list: [{
            id: 0,
            name: ["張學生","zhangxuesheng","zxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 1,
            name: ["李学生","lixuesheng","lxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 2,
            name: ["王学生","wangxuesheng","wxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 3,
            name: ["赵学生","zhaoxuesheng","zxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 4,
            name: ["韩学生","hanxuesheng","hxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 5,
            name: ["周学生","zhouxuesheng","zxs"],
            head_teacher: 0,
            manager: 0,
            function: []
          }
        ]
      }
    })
    
    data.parent.push({
      id: i,
      data:  {
        className: name,
        teacher_count: 6,
        student_count: 6,
        parent_count: 6,
        list: [{
            id: 0,
            name: ["张家长","zhangjaizhang","zjj"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 1,
            name:["李家长","lijaizhang","ljj"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 2,
            name: ["王家长","wangjiazhang","wjj"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 3,
            name: ["赵家长","zhaojiazhang","zjj"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 4,
            name: ["韩家长","hanjiazhang","hjj"],
            head_teacher: 0,
            manager: 0,
            function: []
          },
          {
            id: 5,
            name: ["周家长","zhoujiazhang","zjj"],
            head_teacher: 0,
            manager: 0,
            function: []
          }
        ]
      }
    })

    
  }

  return data
}

module.exports = data()