package controller

import (
	"net/http"
	"../module"
	"strconv"
	"../view"
	"log"
)

type SceneController struct {
	*BaseController
}

func (self SceneController) GetScene(w http.ResponseWriter, r *http.Request)  {
	sceneId,err := strconv.Atoi(r.URL.Query().Get("id"))

	if err!=nil{
		panic(err)
	}

	sceneJson,err := module.SceneModule{self.DB}.GetScene(&sceneId)

	if err != nil{
		log.Printf("%+v",err)
	}

	view.GetScene(sceneJson,w)
}
