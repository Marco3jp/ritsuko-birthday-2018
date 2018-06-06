package view

import (
	"net/http"
	"fmt"
)

func GetScene(sceneJson *[]byte,w http.ResponseWriter)  {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json; charset=utf-8") // normal header
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w,string(*sceneJson))
}