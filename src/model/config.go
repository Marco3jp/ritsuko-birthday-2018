package model

type Config struct {
	Result bool `json:"result"`
	IdolRealName  string `json:"idolRealName"`
	IdolName  string `json:"idolName"`
	ProducerName  string `json:"producerName"`
	SceneID       int    `json:"sceneId"`
	FirstEndpoint string `json:"firstEndpoint"`
}