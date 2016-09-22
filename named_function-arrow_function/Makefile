bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.md
	rm out.txt
	node --prof prof-arrow.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-arrow.md
	rm *.log
	rm out.txt
	node --prof prof-named.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-named.md
	rm *.log
	rm out.txt
lint: node_modules
	npm run lint

clean:
	rm -rf node_modules

node_modules: package.json
	npm install

.PHONY: node_modules