package module

import (
	"database/sql"
	"../model"
	"encoding/json"
	"strconv"
	"fmt"
	"log"
)

type ConfigModule struct {
	DB *sql.DB
}

func (self ConfigModule) GetConfig(userId int, token string) *[]byte {
	var config model.Config
	fmt.Printf("%d %s\n",userId,token)

	row := self.DB.QueryRow(
		"select IdolRealName,IdolName,ProducerName,SceneId,FirstEndpoint from config where userId = ? and token = ?",
		userId,
		token)

	var sceneId string
	err := row.Scan(&config.IdolRealName, &config.IdolName, &config.ProducerName, &sceneId, &config.FirstEndpoint)

	if err != nil{
		log.Printf("pointA : %+v",err)
		if err == sql.ErrNoRows{
			config.Result = false
		}
	} else {
		config.Result = true
	}

	config.SceneID, err = strconv.Atoi(sceneId)

	if err != nil{
		log.Printf("pointB : %+v",err)
	}

	configJson,err := json.Marshal(config)

	if err != nil {
		panic(err)
	}

	return &configJson
}