var mysql = require('mysql'); //引入第三方模块
// 设置连接参数
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'vue'
});
// 创建连接
connection.connect();

// 执行query
connection.query('select user_id,user_name,email from p_users limit 10',function(error,results,fields){
    // 获取查询的结果result
    console.log(results[0]);
});
connection.end();