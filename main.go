package main

import (
	"SimpleDouyin/initUtil"
	"SimpleDouyin/middleware/DBUtils"
	"SimpleDouyin/service"
	"github.com/gin-gonic/gin"
)

func main() {

	//go service.RunMessageServer()

	r := gin.Default()

	// go service.RunMessageServer()

	InitDeps()

	//gin
	r = gin.Default()

	initUtil.InitRouter(r)

	r.Run(":8081") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

// InitDeps 加载项目依赖
func InitDeps() {
	// 初始化数据库连接
	DBUtils.Init()
	//开启定时任务
	service.TimeMission()
}
