package controller

import (
	"net/http"
	"strconv"
	"../module"
	"../view"
)

type ConfigController struct {
	*BaseController
}

func (self ConfigController) GetConfig(w http.ResponseWriter, r *http.Request)  {
	userId, err := strconv.Atoi(r.URL.Query().Get("userId"))

	if err!=nil{
		panic(err)
	}

	/*
	token, err := strconv.Atoi(r.URL.Query().Get("token"))
	if err!=nil{
		panic(err)
	}
	*/

	token := "6eba0f8b-51eb-47bd-b1c3-ab60d56666e2"
	configJson := module.ConfigModule{self.DB}.GetConfig(userId,token)

	view.GetConfig(configJson,w)

}

/*
func (self ConfigController) SetConfig(w http.ResponseWriter, r *http.Request)  {

}
*/