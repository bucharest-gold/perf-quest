bench: lint
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	npm run benchmark2 > bench2.txt
	node --prof prof-hidden.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-hidden.txt
	rm *.log && rm out.txt
	node --prof prof-no_extra_hidden.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-no_extra_hidden.txt
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
	echo 'Tick-hidden' >> README.md
	echo '```' >> README.md
	cat tick-hidden.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo 'Tick-no_extra_hidden' >> README.md
	echo '```' >> README.md
	cat tick-no_extra_hidden.txt >> README.md
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