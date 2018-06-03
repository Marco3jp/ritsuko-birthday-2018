package model

type scene struct {
	Source []string `json:"source"`
	Main   []string `json:"main"`
	Args   []struct {
		Idx string   `json:"idx"`
		Arg []string `json:"arg"`
	} `json:"args"`
	Endpoints []struct {
		Label    string `json:"label"`
		Endpoint string `json:"endpoint"`
	} `json:"endpoints"`
}