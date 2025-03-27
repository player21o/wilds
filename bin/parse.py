with open('script.js', 'r') as f:
	v = f.read()
	q1 = v.split("\"")
	q2 = v.split("'")
	print(q1[4])
