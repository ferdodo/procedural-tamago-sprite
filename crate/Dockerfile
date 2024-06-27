FROM rust
WORKDIR /procedural-tamago-sprite/crate

RUN cargo install wasm-pack

COPY Cargo.toml .
RUN mkdir src
RUN touch src/lib.rs
RUN cargo build
RUN wasm-pack build --target web

COPY . .
RUN cargo build
RUN wasm-pack build --target web
