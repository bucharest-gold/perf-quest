bench: lint
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	npm run benchmark2 > bench2.txt
	node --prof prof-object_assign.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-assign.txt
	rm *.log && rm out.txt
	node --prof prof-util_extend.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-extend.txt
	rm *.log && rm out.txt && touch README.md && rm README.md
	echo '## Benchmark' >> README.md
	echo ' ' >> README.md
	echo '```' >> README.md
	cat bench.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo '## Benchmark 2' >> README.md
	echo ' ' >> README.md
	echo '```' >> README.md
	tail -n 4 bench2.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo '## Profile summary' >> README.md
	echo ' ' >> README.md
	echo 'Tick-Assign' >> README.md
	echo '```' >> README.md
	cat tick-assign.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo 'Tick-Extend' >> README.md
	echo '```' >> README.md
	cat tick-extend.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	rm *.txt
lint: node_modules
	npm run lint

clean:
	rm -rf node_modules

node_modules: init
	npm install

init: .
	cp ../package.json .
	cp ../.eslintrc.json .

.PHONY: init