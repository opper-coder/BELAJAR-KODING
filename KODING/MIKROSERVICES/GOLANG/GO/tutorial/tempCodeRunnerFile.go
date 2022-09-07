package main

import "fmt"

type Negara struct{ pulau, negeri string }
func (negara *Negara) ganti() { // bedakan kalau g pake bintang
	negara.negeri = "indonesia"
}
func main() {
	jepang := Negara{"hondo", "jepang"}
	jepang.ganti()
	fmt.Println(jepang.negeri)
}