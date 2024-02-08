func numSquares(n int) int {
	if isSquare(n) {
		return 1
	}
	for n&3 == 0 { 
		n >>= 2 
	}
	if n&7 == 7 { 
		return 4
	}

	for i := 1; i*i <= n; i++ {
		if isSquare(n - i*i) {
			return 2
		}
	}
	return 3
}

func isSquare(n int) bool {
	var squareRootN int = (int)(math.Sqrt(float64(n)))
	return squareRootN*squareRootN == n
}