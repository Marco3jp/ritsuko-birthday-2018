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
		"select IdolRealName,ProducerName,SceneId,FirstEndpoint from config where userId = ? and token = ?",
		userId,
		token)

	var conf [4]string
	err := row.Scan(&conf[0],&conf[1],&conf[2],&conf[3])

	log.Printf("pointA : %+v",conf[0])

	if err != nil{
		log.Printf("pointB : %+v",err)
		if err == sql.ErrNoRows{
			config.Result = false
		}
	} else {
		config.Result = true
	}

	config.IdolRealName = conf[0]
	config.ProducerName = conf[1]
	config.SceneID, err = strconv.Atoi(conf[2])
	config.FirstEndpoint = conf[3]

	if err != nil{
		log.Printf("pointC : %+v",err)
	}

	configJson,err := json.Marshal(config)

	if err != nil {
		panic(err)
	}

	return &configJson
}