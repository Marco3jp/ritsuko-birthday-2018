package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"

	"./router"
	"net/http"
	"fmt"
)

func main()  {
	fmt.Printf("Start API Server!\n")

	db , dbErr := sql.Open("sqlite3","./db/RitsukoStory.db")
	if dbErr != nil {
		panic(dbErr)
	}
	defer db.Close()

	r := router.Init(db)
	http.ListenAndServe(":7650", r)
}