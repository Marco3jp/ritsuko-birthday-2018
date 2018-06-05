package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"

	"./router"
	"net/http"
)

func main()  {
	db , dbErr := sql.Open("sqlite3","./db/RitsukoStory.db")
	if dbErr != nil {
		panic(dbErr)
	}

	r := router.Init(db)
	http.ListenAndServe(":7650", r)
}