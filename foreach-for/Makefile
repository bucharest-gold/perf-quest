bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	node --prof prof-for.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-for.txt
	rm *.log && rm out.txt
	node --prof prof-foreach.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-foreach.txt
	rm *.log && rm out.txt && touch README.md && rm README.md
	echo '## Benchmark' >> README.md
	echo ' ' >> README.md
	echo '```' >> README.md
	cat bench.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo '## Profile summary' >> README.md
	echo ' ' >> README.md
	echo 'Tick-for' >> README.md
	echo '```' >> README.md
	cat tick-for.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo 'Tick-foreach' >> README.md
	echo '```' >> README.md
	cat tick-foreach.txt >> README.md
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