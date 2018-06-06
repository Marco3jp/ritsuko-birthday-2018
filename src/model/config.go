package model

type Config struct {
	Result bool `json:"result"`
	IdolRealName  string `json:"idolRealName"`
	ProducerName  string `json:"producerName"`
	SceneID       int    `json:"sceneId"`
	FirstEndpoint string `json:"firstEndpoint"`
}