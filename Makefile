bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	node --prof prof-foo.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-foo.txt
	rm *.log
	rm out.txt
	node --prof prof-bar.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-bar.txt
	rm *.log
	rm out.txt
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