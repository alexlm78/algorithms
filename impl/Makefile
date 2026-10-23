# Build and run the algorithms in every language.
#
#   make              build everything that compiles (rust go java typescript) and check python
#   make rust         cargo build --release          -> rust/target/release/<id>
#   make go           go build                       -> bin/go/<id>
#   make java         javac                          -> bin/java/<Pascal>.class
#   make typescript   tsc                            -> typescript/dist/<id>.js
#   make python       byte-compile check (Python is interpreted, no build needed)
#   make run L=go A=bubble_sort      run one algorithm (L = rust|go|java|typescript|python)
#   make list                        list algorithm ids
#   make clean

IDS    := $(sort $(basename $(notdir $(wildcard rust/*.rs))))
PASCAL  = $(shell echo '$(A)' | awk -F_ '{for (i = 1; i <= NF; i++) printf "%s%s", toupper(substr($$i, 1, 1)), substr($$i, 2)}')

.PHONY: all rust go java typescript python run list clean

all: rust go java typescript python

rust:
	cd rust && cargo build --release

go:
	mkdir -p bin/go
	cd go && go build -o ../bin/go/ ./...

java:
	mkdir -p bin/java
	javac -d bin/java java/*.java

typescript:
	cd typescript && npm install --no-audit --no-fund && npm run build

python:
	python3 -m compileall -q python
	@echo "python: OK (run with: python3 python/<id>.py)"

run:
	@test -n "$(L)" -a -n "$(A)" || { echo "usage: make run L=<rust|go|java|typescript|python> A=<algorithm id>"; exit 2; }
	@case "$(L)" in \
	  rust)       test -x rust/target/release/$(A) || $(MAKE) rust; rust/target/release/$(A) ;; \
	  go)         test -x bin/go/$(A) || $(MAKE) go; bin/go/$(A) ;; \
	  java)       test -f bin/java/$(PASCAL).class || $(MAKE) java; java -cp bin/java $(PASCAL) ;; \
	  typescript) test -f typescript/dist/$(A).js || $(MAKE) typescript; node typescript/dist/$(A).js ;; \
	  python)     python3 python/$(A).py ;; \
	  *)          echo "unknown language: $(L)"; exit 2 ;; \
	esac

list:
	@printf '%s\n' $(IDS)

clean:
	rm -rf bin rust/target typescript/dist typescript/node_modules
	find python -name __pycache__ -type d -prune -exec rm -rf {} +
