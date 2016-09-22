bench: lint
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	npm run benchmark > out.txt
	tail -n 23 out.txt > bench.txt
	rm out.txt
	node --prof prof-class.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-class.txt
	rm *.log
	rm out.txt
	node --prof prof-prototype.js > /dev/null
	node --prof-process *.log > out.txt
	grep -A 5 "Summary" -R out.txt > tick-prototype.txt
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