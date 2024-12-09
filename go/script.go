package main

import (
	"fmt"
)

func main() {
	// Leia os valores de entrada
	var a, b int
	fmt.Scan(&a)
	fmt.Scan(&b)

	// Calcule a soma
	x := a + b

	// Imprima o resultado
	fmt.Printf("X = %d\n", x)
}
