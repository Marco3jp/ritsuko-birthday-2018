package controller

import "net/http"

type ConfigController struct {
	*BaseController
}

func (self ConfigController) GetConfig(w http.ResponseWriter, r *http.Request)  {
	
}

/*
func (self ConfigController) SetConfig(w http.ResponseWriter, r *http.Request)  {

}
*/