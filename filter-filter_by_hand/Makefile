bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	npm run benchmark2 > bench2.txt
	node --prof prof-filter.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-filter.txt
	rm *.log && rm out.txt
	node --prof prof-filter_by_hand.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-filter_by_hand.txt
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
	echo 'Tick-filter' >> README.md
	echo '```' >> README.md
	cat tick-filter.txt >> README.md
	echo '```' >> README.md
	echo ' ' >> README.md
	echo 'Tick-filter_by_hand' >> README.md
	echo '```' >> README.md
	cat tick-filter_by_hand.txt >> README.md
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