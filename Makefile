all: .
	make -C class-prototype
	make -C class-classless
	make -C class-unfrozenclassless
	make -C named_function-arrow_function
	make -C hidden_class-no_extra_hidden_class
	make -C foreach-for
	make -C filter-filter_by_hand
	make -C map-map_by_hand
	make -C reduce-reduce_by_hand
	make -C function_expression-function_statement
	make -C class-module
	make -C weakmap-symbol
	make -C object_assign-util_extend