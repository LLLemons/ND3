let Mock = require('mockjs');
let Random = Mock.Random;

const data = () => {
  let data = {
    home_admin:[],
    home_teach: []
  };

  for (let i = 0; i < 10; i++) {

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
  }

  return data
}

module.exports = data()