package router

import(
	"github.com/gorilla/mux"
	"../controller"
	"database/sql"
)

func Init(db *sql.DB) *mux.Router {
	r := mux.NewRouter()
	baseController := controller.NewBaseController(db)

	r = r.PathPrefix("/api").Subrouter()

	r.HandleFunc("/config", controller.ConfigController{baseController}.GetConfig).Methods("GET")
	//s.HandleFunc("/config", controller.ConfigController{baseController}.SetConfig).Methods("POST")

	r.HandleFunc("/scene", controller.SceneController{baseController}.GetScene).Methods("GET")

	return r
}