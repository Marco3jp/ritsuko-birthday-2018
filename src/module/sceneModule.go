package module

import (
	"database/sql"
	"fmt"
)

type SceneModule struct {
	DB *sql.DB
}

func (self SceneModule) GetScene(sceneId *int) (*[]byte,error) {
	var scene []byte
	err := self.DB.QueryRow("select scene from scene where id = ?",*sceneId).Scan(&scene)

	var result error

	if err == sql.ErrNoRows{
		result = fmt.Errorf(" There is not result ")
	}else{
		result = nil
	}

	return &scene, result
}